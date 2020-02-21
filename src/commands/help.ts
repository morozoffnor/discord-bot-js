import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import random from './roll';

export default class help implements IBotCommand {
    private readonly _command = 'help';

    help(): string {
        return 'I`ll help you';
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
        // throw new Error("Method not implemented.");
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {

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
        } else {
            if (args[0] == 'story') {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle('!story')
                    .setColor([r, g, b])
                    .setDescription('Напишите начало истории в нескольких словах, а лучше предложениях. Бот дополнить полу-рандомным текстом, постараясь уловить контекст. \nИспользование !story [ваше_начало_истории]')
                    .setTimestamp();

                msgObject.channel.send(helpEmbed);
            } else if (args[0] == 'pick') {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle('!pick')
                    .setColor([r, g, b])
                    .setDescription('Бот может помочь с выбором, если вы еблан. Достаточно написать `!pick [вариант1] [вариант2] [вариант3] ...`')
                    .setTimestamp();

                msgObject.channel.send(helpEmbed);
            } else if (args[0] == 'roll') {
                let helpEmbed = new Discord.RichEmbed()
                    .setTitle('!pick')
                    .setColor([r, g, b])
                    .setDescription('Нужно случайное число? Бот поможет! `!roll [максимальное_число]`')
                    .setTimestamp();

                msgObject.channel.send(helpEmbed);
            } else {
                msgObject.channel.send('С этим я тебе вряд ли помогу, прости. Придётся опытным путём выяснять че да как.')
            }
        }
    }
}