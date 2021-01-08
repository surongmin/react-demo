// 1、定义接口
// 强约束
interface Istate {
    name: string
}

let obj1: Istate;
// obj1 = {}  //报错
obj1 = { name: 'ssss' }

interface Istate2 {
    name: string,
    age: number
}

let obj2: Istate2;
obj2 = { name: 'ssss',age:11 }


// 2、可选属性

interface Istate3{
    name: string,
    age?: number  //存疑，可有可无
}

let obj3: Istate3;
obj3 = { name: 'ssss',age:10 }
obj3 = { name: 'ssggg'}


// 3、任意属性 属性个数不确定

interface Istate4{
    // name: string | number,  //可以用联合类型
    name: string,
    age?: number,  //存疑，可有可无
    [propName:string]:any
}

let obj4: Istate4;
obj4 = { name: 'ssss',age:10 }
obj4 = { name: 'ssggg',sex:'女'}


// 4、只读属性

interface Istate5{
    name: string,
    readonly age?: number,  //存疑，可有可无
    [propName:string]:any
}

let obj5: Istate5;
obj5 = { name: 'ssss',age:10 }
obj5 = { name: 'ssggg',sex:'女'}
obj5.name = 'asjids'
// obj5.age = 56  // 只读