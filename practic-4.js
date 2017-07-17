class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'.I am '+this.age+' years old';
    }

}
class Student extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I am at class ${this.klass}.`;
    }
}
class Worker extends Person{
    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old. I have a job.`;
    }
}
let person=new Person('Tom',21);
let student=new Student('Tom',21,2);
let worker=new Worker('Tom',21);
console.log(person.introduce());
console.log(student.introduce());
console.log(worker.introduce());