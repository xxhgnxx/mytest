// *********面对对象 三个要素：封装 继承 多态*********
// *********封装只为区分内外*********
// 只要公开部分借口不变，使用者不需要关心内部做了什么改动：
class Animai {
    protected stepCount: number = 0; // 走了几步
    // 内部能力，外部不能调用 动物走
    protected doWalk() {
        this.stepCount++;
    }
    // 使用者能调用的能力 控制这个动物走
    public walk() {
        this.doWalk();
    }
    // 使用者能调用的能力 叫动物告诉我们它走了几步
    public getCount(): number {
        return this.stepCount;
    }

}


let a1 = new Animai();
a1.walk(); // 叫他走
console.log("Animai", a1.getCount()); // 结果走了一步

// *********继承的根本目的是为了多态*********
// extends 是继承的意思
class Human extends Animai {

    // 内部能力，外部不能调用 动物走
    // 修改了Animai的内部能力，一次走两步
    // 这里 Human 继承 Animai 只是为了多态
    protected doWalk() {
        this.stepCount += 2;
    }
}

let a2 = new Human();
a2.walk(); // 叫他走
console.log("Human", a2.getCount()); // 结果走了两步

// 叫动物走
function walk(p: Animai): void {
    p.walk();
}

walk(a1); // 让a1走
walk(a2); // 让a2走

console.log("Animai", a1.getCount()); // 一共走了2步
console.log("Human", a2.getCount()); // 一共走了4步
