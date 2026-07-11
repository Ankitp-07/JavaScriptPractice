let myName ="ankit"
console.log(myName.length)

//mai ek nayi property chahta hu khud ki  i.e truelength
// jo true length is : <int> , likhe de ,extra spaces kaat ke

// console.log(myName.trueLength); 

let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}


//khud ka function prototype me daalna 

Object.prototype.myfunc=function(){
    console.log(`ankit's function i.e myfunc is presnt in all objects `)
}

 heroPower.myfunc()
myHeros.myfunc()

//function , ARRAY , string , sabhi chijje object se hoke jaati hain , Object ke upar koi superprotype nhi hota hai 


//top level ki hieracrchy access karke usme daal diya , myfunc , aab wo sabme chala gya hai 


//agar hmne array object me chij inject kiya hai tohh kya wo chij Object me milegi ya nahi , other objects like functins and strings me accessbile rahegi ya nahi 

 Array.prototype.heyankit=function(){
    console.log(`ankit says helloo`)
 }

 myHeros.heyankit()  //accessbile , kyuki  power hamne array ko di hai as myHeroes is array 

//heroPower.heyankit()  //inaccessbile due to heroPower ia an Object ,aaur hierarchy me array ke line me hai  



//inheritance 


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport     //"Agar TASupport me koi property na mile, to TeachingSupport me dhoondo
}

Teacher.__proto__=User     //teacher  user ki property access kar skts hai 

/*
_proto__ ka matlab prototype link hota hai.
 Isse ek object dusre object ki properties aur methods ko inherit kar leta hai.

 _proto__ ek object ko dusre object se connect karta hai
  taaki uski properties aur methods use kar sake (inheritance).
  
  __proto__ = "Mujhe ye property nahi mili, mere parent (prototype) object se le aao."


  */


  //modern syntax 
  Object.setPrototypeOf(TeachingSupport,Teacher)  //TeachingSupport , teacher ki property acccess kar leta hai
  
  


  //truelength

  let anotherUsername = "ChaiAurCode     "
 
String.prototype.trueLength = function(){     //string Object ke prototype me trulength property add hogi 
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);     //trimmedthe extra space , jo true length is likhe de 
}

anotherUsername.trueLength()      ///extra spaces kaat ke dega 
"hitesh".trueLength()
"iceTea".trueLength()