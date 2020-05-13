import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
const fetch = require('node-fetch');

export default class story implements IBotCommand {
	private readonly _command = 'story';

	help(): string {
		return 'This is nothing';
		// throw new Error("Method not implemented.");
	}
	isThisCommand(command: string): boolean {
		return command === this._command;
		// throw new Error("Method not implemented.");
	}
	runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
		const API_LINK_MEDIUM = 'https://models.dobro.ai/gpt2/medium/';
		const FETCH_DEFAULT = {
			timeout: 10000,
			headers: {
				'User-Agent': 'discord-bot (https://github.com/morozoffnor/discord-bot-js)<1337morozoff@gmail.com>',
				'Content-Type': 'application/json'
			},
			method: 'POST'
		};

		const apiRequest = async (text: string[], samples: number) => {
			const params = {
				prompt: text,
				length: 60,
				num_samples: samples
			};

			const response = await fetch(API_LINK_MEDIUM, {
				...FETCH_DEFAULT,
				body: JSON.stringify(params)
			});
			console.log(JSON.stringify(params));
			return response.json();
		};

		const handleMessage = async (msgObject: Discord.Message) => {
			let answer;
			let text = args.join(' ');
			try {
				const { replies } = await apiRequest(text, 1); //there is an error in ts but it works just fine idk why
				answer = `*${text}*${replies.join('')}`;
				console.log(`got '${text}'`);
				console.log(`  replies - '${replies}'`);
			} catch (error) {
				answer =
					'Прости, ничего не вышло. Не могу сгенерировать историю, попробуй повторить попытку позже.\nБот возможно сейчас очень нагружен или испытывает другие трудности.';
				msgObject.delete(5000);
				console.log(error);
			}

			await msgObject.channel.send(answer)
				.then((msg) => { (msg as Discord.Message).delete(5000); })
		};

		if (args[0] === 'help') {
			msgObject.delete(100);
			let embed = new Discord.RichEmbed()
				.setTitle(`Использование !story`)
				.setDescription(
					'**!story** `начало истории`\nБот дополнит вашу историю при помощи магии нейросетей. Нужно лишь написать начало истории из нескольких слов или предложений'
				)
				.setFooter(`Чем лучше описано начало, тем лучше получится дальше`);
			msgObject.channel.send(embed);
		} else {
			handleMessage(msgObject);
		}
	}
}
