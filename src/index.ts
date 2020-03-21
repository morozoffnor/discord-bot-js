import * as Discord from 'discord.js';
import * as Configfile from './config';
import { IBotCommand } from './api';
import * as fs from 'fs';
import yearprogress from './commands/yearprogress';

const client: Discord.Client = new Discord.Client();
const CronJob = require('cron').CronJob;
const request = require('request');
const admin = require('firebase-admin');

let serviceAccount = require('./firm-region-265513-5b75315c82b8.json');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});

let db = admin.firestore();



let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`);
client.on('ready', () => {
	console.log(' ');
	console.log('Using ' + client.user.username + '#' + client.user.discriminator + ' account!');
	console.log(' ');
	console.log('Connected servers and channels:');
	client.guilds.forEach((guild) => {
		console.log(' - ' + guild.name);

		guild.channels.forEach((channel) => {
			console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`);
		});
	});
	console.log(' ');
	console.log('Setting status');
	changeStatus(client);

	var hourMillseconds = 1000 * 60 * 60;
	setInterval(function () {
		changeStatus(client);
	}, hourMillseconds);

	console.log('ready to go!');
});

client.on('message', (msg) => {
	// игнорировать сообщения ботов
	if (msg.author.bot) {
		return;
	}

	// игнорировать сообщения без префикса
	if (!msg.content.startsWith(Configfile.config.prefix)) {
		return;
	}

	// обработать команду
	handeCommand(msg);
});

async function handeCommand(msg: Discord.Message) {
	// split the sstring into the command and args
	let command = msg.content.split(' ')[0].replace(Configfile.config.prefix, '');
	let args = msg.content.split(' ').slice(1);

	// loop through all of loaded commands
	for (const commandClass of commands) {
		// try to execute and ready in case of an error
		try {
			// check command class if it is a correct one
			if (!commandClass.isThisCommand(command)) {
				// go to the next iteration if this isn't the correct one
				continue;
			}
			//
			await commandClass.runCommand(args, msg, client);
		} catch (exeption) {
			console.log(exeption);
		}
	}
}

function loadCommands(commandsPath: string) {
	//если нет команд - оффнуться
	if (!Configfile.config || (Configfile.config.commands as string[]).length === 0) {
		return;
	}
	//проверить все команды
	for (const commandName of Configfile.config.commands as string[]) {
		const commandsClass = require(`${commandsPath}/${commandName}`).default;

		const command = new commandsClass() as IBotCommand;

		commands.push(command);
	}
}
// TODO вот это сделать нормально
function changeStatus(client: Discord.Client) {
	let statusString = '';
	let statusURL = '';

	fs.readFile('./content/statusString.txt', function (err, data) {
		if (err) throw err;
		let statusArr = data.toString().split('\n');
		let random = Math.floor(Math.random() * statusArr.length);
		statusString = statusArr[random];

		let done1 = true;
		if (done1) {
			fs.readFile('./content/statusURL.txt', function (err, data) {
				if (err) throw err;
				let statusURLArr = data.toString().split('\n');
				let random = Math.floor(Math.random() * statusURLArr.length);
				statusURL = statusURLArr[random];

				let done2 = true;
				if (done2) {
					let statusId = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
					let statuses = ['PLAYING', 'STREAMING', 'LISTENING', 'WATCHING'];
					if (statusId == 1) {
						client.user.setActivity(statusString, {
							type: 'STREAMING',
							url: statusURL
						});
					} else {
						let done3 = true;
						if (done3) {
							client.user.setActivity(statusString, {
								type: statusId,
								url: statusURL
							});
							// need to fix this
							console.log(
								`Status has changed to ${statuses[statusId]}, ${statusString} with url: ${statusURL}`
							);
						}
					}
				}
			});
		}
	});
}

// ========== Year progress daily post =============

// Define year, and the current year etc.. math..
const days = 366;

// Calc one day
const oneDay = 1000 * 60 * 60 * 24;

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = Math.abs(<any>new Date() - <any>new Date(start));
let currentDay = Math.floor(diff / oneDay);
let currentPerc = currentDay / days * 100;

// Unicode Bar Styles
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

