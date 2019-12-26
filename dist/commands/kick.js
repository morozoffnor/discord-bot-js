"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class kick {
    constructor() {
        this._command = 'kick';
    }
    help() {
        return 'Kicks the mentioned user';
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        let mentionedUser = msgObject.mentions.users.first();
        let reason = args.slice(1).join(' ') || '';
        let kicklog = `${msgObject.author.username}: ${reason}`;
        msgObject.delete(0);
        if (!msgObject.member.hasPermission('ADMINISTRATOR')) {
            msgObject.channel.send(`Noice try, ${msgObject.author.username}, но у тебя нет прав на это дерьмо!`);
            return;
        }
        if (!mentionedUser) {
            msgObject.channel.send(`Сорян, ${msgObject.author.username}, я не нашел такого пользователя.`);
            return;
        }
        msgObject.guild.member(mentionedUser).kick(kicklog).then(console.log).catch(console.error);
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUNrQixhQUFRLEdBQUcsTUFBTSxDQUFDO0lBOEJwQyxDQUFDO0lBNUJBLElBQUk7UUFDSCxPQUFPLDBCQUEwQixDQUFDO0lBRW5DLENBQUM7SUFDRCxhQUFhLENBQUMsT0FBZTtRQUM1QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBRWxDLENBQUM7SUFDRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDNUUsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFFckQsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQzNDLElBQUksT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFLENBQUM7UUFFeEQsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVwQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDckQsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEscUNBQXFDLENBQUMsQ0FBQztZQUNyRyxPQUFPO1NBQ1A7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ25CLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLG1DQUFtQyxDQUFDLENBQUM7WUFDL0YsT0FBTztTQUNQO1FBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1RixDQUFDO0NBQ0Q7QUEvQkQsdUJBK0JDIn0=