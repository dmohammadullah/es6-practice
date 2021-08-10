class Parents{
    constructor() {
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.Name = name;
    }
    getfullName(){
        return this.Name + " " + this.fatherName;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby,baby2);
console.log(baby2.getfullName());