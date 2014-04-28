/**
 *
 * @type {Object}
 */
exports.Config={
    /**
     * IsSandBox 1=沙箱开启 0=非沙箱(正式环境)
     */
    SanBox:0,
    /**
     * AppKey
     */
    //AppKey:"1021778962",//沙箱测试
    AppKey:"21778962",//正式环境
    /**
     * AppSecret
     */
    //AppSecret:"sandboxf8e362200d5c81d6a0b38286d",//沙箱测试
    AppSecret:"4542b85f8e362200d5c81d6a0b38286d",//正式环境

    ContainerUrl:function(){
       if(this.SanBox===0)
           return "http://container.open.taobao.com/container?appkey="+this.AppKey;
        else
           return "http://container.api.tbsandbox.com/container?appkey="+this.AppKey ;
    },
    /**
     * 请求环境URL ，默认为沙箱环境地址
     * @return {*}
     * @constructor
     */
     RestUrl:function(){
         if(this.SanBox===0)
             return "http://gw.api.taobao.com/router/rest";
         else
             return "http://gw.api.tbsandbox.com/router/rest";
     }



};
