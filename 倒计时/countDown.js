"use strict";
var CountDown = /** @class */ (function () {
    function CountDown(param) {
        // 配置参数
        this.config = {
            mode: '时分秒',
            startTime: '',
            endTime: '',
        };
        if (param) {
            for (var name_1 in this.config) {
                this.config[name_1] = param[name_1] || this.config[name_1];
            }
        }
        var check = this._countDowncheck();
        if (check) {
            return this.getTime();
        }
    }
    CountDown.prototype.getTime = function () {
        if (this.config.mode == '时分秒') {
            var s1 = this.config.startTime.getTime(), s2 = this.config.endTime.getTime();
            var total = (s2 - s1) / 1000;
            var day = (total / (24 * 60 * 60)) >> 0; //计算整数天数
            var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
            var hour = (afterDay / (60 * 60)) >> 0; //计算整数小时数
            var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
            var min = (afterHour / 60) >> 0; //计算整数分
            var afterMin = (total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) >> 0; //取得算出分后剩余的秒数
            // 对小时进行处理
            hour = hour + day * 24;
            return {
                hour: hour,
                min: min,
                second: afterMin
            };
        }
        else if (this.config.mode = "天时分秒") {
            var s1 = this.config.startTime.getTime(), s2 = this.config.endTime.getTime();
            var total = (s2 - s1) / 1000;
            var day = (total / (24 * 60 * 60)) >> 0; //计算整数天数
            var afterDay = total - day * 24 * 60 * 60; //取得算出天数后剩余的秒数
            var hour = (afterDay / (60 * 60)) >> 0; //计算整数小时数
            var afterHour = total - day * 24 * 60 * 60 - hour * 60 * 60; //取得算出小时数后剩余的秒数
            var min = (afterHour / 60) >> 0; //计算整数分
            var afterMin = (total - day * 24 * 60 * 60 - hour * 60 * 60 - min * 60) >> 0; //取得算出分后剩余的秒数
            return {
                day: day,
                hour: hour,
                min: min,
                second: afterMin
            };
        }
    };
    // 验证参数
    CountDown.prototype._countDowncheck = function () {
        var countDownError = [];
        if (!this.config.startTime) {
            countDownError.push('缺少开始时间对象 需要newDate ');
        }
        if (!this.config.endTime) {
            countDownError.push('缺少结束时间对象 需要newDate ');
        }
        if (countDownError.length) {
            console.error(countDownError);
            return false;
        }
        // console.log(this.config)
        return true;
    };
    return CountDown;
}());