const emojis = [
	'🕐',
	'🕑',
	'🕒',
	'🕓',
	'🕔',
	'🕕',
	'🕖',
	'🕗',
	'🕘',
	'🕙',
	'🕚',
	'🕛',
	'🕜',
	'🕝',
	'🕞',
	'🕟',
	'🕠',
	'🕡',
	'🕢',
	'🕣',
	'🕤',
	'🕥',
	'🕦',
	'🕧',
	'🐶',
	'🐱',
	'🐭',
	'🐹',
	'🐰',
	'🦊',
	'🦝',
	'🐻',
	'🐼',
	'🦠',
	'🐢',
	'🐍',
	'🦎',
	'🦖',
	'🦕',
	'🐙',
	'🦑',
	'🦐',
	'🦀',
	'🐡',
	'🐠',
	'🐟',
	'🐬',
	'🐳',
	'🐋',
	'🦈',
	'🐊',
	'🐅',
	'🐆',
	'🦓',
	'🦍',
	'🐘',
	'🦏',
	'🦛',
	'🐪',
	'🐫',
	'🦙',
	'🦒',
	'🐃',
	'🐂',
	'🐄',
	'🐎',
	'🐖',
	'🐏',
	'🐑',
	'🐐',
	'🦌',
	'🐕',
	'🐩',
	'🐈',
	'🐓',
	'🦃',
	'🕊',
	'🐇',
	'🐁',
	'🐀',
	'🐿',
	'🦔'
];

// Show them in the console
console.log('Current day : ' + currentDay);
console.log('Current perc : ' + currentPerc);
console.log('Testing the bar' + make_bar(currentPerc, bar_styles[0]) + ' ' + currentPerc.toFixed(2) + '%');

new CronJob(
	'0 0 * * *',
	function () {
		YearProgressEveryDay();
		checkPercDiff();
	},
	null,
	true,
	'UTC'
);

function checkPercDiff() {

	let docRef = db.collection('Govnoed').doc(`s9cZGhjxKyOEsTQncDfW`);
	let getDoc = docRef.get()
		.then((doc: { exists: any; data: () => any; }) => {
			if (!doc.exists) {
				console.log('No such document!');
			} else {
				console.log('- - - Starting yeaprogress cron thing')
				console.log('Checking Google Firestore for last perc... Document data:', doc.data());
				let lastPercJson = doc.data();
				console.log(lastPercJson);
				let lastPerc = lastPercJson['yearprogressperc']
				let percs = [1, 2, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 98, 99, 100];

				let cPerc = 1;
				cPerc = parseInt(currentPerc.toFixed())

				if (lastPerc == cPerc) {
					return
				} else {
					for (let i = 0; i < percs.length; i++) {
						if (percs[i] == cPerc) {
							console.log('- - Everything is fine. Executing post function...')
							postyearProgress(client, currentPerc, bar_styles);
							console.log('- - Updating document on Google Firestore...')
							docRef.update({ yearprogressperc: cPerc });
							console.log('- - - Done!')
							break
						}
					}
				}
			}
		})
		.catch((err: any) => {
			console.log('Error getting document', err);
		});




}

function YearProgressEveryDay() {
	now = new Date();
	start = new Date(now.getFullYear(), 0, 0);
	diff = Math.abs(<any>new Date() - <any>new Date(start));
	currentDay = Math.floor(diff / oneDay);
	currentPerc = currentDay / days * 100;
}

function postyearProgress(client: Discord.Client, currentPerc: number, bar_styles: any[]) {
	let randomemojiId = Math.floor(Math.random() * (emojis.length - 0)) + +0;
	let emojismile = emojis[randomemojiId];

	let embedColor = Math.ceil(Math.floor(Math.random() * (16777213 - 0 + 1)) + 0);

	var bar = make_bar(currentPerc, bar_styles[2]);

	for (var i = 0; i <= Configfile.config.yearporgresswebhooks.length; i++) {
		request.post(
			Configfile.config.yearporgresswebhooks[i],
			{
				json: {
					embeds: [
						{
							title: `${currentPerc.toFixed(0)}% #YearProgress`,
							color: embedColor,
							description: `${bar}`,
							footer: {
								text: emojismile
							}
						}
					]
				}
			},
			(error: any, res: { statusCode: any }, body: any) => {
				if (error) {
					console.error(error);
					return;
				}
				console.log("Posted Embed with '" + bar + "'");
				console.log(`statusCode: ${res.statusCode}`);
				console.log(body);
			}
		);
	}
}

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

client.login(Configfile.config.token);

export default db
