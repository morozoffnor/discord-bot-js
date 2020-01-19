"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Configfile = require("../config");
class emoji {
    constructor() {
        this._command = 'emoji';
    }
    help() {
        return 'This is nothing';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        for (let key of Configfile.config.restricted) {
            if (msgObject.guild.name == key) {
                return;
            }
        }
        let globalThis = {
            emoji1: '1',
            emoji2: '2',
            emoji3: '3'
        };
        fs.readFile('./content/emojis.txt', function (err, data) {
            if (err)
                throw err;
            let dotaArr = data.toString().split('\n');
            let random = Math.floor(Math.random() * dotaArr.length);
            let randomDota = dotaArr[random];
            globalThis.emoji1 = randomDota;
        });
        fs.readFile('./content/emojis.txt', function (err, data) {
            if (err)
                throw err;
            let dotaArr = data.toString().split('\n');
            let random = Math.floor(Math.random() * dotaArr.length);
            let randomDota = dotaArr[random];
            globalThis.emoji2 = randomDota;
        });
        fs.readFile('./content/emojis.txt', function (err, data) {
            if (err)
                throw err;
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
        let days = 365;
        let oneDay = 1000 * 60 * 60 * 24;
        let now = new Date();
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = Math.abs(new Date() - new Date(start));
        let currentDay = Math.floor(diff / oneDay);
        let currentPerc = currentDay / days * 100;
        var bar = make_bar(currentPerc, bar_styles[0]) + '   ' + currentPerc.toFixed(2);
        msgObject.channel.send(bar);
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
                    description: 'Сегодня я снова пришел напомнить вам, как много времени вы проебали впустую. Ну и ещё рандомных эмодзи показать, вы же так этого просили.',
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
exports.default = emoji;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1vamkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvZW1vamkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5QkFBeUI7QUFDekIsd0NBQXdDO0FBSXhDLE1BQXFCLEtBQUs7SUFBMUI7UUFDa0IsYUFBUSxHQUFHLE9BQU8sQ0FBQztJQTRLckMsQ0FBQztJQTFLQSxJQUFJO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQztJQUUxQixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRTVFLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDN0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ2hDLE9BQU87YUFDUDtTQUNEO1FBRUQsSUFBSSxVQUFVLEdBQUc7WUFDaEIsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsR0FBRztZQUNYLE1BQU0sRUFBRSxHQUFHO1NBQ1gsQ0FBQztRQUVGLEVBQUUsQ0FBQyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsVUFBUyxHQUFHLEVBQUUsSUFBSTtZQUNyRCxJQUFJLEdBQUc7Z0JBQUUsTUFBTSxHQUFHLENBQUM7WUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLFVBQVUsQ0FBQyxNQUFN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