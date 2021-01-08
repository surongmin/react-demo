// 3、任意类型any

// let str:any = 1
let str2:any = 1
str2 = 'sss'
str2 = true

let str3; // 没有赋值操作 就会被认为是任意类型，等价于 let str3:any;
let str4:any;


// 4、类型推论

// 赋初始值的时候 如果没有指定类型，会根据赋的值推断类型
let b = 1;  //等价于 let b:number = 1;
b = true;