import * as Discord from "discord.js";
import { IBotCommand } from "../api";
import * as fs from "fs";
import * as Configfile from "../config";
const request = require('request');

export default class yearprogress implements IBotCommand {
    
    private readonly _command = "yearprogress"
    
    help(): string {
        return "This is nothing";
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

        const emojis = ['🕐', '🕑', '🕒', '🕓', '🕔', '🕕', '🕖', '🕗', '🕘', '🕙',
            '🕚', '🕛', '🕜', '🕝', '🕞', '🕟', '🕠', '🕡', '🕢', '🕣', '🕤', '🕥',
            '🕦', '🕧', '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🦝', '🐻', '🐼', '🦠',
            '🐢', '🐍', '🦎', '🦖', '🦕', '🐙', '🦑', '🦐', '🦀', '🐡', '🐠', '🐟',
            '🐬', '🐳', '🐋', '🦈', '🐊', '🐅', '🐆', '🦓', '🦍', '🐘', '🦏', '🦛',
            '🐪', '🐫', '🦙', '🦒', '🐃', '🐂', '🐄', '🐎', '🐖', '🐏', '🐑', '🐐',
            '🦌', '🐕', '🐩', '🐈', '🐓', '🦃', '🕊', '🐇', '🐁', '🐀', '🐿', '🦔']

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
        '⚪⚫',
        ];

        // execute
        let days = 365;
        let oneDay = 1000 * 60 * 60 * 24;

        let now = new Date();
        let start = new Date(now.getFullYear(), 0, 0);
        let diff = Math.abs(<any>new Date() - <any>new Date(start));
        let currentDay = Math.floor(diff / oneDay);
        let currentPerc = currentDay / days * 100

        let randomemojiId = Math.floor(Math.random() * (emojis.length - 0)) + +0;
        let emojismile = emojis[randomemojiId];

    

        var bar = make_bar(currentPerc, bar_styles[0]) + '   ' + currentPerc.toFixed(2) + '% #YearProgress ' + emojismile;

        msgObject.channel.send(bar);

        function repeat(s: string, i: number) {
            var r = '';
            for (var j = 0; j < i; j++) r += s;
            return r;
        }

        function make_bar(perc: number, bar_style: string | any[]) {

            var p = perc;
        
            var d, full, m, middle, r, rest, x,
                min_delta = Number.POSITIVE_INFINITY,
                full_symbol = bar_style[bar_style.length - 1],
                n = bar_style.length - 1;
            if (p == 100)
                return repeat(full_symbol, 10);
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
    }

}