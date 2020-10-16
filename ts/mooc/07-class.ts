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

// 共有的
interface Radio {
    switchRadio(): void;
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

// 
interface RadioWithBattery extends Radio{
    checkBatteryStatus();
}
class Cellphone1 implements RadioWithBattery {
    switchRadio() {

    }
    checkBatteryStatus(){

    }
}