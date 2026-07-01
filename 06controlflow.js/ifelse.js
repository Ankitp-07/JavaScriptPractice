// if

const isuseerloggedin=true
if(2==2){
   console.log(isuseerloggedin)

}

// to check ---->>>>     <,>,<=,>=,==,!=,===,!==  if is used 

//if else 
 let temperatur=42
if(temperatur>40)
{
  console.log("too hot ")  

}
else{
    console.log("bearable")
}
 

//scope related 
const score =200
if(score<100)
{
    console.log(score)
}
else{
    //const power = "fly"    //-->>loop ke bahar ye out of scope hai 
    //var power ="fly"         //---->> isme loop ke bahar bhi accessible hai , var working as global scope 
    let power ="fly"            ////-->>loop ke bahar ye out of scope hai 
    console.log(power)
}
//console.log(power)      //power is out of scope here   in case of let or const is used under the  block in which argument lies that has to print  here





//multine in one line      -->>> not a readable way of coding

const balance=5000
if(balance>500) console.log("test"),console.log("test")


     
    
    
//nested ifelse
if(balance<5000){
    console.log("less than 5000")

}
else if(balance<4500){
    console.log("less than 4500")
}
else if(balance>3000)
{
    console.log("greater than 3000")
}
else{
    console.log("lessthan 1000")
}


//real life application

const userloggedin=true
const debitcard=true
const loggedinfromnumber=false
const loggedinfrommail=true
if(userloggedin&&debitcard&&(loggedinfromnumber||loggedinfrommail)){
    console.log("eligible to shopping")
    }

 




