import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import * as fs from 'fs';
import * as Configfile from '../config';
import { resolve } from 'dns';
import { rejects } from 'assert';

export default class emoji implements IBotCommand {
	private readonly _command = 'emoji';

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
		//TODO fix this
		let globalThis = {
			emoji1: '1',
			emoji2: '2',
			emoji3: '3'
		};

		fs.readFile('./content/emojis.txt', function(err, data) {
			if (err) throw err;
			let dotaArr = data.toString().split('\n');
			let random = Math.floor(Math.random() * dotaArr.length);
			let randomDota = dotaArr[random];
			globalThis.emoji1 = randomDota;
		});
		fs.readFile('./content/emojis.txt', function(err, data) {
			if (err) throw err;
			let dotaArr = data.toString().split('\n');
			let random = Math.floor(Math.random() * dotaArr.length);
			let randomDota = dotaArr[random];
			globalThis.emoji2 = randomDota;
		});
		fs.readFile('./content/emojis.txt', function(err, data) {
			if (err) throw err;
			let dotaArr = data.toString().split('\n');
			let random = Math.floor(Math.random() * dotaArr.length);
			let randomDota = dotaArr[random];
			globalThis.emoji3 = randomDota;
		});

		const bar_styles = [
			'▁▂▃▄▅▆▇█',
			'⣀⣄⣤⣦⣶⣷⣿',
			'⣀⣄⣆⣇⣧⣷⣿',
			'○◔◐◕⬤',
			'□◱◧▣■',
			'□◱▨▩■',
			'□◱▥▦■',
			'░▒▓█',
			'░█',
			'⬜⬛',
			'▱▰',
			'▭◼',
			'▯▮',
			'◯⬤',
			'⚪⚫'
		];

		// execute
		let days = 365;
		let oneDay = 1000 * 60 * 60 * 24;

		let now = new Date();
		let start = new Date(now.getFullYear(), 0, 0);
		let diff = Math.abs(<any>new Date() - <any>new Date(start));
		let currentDay = Math.floor(diff / oneDay);
		let currentPerc = currentDay / days * 100;

		var bar = make_bar(currentPerc, bar_styles[0]) + '   ' + currentPerc.toFixed(2);

		msgObject.channel.send(bar);

		function repeat(s: string, i: number) {
			var r = '';
			for (var j = 0; j < i; j++) r += s;
			return r;
		}

		function make_bar(perc: number, bar_style: string | any[]) {
			var p = perc;

			var d,
				full,
				m,
				middle,
				r,
				rest,
				x,
				min_delta = Number.POSITIVE_INFINITY,
				full_symbol = bar_style[bar_style.length - 1],
				n = bar_style.length - 1;
			if (p == 100) return repeat(full_symbol, 10);
			p = p / 100;

			for (var i = 25; i >= 1; i--) {
				x = p * i;
				full = Math.floor(x);
				rest = x - full;
				middle = Math.floor(rest * n);
				if (p != 0 && full == 0 && middle == 0) middle = 1;
				d = Math.abs(p - (full + middle / n) / i) * 100;
				if (d < min_delta) {
					min_delta = d;
					m = bar_style[middle];
					if (full == i) m = '';
					r = repeat(full_symbol, full) + m + repeat(bar_style[0], i - full - 1);
				}

				return r;
			}
		}

		let embed = {
			username: 'client.user.username',
			avatar_url: 'client.user.avatarURL',
			content: 'Ежедневный дайджест',
			embeds: [
				{
					author: {
						name: 'Govnoed_Grisha',
						url: 'https://www.reddit.com/r/doge/',
						icon_url: 'client.user.avatarURL'
					},
					title: 'Как же быстро летит время, не правда ли?',
					url: 'https://google.com/',
					description:
						'Сегодня я снова пришел напомнить вам, как много времени вы проебали впустую. Ну и ещё рандомных эмодзи показать, вы же так этого просили.',
					color: 15258703,
					fields: [
						{
							name: '🤔 Year Progress',
							value: bar
						},
						{
							name: 'Топ-3 эмодзи сегодня',
							value: 'Победители выбираются максимально рандомно. Я серьезно.'
						},
						{
							name: globalThis.emoji1,
							value: 'Победитель!'
						},
						{
							name: globalThis.emoji2,
							value: 'Второе место!',
							inline: true
						},
						{
							name: globalThis.emoji3,
							value: 'Третье место!',
							inline: true
						}
					],
					thumbnail: {
						url: 'https://i.imgur.com/2p68pbG.jpg'
					},
					image: {
						url: 'https://i.imgur.com/2p68pbG.jpg'
					},
					footer: {
						text: 'Вау! Как класно! :smirk:',
						icon_url: 'https://i.imgur.com/AAeBJBp.png'
					}
				}
			]
		};
	}
}
