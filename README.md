> 开源地址：[https://github.com/isnl/wechat-robot](https://github.com/isnl/wechat-robot)

**注：** 从2017年6月下旬开始，使用基于web版微信接入方案存在大概率的被限制登陆的可能性。 主要表现为：无法登陆Web 微信，但不影响手机等其他平台。 验证是否被限制登陆： [https://wx.qq.com](https://wx.qq.com) 上扫码查看是否能登陆。 更多内容详见：

[Can not login with error message: 当前登录环境异常。为了你的帐号安全，暂时不能登录web微信。](https://github.com/Chatie/wechaty/issues/603)  

**网页版不能登录就不用往下看啦，此库用的是网页版的协议。**

### 克隆代码
```bash
git clone git@github.com:isnl/wechat-robot.git
```
### 目录结构
- `config`存放公共配置以及`superagent`请求相关配置
- `imgs`存放相关图片
- `listeners`存放机器人初始化后一系列callback
  - `on-friendship.js` 处理好友请求
  - `on-login.js` 处理登录
  - `on-message.js` 处理用户消息、群消息
  - `on-scan.js` 处理登录二维码
- `schedule` 对`node-schedule`进行了封装
- `superagent` 存放所有的数据请求、接口封装都在此
- `utils` 公用方法的封装
- `app.js` 入口文件

### 主要依赖
- [wechaty](https://github.com/wechaty/wechaty) 个人微信账号的微信机器人 SDK
- [superagent](https://github.com/visionmedia/superagent)  数据请求
- [cheerio](https://github.com/cheeriojs/cheerio)  nodejs版jQuery，用于抓取页面内容
- [node-schedule](https://github.com/node-schedule/node-schedule) 一个在nodejs中设置定时任务的库
- [qrcode-terminal](https://github.com/gtanner/qrcode-terminal) 在控制台打印二维码
### 安装依赖
依赖中需要安装`chromium`，使用npm会下载失败或者很慢，国内嘛你懂得  

**强烈推荐** 使用`cnpm`安装依赖  
```bash
cnpm install  //npm install
```
实在不想用cnpm可以将npm源切换成淘宝源
```bash
npm config set registry https://registry.npm.taobao.org
npm config set disturl https://npm.taobao.org/dist
npm config set puppeteer_download_host https://npm.taobao.org/mirrors
```

### 修改`config`配置
打开`config/index.js` 文件，将里面的配置改为自己的。

### 修改天行接口配置
天行api官网 ：[https://tianapi.com/](https://tianapi.com/)  
注册成功后，申请以下接口：  
- [每日英语一句话](https://www.tianapi.com/apiview/62)
- [神回复](https://www.tianapi.com/apiview/39)  

注册后请打开`superagent/index.js`，将顶部`APIKEY`改为自己天行api的`key`即可

其他免费接口可随意申请，自行扩展~

### 运行测试
```bash
cnpm start //npm start
```



此项目基于 [https://github.com/gengchen528/wechatBot](https://github.com/gengchen528/wechatBot) 衍生而来。

### 较此工程有以下几个功能：  
- 热更新，修改代码后免重启，便于在线调试。
- 新增全国肺炎、各省市肺炎数据，按关键字回复即可。
- 添加好友自动同意请求
- 添加转大小写、颜色的rgb与base64互转等小工具。
- 每日毒鸡汤、神回复、英语一句话、实时毒鸡汤。
- 发送加群命令邀请好友进群。
- ~~采集京东联盟高佣商品，京粉转链后发送至指定群。~~
- ~~按指令获取百度云文件，分享给用户下载链接及提取码。~~

![演示图片](https://ae01.alicdn.com/kf/U94ce57f9e7604d5bab549d4a6484d970T.gif)

底层api都是基于 [wechaty](https://github.com/wechaty/wechaty)  

更多微信消息、群消息、好友、对话等相关api可查阅官方文档 [wechaty官方文档](https://github.com/wechaty/wechaty/blob/master/docs/index.md)  

有问题提issues  或者添加机器人微信，发送 **交流群** 即可拉你进群
![机器人微信二维码](https://static.iiter.cn/robot-qrcode.jpg)
