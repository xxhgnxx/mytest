"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Player = (function () {
    function Player(thename) {
        this.thename = thename;
        this.name = thename;
    }
    ;
    Player.prototype.Login = function () {
        console.log("玩家" + name + "登陆");
    };
    ;
    Player.prototype.Offline = function () {
        console.log("玩家" + name + "离线");
    };
    ;
    Player.prototype.Ready = function () {
        console.log("用户" + name + "准备了");
    };
    ;
    Player.prototype.cancleReady = function () {
        console.log("用户" + name + "取消准备了");
    };
    ;
    return Player;
}());
exports.Player = Player;
var Admin = (function (_super) {
    __extends(Admin, _super);
    function Admin(theName) {
        return _super.call(this, theName) || this;
    }
    ;
    Admin.prototype.Login = function () {
        console.log("房主" + name + "登陆");
    };
    ;
    Admin.prototype.Offline = function () {
        console.log("房主" + name + "离线");
    };
    ;
    Admin.prototype.startGame = function () {
        console.log("房主" + name + "开始了游戏");
    };
    ;
    return Admin;
}(Player));
exports.Admin = Admin;
