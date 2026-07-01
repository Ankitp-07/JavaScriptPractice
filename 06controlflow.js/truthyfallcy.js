const email="aryap.com"
if(email)                       //jo  bhi email me hai use hi true maan liya gya hai , ifke saath cinduton me koi comparison nhi kiya gyahai
{
    console.log("got useremail")
}
else{
    console.log("DOnt have ussermail")

} 



const useremail=[]                  //[] is also a truthy value
if(useremail){
    console.log("gotted")

}
else{
    console.log("not")
}
if(useremail.length==0){
    console.log("array is empty ")
}
else{
    console.log("none")
}


//FAllacy values
   // -->>  false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values
   //   "0",'false'," ",{},[],funtion(){} 
            //string ke andar jo bhi declare hai wo truthy value hai 




const emptobj={}
if(Object.keys(emptobj).length==0){
    console.log("object is empty")
}

if(emptobj){
    console.log("if print this, means it is is prooved that this is a truthy values")
}

if(useremail)
{
    console.log("if print this, means it is is prooved that this is a truthy values")
}


///in Above  both case [],{} -->> it is prooved that they are truthy values because if block runs , and treat that as value 






//NUllish  coalsecing Operator (??): null , undefined

let val1

// it assign val1 first value but if null or undefines encounter then , not null or not undefined value assgn karta hai 
val1 = 5??10 //gives 5      

val1=null??10   //gives null
val1=undefined??15  //gives 15
val1 = null??10??20  //gives 10
val1=null??40??undefined??30  //gives 40
console.log(val1)

//??   --->>> it handles the null or undefined values , database vaigrah ya fir input ke liye agar null ya undefined recieve huyi toh ye handle kar let hai 
//it is differnet than ternery opertor







//// Ternery operator

// syntax:  condition?true:false

const teaprice=100
teaprice<=80?console.log("affordable"):console.log("not affordable")



