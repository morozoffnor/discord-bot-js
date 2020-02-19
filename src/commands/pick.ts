import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import * as fs from 'fs';

export default class pick implements IBotCommand {
    private readonly _command = 'pick';

    help(): string {
        return 'This is nothing';
        // throw new Error("Method not implemented.");
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
        // throw new Error("Method not implemented.");
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {

        let choices = msgObject.content.split(' ').slice(1);
        console.log(`${msgObject.author} wants me to choose from ${choices.length}!`)
        let min = Math.ceil(0);
        let maxi = Math.floor(choices.length);
        console.log('choosing...')
        let i = Math.floor(Math.random() * (maxi - min + 1)) + min;

        let choice = choices[i];

        function sendChoice(choice: string, msgObject: Discord.Message) {
            console.log(`I've chosen '${choice}'! Sending...`)
            msgObject.channel.send(choice);
        }




        if (choices.length < 1) {
            fs.readFile('content/pidor.txt', function (err, data) {
                if (err) throw err;
                let tiArr = data.toString().split('\n');
                let random = Math.floor(Math.random() * tiArr.length);
                let randomPidor = tiArr[random];
                msgObject.channel.send('Мне не из чего выбирать, ' + randomPidor)
            });
        } else if (choices.length == 1) {
            fs.readFile('content/pidor.txt', function (err, data) {
                if (err) throw err;
                let tiArr = data.toString().split('\n');
                let random = Math.floor(Math.random() * tiArr.length);
                let randomPidor = tiArr[random];
                msgObject.channel.send('Я вижу тут только один вариант. И как ты думаешь, что я выберу, ' + randomPidor + '?')
            });
        } else {
            sendChoice(choice, msgObject);
        }


    }
}
