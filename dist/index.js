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
const admin = require('firebase-admin');
let serviceAccount = require('./firm-region-265513-5b75315c82b8.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
let db = admin.firestore();
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
new CronJob('0 0 * * *', function () {
    YearProgressEveryDay();
    checkPercDiff();
}, null, true, 'UTC');
function checkPercDiff() {
    let docRef = db.collection('Govnoed').doc(`s9cZGhjxKyOEsTQncDfW`);
    let getDoc = docRef.get()
        .then((doc) => {
        if (!doc.exists) {
            console.log('No such document!');
        }
        else {
            console.log('- - - Starting yeaprogress cron thing');
            console.log('Checking Google Firestore for last perc... Document data:', doc.data());
            let lastPercJson = doc.data();
            console.log(lastPercJson);
            let lastPerc = lastPercJson['yearprogressperc'];
            let percs = [1, 2, 3, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 80, 90, 95, 98, 99, 100];
            let cPerc = 1;
            cPerc = parseInt(currentPerc.toFixed());
            if (lastPerc == cPerc) {
                return;
            }
            else {
                for (let i = 0; i < percs.length; i++) {
                    if (percs[i] == cPerc) {
                        console.log('- - Everything is fine. Executing post function...');
                        postyearProgress(client, currentPerc, bar_styles);
                        console.log('- - Updating document on Google Firestore...');
                        docRef.update({ yearprogressperc: cPerc });
                        console.log('- - - Done!');
                        break;
                    }
                }
            }
        }
    })
        .catch((err) => {
        console.log('Error getting document', err);
    });
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUN0Qyx1Q0FBdUM7QUFFdkMseUJBQXlCO0FBR3pCLE1BQU0sTUFBTSxHQUFtQixJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNwRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDO0FBQ3hDLE1BQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNuQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztBQUV4QyxJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMsd0NBQXdDLENBQUMsQ0FBQztBQUV2RSxLQUFLLENBQUMsYUFBYSxDQUFDO0lBQ25CLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7Q0FDakQsQ0FBQyxDQUFDO0FBRUgsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO0FBSTNCLElBQUksUUFBUSxHQUFrQixFQUFFLENBQUM7QUFFakMsWUFBWSxDQUFDLEdBQUcsU0FBUyxXQUFXLENBQUMsQ0FBQztBQUN0QyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsV0FBVyxDQUFDLENBQUM7SUFDN0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFpQyxDQUFDLENBQUM7SUFDL0MsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFaEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sT0FBTyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsSUFBSSxPQUFPLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFckIsSUFBSSxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDckMsV0FBVyxDQUFDO1FBQ1gsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RCLENBQUMsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUVwQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdCLENBQUMsQ0FBQyxDQUFDO0FBRUgsTUFBTSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUU1QixJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFO1FBQ25CLE9BQU87S0FDUDtJQUdELElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1FBQ3RELE9BQU87S0FDUDtJQUdELFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQixDQUFDLENBQUMsQ0FBQztBQUVILFNBQWUsWUFBWSxDQUFDLEdBQW9COztRQUUvQyxJQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDOUUsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRzNDLEtBQUssTUFBTSxZQUFZLElBQUksUUFBUSxFQUFFO1lBRXBDLElBQUk7Z0JBRUgsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBRXpDLFNBQVM7aUJBQ1Q7Z0JBRUQsTUFBTSxZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDakQ7WUFBQyxPQUFPLFFBQVEsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN0QjtTQUNEO0lBQ0YsQ0FBQztDQUFBO0FBRUQsU0FBUyxZQUFZLENBQUMsWUFBb0I7SUFFekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUssVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFxQixDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDaEYsT0FBTztLQUNQO0lBRUQsS0FBSyxNQUFNLFdBQVcsSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQW9CLEVBQUU7UUFDakUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLEdBQUcsWUFBWSxJQUFJLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDO1FBRXhFLE1BQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFpQixDQUFDO1FBRW5ELFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdkI7QUFDRixDQUFDO0FBRUQsU0FBUyxZQUFZLENBQUMsTUFBc0I7SUFDM0MsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUVuQixFQUFFLENBQUMsUUFBUSxDQUFDLDRCQUE0QixFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7UUFDNUQsSUFBSSxHQUFHO1lBQUUsTUFBTSxHQUFHLENBQUM7UUFDbkIsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDMUQsWUFBWSxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxLQUFLLEVBQUU7WUFDVixFQUFFLENBQUMsUUFBUSxDQUFDLHlCQUF5QixFQUFFLFVBQVUsR0FBRyxFQUFFLElBQUk7Z0JBQ3pELElBQUksR0FBRztvQkFBRSxNQUFNLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM3RCxTQUFTLEdBQUcsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUVqQyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxFQUFFO29CQUNWLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0QsSUFBSSxRQUFRLEdBQUcsQ0FBQyxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFDakUsSUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO3dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7NEJBQ3JDLElBQUksRUFBRSxXQUFXOzRCQUNqQixHQUFHLEVBQUUsU0FBUzt5QkFDZCxDQUFDLENBQUM7cUJBQ0g7eUJBQU07d0JBQ04sSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDO3dCQUNqQixJQUFJLEtBQUssRUFBRTs0QkFDVixNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0NBQ3JDLElBQUksRUFBRSxRQUFRO2dDQUNkLEdBQUcsRUFBRSxTQUFTOzZCQUNkLENBQUMsQ0FBQzs0QkFFSCxPQUFPLENBQUMsR0FBRyxDQUNWLHlCQUF5QixRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssWUFBWSxjQUFjLFNBQVMsRUFBRSxDQUNyRixDQUFDO3lCQUNGO3FCQUNEO2lCQUNEO1lBQ0YsQ0FBQyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUtELE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUdqQixNQUFNLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFFbkMsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzlDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQU0sSUFBSSxJQUFJLEVBQUUsR0FBUSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQzVELElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQzNDLElBQUksV0FBVyxHQUFHLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBRzFDLE1BQU0sVUFBVSxHQUFHO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsU0FBUztJQUNULE9BQU87SUFDUCxPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxNQUFNO0lBQ04sSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtDQUNKLENBQUM7QUFFRixNQUFNLE1BQU0sR0FBRztJQUNkLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElBQUk7SUFDSixJQUFJO0lBQ0osSUFBSTtJQUNKLElB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