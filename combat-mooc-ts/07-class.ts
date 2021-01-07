// Car 和 Cellphone 有同样的switchRadio属性
// 但是没有共同的父类
// class Car {
//     switchRadio() {

//     }
// }

// class Cellphone {
//     switchRadio() {

//     }
// }

// 共有的_实现共性的提取
interface Radio {
    switchRadio(): void;
    // switchRadio(trigger:boolean): string;
}
// 手机独有
interface Battery {
    checkBatteryStatus();
}


class Car implements Radio {
    switchRadio() {

    }
}

class Cellphone implements Radio, Battery {
    switchRadio() {

    }
    checkBatteryStatus(){

    }
}

// 接口合二为一
interface RadioWithBattery extends Radio{
    checkBatteryStatus();
}
// 类实现
class Cellphone1 implements RadioWithBattery {
    switchRadio() {

    }
    checkBatteryStatus(){

    }
}