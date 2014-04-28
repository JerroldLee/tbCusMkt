/**
 *
 * @type {Object}
 */
exports.Config={
    /**
     * IsSandBox 1=沙箱开启 0=非沙箱(正式环境)
     */
    SanBox:1,
    /**
     * AppKey
     */
    AppKey:"21778962",
    /**
     * AppSecret
     */
    AppSecret:"4542b85f8e362200d5c81d6a0b38286d",

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
