/*
 * @Author: Peanut
 * @Description:  实例化 - 入口文件
 * @Date: 2020-05-19 21:55:04
 * @Last Modified by: Peanut
 * @Last Modified time: 2021-04-19 22:09:09
 */
const { Wechaty } = require("wechaty");
const name = "wechat-puppet-wechat";

const onScan = require("./listeners/on-scan.js");
const onLogin = require("./listeners/on-login.js");
const onMessage = require("./listeners/on-message.js");
const onFriendship = require("./listeners/on-friendship.js");

const bot = new Wechaty({
  name
});

bot.on("login", async user => {
  onLogin(user, bot);
});
bot.on("message", async msg => {
  onMessage(msg, bot);
});
bot.on("scan", async (qrcode, status) => {
  onScan(qrcode, status);
});
bot.on("friendship", async friendship => {
  onFriendship(friendship);
});
bot
  .start()
  .then(() => console.log("开始登陆微信"))
  .catch(e => console.error(e));
