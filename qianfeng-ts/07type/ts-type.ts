// 类型别名
// let str1: string|number = "10";

type strType = string | number | boolean;
let str: strType = "10"
str = 10


// 接口也可以采用类型别名
interface muchType1 {
    name: string
}
interface muchType2 {
    age: number
}
type muchType = muchType1 | muchType2
let obj1: muchType = { name: "ashif" };
let obj2: muchType = { age: 23 };
let obj3: muchType = { name: "ashif",age: 23 };


// 限制字符串的选择
type sex = "男" | "女";
function getSex(s:sex):string{
    return s
}

// getSex("1")  //报错
getSex("女")


type EventNames = "click" | "scroll" | "mousemove";