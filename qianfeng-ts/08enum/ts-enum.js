// 使用枚举可以定义一些有名字的数字常量
var Days;
(function (Days) {
    Days[Days["Sun"] = 0] = "Sun";
    Days[Days["Mon"] = 1] = "Mon";
    Days[Days["Tue"] = 2] = "Tue";
    Days[Days["Wed"] = 3] = "Wed";
    Days[Days["Thu"] = 4] = "Thu";
    Days[Days["Fri"] = 5] = "Fri";
    Days[Days["Sat"] = 6] = "Sat";
})(Days || (Days = {}));
console.log(Days.Mon); //1
console.log(Days.Sat); //6
console.log(Days); //枚举类型会被编译成一个双向映射的对象
console.log(Days[0] === "Sun");
// 可以自己指定下标
var Days1;
(function (Days1) {
    Days1[Days1["Sun"] = 3] = "Sun";
    Days1[Days1["Mon"] = 4] = "Mon";
    Days1[Days1["Tue"] = 5] = "Tue";
    Days1[Days1["Wed"] = 6] = "Wed";
    Days1[Days1["Thu"] = 7] = "Thu";
    Days1[Days1["Fri"] = 8] = "Fri";
    Days1[Days1["Sat"] = 9] = "Sat";
})(Days1 || (Days1 = {}));
console.log(Days1.Mon); //1
console.log(Days1.Sat); //6
console.log(Days1); //枚举类型会被编译成一个双向映射的对象
console.log(Days1[0] === "Sun");
