
// 1、可选属性
// 可有可无的
interface Person {
    name: string;
    age?: number;
}

let person: Person = {
    name: "person",
    age: 20
}
let person1: Person = {
    name: "person"
}

// 2、只读属性
interface Person2 {
    readonly id: number;
    name: string;
    age?: number;
}

let person2: Person2 = {
    id: 3,
    name: "person",
    age: 20
}
// person2.id = 3 //报错

// readonly 和 const
// readonly--用于属性
// const--定义变量
