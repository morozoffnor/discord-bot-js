"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
class ask {
    constructor() {
        this._command = 'ask';
    }
    help() {
        return 'This is nothing';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let answer = 0;
        answer = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        if (answer == 0) {
            fs.readFile('content/pidor.txt', function (err, data) {
                if (err)
                    throw err;
                let tiArr = data.toString().split('\n');
                let random = Math.floor(Math.random() * tiArr.length);
                let randomPidor = tiArr[random];
                msgObject.channel.send('Ну и как я должен тебе ответить, ' + randomPidor + '?');
            });
        }
        else if (answer == 1) {
            msgObject.channel.send('YES');
        }
        else {
            msgObject.channel.send('NO');
        }
    }
}
exports.default = ask;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbW1hbmRzL2Fzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlCQUF5QjtBQUV6QixNQUFxQixHQUFHO0lBQXhCO1FBQ3FCLGFBQVEsR0FBRyxLQUFLLENBQUM7SUE4QnRDLENBQUM7SUE1QkcsSUFBSTtRQUNBLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDZixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXJELElBQUksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNiLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsVUFBVSxHQUFHLEVBQUUsSUFBSTtnQkFDaEQsSUFBSSxHQUFHO29CQUFFLE1BQU0sR0FBRyxDQUFDO2dCQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RELElBQUksV0FBVyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUNBQW1DLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1lBQ25GLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFJLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDcEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDaEM7YUFBTTtZQUNILFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQy9CO0lBRUwsQ0FBQztDQUNKO0FBL0JELHNCQStCQyJ9