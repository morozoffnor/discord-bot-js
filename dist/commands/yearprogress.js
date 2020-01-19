"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const Configfile = require("../config");
const request = require('request');
class yearprogress {
    constructor() {
        this._command = 'yearprogress';
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
        let days = 366;
        let oneDay = 1000 * 60 * 60 * 24;
        let now = new Date();
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = Math.abs(new Date() - new Date(start));
        let currentDay = Math.floor(diff / oneDay);
        let currentPerc = currentDay / days * 100;
        let embedColor = Math.ceil(Math.floor(Math.random() * (16777213 - 0 + 1)) + 0);
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
        let randomemojiId = Math.floor(Math.random() * (emojis.length - 0)) + +0;
        let emojismile = emojis[randomemojiId];
        let r = Math.ceil(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
        let g = Math.ceil(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
        let b = Math.ceil(Math.floor(Math.random() * (254 - 0 + 1)) + 0);
        console.log(`embed color generated ${r} ${g} ${b}`);
        var bar = make_bar(currentPerc, bar_styles[2]);
        let yearprogressEmbed = new Discord.RichEmbed()
            .setTitle(`${currentPerc.toFixed(3)}% #YearProgress`)
            .setColor([r, g, b])
            .setDescription(`${bar}`)
            .setFooter(`${emojismile}`)
            .setTimestamp();
        msgObject.channel.send(yearprogressEmbed);
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
    }
}
exports.default = yearprogress;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhcnByb2dyZXNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3llYXJwcm9ncmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFzQztBQUd0Qyx3Q0FBd0M7QUFDeEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRW5DLE1BQXFCLFlBQVk7SUFBakM7UUFDa0IsYUFBUSxHQUFHLGNBQWMsQ0FBQztJQWdNNUMsQ0FBQztJQTlMQSxJQUFJO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQztJQUUxQixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRTVFLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDN0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ2hDLE9BQU87YUFDUDtTQUNEO1FBRUQsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDO1FBQ2YsSUFBSSxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWpDLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxLQUFLLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFNLElBQUksSUFBSSxFQUFFLEdBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQztRQUMzQyxJQUFJLFdBQVcsR0FBRyxVQUFVLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUUxQyxJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRS9FLE1BQU0sTUFBTSxHQUFHO1lBQ2QsSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJQUFJO1lBQ0osSUFBSTtZQUNKLElBQUk7WUFDSixJ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