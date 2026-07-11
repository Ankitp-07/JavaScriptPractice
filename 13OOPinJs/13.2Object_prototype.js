//Prototype ek object hai jisse JavaScript dusre objects ko properties aur methods inherit (borrow) karne deta hai.

//Simple line: Prototype = "Backup object jahan se methods/properties milti hain."



/*

Array ------> object ---------->null
                ^
                |
           _____|
          |
         |
string --^


*/


function multipleby5(num){
    return num*5
}

multipleby5.power =2   //function  ko bbhi object ki tarah karwa skte hai 

console.log(multipleby5(5));
console.log(multipleby5().power); 
console.log(multipleby5.prototype);            //ye prototype by default contrxt dets hai 

/*
Prototype = Object jisse methods inherit hote hain.
Sab objects kisi na kisi prototype se linked hote hain.
JavaScript property ko prototype chain me search karta hai.
Array.prototype → push(), pop(), map().
Object.prototype → toString(), hasOwnProperty().
new object ko constructor ke prototype se connect karta hai.
Prototype me methods rakhne se memory bachta hai kyunki sab objects same method share karte hain.
*/


function CreateUser(username,score){
    this.username = username
    this.score = score;
}

CreateUser.prototype.increment = function(){
   this.score++
}

CreateUser.prototype.printme= function(){
  console.log(`score is ${this.score}`);
}
const chai = new CreateUser("chai",25)
const tea = new CreateUser("tea",250)

chai.printme()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function.
 This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object.
 If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called,
 if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

