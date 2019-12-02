"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Configfile = require("../config");
class ti {
    constructor() {
        this._command = "ti";
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
        fs.readFile('content/pidor.txt', function (err, data) {
            if (err)
                throw err;
            let tiArr = data.toString().split("\n");
            let random = Math.floor((Math.random() * tiArr.length));
            let randomTi = tiArr[random];
            msgObject.channel.send(randomTi);
        });
    }
}
exports.default = ti;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvdGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5QkFBeUI7QUFDekIsd0NBQXdDO0FBRXhDLE1BQXFCLEVBQUU7SUFBdkI7UUFFcUIsYUFBUSxHQUFHLElBQUksQ0FBQTtJQTRCcEMsQ0FBQztJQTFCRyxJQUFJO1FBQ0EsT0FBTyxpQkFBaUIsQ0FBQztJQUU3QixDQUFDO0lBQ0QsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVyQyxDQUFDO0lBQ0QsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBR3pFLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDMUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQzdCLE9BQU87YUFDVjtTQUNKO1FBRUQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxtQkFBbUIsRUFBRSxVQUFTLEdBQUcsRUFBRSxJQUFJO1lBQy9DLElBQUcsR0FBRztnQkFBRSxNQUFNLEdBQUcsQ0FBQztZQUNsQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7WUFDeEQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzdCLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztDQUVKO0FBOUJELHFCQThCQyJ9