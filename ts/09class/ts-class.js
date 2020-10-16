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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// private属性只能在类的内部进行访问
var Person1 = /** @class */ (function () {
    function Person1() {
        this.name = "张三";
        this.age = 23;
    }
    Person1.prototype.say = function () {
        console.log("\u6211\u7684\u540D\u5B57\u662F" + this.name + ", \u6211\u7684\u5E74\u9F84\u4E3A" + this.age);
    };
    // 不能使用this this实在实例化中，static在实例化之前
    Person1.test = function () {
        console.log("test");
        console.log(this); //拿不到值
    };
    return Person1;
}());
// 创建Person实例
var person1 = new Person1();
person1.say();
// console.log(person1.name)  //private 外部无法访问
// console.log(person1.age)   //protected也不能访问
// 继承
// 创建Child子类
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Child.prototype.callParent = function () {
        // super.name;  //不能访问私有属性
        _super.prototype.age; //子类内部可以访问protected属性
        _super.prototype.say.call(this);
    };
    return Child;
}(Person1));
var child = new Child();
child.callParent();
// console.log(child.age); //外部不可以访问protected属性
console.log(child.say()); //子类可以访问父类公开的属性或者方法
// console.log(child.name);  // 不能访问父类私有属性
//protected  在父类或者子类里面可以访问
//privite  只能在父类里面可以访问
// console.log(Child.callParent())  //报错
console.log(Child.test());
