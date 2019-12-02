import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class kick implements IBotCommand {
    
    private readonly _command = "kick"
    
    help(): string {
        return "Kicks the mentioned user";
        // throw new Error("Method not implemented.");
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
        // throw new Error("Method not implemented.");
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        
        let mentionedUser = msgObject.mentions.users.first();

        let reason = args.slice(1).join(" ") || "";
        let kicklog = `${msgObject.author.username}: ${reason}`;

        msgObject.delete(0);
        
        if(!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Noice try, ${msgObject.author.username}, но у тебя нет прав на это дерьмо!`);
            return;
        }

        if(!mentionedUser){
            msgObject.channel.send(`Сорян, ${msgObject.author.username}, я не нашел такого пользователя.`);
            return;
        }


        msgObject.guild.member(mentionedUser).kick(kicklog)
            .then(console.log)
            .catch(console.error)
    }

}