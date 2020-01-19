"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class unlock {
    constructor() {
        this._command = 'unlock';
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
            msgObject.member.voiceChannel.setUserLimit(0);
            msgObject.delete(0);
            msgObject.channel.send(`Channel '${msgObject.member.voiceChannel.name}' is unlocked now`).then((msg) => {
                msg.delete(5000);
            });
        }
    }
}
exports.default = unlock;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5sb2NrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3VubG9jay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUt0QyxNQUFxQixNQUFNO0lBQTNCO1FBQ2tCLGFBQVEsR0FBRyxRQUFRLENBQUM7SUFrQ3RDLENBQUM7SUFoQ0EsSUFBSTtRQUNILE9BQU8saUJBQWlCLENBQUM7SUFFMUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUM1RSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixJQUFJLENBQUMsUUFBUSxlQUFlLElBQUksRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN0QyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDdkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNqQyxRQUFRLENBQUMscUJBQXFCLENBQUM7aUJBQy9CLGNBQWMsQ0FBQyxzRUFBc0UsQ0FBQztpQkFDdEYsUUFBUSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxDQUFDO1lBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTixXQUFXLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBSTdCO1FBRUQsU0FBUyxXQUFXLENBQUMsSUFBYyxFQUFFLFNBQTBCO1lBQzlELFNBQVMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksU0FBUyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNyRyxHQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNKLENBQUM7SUFDRixDQUFDO0NBQ0Q7QUFuQ0QseUJBbUNDIn0=