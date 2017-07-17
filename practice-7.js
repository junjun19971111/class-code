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
        return super.introduce()+`. I am a student. I am at class ${this.klass}.`;
    }
}
class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass=klass;
    }
    introduce(){
        if(this.klass){
            return super.introduce() + `. I am a teacher. I teach at class ${this.klass}`;
        }
        else {
            return super.introduce() + `. I am a teacher. I teach at no class.`;
        }
    }
}
let person=new Person('Tom',21);
let student=new Student('Tom',21,2);
let teacher=new Teacher('Tom',21);
console.log(person.introduce());
console.log(student.introduce());
console.log(teacher.introduce());