
//Object Literal 

// const user = {
//     username:"ankit",
//     logincount :9,
//     signedIn : true

    
// }
// console.log(user.username);



const user = {
    username:"ankit",
    logincount :9,
    signedIn : true,

    getUserDetail: function(){
        console.log("got user details from DB")
        console.log(`username : ${this.username}`)
        console.log(this);   //current context i.e poora object 
    }
    
}
console.log(user.username);
console.log(user.getUserDetail())

console.log(this)    //gives {}     :global objects deta in browser , but nothing in node environement 



//this keyword is for the current context 



//Constructor function


//const promiseOne = new promise() /// here the new keyword is the constrcutor function
//new : naya  context baane ko kaam aata hai 

function User(username,logincount,signedIn){
    this.username=username    //left side is variable and right side is value 
    this.logincount=logincount;
    this.signedIn=signedIn;
    

    this.greeting=function(){
        console.log(`welcome ${this.username}`)
    }

    return this         //implictily defined hota hai ,  likhne ki jarurat nahi hai
}

const userOne =  User("ankit",12 ,true)
const userTwo =  User("patel",123,true)  

console.log(userOne);
console.log(userOne.greeting)
console.log(userOne.constructor); //khud ka refernce deta hai i.r user ka refernce here


//iss case me hamne New keyword use nhi kiya hai , toh userOne ki value overwrite ho jayegi usertwo se 


//so the constructor function ka new keyword har bar ek nyi copy banayega 


/* 
step 1 : new object create
2 :     constructor function called by new keyword 
3 : this keyword inject ho jaaate hain
4 . OUTPUT 
*/


