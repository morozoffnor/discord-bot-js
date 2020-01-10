import * as Discord from 'discord.js';
import { IBotCommand } from '../api';

export default class testCommand implements IBotCommand {
	private readonly _command = 'testCommand';

	help(): string {
		return 'This is nothing';
		// throw new Error("Method not implemented.");
	}
	isThisCommand(command: string): boolean {
		return command === this._command;
		// throw new Error("Method not implemented.");
	}
	runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
		msgObject.channel.send('Обработчик команд заработал и я крутой');
		// throw new Error("Method not implemented.");
	}
}
