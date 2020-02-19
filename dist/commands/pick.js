"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class pick {
    constructor() {
        this._command = 'pick';
    }
    help() {
        return 'This is nothing';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let choices = msgObject.content.split(' ').slice(1);
        console.log(`${msgObject.author} wants me to choose from ${choices.length}!`);
        let min = Math.ceil(0);
        let maxi = Math.floor(choices.length);
        console.log('choosing...');
        let i = Math.floor(Math.random() * (maxi - min + 1)) + min;
        let choice = choices[i];
        function sendChoice(choice, msgObject) {
            console.log(`I've chosen '${choice}'! Sending...`);
            msgObject.channel.send(choice);
        }
        if (choices.length < 1) {
            fs.readFile('content/pidor.txt', function (err, data) {
                if (err)
                    throw err;
                let tiArr = data.toString().split('\n');
                let random = Math.floor(Math.random() * tiArr.length);
                let randomPidor = tiArr[random];
                msgObject.channel.send('Мне не из чего выбирать, ' + randomPidor);
            });
        }
        else if (choices.length == 1) {
            fs.readFile('content/pidor.txt', function (err, data) {
                if (err)
                    throw err;
                let tiArr = data.toString().split('\n');
                let random = Math.floor(Math.random() * tiArr.length);
                let randomPidor = tiArr[random];
                msgObject.channel.send('Я вижу тут только один вариант. И как ты думаешь, что я выберу, ' + randomPidor + '?');
            });
        }
        else {
            sendChoice(choice, msgObject);
        }
    }
}
exports.default = pick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEseUJBQXlCO0FBRXpCLE1BQXFCLElBQUk7SUFBekI7UUFDcUIsYUFBUSxHQUFHLE1BQU0sQ0FBQztJQW1EdkMsQ0FBQztJQWpERyxJQUFJO1FBQ0EsT0FBTyxpQkFBaUIsQ0FBQztJQUU3QixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLElBQUksT0FBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sNEJBQTRCLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQzdFLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFM0QsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhCLFNBQVMsVUFBVSxDQUFDLE1BQWMsRUFBRSxTQUEwQjtZQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixNQUFNLGVBQWUsQ0FBQyxDQUFBO1lBQ2xELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFLRCxJQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3BCLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSTtnQkFDaEQsSUFBSSxHQUFHO29CQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsV0FBVyxDQUFDLENBQUE7WUFDckUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNLElBQUksT0FBTyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDNUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJO2dCQUNoRCxJQUFJLEdBQUc7b0JBQUUsTUFBTSxHQUFHLENBQUM7Z0JBQ25CLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDdEQsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNoQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxrRUFBa0UsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDbEgsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsVUFBVSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNqQztJQUdMLENBQUM7Q0FDSjtBQXBERCx1QkFvREMifQ==