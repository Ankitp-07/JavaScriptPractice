//ES6 ke baad 

class User{
    constructor(username ,email,password){    // jaise hi new keyword call hoga ,construcotr intialise ho jayega  
        this.username=username;
        this.email=email;
        this.password=password
    }

    encryptPassword(){
        return `${this.password}ABC`   //password ko reverse kar dega
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user = new User("chai","chai@gmail.com","12345")
console.log(user.encryptPassword());
console.log(user.changeUsername());



//behind the scene
function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){   //aise prototype me add ho jati 
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}




/*

    Mapping
    
Class Syntax        |	Behind the Scenes
---------------------------------------------
class User	        |   function User()
-----------------------------------------------
constructor()       |   Function body
----------------------------------------------
new User()	        |   new User() (same)
-----------------------------------------------
encryptPassword(){} |	User.prototype.encryptPassword = function(){}
----------------------------------------------------------------------
changeUsername(){}	|   User.prototype.changeUsername = function(){}
-----------------------------------------------------------------
*/


/*

JavaScript me classes asli classes nahi hain.

JS prototype-based language hai.

class syntax sirf code ko readable banane ke liye introduce kiya gaya hai (ES6).

Internally JS methods ko prototype par hi store karti hai.

*/