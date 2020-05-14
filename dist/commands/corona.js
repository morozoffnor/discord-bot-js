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
const index_1 = require("../index");
const coronaDoc = index_1.default.collection('Govnoed').doc('corona');
class corona {
    constructor() {
        this._command = 'corona';
    }
    help() {
        return 'This is nothing';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        if (!args) {
            coronaDoc.get()
                .then((document) => {
                document.data()
                    .then(data => {
                    let timestamp = data.timestamp;
                    let ownerId = data.ownerId;
                    getPassedTimeAndPost(msgObject, timestamp, ownerId, 0);
                });
            });
        }
        let userId = msgObject.member.id;
        let target = args[1].substr(1);
        index_1.default.collection('Govnoed')
            .doc('corona')
            .get()
            .then((document) => {
            document.data()
                .then(data => {
                let time = data.timestamp;
                let ownerId = data.ownerId;
                if (userId !== ownerId) {
                    msgObject.channel.send(`Ты не являешься coroлевой! Чтобы передать корону, нужно быть королевских кровей!`);
                }
                else {
                    getPassedTimeAndPost(msgObject, time, ownerId, 1, parseInt(msgObject.mentions.users.first().id));
                    corona(msgObject);
                }
            });
        });
        function corona(msgObject) {
            return __awaiter(this, void 0, void 0, function* () {
                let target = yield msgObject.mentions.users.first();
                let newCorolevaId = yield parseInt(target.id);
                coronaDoc.get().then((document) => {
                    document.data()
                        .then(data => {
                        msgObject.member.setNickname(data.name)
                            .then(() => {
                            coronaDoc.set({ "ownerId": newCorolevaId, "timestamp": Date.now(), "name": msgObject.mentions.members.first().nickname });
                        });
                    });
                });
            });
        }
        function getPassedTimeAndPost(msgObject, timestamp, ownerId, isNew, newCorolevaId = 0) {
            var timeDiff = Date.now() - timestamp;
            let days;
            let hours;
            let minutes;
            let seconds;
            timeDiff /= 1000;
            seconds = Math.round(timeDiff % 60);
            timeDiff = Math.floor(timeDiff / 60);
            minutes = Math.round(timeDiff % 60);
            timeDiff = Math.floor(timeDiff / 60);
            hours = Math.round(timeDiff % 24);
            timeDiff = Math.floor(timeDiff / 24);
            days = timeDiff;
            let sting = ``;
            if (isNew == 0) {
                sting = `Coroлева <@!${ownerId}> правит этим сервером уже `;
            }
            else {
                sting = `Новая coroлева сервера - <@!${newCorolevaId}>! Предыдущая coroлева продержалась на престоле `;
            }
            if (days > 0) {
                sting = sting.concat(`${days} дней `);
            }
            if (hours > 0) {
                sting = sting.concat(`${hours} часов `);
            }
            if (minutes > 0) {
                sting = sting.concat(`${minutes} минут `);
            }
            if (seconds > 0) {
                sting = sting.concat(`${seconds} секунд `);
            }
            msgObject.channel.send(sting);
        }
    }
}
exports.default = corona;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yb25hLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Nvcm9uYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLG9DQUEwQjtBQUMxQixNQUFNLFNBQVMsR0FBRyxlQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUV6RCxNQUFxQixNQUFNO0lBQTNCO1FBQ3FCLGFBQVEsR0FBRyxRQUFRLENBQUM7SUEyR3pDLENBQUM7SUF6R0csSUFBSTtRQUNBLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUN6RSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1AsU0FBUyxDQUFDLEdBQUcsRUFBRTtpQkFDVixJQUFJLENBQUMsQ0FBQyxRQUF1QyxFQUFFLEVBQUU7Z0JBQzlDLFFBQVEsQ0FBQyxJQUFJLEVBQUU7cUJBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNULElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQy9CLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBRTNCLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFBO2dCQUUxRCxDQUFDLENBQUMsQ0FBQTtZQUNWLENBQUMsQ0FBQyxDQUFBO1NBQ1Q7UUFFRCxJQUFJLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FB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