// type assertion  类型断言
// 只能断言 联合类型中存在的类型

// function getLength(input: string | number): number {
//     input.length  //报错 只能访问共有的属性
// }


function getLength(input: string | number): number {
    let str = input as String  //使用大写
    if (str.length) {
        return str.length
    } else {
        let number = input as number
        return number.toString().length
    }

    // let flag = input as Boolean  //报错  
}

// 或者 使用尖括号<>
function getLength1(input: string | number): number {
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return (<number>input).toFixed().length
    }
}
