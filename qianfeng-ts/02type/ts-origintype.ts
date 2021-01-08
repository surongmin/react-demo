// 1、基本数据类型

let str: string = 'hello';
let num: number = 1;
let bol: boolean = true;
let under: undefined = undefined;
let nul: null = null
// undefined null 是其他类型的子类型

// str = 1;  //报错
// undefined null是其他值的空值
str = undefined || null


// 2、函数
// 定义一个函数
let callback = () => {
    return 10
}

// void用来规定函数无返回值
// let callback = ():void => {
//     return 10   //报错
// }

let callback1 = function (): void {

}

let callback2 = (): void => {

}

// let num2:void = 3





