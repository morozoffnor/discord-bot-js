import * as Discord from 'discord.js';
import { IBotCommand } from '../api';
import db from '../index';
const coronaDoc = db.collection('Govnoed').doc('corona');

export default class corona implements IBotCommand {
    private readonly _command = 'corona';

    help(): string {
        return 'This is nothing';
        // throw new Error("Method not implemented.");
    }
    isThisCommand(command: string): boolean {
        return command === this._command;
        // throw new Error("Method not implemented.");
    }
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        if (!args) {
            coronaDoc.get()
                .then((document: { data: () => Promise<any>; }) => {
                    document.data()
                        .then(data => {
                            let timestamp = data.timestamp;
                            let ownerId = data.ownerId;
                            //post current coroleva and time
                            getPassedTimeAndPost(msgObject, timestamp, ownerId, 0)

                        })
                })
        }

        let userId = msgObject.member.id;
        let target = args[1].substr(1);
        db.collection('Govnoed')
            .doc('corona')
            .get()
            .then((document: { data: () => Promise<any>; }) => {
                document.data()
                    .then(data => {
                        let time = data.timestamp;
                        let ownerId = data.ownerId;

                        if (userId !== ownerId) {
                            msgObject.channel.send(`Ты не являешься coroлевой! Чтобы передать корону, нужно быть королевских кровей!`)
                        } else {
                            getPassedTimeAndPost(msgObject, time, ownerId, 1, parseInt(msgObject.mentions.users.first().id))
                            corona(msgObject);
                        }
                    })
            })
        async function corona(msgObject: Discord.Message) {
            let target = await msgObject.mentions.users.first();
            let newCorolevaId = await parseInt(target.id);
            coronaDoc.get().then((document: { data: () => Promise<any>; }) => {
                document.data()
                    .then(data => {
                        msgObject.member.setNickname(data.name)
                            .then(() => {
                                coronaDoc.set({ "ownerId": newCorolevaId, "timestamp": Date.now(), "name": msgObject.mentions.members.first().nickname })
                            })
                    })
            })


        }
        function getPassedTimeAndPost(msgObject: Discord.Message, timestamp: number, ownerId: any, isNew: number, newCorolevaId = 0) {
            // time difference in ms
            var timeDiff = Date.now() - timestamp;
            let days;
            let hours;
            let minutes;
            let seconds;
            // strip the ms
            timeDiff /= 1000;
            // get seconds 
            seconds = Math.round(timeDiff % 60);
            // remove seconds from the date
            timeDiff = Math.floor(timeDiff / 60);
            // get minutes
            minutes = Math.round(timeDiff % 60);
            // remove minutes from the date
            timeDiff = Math.floor(timeDiff / 60);
            // get hours
            hours = Math.round(timeDiff % 24);
            // remove hours from the date
            timeDiff = Math.floor(timeDiff / 24);
            // the rest of timeDiff is number of days
            days = timeDiff;

            let sting = ``;
            if (isNew == 0) {
                sting = `Coroлева <@!${ownerId}> правит этим сервером уже `
            } else {
                sting = `Новая coroлева сервера - <@!${newCorolevaId}>! Предыдущая coroлева продержалась на престоле `
            }
            if (days > 0) {
                sting = sting.concat(`${days} дней `)
            }
            if (hours > 0) {
                sting = sting.concat(`${hours} часов `)
            }
            if (minutes > 0) {
                sting = sting.concat(`${minutes} минут `)
            }
            if (seconds > 0) {
                sting = sting.concat(`${seconds} секунд `)
            }

            msgObject.channel.send(sting)
        }


    }
}
