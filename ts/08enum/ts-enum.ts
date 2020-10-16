// 使用枚举可以定义一些有名字的数字常量

enum Days {
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days.Mon)  //1
console.log(Days.Sat)  //6

console.log(Days) //枚举类型会被编译成一个双向映射的对象
console.log(Days[0] === "Sun")

// 可以自己指定下标
enum Days1 {
    Sun = 3,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat
}

console.log(Days1.Mon)  //4
console.log(Days1.Sat)  //9

console.log(Days1) //枚举类型会被编译成一个双向映射的对象
console.log(Days1[3] === "Sun")