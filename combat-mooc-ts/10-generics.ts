function echoWithArr<T>(arg: T[]): T[] {
    // function echoWithArr<T>(arg:T):T{  //报错
    console.log(arg.length);
    return arg
}
let arrs = echoWithArr([, 45, 3, 2])
let arrs1 = echoWithArr("str") //报错


// 
interface IWithLength {
    length: number
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}

let str = echoWithLength('str');
let arr = echoWithLength([1, 2, 3]);
// 只要有length属性即可
let obj = echoWithLength({ length: 10 });
let obj1 = echoWithLength({ length: 10, width: "10px" });
// let num = echoWithLength(245); //报错 没有length属性
