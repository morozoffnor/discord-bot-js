"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Configfile = require("../config");
class random {
    constructor() {
        this._command = 'roll';
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
        let stringNumber = msgObject.content.split(' ').slice(1);
        let number = Number(stringNumber);
        let min = Math.ceil(1);
        let maxi = Math.floor(number);
        let namber = Math.floor(Math.random() * (maxi - min + 1)) + min;
        console.log('generating number');
        function sendThisShit(namber, msgObject) {
            let message = '';
            if (namber == 228) {
                message = 'Ух, а ты удачливый сегодня! Ничего запрещенного с собой не носим? Твоя статья номер 228!';
                msgObject.channel.send(message);
            }
            else if (namber == 1337) {
                message = 'Я не верю, что это когда-нибудь выпадет, так что даже не буду придумывать что-то для 1337';
                msgObject.channel.send(message);
            }
            else if (namber == 69) {
                message = 'Если ты сейчас начнешь думать о смысле числа 69, то я тебе лицо сожру';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9yb2xsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0Esd0NBQXdDO0FBRXhDLE1BQXFCLE1BQU07SUFBM0I7UUFDa0IsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQTZDcEMsQ0FBQztJQTNDQSxJQUFJO1FBQ0gsT0FBTyxpQkFBaUIsQ0FBQztJQUUxQixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDNUIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVsQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRTVFLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDN0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQ2hDLE9BQU87YUFDUDtTQUNEO1FBR0QsSUFBSSxZQUFZLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVsQyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUIsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ2hFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUVqQyxTQUFTLFlBQVksQ0FBQyxNQUFjLEVBQUUsU0FBMEI7WUFDL0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsT0FBTyxHQUFHLDBGQUEwRixDQUFDO2dCQUNyRyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQztpQkFBTSxJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQzFCLE9BQU8sR0FBRywyRkFBMkYsQ0FBQztnQkFDdEcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDaEM7aUJBQU0sSUFBSSxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUN4QixPQUFPLEdBQUcsdUVBQXVFLENBQUM7Z0JBQ2xGLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hDO2lCQUFNO2dCQUNOLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQy9CO1FBQ0YsQ0FBQztRQUVELFlBQVksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDakMsQ0FBQztDQUNEO0FBOUNELHlCQThDQyJ9