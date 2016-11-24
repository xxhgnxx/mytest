export class Room {
    playerList: Array<string>;  // 玩家列表
    gamePlayerList: Array<string>;  // 游戏中玩家的数量
    gameStats: Game; // 游戏状态

}


export class Game {
    isStart: boolean;   // 是否开始
    gamePlayerList: Array<string>;  // 游戏中玩家的数量

}
