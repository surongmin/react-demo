// 定义一个类队列
// class Queue {
//     private data = [];
//     push(item){
//         return this.data.push(item)
//     }
//     pop(){
//         return this.data.shift()
//     }
// }

// let  queue = new Queue()
// queue.push(1);
// queue.push('str')
// console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed()) //报错 第二个值是string不能使用toFixed方法

// 给他定义 number类型
// class Queue {
//     private data = [];
//     push(item:number){
//         return this.data.push(item)
//     }
//     pop():number{
//         return this.data.shift()
//     }
// }

// let  queue = new Queue()
// queue.push(1);
// queue.push('str') //报错 不是number
// console.log(queue.pop().toFixed())
// console.log(queue.pop().toFixed()) //报错

// 使用泛型  进入 出去的数据类型都一样
class Queue<T> {
    private data = [];
    push(item:T){
        return this.data.push(item)
    }
    pop():T{
        return this.data.shift()
    }
}

let  queue = new Queue<number>()
queue.push(1);
console.log(queue.pop().toFixed())

let  queue2 = new Queue<string>()
queue2.push('str') //
console.log(queue2.pop().length) //报错
