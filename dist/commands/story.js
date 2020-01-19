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
            const response = yield fetch(API_LINK_MEDIUM, Object.assign({}, FETCH_DEFAULT, { body: JSON.stringify(params) }));
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
            yield msgObject.channel.send(answer);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvc3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUFzQztBQUV0QyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7QUFFcEMsTUFBcUIsS0FBSztJQUExQjtRQUNrQixhQUFRLEdBQUcsT0FBTyxDQUFDO0lBbUVyQyxDQUFDO0lBakVBLElBQUk7UUFDSCxPQUFPLGlCQUFpQixDQUFDO0lBRTFCLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUM1QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRWxDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDNUUsTUFBTSxlQUFlLEdBQUcsc0NBQXNDLENBQUM7UUFDL0QsTUFBTSxhQUFhLEdBQUc7WUFDckIsT0FBTyxFQUFFLEtBQUs7WUFDZCxPQUFPLEVBQUU7Z0JBQ1IsWUFBWSxFQUFFLHFGQUFxRjtnQkFDbkcsY0FBYyxFQUFFLGtCQUFrQjthQUNsQztZQUNELE1BQU0sRUFBRSxNQUFNO1NBQ2QsQ0FBQztRQUVGLE1BQU0sVUFBVSxHQUFHLENBQU8sSUFBYyxFQUFFLE9BQWUsRUFBRSxFQUFFO1lBQzVELE1BQU0sTUFBTSxHQUFHO2dCQUNkLE1BQU0sRUFBRSxJQUFJO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2dCQUNWLFdBQVcsRUFBRSxPQUFPO2FBQ3BCLENBQUM7WUFFRixNQUFNLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxlQUFlLG9CQUN4QyxhQUFhLElBQ2hCLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUMzQixDQUFDO1lBQ0gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDcEMsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFBLENBQUM7UUFFRixNQUFNLGFBQWEsR0FBRyxDQUFPLFNBQTBCLEVBQUUsRUFBRTtZQUMxRCxJQUFJLE1BQU0sQ0FBQztZQUNYLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUIsSUFBSTtnQkFDSCxNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsTUFBTSxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QyxNQUFNLEdBQUcsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsT0FBTyxHQUFHLENBQUMsQ0FBQzthQUN4QztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNmLE1BQU07b0JBQ0wsZ0tBQWdLLENBQUM7Z0JBQ2xLLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7WUFFRCxNQUFNLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQSxDQUFDO1FBRUYsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxFQUFFO1lBQ3ZCLFNBQVMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxPQUFPLENBQUMsU0FBUyxFQUFFO2lCQUNqQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7aUJBQ2hDLGNBQWMsQ0FDZCwySkFBMkosQ0FDM0o7aUJBQ0EsU0FBUyxDQUFDLHNEQUFzRCxDQUFDLENBQUM7WUFDcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNOLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN6QjtJQUNGLENBQUM7Q0FDRDtBQXBFRCx3QkFvRUMifQ==