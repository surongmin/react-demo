// type assertion

// function getLength(input: string | number): number {
//     input.length  //只能访问共有的属性
// }

function getLength(input: string | number): number {
    let str = input as string
    if (str.length) {
        return str.length
    } else {
        let number = input as number
        return number.toFixed().length
    }
}
// 或者
function getLength1(input: string | number): number {
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return (<number>input).toFixed().length
    }
}
