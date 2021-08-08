class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "JUSC";
    }
}

const student1 = new Student(12, "Rony");
const student2 = new Student(12, "Jony");
console.log(student1,student2.name);