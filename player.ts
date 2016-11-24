export class Player {
    name: string;    // 玩家名，同时也是连接的标识
    isOnline: boolean;  // 玩家是否在线
    isoReady: boolean;  // 玩家是否准备
    constructor(private thename: string) {
        this.name = thename;
    };
    Login(): void {
        console.log("玩家" + name + "登陆");
    };

    Offline(): void {
        console.log("玩家" + name + "离线");
    };

    Ready(): void {
        console.log("用户" + name + "准备了");
    };

    cancleReady(): void {
        console.log("用户" + name + "取消准备了");
    };
}

export class Admin extends Player {
    constructor(theName: string) { super(theName); };

    Login(): void {
        console.log("房主" + name + "登陆");
    };

    Offline(): void {
        console.log("房主" + name + "离线");
    };

    startGame(): void {
        console.log("房主" + name + "开始了游戏");
    };

}
