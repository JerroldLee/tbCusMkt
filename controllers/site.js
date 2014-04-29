var User = require('../proxy').User,
    Topic = require('../proxy').Topic,
    config = require('../config').config,
    EventProxy = require('eventproxy'),
    appconfig = require('../appconfig').Config,
    appkey = appconfig.AppKey,
    appsecret = appconfig.AppSecret,
    SignTaobao = require("../util/sign").SignTaobao;

exports.index = function (req, res) {
    res.redirect(appconfig.ContainerUrl());
};

