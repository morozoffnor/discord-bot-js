"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class lock {
    constructor() {
        this._command = 'lock';
    }
    help() {
        return 'This is nothing';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        console.log(`-= Recieved !${this._command} with agrs: ${args}`);
        let timer = parseInt(args[1]) * 60000;
        if (args[0] === 'help') {
            let embed = new Discord.RichEmbed()
                .setTitle(`Использование !lock`)
                .setDescription('Находясь в голосовом канале напишите ```!lock [количество_слотов]```')
                .addField('Снять ограничение', '```!unlock```');
            msgObject.channel.send(embed);
        }
        else {
            lockChannel(args, msgObject);
        }
        function lockChannel(args, msgObject) {
            let embed = new Discord.RichEmbed()
                .setTitle(`Channel is locked`)
                .setDescription(`Channel ${msgObject.member.voiceChannel.name} is locked for ${args[0]} slots.`);
            msgObject.member.voiceChannel.setUserLimit(parseInt(args[0]));
            msgObject.delete(0);
            if (args[1]) {
                msgObject.channel.send(embed).then((msg) => {
                    msg.delete(5000);
                });
            }
            else {
                msgObject.channel.send(embed).then((msg) => {
                    msg.delete(5000);
                });
            }
        }
    }
}
exports.default = lock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9sb2NrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBS3RDLE1BQXFCLElBQUk7SUFBekI7UUFDa0IsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQW9FcEMsQ0FBQztJQWxFQSxJQUFJO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQztJQUUxQixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLElBQUksQ0FBQyxRQUFRLGVBQWUsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUNoRSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUN2QixJQUFJLEtBQUssR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7aUJBQ2pDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQztpQkFDL0IsY0FBYyxDQUFDLHNFQUFzRSxDQUFDO2lCQUN0RixRQUFRLENBQUMsbUJBQW1CLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDakQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNOLFdBQVcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7U0FJN0I7UUFFRCxTQUFTLFdBQVcsQ0FBQyxJQUFjLEVBQUUsU0FBMEI7WUFDOUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNqQyxRQUFRLENBQUMsbUJBQW1CLENBQUM7aUJBQzdCLGNBQWMsQ0FBQyxXQUFXLFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksa0JBQWtCLElBQUksQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbEcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ1osU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ3pDLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QyxDQUFDLENBQUMsQ0FBQzthQUNIO2lCQUFNO2dCQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUN6QyxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDdkMsQ0FBQyxDQUFDLENBQUM7YUFDSDtRQUNGLENBQUM7SUEwQkYsQ0FBQztDQUNEO0FBckVELHVCQXFFQyJ9