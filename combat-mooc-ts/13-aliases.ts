// type aliases

// function sum(x: number, y: number): number {
//     return x + y
// }
// let sum2: (x: number, y: number) => number = sum

type PlusType = (x: number, y: number) => number
function sum(x: number, y: number): number {
    return x + y
}
let sum2: PlusType = sum

// 联合类型
// function getName(n: string | number ):string{
// return n
// }

type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

