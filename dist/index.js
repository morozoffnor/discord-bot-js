"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const Configfile = require("./config");
const fs = require("fs");
const client = new Discord.Client();
let commands = [];
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
    console.log("Setting status");
    changeStatus(client);
    var hourMillseconds = 1000 * 60 * 60;
    setInterval(function () {
        changeStatus(client);
    }, hourMillseconds);
    console.log("ready to go!");
});
client.on("message", msg => {
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(Configfile.config.prefix)) {
        return;
    }
    ;
    handeCommand(msg);
});
function handeCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(" ")[0].replace(Configfile.config.prefix, "");
        let args = msg.content.split(" ").slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exeption) {
                console.log(exeption);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!Configfile.config || Configfile.config.commands.length === 0) {
        return;
    }
    for (const commandName of Configfile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
function changeStatus(client) {
    let statusString = "";
    let statusURL = "";
    fs.readFile('./content/statusString.txt', function (err, data) {
        if (err)
            throw err;
        let statusArr = data.toString().split("\n");
        let random = Math.floor((Math.random() * statusArr.length));
        statusString = statusArr[random];
        let done1 = true;
        if (done1) {
            fs.readFile('./content/statusURL.txt', function (err, data) {
                if (err)
                    throw err;
                let statusURLArr = data.toString().split("\n");
                let random = Math.floor((Math.random() * statusURLArr.length));
                statusURL = statusURLArr[random];
                let done2 = true;
                if (done2) {
                    let statusId = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
                    let statuses = ["PLAYING", "STREAMING", "LISTENING", "WATCHING"];
                    if (statusId == 1) {
                        client.user.setActivity(statusString, {
                            type: "STREAMING",
                            url: statusURL
                        });
                    }
                    else {
                        let done3 = true;
                        if (done3) {
                            client.user.setActivity(statusString, {
                                type: statusId,
                                url: statusURL
                            });
                            console.log(`Status has changed to ${statuses[statusId]}, ${statusString} with url: ${statusURL}`);
                        }
                    }
                }
            });
        }
    });
}
client.login(Configfile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFFdkMseUJBQXlCO0FBRXpCLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUdwRCxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDLElBQUksT0FBTyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN6RSxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxDQUFDLEdBQUcs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