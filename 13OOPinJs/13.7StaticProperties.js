class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){    //iss method ko access dene se rok dena 
        return `123`
    }
}

const hitesh = new User("hitesh")
//console.log(hitesh.createId())  //after static keyword : [TypeError: hitesh.createId is not a function]



class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher = new Teacher("Master", "i@phone.com")
teacher.logMe();
//console.log(teacher.createId());   nahi milega yaha ko accessss 



//static method ya property class ke object (instance) ki nahi, balki class ki hoti hai.

/*
Difference:
Normal Method       	                |           Static Method
----------------------------------------------------------------------------------
Object se call hota hai             	|           Class se call hota hai

obj.method()	                        |           Class.method()

Instance ka data use kar sakta hai	    |           Instance (this) ko access nahi karta
*/


/*

Important Points:
static methods/properties class ke hote hain, instances ke nahi.

Inhe object se call nahi kar sakte.

Inhe ClassName.method() se call karte hain.

Utility functions (jaise Math.max(), Object.keys()) ki tarah methods banane ke liye static useful hai

*/



/*

static kya kar deta hai?

Method ko prototype me add nahi karta.

Method ko seedha class ke saath attach kar deta hai.

Isliye objects us method ko access nahi kar sakte.

Sirf ClassName.method() se call kar sakte ho.


*/