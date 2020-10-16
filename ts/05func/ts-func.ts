// 1、声明式类型的函数

function funcType(name: string, age: number): number {
    return age
}

let ageNum: number = funcType("张三", 32)


// 可选属性 函数参数不确定

function funcType2(name: string, age: number, sex?: string): number {
    return age
}

let ageNum1: number = funcType2("张三", 32)
let ageNum2: number = funcType2("张三", 32, "女")

// 函数参数的默认值
function funcType3(name: string = "Zhangsan", age: number = 10): number {
    return age
}


// 2、表达式类型的函数

let funcType4 = function (name: string, age: number): number {
    return age
}

let funcType5:(name:string,age:number) => number = function (name: string, age: number): number {
    return age
}

interface IfuncType{
    (name:string,age:number):number
}
let funcType6:IfuncType = function (name: string, age: number): number {
    return age
}

// 对于联合类型的函数 采用重载的方式
function getValue(value:string | number):string | number{
    return value
}
// let a:string = getValue("1") //报错

// 采用重载 输入是number 输出也是
function getValue2(value:number):number;
function getValue2(value:string):string;
function getValue2(value:string | number):string | number{
    return value
}
let a:string = getValue2("1") 
let b:number = getValue2(1) 

