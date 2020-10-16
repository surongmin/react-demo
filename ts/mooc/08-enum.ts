enum Direction{
    Up,
    Down,
    Left = 5,
    Right
}

console.log(Direction.Up)
console.log(Direction[0])

// 常量枚举不会编译枚举里面的东西 直接输出结果
const enum Direction1{
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)
console.log(Direction1[0])
// 常量枚举不能用下标访问