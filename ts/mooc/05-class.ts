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

class Dog extends Animal{
    bark(){
        return `${this.name} is barking`
    }
}

let gouzi = new Dog('gouzi')
console.log(gouzi.run())
console.log(gouzi.bark())

class Cat extends Animal{
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
