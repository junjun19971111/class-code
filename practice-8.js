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
        this.klass=new Klass(klass);
    }
    introduce(){
        return super.introduce()+`. I am at class ${this.klass.number}.`;
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce() + `I am a teacher. I teach at class ${this.klass}`;
        }
        else {
            return super.introduce() + `I am a teacher. I teach at no class.`;
        }
    }
    introduceWith(student){
        if(this.klass===student.klass.number){
            return super.introduce()+`I am a Teacher. I teach ${student.name}.`;
        }
        else {
            return super.introduce()+`I am a Teacher. I teach no ${student.name}.`;
        }
    }
}
class Klass{
    constructor(number){
        this.number=number;
    }
}
let person=new Person('Tom',21);
let student=new Student('Jerry',21,2);
let teacher=new Teacher('Tom',21,2);
console.log(person.introduce());
console.log(student.introduce());
console.log(teacher.introduce());
console.log(teacher.introduceWith(student));