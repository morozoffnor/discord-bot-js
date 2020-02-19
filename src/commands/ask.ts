import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import * as fs from 'fs';

export default class ask implements IBotCommand {
    private readonly _command = 'ask';

    help(): string {
        return 'This is nothing';
        // throw new Error("Method not implemented.");
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
        // throw new Error("Method not implemented.");
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {

        let answer = 0;
        answer = Math.floor(Math.random() * (2 - 1 + 1)) + 1;

        if (answer == 0) {
            fs.readFile('content/pidor.txt', function (err, data) {
                if (err) throw err;
                let tiArr = data.toString().split('\n');
                let random = Math.floor(Math.random() * tiArr.length);
                let randomPidor = tiArr[random];
                msgObject.channel.send('Ну и как я должен тебе ответить, ' + randomPidor + '?')
            });
        } else if (answer == 1) {
            msgObject.channel.send('YES')
        } else {
            msgObject.channel.send('NO')
        }

    }
}
