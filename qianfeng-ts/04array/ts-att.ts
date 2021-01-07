// 数组表示方法

// 1、类型 + 方括号

let arr: number[] = [1, 2, 3]
let arr1: string[] = ['1', '2', '3']
let arr2: any[] = ['1', 2, true]


// 2、数组泛型 Array <elemType>

let arrType: Array<number> = [1, 2, 3]
let arrType1: Array<string> = ['1', '2', '3']
let arrType3: Array<any> = ['1', 2, true]


// 3、采用接口表示

interface Iarr {
    [index: number]: number
}

let array:Iarr = [1, 2, 3]


interface Istate{
    username:string,
    age:number
}
interface Iarr1 {
    [index: number]: Istate
}
let array1:Iarr1 = [{username:"ahdi",age:34}]

let array2:Array<Istate> = [{username:"ahdi",age:34}]

let array3:Istate[] = [{username:"ahdi",age:34}]

