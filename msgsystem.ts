interface MsgInterface {

    msg: string;

    toSomebody(msg: string, name?: string | Array<string>): void;






}


export class MsgSystem implements MsgInterface {

    msg: string;

    toSomebody(msg: string, name?: string | Array<string>): void {
        console.log("向所特定人群发消息：" + msg);
    };


}
