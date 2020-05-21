/*
 * @Author: Peanut
 * @Description:  实例化 - 入口文件
 * @Date: 2020-05-19 21:55:04
 * @Last Modified by: Peanut
 * @Last Modified time: 2020-05-21 22:36:22
 */
const { Wechaty } = require("wechaty");
const { PuppetPadplus } = require("wechaty-puppet-padplus");
const puppet = new PuppetPadplus({
  token: "puppet_padplus_9b52b76787196f50"
});
const bot = new Wechaty({
  puppet,
  name: "WeChat-Robot"
});
bot.on("login", "./listeners/on-login.js");
bot.on("message", "./listeners/on-message");
bot.on("scan", "./listeners/on-scan");
bot.on("friendship", "./listeners/on-friendship");
bot.on("room-join", "./listeners/on-room-join");
bot.on("room-leave", "./listeners/on-room-leave");
bot
  .start()
  .then(() => console.log("开始登陆微信"))
  .catch(e => console.error(e));
module.exports = bot;
