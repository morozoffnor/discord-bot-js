import * as Discord from "discord.js";
import * as Configfile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();


let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);
client.on("ready", () => {
    console.log(" ");
    console.log("Using " + client.user.username + "#" + client.user.discriminator + " account!");
    console.log(" ");
    console.log("Connected servers and channels:");
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name);

        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
        });
    });
    console.log(" ");
    console.log("ready to go!");
    
    
})

client.on("message", msg => {

    // игнорировать сообщения ботов
    if (msg.author.bot) { return; }

    // игнорировать сообщения без префикса
    if (!msg.content.startsWith(Configfile.config.prefix)) { return };
    
    // обработать команду
    handeCommand(msg);
})

async function handeCommand(msg: Discord.Message) {
    // split the sstring into the command and args
    let command = msg.content.split(" ")[0].replace(Configfile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    // loop through all of loaded commands
    for (const commandClass of commands) {
        // try to execute and ready in case of an error
        try {
            // check command class if it is a correct one
            if (!commandClass.isThisCommand(command)) {
                // go to the next iteration if this isn't the correct one
                continue;
            }
            // 
            await commandClass.runCommand(args, msg, client);
        }
        catch (exeption) {
            console.log(exeption);
        }
    }
}

function loadCommands(commandsPath: string) {
    //если нет команд - оффнуться
    if (!Configfile.config || (Configfile.config.commands as string[]).length === 0) {
        return;
    }
    //проверить все команды
    for (const commandName of Configfile.config.commands as string[]) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}



client.login(Configfile.config.token);