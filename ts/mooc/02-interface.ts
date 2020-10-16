// 接口
// 对对象、类的定义

// 接口里面的属性之间 官方文档用分号 用逗号也不会报错
// interface Person {
//     name:string,
//     age:number
// }
interface Person {
    name:string;
    age:number;
}

// 对象里面属性直接用逗号
let person: Person = {
    name: "person",
    age:20
} 

// 少写一个报错
// let person: Person = {
//     name: "person",
// } 
// 多写一个也报错
// let person: Person = {
//     name: "person",
//     age:20,
//     sex:"男"
// } 
