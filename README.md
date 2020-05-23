### nodejs 结合 wechaty 实现你的微信群聊机器人二(iPad 协议)

> 开源地址： [https://github.com/isnl/wechat-robot-ipad](https://github.com/isnl/wechat-robot-ipad)

#### 前言

前段时间写了篇关于使用 `nodejs` 结合 `wechaty` 这个库实现微信机器人的文章：

[https://juejin.im/post/5e70d68651882549391358e1](https://juejin.im/post/5e70d68651882549391358e1)

但是有很多小伙伴被 `web 协议` 的微信无法登陆所限制，不能体验开发 `机器人` 的乐趣。

于是便产生了这篇使用 `iPad` 协议的文章。

#### 来介绍下 wechaty

康康官网的 `Introduction`

> Wechaty 是一个开源的的 个人号 微信机器人接口，是一个使用 Typescript 构建的 Node.js 应用。支持多种微信接入方案，包括网页，ipad，ios，windows， android 等。同时支持 Linux, Windows, Darwin(OSX/Mac) 和 Docker 多个平台。

更多功能包括：

- 消息处理：关键词回复
- 群管理：自动入群，拉人，踢人
- 自动处理好友请求
- 智能对话：通过简单配置，即可加入智能对话系统，完成指定任务  
  ... 请自行开脑洞

据说是只需要 6 行代码，就可以 通过 `wechaty` 搭建一个微信机器人功能 ，用来自动管理微信消息。

在上一篇文章中，我们使用的是 `web协议` ，而大部分小伙伴的微信 `web端`是无法登陆的，验证是否被 `web协议` 限制登陆可打开 [https://wx.qq.com](https://wx.qq.com) 扫码查看。

不能登录 web 版微信，难道就不能用了吗！？？

答案是否定的！ `wechaty` 官方除了 web 协议，还开发了基于 `iPad` 、 `ios`等协议。

But ！！！

非 `web版协议` 是收费的！

怎么收费呢？说是俩百块钱一个月，会给你发放有效期为一个月的 Token，完了你可以用这个 Token 愉快的使用 `非web版协议` 去构建你的机器人。

那有人就说了，你说了半天等于放屁。

我全身上下就一个字。

![2020523222319](https://static.iiter.cn/article/2020523222319.png)

一个月两百块钱我用来干啥事不行？买个排骨吃它不香吗？

别急，且听老夫慢慢说来。

排骨得吃，机器人也能写。

### 如何获取免费 Token

官方文档中提供了免费 token 的获取方式。
[https://github.com/juzibot/Welcome/wiki/Support-Developers](https://github.com/juzibot/Welcome/wiki/Support-Developers)

人家是酱紫说的：

> We provide a free access using iPad protocol for the developers who have a strong will and ability to build a valuable chatbot for users.

大概意思是：我们可以为了有强烈意愿和能力为 `用户` 构建 `有价值` 的聊天机器人的`开发人员`提供免费使用 `iPad` 协议的权限

看到没得，这就是我们身为程序员为`用户`争来的权力。

![2020523222739](https://static.iiter.cn/article/2020523222739.png)

> Any developers can add JuziBOT Inc's staff ( Wechat number : botorange_yeah ) as a Wechat friend. You will receive a review form after adding. If you pass the review and willing to write a blog in Wechaty , you can use our iPad protocol for free！

人家害说了，让你添加 `botorange_yeah` 为微信好友，填写个审查表，就会给你免费发放 `15` 天的 Token。

15 天后，需要提交一个 MVP（最小可行化产品）的 github 仓库，他们会 fork 到 wechaty 社区中，并为您提供长期免费的 Token。

![2020523223827](https://static.iiter.cn/article/2020523223827.png)

完事之后就加好友，获取 Token。

克隆仓库代码 [https://github.com/isnl/wechat-robot-ipad](https://github.com/isnl/wechat-robot-ipad)

安装依赖必须的吧？

```bash
npm install
```

听我的，`npm` 装不上咱就换 `cnpm` 好吗？

隔壁王大妈说说点个 `star` ，依赖会装的贼快。

### 目录结构

- `config`文件夹存放公共配置文件以及`superagent`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列事件处理(分模块)
  - `on-friendship.js` 处理好友请求
  - `on-login.js` 处理登录
  - `on-message.js` 处理用户消息、群消息
  - `on-scan.js` 处理登录二维码
- `schedule` 对定时任务`node-schedule`库进行了封装
- `superagent` 存放所有的数据请求、接口封装都在此
- `utils` 公用方法的封装
- `app.js` 入口文件

### 如何使用

1. 修改`config`配置
   打开`config/index.js` 文件，将里面的配置改为自己的。
2. 修改天行接口配置
   天行 api 官网 ：[https://tianapi.com/](https://tianapi.com/)  
    注册成功后，申请以下接口：

   - [每日英语一句话](https://www.tianapi.com/apiview/62)
   - [神回复](https://www.tianapi.com/apiview/39)

   注册后请打开`superagent/index.js`，将顶部`APIKEY`改为自己天行 api 的`key`即可

其他免费接口可随意申请，不想用天行的接口可以删掉对应的关键字。

emmm...

然后就可以运行了

```bash
npm start
```

终端会出现一个二维码，扫码登录即可。

![https://static.iiter.cn/article/c41650f846d4f3d7fab82bc91f1b8f36.gif](https://static.iiter.cn/article/c41650f846d4f3d7fab82bc91f1b8f36.gif)

### 已实现功能

- [x] 发送加群关键字，自动拉人进群。
- [x] 毒鸡汤
- [x] 神回复
- [x] 英语一句话
- [x] 大小写转换
- [x] rgb 与 16 进制颜色互转
- [x] 天气查询
- [x] 新冠肺炎各省市实时数据
- [x] 发送关键字，踢人

列几个有趣的功能，可以去参考着实现：

- [ ] 快递查询
- [ ] 随机一张妹子图
- [ ] 每天早上 9 点发送实时热搜新闻至指定群 / 指定微信
- [ ] 群聊邀请统计功能(商业)
- [ ] 采集京东联盟优惠券群消息，转链后发送到自己推广的群(商业)  
       ......

1. 看到这里啦，点个 `赞` 支持一下吧。
2. 关注公众号 `前端糖果屋` 互相学习鸭。
3. 添加小助手微信 `uumovies` ，拉你进 `技术交流群` 探讨人生。
   ![公众号](https://static.iiter.cn/mp_footer_new.png)
