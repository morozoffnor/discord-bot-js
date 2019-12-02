import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import * as fs from "fs";
import * as Configfile from "../config";

export default class ti implements IBotCommand {
    
    private readonly _command = "ti"
    
    help(): string {
        return "This is nothing";
        // throw new Error("Method not implemented.");
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
        // throw new Error("Method not implemented.");
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {

        // check if this command is allowed on this server
        for (let key of Configfile.config.restricted) {
            if (msgObject.guild.name == key) {
                return;
            }
        }
        // execute
        fs.readFile('content/pidor.txt', function(err, data) {
            if(err) throw err;
            let tiArr = data.toString().split("\n");
            let random = Math.floor((Math.random() * tiArr.length));
            let randomTi = tiArr[random];
            msgObject.channel.send(randomTi);
        });
    }

}