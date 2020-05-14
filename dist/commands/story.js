"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
const fetch = require('node-fetch');
class story {
    constructor() {
        this._command = 'story';
    }
    help() {
        return 'This is nothing';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        const API_LINK_MEDIUM = 'https://models.dobro.ai/gpt2/medium/';
        const FETCH_DEFAULT = {
            timeout: 10000,
            headers: {
                'User-Agent': 'discord-bot (https://github.com/morozoffnor/discord-bot-js)<1337morozoff@gmail.com>',
                'Content-Type': 'application/json'
            },
            method: 'POST'
        };
        const apiRequest = (text, samples) => __awaiter(this, void 0, void 0, function* () {
            const params = {
                prompt: text,
                length: 60,
                num_samples: samples
            };
            const response = yield fetch(API_LINK_MEDIUM, Object.assign(Object.assign({}, FETCH_DEFAULT), { body: JSON.stringify(params) }));
            console.log(JSON.stringify(params));
            return response.json();
        });
        const handleMessage = (msgObject) => __awaiter(this, void 0, void 0, function* () {
            let answer;
            let text = args.join(' ');
            try {
                const { replies } = yield apiRequest(text, 1);
                answer = `*${text}*${replies.join('')}`;
                console.log(`got '${text}'`);
                console.log(`  replies - '${replies}'`);
            }
            catch (error) {
                answer =
                    'Прости, ничего не вышло. Не могу сгенерировать историю, попробуй повторить попытку позже.\nБот возможно сейчас очень нагружен или испытывает другие трудности.';
                msgObject.delete(5000);
                console.log(error);
            }
            yield msgObject.channel.send(answer)
                .then((msg) => { msg.delete(5000); });
        });
        if (args[0] === 'help') {
            msgObject.delete(100);
            let embed = new Discord.RichEmbed()
                .setTitle(`Использование !story`)
                .setDescription('**!story** `начало истории`\nБот дополнит вашу историю при помощи магии нейросетей. Нужно лишь написать начало истории из нескольких слов или предложений')
                .setFooter(`Чем лучше описано начало, тем лучше получится дальше`);
            msgObject.channel.send(embed);
        }
        else {
            handleMessage(msgObject);
        }
    }
}
exports.default = story;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFFdEMsTUFBTSxLQUFLLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRXBDLE1BQXFCLEtBQUs7SUFBMUI7UUFDa0IsYUFBUSxHQUFHLE9BQU8sQ0FBQztJQW9FckMsQ0FBQztJQWxFQSxJQUFJO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQztJQUUxQixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBQzVFLE1BQU0sZUFBZSxHQUFHLHNDQUFzQyxDQUFDO1FBQy9ELE1BQU0sYUFBYSxHQUFHO1lBQ3JCLE9BQU8sRUFBRSxLQUFLO1lBQ2QsT0FBTyxFQUFFO2dCQUNSLFlBQVksRUFBRSxxRkFBcUY7Z0JBQ25HLGNBQWMsRUFBRSxrQkFBa0I7YUFDbEM7WUFDRCxNQUFNLEVBQUUsTUFBTTtTQUNkLENBQUM7UUFFRixNQUFNLFVBQVUsR0FBRyxDQUFPLElBQWMsRUFBRSxPQUFlLEVBQUUsRUFBRTtZQUM1RCxNQUFNLE1BQU0sR0FBRztnQkFDZCxNQUFNLEVBQUUsSUFBSTtnQkFDWixNQUFNLEVBQUUsRUFBRTtnQkFDVixXQUFXLEVBQUUsT0FBTzthQUNwQixDQUFDO1lBRUYsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsZUFBZSxrQ0FDeEMsYUFBYSxLQUNoQixJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFDM0IsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQSxDQUFDO1FBRUYsTUFBTSxhQUFhLEdBQUcsQ0FBTyxTQUEwQixFQUFFLEVBQUU7WUFDMUQsSUFBSSxNQUFNLENBQUM7WUFDWCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUk7Z0JBQ0gsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLE1BQU0sVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxHQUFHLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLE9BQU8sR0FBRyxDQUFDLENBQUM7YUFDeEM7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZixNQUFNO29CQUNMLGdLQUFnSyxDQUFDO2dCQUNsSyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ25CO1lBRUQsTUFBTSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLEdBQUksR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUM1RCxDQUFDLENBQUEsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUN2QixTQUFTLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDakMsUUFBUSxDQUFDLHNCQUFzQixDQUFDO2lCQUNoQyxjQUFjLENBQ2QsMkpBQTJKLENBQzNKO2lCQUNBLFNBQVMsQ0FBQyxzREFBc0QsQ0FBQyxDQUFDO1lBQ3BFLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzlCO2FBQU07WUFDTixhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDekI7SUFDRixDQUFDO0NBQ0Q7QUFyRUQsd0JBcUVDIn0=