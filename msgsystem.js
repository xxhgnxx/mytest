"use strict";
var MsgSystem = (function () {
    function MsgSystem() {
    }
    MsgSystem.prototype.toSomebody = function (msg, name) {
        console.log("向所特定人群发消息：" + msg);
    };
    ;
    return MsgSystem;
}());
exports.MsgSystem = MsgSystem;
