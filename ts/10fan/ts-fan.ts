// 结果是任意类型 而不是value的类型
// function createArray(length:number,value:any):Array<any>{
//     let arr = [];
//     for(let i = 0; i < length; i++){
//         arr[i] = value;
//     }
//     return arr;
// }
// createArray(3,1)


// 使用泛型对其进行改造
// 泛型可以帮助我们约束规范
// 不传的时候根据类型进行倒推
function createArray<T>(length:number,value:T):Array<T>{
    let arr = [];
    for(let i = 0; i < length; i++){
        arr[i] = value;
    }
    return arr;
}
let strArray: string [] = createArray<string>(3,"1")
let numArr: number [] = createArray(3,1)


// 接口采用泛型
interface Icreate{
    // (name:string,value:any):Array<any>
    <T>(name:string,value:T):Array<T>
}

let func:Icreate;
func = function<T>(name:string,value:T):Array<T>{
    return []
}

// let strArr: string [] = func("zaosdij",3) //报错
let strArr: string [] = func("zaosdij","str")

