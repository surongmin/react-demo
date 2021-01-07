// const 常量
// 一定范围内的一系列常量——enum
// 方向、星期、三原色

// 未定义时下标从0 开始
// 数字枚举
enum Direction {
    Up,
    Down,
    Left = 5,
    Right
}

// 取enum的值
console.log(Direction.Up)
// 也可以当做是一个数组——反向映射 双向映射
console.log(Direction[0])

// 字符串枚举
enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
const value = 'UP';
if (value === Direction2.Up) {
    console.log('go up!')
}

// 提升性能
// 常量枚举不会编译枚举里面的东西 直接输出结果
const enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction1.Up)
console.log(Direction1[0])
// 常量枚举不能用下标访问