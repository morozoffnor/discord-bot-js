import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import * as fs from 'fs';
import * as Configfile from '../config';

export default class random implements IBotCommand {
	private readonly _command = 'roll';

	help(): string {
		return 'This is nothing';
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

		let stringNumber = msgObject.content.split(' ').slice(1);
		let number = Number(stringNumber);

		let min = Math.ceil(1);
		let maxi = Math.floor(number);
		let namber = Math.floor(Math.random() * (maxi - min + 1)) + min;
		console.log('generating number');

		function sendThisShit(namber: number, msgObject: Discord.Message) {
			let message = '';
			if (namber == 228) {
				message = 'Ух, а ты удачливый сегодня! Ничего запрещенного с собой не носим? Твоя статья номер 228!';
				msgObject.channel.send(message);
			} else if (namber == 1337) {
				message = 'Я не верю, что это когда-нибудь выпадет, так что даже не буду придумывать что-то для 1337';
				msgObject.channel.send(message);
			} else if (namber == 69) {
				message = 'Если ты сейчас начнешь думать о смысле числа 69, то я тебе лицо сожру';
				msgObject.channel.send(message);
			} else {
				msgObject.channel.send(namber);
			}
		}

		sendThisShit(namber, msgObject);
	}
}
