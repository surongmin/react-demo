// 创建Person类
// class Person{
//     name = "张三";
//     age = 23;
//     say(){
//         console.log(`我的名字是${this.name}, 我的年龄为${this.age}`)
//     }
// }
// // 创建Person实例
// let person = new Person()
// person.say();
// console.log(person.name)  //默认public 可以进行访问


// private属性只能在类的内部进行访问
class Person1{
    private name = "张三";
    protected age = 23;
    say(){
        console.log(`我的名字是${this.name}, 我的年龄为${this.age}`)
    }

    // 不能使用this this实在实例化中，static在实例化之前
    static test(){
        console.log("test") 
        console.log(this)  //拿不到值
    }
}
// 创建Person实例
let person1 = new Person1()
person1.say();
// console.log(person1.name)  //private 外部无法访问
// console.log(person1.age)   //protected也不能访问

// 继承
// 创建Child子类
class Child extends Person1{
    callParent(){
        // super.name;  //不能访问私有属性
        super.age;  //子类内部可以访问protected属性
        super.say()
    }
}

let child = new Child()
child.callParent();
// console.log(child.age); //外部不可以访问protected属性
console.log(child.say());  //子类可以访问父类公开的属性或者方法
// console.log(child.name);  // 不能访问父类私有属性

//protected  在父类或者子类里面可以访问
//privite  只能在父类里面可以访问


// console.log(Child.callParent())  //报错
console.log(Child.test())  