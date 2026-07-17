class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}


class Teacher extends User{
    constructor(username, email){
        super(username)    //super ka matlab parent class ka constructor call karna hai 
        this.email = email
    }
    addCourse(){
        console.log(`Course added by ${this.username}`);
    }
}

// const chai = Teacher("chai","chai@gmail.com")
// chai.addCourse();   //[TypeError: Class constructor Teacher cannot be invoked without 'new']
const chai = new Teacher("master","chai@gmail.com") //added new keyword
chai.addCourse(); 

const nayaMaster = new User("angreziMaster");
//nayaMaster.addCourse()  //not have access to User 

nayaMaster.logMe();

console.log(chai instanceof Teacher);   //true 
console.log(chai instanceof User);      //true