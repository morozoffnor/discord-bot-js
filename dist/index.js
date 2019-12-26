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
const days = 365;
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
    var bar = make_bar(currentPerc, bar_styles[0]) + '   ' + currentPerc.toFixed(2) + '% #YearProgress ' + emojismile;
    for (var i = 0; i <= Configfile.config.yearporgresswebhooks.length; i++) {
        request.post(Configfile.config.yearporgresswebhooks[i], {
            json: {
                content: bar
            }
        }, (error, res, body) => {
            if (error) {
                console.error(error);
                return;
            }
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