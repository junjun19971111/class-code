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
        if(this.klass.leader&&this.klass.isIn()){
            return super.introduce()+`. I am a student. I am the leader of class ${this.klass.number}.`;
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
        if(this.klass!==0){
            return super.introduce() + `. I am a teacher. I teach at class ${this.klass}.`;
        }
        else {
            return super.introduce() + `. I am a teacher. I teach at no class.`;
        }
    }
    isTeaching(student){
        for(let i=0;i<this.klass.length;i++){
            if(this.klass[i]===student.klass.number&&student.klass.isIn()){
                return 1;
            }
            else {
                continue;
            }
        }
        return 0;
    }
    introduceWith(student){
        if(this.isTeaching(student)){
            return super.introduce()+`. I am a Teacher. I teach ${student.name}.`;
        }
        else {
            return super.introduce()+`. I am a Teacher. I teach no ${student.name}.`;
        }
    }
    knowWith1(student) {
        if (this.isTeaching(student)) {
            console.log(`I am Tom. I know ${student.name} has joined Class ${student.klass.number}.`);
        }
    }
     knowWith2(student) {
        if (this.isTeaching(student)){
            console.log(`I am Tom. I know ${student.name} become Leader of Class ${student.klass.number}.`);
        }
    }
}
class Klass{
    constructor(number){
        this.number=number;
    }
    assignLeader(student,teacher){
        if (student.key) {                         //如果加入了班级，就可以设置为leader；
            this.leader = student;
            teacher.knowWith2(student);
        }
        else {
            console.log('It is not of us.' );
        }
    }
    appendMember(student,teacher){
        student.key=1;
        teacher.knowWith1(student);//将学生实例加入班级,并打印出一段话
    }
    isIn(){
        if (student.key){
            return 1;
        }
        else {
            return 0;
        }
    }
}
let klass=new Klass(2);

let person=new Person('2015210811','Tom',21);
let student=new Student('2015210812','Jerry',21,klass);

let teacher=new Teacher('2015210811','Tom',21,[2,3]);
klass.appendMember(student,teacher);
student.klass.assignLeader(student,teacher);
teacher.isTeaching(student);
console.log(person.introduce());
console.log(student.introduce());
console.log(teacher.introduce());
console.log(teacher.introduceWith(student));