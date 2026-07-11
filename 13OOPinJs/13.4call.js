function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
  //  SetUsername(username)  isse call nahi hoga , sirf refernce diya hai 
  //explicitly call kar skte hain .call() method se , refence bhi store karega 

  //hamhe batana padaega ki uss fucntion ko hamare inputs pe kaam karna hai , so give => this 
    SetUsername.call(this, username)  
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);


/*

call() → Function ko immediately call karta hai aur this ka context manually set karne deta hai.
SetUsername.call(this, username) → SetUsername ko createUser ke object (this) par execute karwata hai.
Purpose → Code reuse + correct this binding.


"Jab ek function ke andar dusra function use karna ho aur dusre function ko current object (this) par kaam karwana ho, tab .call(this, ...) use karte hain."

*/




/*
Key Findings:

this current object (current context) ko refer karta hai.
Ek function ko dusre function ke andar reuse kiya ja sakta hai.
Normal function call (SetUsername()) me this ka context change ho sakta hai.
.call() se hum function ko immediately execute karte hain aur this manually set kar sakte hain.
SetUsername.call(this, username) me this createUser ke object ko refer karta hai.
call() code duplication se bachata hai aur function reusability badhata hai.
Constructor functions me new ek naya object banata hai aur this ko us object se bind karta hai.



Conclusion:

call() ka use tab karte hain jab kisi function ko current object (this) ke context me execute karna ho.
Ye code reuse, correct this binding, aur clean OOP design provide karta hai.
JavaScript me call(), apply(), aur bind() methods function context control karne ke liye bahut important hote hain.
One-line Interview Answer

=>>> call() allows us to execute a function with a specified this context, making code reusable and ensuring the function works on the desired object.

*/