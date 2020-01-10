import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import * as db from 'quick.db';
import { checkServerIdentity } from 'tls';

export default class unlock implements IBotCommand {
	private readonly _command = 'unlock';

	help(): string {
		return 'This is nothing';
		// throw new Error("Method not implemented.");
	}
	isThisCommand(command: string): boolean {
		return command === this._command;
		// throw new Error("Method not implemented.");
	}
	runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
		console.log(`-= Recieved !${this._command} with agrs: ${args}`);
		let timer = parseInt(args[1]) * 60000;
		if (args[0] === 'help') {
			let embed = new Discord.RichEmbed()
				.setTitle(`Использование !lock`)
				.setDescription('Находясь в голосовом канале напишите ```!lock [количество_слотов]```')
				.addField('Снять ограничение', '```!unlock```');
			msgObject.channel.send(embed);
		} else {
			lockChannel(args, msgObject);
			// if (args[1]) {
			// 	setTimeout(() => unlockChannel(args, msgObject), timer);
			// }
		}

		function lockChannel(args: string[], msgObject: Discord.Message) {
			msgObject.member.voiceChannel.setUserLimit(0);
			msgObject.delete(0);
			msgObject.channel.send(`Channel '${msgObject.member.voiceChannel.name}' is unlocked now`).then((msg) => {
				(msg as Discord.Message).delete(5000);
			});
		}
	}
}
