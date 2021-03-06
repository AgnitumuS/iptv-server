const router = require('koa-router')();
var log4js = require('log4js');
const AES = require("../AES");

var logger = log4js.getLogger();
logger.level = 'debug';

router.post('/', async function (ctx, next) {
    logger.debug(ctx.request);

    let obj = {
        "status": 999,
        "dataurl": "http://"+ctx.request.header.host+"/data.php",
        "appurl": "http://127.0.0.1/1.apk",
        "dataver": "2",
        "appver": "1.0",
        "setver": "1",
        "adtext": "",
        "showinterval": "5",
        "categoryCount": 0,
        "exp": -1005,
        "ip": "192.168.50.8",
        "showtime": "120",
        "id": "49729",
        "decoder": "1",
        "buffTimeOut": "30",
        "tipusernoreg": "该设备无授权，请联系你的代理续费.",
        "tiploading": "正在连接，请稍后 ...",
        "tipuserforbidden": "当前账号49729，账号已禁用，请联系你的代理续费.",
        "tipuserexpired": "当前账号49729，账号已到期，请联系你的代理续费。",
        "qqinfo": "欢迎使用IPTV高清播放系统",
        "arrsrc": null,
        "location": "本地，内网",
        "nettype": "内网",
        "autoupdate": "1",
        "updateinterval": "10",
        "randkey": "827ccb0eea8a706c4c34a16891f84e7b",
        "exps": "1500595200",
        "stus": -999
    };

    let aesc = new AES("5f16159491a3f70d");
    let res = aesc.encrypt(JSON.stringify(obj));

    ctx.body = res;
    return true;
    // ctx.body = 'demo'
});

module.exports = router;
