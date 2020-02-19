"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        sendChoice(choice, msgObject);
    }
}
exports.default = pick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9waWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUNxQixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBNkJ2QyxDQUFDO0lBM0JHLElBQUk7UUFDQSxPQUFPLGlCQUFpQixDQUFDO0lBRTdCLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRXJDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxPQUFPLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSw0QkFBNEIsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUE7UUFDN0UsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO1FBQzFCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUUzRCxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFFeEIsU0FBUyxVQUFVLENBQUMsTUFBYyxFQUFFLFNBQTBCO1lBQzFELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLE1BQU0sZUFBZSxDQUFDLENBQUE7WUFDbEQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsQ0FBQztRQUVELFVBQVUsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFbEMsQ0FBQztDQUNKO0FBOUJELHVCQThCQyJ9