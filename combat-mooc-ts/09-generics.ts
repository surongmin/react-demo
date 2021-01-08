
// function echo (arg) {
//     return arg
// }
// let result = echo(465)  //any
// let result1 = echo("hdsihf")  //any

// 泛型
// 泛型 定义函数、接口或类的时候不预先指定类型，使用的时候再指定类型
// 泛型类似于一个占位符 使用的时候动态把类型补充
function echo<T>(arg: T): T {
    return arg
}
let result1 = echo(125) //number
let result2 = echo("true") //string
let result3 = echo(true) //boolean


function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
}
let res = swap(['string', 123])  //number string
res[0].toFixed   //number属性
res[1].length
