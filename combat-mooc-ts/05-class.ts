// 创建一个类
// 封装
class Animal{
    name:string;
    constructor(name:string){
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}

let pig = new Animal('lily')
console.log(pig.run())

// 继承
class Dog extends Animal{
    bark(){
        return `${this.name} is barking`
    }
}

let gouzi = new Dog('gouzi')
console.log(gouzi.run())
console.log(gouzi.bark())

// 多态
// 重写构造函数
class Cat extends Animal{
    // 使用父类方法得先写构造函数
    constructor(name){
        super(name)
        console.log(this.name)
    }
    run(){
        return 'Meo' + super.run()
    }
}

let maomi = new Cat('maomi');
console.log(maomi.run())
