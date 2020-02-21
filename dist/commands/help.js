"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class help {
    constructor() {
        this._command = 'help';
    }
    help() {
        return 'I`ll help you';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        args = msgObject.content.split(' ').slice(1);
        let r = Math.ceil(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
        let g = Math.ceil(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
        let b = Math.ceil(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
        if (args.length < 1) {
            let helpEmbed = new Discord.RichEmbed()
                .setTitle('!pick')
                .setColor([r, g, b])
                .setDescription('Этот бот способен на многое и даже на большее, чем вы думаете. К вашим услугам: `!pick` `!roll` `!dota` `!ti` `!story` `!yearprogress` `!lock` `!unlock`')
                .setTimestamp();
            msgObject.channel.send(helpEmbed);
        }
        else {
            if (args[0] == 'story') {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle('!story')
                    .setColor([r, g, b])
                    .setDescription('Напишите начало истории в нескольких словах, а лучше предложениях. Бот дополнить полу-рандомным текстом, постараясь уловить контекст. \nИспользование !story [ваше_начало_истории]')
                    .setTimestamp();
                msgObject.channel.send(helpEmbed);
            }
            else if (args[0] == 'pick') {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle('!pick')
                    .setColor([r, g, b])
                    .setDescription('Бот может помочь с выбором, если вы еблан. Достаточно написать `!pick [вариант1] [вариант2] [вариант3] ...`')
                    .setTimestamp();
                msgObject.channel.send(helpEmbed);
            }
            else if (args[0] == 'roll') {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle('!pick')
                    .setColor([r, g, b])
                    .setDescription('Нужно случайное число? Бот поможет! `!roll [максимальное_число]`')
                    .setTimestamp();
                msgObject.channel.send(helpEmbed);
            }
            else {
                msgObject.channel.send('С этим я тебе вряд ли помогу, прости. Придётся опытным путём выяснять че да как.');
            }
        }
    }
}
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXNDO0FBSXRDLE1BQXFCLElBQUk7SUFBekI7UUFDcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQXVEdkMsQ0FBQztJQXJERyxJQUFJO1FBQ0EsT0FBTyxlQUFlLENBQUM7SUFDM0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxJQUFJLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRWpFLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNsQyxRQUFRLENBQUMsT0FBTyxDQUFDO2lCQUNqQixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNuQixjQUFjLENBQUMsMEpBQTBKLENBQUM7aUJBQzFLLFlBQVksRUFBRSxDQUFDO1lBRXBCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEVBQUU7Z0JBQ3BCLElBQUksU0FBUyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtxQkFDbEMsUUFBUSxDQUFDLFFBQVEsQ0FBQztxQkFDbEIsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDbkIsY0FBYyxDQUFDLG9MQUFvTCxDQUFDO3FCQUNwTSxZQUFZLEVBQUUsQ0FBQztnQkFFcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDckM7aUJBQU0sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFO2dCQUMxQixJQUFJLFNBQVMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEVBQUU7cUJBQ2xDLFFBQVEsQ0FBQyxPQUFPLENBQUM7cUJBQ2pCLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ25CLGNBQWMsQ0FBQyw2R0FBNkcsQ0FBQztxQkFDN0gsWUFBWSxFQUFFLENBQUM7Z0JBRXBCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sRUFBRTtnQkFDMUIsSUFBSSxTQUFTLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO3FCQUNsQyxRQUFRLENBQUMsT0FBTyxDQUFDO3FCQUNqQixRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3FCQUNuQixjQUFjLENBQUMsa0VBQWtFLENBQUM7cUJBQ2xGLFlBQVksRUFBRSxDQUFDO2dCQUVwQixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrRkFBa0YsQ0FBQyxDQUFBO2FBQzdHO1NBQ0o7SUFDTCxDQUFDO0NBQ0o7QUF4REQsdUJBd0RDIn0=