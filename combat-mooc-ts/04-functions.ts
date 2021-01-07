// 函数声明

// function add(x, y) {
//     return x + y
// }
function add(x: number, y: number): number {
    return x + y
}

let result = add(2, 4)
// let result = add(2) //报错
// let result = add(2, 4, 5) //报错 


// 可选参数
// 必选参数不能位于可选参数之后
function add1(x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

let result1 = add1(3, 6)
let result2 = add1(3, 6, 8)


// 默认参数
function add2(x: number, y: number, z: number = 10): number {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}

let result3 = add2(3, 8)
let result4 = add2(3, 6, 8)


// 函数表达式
// 没有给add3定义类型 但是add3自动获得了类型——类型推断
let add3 = function (x: number, y: number, z: number = 10): number {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}
// let add4:string = add3 //报错
let add4: (x: number, y: number, z?: number) => number = add3

// 类型推断
let str = "str";
// str = 213 //报错
