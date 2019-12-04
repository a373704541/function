class CountDown{
    // 配置参数
    private config:any = {
      
        mode:'时分秒',  // 模式 有两个 时分秒 天时分秒
        startTime:'', // 开始时间对象
        endTime:'', // 结束时间对象
    }
    constructor(param:any){
        if(param){
            for(let name in this.config){
                this.config[name] = param[name] || this.config[name]
            }  
        }
        
        let check = <Boolean>this._countDowncheck()
        if(check){
            return this.getTime()
        }
    }
    public getTime():any {
        if(this.config.mode == '时分秒'){
            let s1 = this.config.startTime.getTime(),
            s2 = this.config.endTime.getTime();
            let total = (s2 - s1) / 1000;
            let day = (total / (24 * 60 * 60)) >> 0; //计算整数天数
            let afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
            let hour = (afterDay / (60 * 60)) >> 0; //计算整数小时数
            let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
            let min = (afterHour / 60) >> 0; //计算整数分
            let afterMin = (total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) >> 0 ; //取得算出分后剩余的秒数
            // 对小时进行处理
            hour = hour + day * 24;
            return {
                hour:hour,
                min:min,
                second:afterMin
            }
        }else if(this.config.mode="天时分秒") {
            let s1 = this.config.startTime.getTime(),
            s2 = this.config.endTime.getTime();
            let total = (s2 - s1) / 1000;
            let day = (total / (24 * 60 * 60)) >> 0; //计算整数天数
            let afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
            let hour = (afterDay / (60 * 60)) >> 0; //计算整数小时数
            let afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
            let min = (afterHour / 60) >> 0; //计算整数分
            let afterMin = (total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) >> 0 ; //取得算出分后剩余的秒数
            return {
                day:day,
                hour:hour,
                min:min,
                second:afterMin
            }
        }
    } 
     // 验证参数
    private _countDowncheck():Boolean {
        let countDownError:Array<string> = [] 
        if(!this.config.startTime){
            countDownError.push('缺少开始时间对象 需要newDate ')
        }
        if(!this.config.endTime){
            countDownError.push('缺少结束时间对象 需要newDate ')
        }
        if(countDownError.length){
            console.error(countDownError)
            return false
        }
        // console.log(this.config)
        return true
    }
}