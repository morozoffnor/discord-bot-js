"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const Configfile = require("../config");
const GphApiClient = require('giphy-js-sdk-core');
const http = require('http');
const express = require('express');
const app = express();
class gif {
    constructor() {
        this._command = "gif";
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
        var giphy = require('giphy-api')('t99aoKqUEvmafLWkqBD9zb04BlNiWXPJ');
        giphy.search(args).then(function (res) {
            msgObject.channel.send(res.url);
        });
    }
}
exports.default = gif;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lmLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2dpZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHdDQUF3QztBQUN4QyxNQUFNLFlBQVksR0FBSSxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuRCxNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDN0IsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ25DLE1BQU0sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO0FBRXRCLE1BQXFCLEdBQUc7SUFBeEI7UUFFcUIsYUFBUSxHQUFHLEtBQUssQ0FBQTtJQTJCckMsQ0FBQztJQXhCRyxJQUFJO1FBQ0EsT0FBTyxpQkFBaUIsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQWU7UUFDekIsT0FBTyxPQUFPLEtBQUssSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUVyQyxDQUFDO0lBRUQsVUFBVSxDQUFDLElBQWMsRUFBRSxTQUEwQixFQUFFLE1BQXNCO1FBRXpFLEtBQUssSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDMUMsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUU7Z0JBQzdCLE9BQU87YUFDVjtTQUNKO1FBRUQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDckUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2pDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FHSjtBQTdCRCxzQkE2QkMifQ==