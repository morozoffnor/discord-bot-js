"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configfile = require("../config");
class random {
    constructor() {
        this._command = "random";
    }
    help() {
        return "This is nothing";
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
        let stringNumber = msgObject.content.split(" ").slice(1);
        let number = Number(stringNumber);
        let min = Math.ceil(0);
        let maxi = Math.floor(number);
        let namber = Math.floor(Math.random() * (maxi - min + 1)) + min;
        function sendThisShit(namber, msgObject) {
            let message = "";
            if (namber == 228) {
                message = "Ух, а ты удачливый сегодня! Ничего запрещенного с собой не носим? Твоя статья номер 228!";
                msgObject.channel.send(message);
            }
            else if (namber == 1337) {
                message = "Я не верю, что это когда-нибудь выпадет, так что даже не буду придумывать что-то для 1337";
                msgObject.channel.send(message);
            }
            else if (namber == 69) {
                message = "Если ты сейчас начнешь думать о смысле числа 69, то я тебе лицо сожру";
                msgObject.channel.send(message);
            }
            else {
                msgObject.channel.send(namber);
            }
        }
        sendThisShit(namber, msgObject);
    }
}
exports.default = random;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3JhbmRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHdDQUF3QztBQUV4QyxNQUFxQixNQUFNO0lBQTNCO1FBRXFCLGFBQVEsR0FBRyxRQUFRLENBQUE7SUErQ3hDLENBQUM7SUE3Q0csSUFBSTtRQUNBLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxLQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUM3QixPQUFPO2FBQ1Y7U0FDSjtRQUlELElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVoRSxTQUFTLFlBQVksQ0FBQyxNQUFjLEVBQUMsU0FBMEI7WUFDM0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDZixPQUFPLEdBQUcsMEZBQTBGLENBQUM7Z0JBQ3JHLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DO2lCQUFNLElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtnQkFDdkIsT0FBTyxHQUFHLDJGQUEyRixDQUFDO2dCQUN0RyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztpQkFBTSxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUU7Z0JBQ3JCLE9BQU8sR0FBRyx1RUFBdUUsQ0FBQztnQkFDbEYsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDO1FBRUQsWUFBWSxDQUFDLE1BQU0sRUFBQyxTQUFTLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBRUo7QUFqREQseUJBaURDIn0=