"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const Configfile = require("./config");
const fs = require("fs");
const client = new Discord.Client();
const CronJob = require('cron').CronJob;
const request = require('request');
let commands = [];
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
    if (msg.author.bot) {
        return;
    }
    if (!msg.content.startsWith(Configfile.config.prefix)) {
        return;
    }
    handeCommand(msg);
});
function handeCommand(msg) {
    return __awaiter(this, void 0, void 0, function* () {
        let command = msg.content.split(' ')[0].replace(Configfile.config.prefix, '');
        let args = msg.content.split(' ').slice(1);
        for (const commandClass of commands) {
            try {
                if (!commandClass.isThisCommand(command)) {
                    continue;
                }
                yield commandClass.runCommand(args, msg, client);
            }
            catch (exeption) {
                console.log(exeption);
            }
        }
    });
}
function loadCommands(commandsPath) {
    if (!Configfile.config || Configfile.config.commands.length === 0) {
        return;
    }
    for (const commandName of Configfile.config.commands) {
        const commandsClass = require(`${commandsPath}/${commandName}`).default;
        const command = new commandsClass();
        commands.push(command);
    }
}
function changeStatus(client) {
    let statusString = '';
    let statusURL = '';
    fs.readFile('./content/statusString.txt', function (err, data) {
        if (err)
            throw err;
        let statusArr = data.toString().split('\n');
        let random = Math.floor(Math.random() * statusArr.length);
        statusString = statusArr[random];
        let done1 = true;
        if (done1) {
            fs.readFile('./content/statusURL.txt', function (err, data) {
                if (err)
                    throw err;
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
                    }
                    else {
                        let done3 = true;
                        if (done3) {
                            client.user.setActivity(statusString, {
                                type: statusId,
                                url: statusURL
                            });
                            console.log(`Status has changed to ${statuses[statusId]}, ${statusString} with url: ${statusURL}`);
                        }
                    }
                }
            });
        }
    });
}
const days = 366;
const oneDay = 1000 * 60 * 60 * 24;
let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = Math.abs(new Date() - new Date(start));
let currentDay = Math.floor(diff / oneDay);
let currentPerc = currentDay / days * 100;
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
console.log('Current day : ' + currentDay);
console.log('Current perc : ' + currentPerc);
console.log('Testing the bar' + make_bar(currentPerc, bar_styles[0]) + ' ' + currentPerc.toFixed(2) + '%');
let postPerc = [2, 5, 7, 10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 65, 69, 75, 80, 85, 90, 95, 96, 97, 98, 99, 100];
new CronJob('0 0 * * *', function () {
    YearProgressEveryDay();
    postyearProgress(client, currentPerc, bar_styles);
}, null, true, 'UTC');
function YearProgressEveryDay() {
    now = new Date();
    start = new Date(now.getFullYear(), 0, 0);
    diff = Math.abs(new Date() - new Date(start));
    currentDay = Math.floor(diff / oneDay);
    currentPerc = currentDay / days * 100;
}
function postyearProgress(client, currentPerc, bar_styles) {
    let randomemojiId = Math.floor(Math.random() * (emojis.length - 0)) + +0;
    let emojismile = emojis[randomemojiId];
    let embedColor = Math.ceil(Math.floor(Math.random() * (16777213 - 0 + 1)) + 0);
    var bar = make_bar(currentPerc, bar_styles[2]);
    for (var i = 0; i <= Configfile.config.yearporgresswebhooks.length; i++) {
        request.post(Configfile.config.yearporgresswebhooks[i], {
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
        }, (error, res, body) => {
            if (error) {
                console.error(error);
                return;
            }
            console.log("Posted Embed with '" + bar + "'");
            console.log(`statusCode: ${res.statusCode}`);
            console.log(body);
        });
    }
}
function repeat(s, i) {
    var r = '';
    for (var j = 0; j < i; j++)
        r += s;
    return r;
}
function make_bar(perc, bar_style) {
    var p = perc;
    var d, full, m, middle, r, rest, x, min_delta = Number.POSITIVE_INFINITY, full_symbol = bar_style[bar_style.length - 1], n = bar_style.length - 1;
    if (p == 100)
        return repeat(full_symbol, 10);
    p = p / 100;
    for (var i = 25; i >= 1; i--) {
        x = p * i;
        full = Math.floor(x);
        rest = x - full;
        middle = Math.floor(rest * n);
        if (p != 0 && full == 0 && middle == 0)
            middle = 1;
        d = Math.abs(p - (full + middle / n) / i) * 100;
        if (d < min_delta) {
            min_delta = d;
            m = bar_style[middle];
            if (full == i)
                m = '';
            r = repeat(full_symbol, full) + m + repeat(bar_style[0], i - full - 1);
        }
        return r;
    }
}
client.login(Configfile.config.token);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFFdkMseUJBQXlCO0FBRXpCLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3hDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUVuQyxJQUFJLFFBQVEsR0FBa0IsRUFBRSxDQUFDO0FBRWpDLFlBQVksQ0FBQyxHQUFHLFNBQVMsV0FBVyxDQUFDLENBQUM7QUFDdEMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQzdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0lBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhDLEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFD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QUFDO0FBRUYsTUFBTSxNQUFNLEdBQUc7SUFDZCxJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0NBQ0osQ0FBQztBQUdGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFD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