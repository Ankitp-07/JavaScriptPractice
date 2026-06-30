// const user ={
//     username:"ankit",
//     title:"patel",
//     welcomemessage:function(){
//     console.log(`${this.username}`)    //thisfunction return current context 
//     }
// }

// user.welcomemessage()
// user.username="sam"
// user.welcomemessage()
// //console.log(this)

const chai =function(){
    let username ="anku"
    console.log(this.username)   //isme thisfunction ko pta hi nhi kiske liye baat kar rha hain

}
chai()   //gives undefined 


//NOW use  ARROW function to overcome the undefined wali problem 

const chai1 = () => {
    let username ="ankit"
    console.log(this)      //  this ->>>  gives {}  &  this.username gives undefined 

}
// chai() 
 
//  const addtwo=(num1,num2)=>{
//     return num1+num2
//  }
//  console.log(addtwo(3,4)) 
 
 
 //IMPLICIT return type

// const addtwo=(num1,num2)=>  num1+num2   //{} use kiye toh return keyword use hoga otherwise nhi hoga
//  console.log(addtwo(3,4))               //implicit return type 

 
 
 
 const addtwo=(num1,num2)=>(num1+num2)
 console.log(addtwo(3,4))




 //what if object has to return !!!!

 const addthree=(num1,num2)=> ({username:"ankit"})
 console.log(addthree(3,6))