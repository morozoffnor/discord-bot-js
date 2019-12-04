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
        console.log("generationg number in range from 0 to" + namber);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL3JhbmRvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHdDQUF3QztBQUV4QyxNQUFxQixNQUFNO0lBQTNCO1FBRXFCLGFBQVEsR0FBRyxRQUFRLENBQUE7SUFnRHhDLENBQUM7SUE5Q0csSUFBSTtRQUNBLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxLQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUM3QixPQUFPO2FBQ1Y7U0FDSjtRQUlELElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFbEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzlCLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFFbEMsU0FBUyxZQUFZLENBQUMsTUFBYyxFQUFDLFNBQTBCO1lBQzNELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztZQUNqQixJQUFJLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQ2YsT0FBTyxHQUFHLDBGQUEwRixDQUFDO2dCQUNyRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztpQkFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRywyRkFBMkYsQ0FBQztnQkFDdEcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkM7aUJBQU0sSUFBSSxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUNyQixPQUFPLEdBQUcsdUVBQXVFLENBQUM7Z0JBQ2xGLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ25DO2lCQUFNO2dCQUNILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztRQUVELFlBQVksQ0FBQyxNQUFNLEVBQUMsU0FBUyxDQUFDLENBQUM7SUFDbkMsQ0FBQztDQUVKO0FBbERELHlCQWtEQyJ9