TopHelper = require("../util/TopHelper");
var config = require('./../appconfig').Config,
    main = require('./main');
exports.index = function (req, res) {
    //console.log('授权回来了');
    var qstring = req.query;
    //console.log('qstring.top_appkey' + qstring.top_appkey);
    //return false;
    if (qstring.top_appkey) {
        //console.log(TopHelper.VerifyTopResponse(qstring.top_parameters, qstring.top_session, qstring.top_sign, config.AppKey, config.AppSecret));
        //return false;
        if (TopHelper.VerifyTopResponse(qstring.top_parameters, qstring.top_session, qstring.top_sign, config.AppKey, config.AppSecret)){
            //http://127.0.0.1:3000/success?top_appkey=21778962&top_parameters=ZXhwaXJlc19pbj04NjQwMCZpZnJhbWU9MSZyMV9leHBpcmVzX2luPTg2NDAwJnIyX2V4cGlyZXNfaW49ODY0MDAmcmVfZXhwaXJlc19pbj04NjQwMCZyZWZyZXNoX3Rva2VuPTYxMDIxMTZkYmM0OGIzY2VjM2QzMTRhZjEzYzQ0YzllNzRlYzgxZWJjY2Y0OTIyNzIxMjI5MDY1JnRzPTEzOTg3ODQyNDM2MTYmdmlzaXRvcl9pZD03MjEyMjkwNjUmdmlzaXRvcl9uaWNrPdT4vq2y17qj18%2FM7LSwJncxX2V4cGlyZXNfaW49ODY0MDAmdzJfZXhwaXJlc19pbj0xODAw&top_session=6100c16cb2abfebc9e614fd91f722e912688bfa61e58747721229065&agreement=true&agreementsign=21778962-23313070-721229065-18F261A9FFC2D532981E4BB65AB02A14&top_sign=H4PgBixQ%2FoMZC4QFTeQU2Q%3D%3D
            var nick = TopHelper.GetParameters(qstring.top_parameters,"visitor_nick"),
                expires_in = TopHelper.GetParameters(qstring.top_parameters,"expires_in"),
                refresh_token = TopHelper.GetParameters(qstring.top_parameters,"refresh_token"),
                ts = TopHelper.GetParameters(qstring.top_parameters,"ts"),
                visitor_id = TopHelper.GetParameters(qstring.top_parameters,"visitor_id");
                //w2_expires_i = TopHelper.GetParameters(qstring.top_parameters,"visitor_nick");
            console.log('nick:' + nick + '<br>');
            console.log('expires_in:' + expires_in + '<br>');
            console.log('refresh_token:' + refresh_token + '<br>');
            console.log('ts:' + ts + '<br>');
            console.log('visitor_id:' + visitor_id + '<br>');
            //console.log('w2_expires_i:' + w2_expires_i + '<br>');
            res.cookie(nick,qstring.top_session);
            res.cookie("client_session",qstring.top_session);
            //res.cookie("client_session", qstring.top_session, {path: '/', maxAge: 1000 * 60 * 60 * 24 * 30}); //cookie 有效期15天
            //console.log('client_session:' + req.cookies['client_session']);
            //return false;
            //res.send("验证成功");
            console.log('验证成功,接下来重定向到main');
            //console.log(main);
            //return false;
            //main.index();//跳转到控制器main的index方法
            //res.redirect("/main");
            res.render('main', {
                title: config.title,
                nick: nick,
            });
        }
        else{
            res.send("验证回调地址参数失败");
        }
    }
    else {
        res.send("登录验证失败");
    }


};