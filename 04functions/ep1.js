//bohot hi basic

function demo(){
    console.log("testing")
    console.log("fucntion")

}
demo()

//type-1
function addition(num1,num2){
    //1console.log(num1+num2)
    let result=num1+num2
    return result
}
//addition(2,3)
addition(3,"4") //  -->>  34    <--- it takes both parameter as string and joined it side by side

const result=addition(5,6)
console.log("result:" ,result)


// type-2


function addition1(num1,num2){
    return num1+num2
}  
console.log(addition1(4,6))


///////////type-3

function loginuserverification(username)

{ 
    return `${username} just logged in`



}
console.log(loginuserverification("ankit"))



/// type-4
function loginuserverification(username)   //if username = sam gives here then no need ot go in if block it always defined for sam  , and if agrument passed some input then it override sam

{ 
    if(username===undefined){      //if(!username) can be used , which means that username is not defined
     console.log("please enter a username")
    return 
    }
    return `${username} just logged in`


}
console.log(loginuserverification("ankit"))


//type-5
function calculatecartprice(val1,val2,...num1)     //or just only ...num1 can be used which make the array of all input
{
    return val1
}

console.log(calculatecartprice(200,300,400,555))


//type-06

//handling the object 
const user=
{
    username:"anku",
    title:"patel"
}

//creating anyobject means kooi bhi object le skte hn call krne me 
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and title is ${anyobject.title}`)
}
//handleobject(user)

handleobject({     //direct username bhi passs kar skte hain
    username:"ankuuu",
    title:"same as parents"
})



//// type-07

//passing array in function

const myarr=[300,4000,5000]
function returnsecvalue(getArray){    //getArray is not any special function or method it is just variable which holds tha  value of the array which is passing as parameter
    return getArray[1]
}

console.log(returnsecvalue(myarr))


 

