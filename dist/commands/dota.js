"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Configfile = require("../config");
class dota {
    constructor() {
        this._command = "dota";
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
        fs.readFile('./content/dota.txt', function (err, data) {
            if (err)
                throw err;
            let dotaArr = data.toString().split("\n");
            let random = Math.floor((Math.random() * dotaArr.length));
            let randomDota = dotaArr[random];
            msgObject.channel.send(randomDota);
        });
    }
}
exports.default = dota;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9kb3RhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEseUJBQXlCO0FBQ3pCLHdDQUF3QztBQUV4QyxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUE0QnRDLENBQUM7SUExQkcsSUFBSTtRQUNBLE9BQU8saUJBQWlCLENBQUM7SUFFN0IsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFckMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUd6RSxLQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzFDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUM3QixPQUFPO2FBQ1Y7U0FDSjtRQUVELEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxHQUFHLEVBQUUsSUFBSTtZQUNoRCxJQUFHLEdBQUc7Z0JBQUUsTUFBTSxHQUFHLENBQUM7WUFDbEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQzFELElBQUksVUFBVSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FFSjtBQTlCRCx1QkE4QkMifQ==