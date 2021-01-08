// 接口
interface KeyPair<T, U> {
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "test", value: 1235 };

// 使用泛型定义数组
let arr: number[] = [1, 23, 4];
let arrTwo: Array<number> = [1, 2, 3]


// 函数
// 定义一个简单的函数
// function plus(a: number, b: number): number {
//     return a + b
// }
// let result = plus(2, 5)

// 定义为number类型
// interface IPlus {
//     (a: number, b: number): number
// }
// function plus(a: number, b: number): number {
//     return a + b
// }
// let result: IPlus = plus

// 采用泛型
interface IPlus<T> {
    (a: T, b: T): T
}
function plus(a: number, b: number): number {
    return a + b
}
function connect(a: string, b: string): string {
    return a + b
}
let result: IPlus<number> = plus
let result1: IPlus<string> = connect
