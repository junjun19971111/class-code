class Person{
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    introduce(){
        return 'My name is '+this.name+'.I am '+this.age+' years old';
    }
}
class Student extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
        this.klass= klass;
    }
    introduce(){
        if(this.klass.leader){
            return super.introduce()+`. I am a student. I am the leader of class ${this.klass.number},`
        }
        else {
            return super.introduce() + `. I am a student. I am at class ${this.klass.number}.`;
        }
    }
}
class Teacher extends Person{
    constructor(id,name,age,klass){
        super(id,name,age);
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
            return super.introduce()+`. I am a Teacher. I teach ${student.name}.`;
        }
        else {
            return super.introduce()+`. I am a Teacher. I teach no ${student.name}.`;
        }
    }
}
class Klass{
    constructor(number){
        this.number=number;
    }
    assignLeader(student){
        if (student.key) {                         //如果加入了班级，就可以设置为leader；
            this.leader = student;
        }
        else {
            console.log('It is not of us.' );
        }
    }
    appendMember(student){
        student.key=1;                           //将学生实例加入班级
    }
}
let klass=new Klass(2);

let person=new Person('2015210811','Tom',21);
let student=new Student('2015210812','Jerry',21,klass);
klass.appendMember(student);
student.klass.assignLeader(student);
let teacher=new Teacher('2015210811','Tom',21,2);
console.log(person.introduce());
console.log(student.introduce());
console.log(teacher.introduce());
console.log(teacher.introduceWith(student));