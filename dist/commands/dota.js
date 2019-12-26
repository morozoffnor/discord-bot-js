"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const Configfile = require("../config");
class dota {
    constructor() {
        this._command = 'dota';
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
        fs.readFile('./content/dota.txt', function (err, data) {
            if (err)
                throw err;
            let dotaArr = data.toString().split('\n');
            let random = Math.floor(Math.random() * dotaArr.length);
            let randomDota = dotaArr[random];
            msgObject.channel.send(randomDota);
        });
    }
}
exports.default = dota;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG90YS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9kb3RhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEseUJBQXlCO0FBQ3pCLHdDQUF3QztBQUV4QyxNQUFxQixJQUFJO0lBQXpCO1FBQ2tCLGFBQVEsR0FBRyxNQUFNLENBQUM7SUEwQnBDLENBQUM7SUF4QkEsSUFBSTtRQUNILE9BQU8saUJBQWlCLENBQUM7SUFFMUIsQ0FBQztJQUNELGFBQWEsQ0FBQyxPQUFlO1FBQzVCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFFbEMsQ0FBQztJQUNELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUU1RSxLQUFLLElBQUksR0FBRyxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzdDLElBQUksU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksR0FBRyxFQUFFO2dCQUNoQyxPQUFPO2FBQ1A7U0FDRDtRQUVELEVBQUUsQ0FBQyxRQUFRLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxHQUFHLEVBQUUsSUFBSTtZQUNuRCxJQUFJLEdBQUc7Z0JBQUUsTUFBTSxHQUFHLENBQUM7WUFDbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNEO0FBM0JELHVCQTJCQyJ9