// boolean number string undefined null

let isDone: boolean = false;

let age: number = 2145;
// 二进制
let binaryNumber: number = 0b1111;

let firstName: string = "张三";
// 模板字符串
let message: string = "age is ${age}";

let u: undefined = undefined;
let n: null = null;

// null 和 undefined 是其他类型的子集
// let num: number = "dfi"  //报错
let num: number = undefined || null;


// 任意类型
// 尽量避免使用any类型
let notSure: any = 4;
notSure = "string";
notSure = true;
notSure.name
notSure.getAge();


// 联合类型(Union Types)
let numberOrString: number | string = 354;
numberOrString = "string";
// numberOrString = false //报错


// 数组  
// 同种类型
let arrOfNumbers: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, '3', 4];
arrOfNumbers.push(6);
// arrOfNumbers.push("sojfeo");  //报错

// 类数组
function test() {
    console.log(arguments);
    // arguments.length
    // arguments[2]

    // arguments.forEach //报错
    // let arr: any[] = arguments //报错

    let arg: IArguments = arguments;

    // 其他类型定义等
    // let htmlCollection:HTMLAllCollection
    // let node:Node       
}


// 元组(Tuple)
// 合并了不同类型——限定了数据类型的数组
let tuple: [string, number] = ["str", 4];
// tuple = [4,"string"]  //类型不对应 报错
// tuple = ["string"]  //少一项报错
// tuple = ["string", 10, 10]  //多一项 报错

// 使用push的情况
tuple.push(2)
tuple.push("s")
// tuple.push(true) //没有这个类型会 报错

let user: [string, number, boolean] = ["str", 4, true]
user.push(10)
