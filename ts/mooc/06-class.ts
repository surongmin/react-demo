class Animal{
    name:string;
    // public name:string;
    // private name:string;
    // protected name:string;
    // readonly name:string;

    static categoies: string[] = ['mammal', 'bird']
    static isAnimal(a){
        return a instanceof Animal
    }

    constructor(name:string){
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}

console.log(Animal.categoies)

let pig = new Animal('lily')

console.log(Animal.isAnimal(pig))

console.log(pig.run())
console.log(pig.name)
pig.name = 'Lucy'
console.log(pig.name)


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
