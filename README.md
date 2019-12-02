<<<<<<< HEAD
# Simple Discord bot

This bot was created solely for fun and should not be shown to anyone at all.

## Setup
I didn't like all the other ways to set up Discord bots, so I decided to do it for myself first and put it all together. So, the config looks extremely simple:

```
export let config = {
    "token": "your token here",
    "prefix": "!",
    "commands": [
        "dota",
        "ti",
        "gif",
        "random",
    ],
    "restricted": [
        "/midi/", 
    ]
}
```
`token` — your Discord app token;

`prefix` — the symbol that triggers the execution of the command;

`commands` — the list of commands which the bot will execute. Can be edited to enable/disable commands;

`restricted` — the list of **names** of the servers on which you cannot use the command.

## Commands
New commands can be added by creating a file in the `Commands` folder. A little explanation on the example of `testCommand`:
 
```
help(): string {
        return "This is nothing";
       
    }
```
`help()` will be used later to output help for a specific command.

```
isThisCommand(command: string): boolean {
        return command === this._command;
        
    }
```
Checks if there is such a command.

```
runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("Обработчик команд заработал и я крутой");
        
    } 
```
Inside the `runCommand` is the code that needs to be executed after receiving the command.

# Простой Дискорд бот

Этот бот был написан исключительно для веселья и не должен вообще показываться кому-либо.

## Настройка
Мне не нравились все другие способы настройки Дискорд ботов, поэтому я решил сделать удобно прежде всего для себя и собрать всё вместе. Итак, конфиг выглядит крайне просто:

```
export let config = {
    "token": "your token here",
    "prefix": "!",
    "commands": [
        "dota",
        "ti",
        "gif",
        "random",
    ],
    "restricted": [
        "/midi/", 
    ]
}
```
`token` — ваш токен с сайта дискорда;

`prefix` — символ, идущий перед командой, который триггерит исполнение команды;

`commands` — список команд, на которые бот будет реагировать. Можно редактировать, чтобы подключать/отключать команды;

`restricted` — список **названий** серверов, на которых нельзя использовать команды.

## Команды
Новые команды можно добавлять путём создания файла в папке `Commands`. Небольшое пояснение на примере `testCommand`:

```
help(): string {
        return "This is nothing";
       
    }
```
`help()` будет использоваться в позже для того, чтобы выводить помощь по конкретной команде.

```
isThisCommand(command: string): boolean {
        return command === this._command;
        
    }
```
Проверяет есть ли такая команда.

```
runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("Обработчик команд заработал и я крутой");
        
    } 
```
Внутри `runCommand` находится код, который нужно выполнить после получения команды.
=======
# Simple Discord bot

This bot was created solely for fun and should not be shown to anyone at all.

## Setup
I didn't like all the other ways to set up Discord bots, so I decided to do it for myself first and put it all together. So, the config looks extremely simple:

```
export let config = {
    "token": "your token here",
    "prefix": "!",
    "commands": [
        "dota",
        "ti",
        "gif",
        "random",
    ],
    "restricted": [
        "/midi/", 
    ]
}
```
`token` — your Discord app token;

`prefix` — the symbol that triggers the execution of the command;

`commands` — the list of commands which the bot will execute. Can be edited to enable/disable commands;

`restricted` — the list of **names** of the servers on which you cannot use the command.

## Commands
New commands can be added by creating a file in the `Commands` folder. A little explanation on the example of `testCommand`:
 
```
help(): string {
        return "This is nothing";
       
    }
```
`help()` will be used later to output help for a specific command.

```
isThisCommand(command: string): boolean {
        return command === this._command;
        
    }
```
Checks if there is such a command.

```
runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("Обработчик команд заработал и я крутой");
        
    } 
```
Inside the `runCommand` is the code that needs to be executed after receiving the command.

# Простой Дискорд бот

Этот бот был написан исключительно для веселья и не должен вообще показываться кому-либо.

## Настройка
Мне не нравились все другие способы настройки Дискорд ботов, поэтому я решил сделать удобно прежде всего для себя и собрать всё вместе. Итак, конфиг выглядит крайне просто:

```
export let config = {
    "token": "your token here",
    "prefix": "!",
    "commands": [
        "dota",
        "ti",
        "gif",
        "random",
    ],
    "restricted": [
        "/midi/", 
    ]
}
```
`token` — ваш токен с сайта дискорда,

`prefix` — символ, идущий перед командой, который триггерит исполнение команды,

`commands` — список команд, на которые бот будет реагировать. Можно редактировать, чтобы подключать/отключать команды.

`restricted` — список **названий** серверов, на которых нельзя использовать команды.

## Команды
Новые команды можно добавлять путём создания файла в папке `Commands`. Небольшое пояснение на примере `testCommand`:

```
help(): string {
        return "This is nothing";
       
    }
```
`help()` будет использоваться в позже для того, чтобы выводить помощь по конкретной команде.

```
isThisCommand(command: string): boolean {
        return command === this._command;
        
    }
```
Проверяет есть ли такая команда.

```
runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        msgObject.channel.send("Обработчик команд заработал и я крутой");
        
    } 
```
Внутри `runCommand` находится код, который нужно выполнить после получения команды.
>>>>>>> parent of ba05022... вуыскшзешщт
