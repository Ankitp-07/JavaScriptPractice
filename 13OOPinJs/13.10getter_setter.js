class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }


    //fine grain control chayiye , matlab koi mbole ki mujh password ka access chayiye toh hm alag alag jawan de ske 


    //get karoge toh set bhi define karna padega 


    //constructor aur setter dono set karenge toh stack overflow aa jayega , to inke bich race llag jati hai 
    // setter me ek naya property matlab ek naya variable bana dete hain

    //get karte time bbhi issue aayega , so getter me bhi wohi wala likhna setter wala 
    get email(){  //name same rahega propety aaur iska 
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }



    get password(){
        return `${this._password}ankit`
    }

    set password(value){
        this._password = value
    }
}

const ankit = new User("ankit@.ai", "abc")
console.log(ankit.email);

/*


getter aur setter ka main purpose data ko control karna hai. Seedha variable access karne ki jagah, 
hum uske read aur write hone ka behavior customize kar sakte hain


Getter → Property read karte waqt custom logic chalata hai.
Setter → Property update karte waqt custom logic chalata hai.
Validation add kar sakte hain.
Data format change kar sakte hain.
Sensitive data hide kar sakte hain.
Read-only properties bana sakte hain.
Encapsulation improve hoti hai.

Getter and Setter allow controlled access to object properties by adding custom logic while reading or writing data, improving validation, security, and encapsulation.


*/