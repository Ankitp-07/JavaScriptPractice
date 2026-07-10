//Promise ek object hai jo future me result dene ka promise karta hai.
//Promise is an object that represents the eventual success or failure of an asynchronous operation.
/*Promise ki 3 States
1. Pending
2. Fulfilled (Resolved or success)
3. Rejected   (failure)

Flow   :      Promise Create
                ↓
            Pending
                ↓
            resolve()
                ↓
            .then()
                ↓
            Result


then() : Success handle karta hai.
catch() : Failure handle karta hai.
finally() : Ye hamesha chalega.Success ho ya failure.

=>Async Await: Ye bhi promise hi hai.

An asynchronous task is a task that takes time to complete, and JavaScript does not wait for it; instead, it continues executing the remaining code.

Promise → Future me milne wale result ka object.
Use → Asynchronous kaam (API call, file read, timer, etc.) handle karne ke liye.
new Promise() → Naya promise banata hai.
resolve() → Success hua.
reject() → Failure hua.
then() → Success ka result handle karta hai.
catch() → Error/Failure handle karta hai.
finally() → Success ya failure, dono me hamesha chalta hai.
Pending → Kaam abhi chal raha hai.
Fulfilled (Resolved) → Kaam successfully complete ho gaya.
Rejected → Kaam fail ho gaya.
Promise Chaining → Ek ke baad ek .then() lagana.
async/await → Promises ko aur readable tarike se likhne ka syntax.
Promise ka advantage → Callback Hell se bachata hai.
*/
 

//setTimeout() is asynchronous because it doesn't block JavaScript execution. It registers the timer with the browser, and the callback runs later when the timer expires and the call stack is empty

//Promise consume : Promise jo result dega (success ya failure), us result ko receive karke use karna.
//romise consume karna = Promise ke result (resolve/reject) ko .then(), .catch(), ya await se receive aur use karna

//1
const promiseOne = new Promise(function(resolve,reject){ //promise ban gya hai 
//Do an async task 
//DB calls,cyptogrpahy,network
setTimeout(function() {
    console.log('Async task is completed')
    resolve();
}, 1000);
})    
//pahle task resolve hoga fir promise consume hoga
promiseOne.then(function(){
    console.log("promise consumed")
    ,1000})



 //2   //dusra tarika 
new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async Task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Promise 2 consumed");
})

//3
const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
    resolve({username: "ankit",
        email: ' ankitp.com'}
    )   //isme value bhi pass kar skte hain , usually object pass hota hai 
    },1000)
})
thirdPromise.then(function(user){
    console.log(user);
})

//4


const fourthPromise = new Promise(( resolve,reject)=>{
    setTimeout(() => {
        let error = true;
        if(!error) resolve({username:"ankit", password:"2345t"})
        else reject("Error: Something went wrong");
    }, 1000);
})
fourthPromise.then((user)=>{
    console.log(user);
    return user.username    //yaha se jab data nikaalna hai  tohh kaise karengee
 }).then((username)=>{      //.then() ki chaining kar skte hain
    console.log(username)
 }).catch(function(error){      ///rejection bhi handle karna padega  naa
    console.log(error)
 }).finally(()=>
console.log("The promise is either resolved or rejected "))

//Promise Chaining = Ek promise ke result ko next .then() me use karke multiple async tasks ko sequence me chalana.
 /*Promise Chaining ka fayda
✅ Code readable hota hai.
✅ Callback Hell se bachata hai.
✅ Ek async task ke result ko next task me bhej sakte hain.
✅ Error handling easy ho jaati hai (.catch() ek hi jagah).*/


//5
const fifthPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) resolve({username:"JS", password:"78964"})
        else reject("Error: JS went wrong");
    }, 1000);
})
//async / await use karenge isme  to consume promise 
async function consumefifthPromise(){
//  const response = await fifthPromise    //wait kar rha hu fifthPromise obj ka jo bhi return hoke aayega
//  console.log(response)  
//error aa rh tha so catch block daalna padega kyuki reject hoke aayega na 
//so 

try{
    const response = await fifthPromise
    console.log(response)
}catch(error){
    console.log(error)
}

}
consumefifthPromise();

/*
async keyword kya karta hai?
async kisi normal function ko asynchronous function bana deta hai, jiske andar hum await use kar sakte hain.
Simple language me: async = "Is function ke andar promise ka wait karne ki permission de do."
*/

//the 4 and 5 doing the same thing with differnect way 


//6
async function getAllusers(){
    try{
   const response = await fetch ('https://jsonplaceholder.typicode.com/users')  //fetch ek promise wapas dega 
  //console.log(response);
     
  const data=   await response.json()   //parsed in json //parsing take time so uses await also here 
  console.log(data)

    }
    catch(error){
        console.log("E: ",error);
    }
}
getAllusers()
/*
response.json() kyu likhte hain?

Server data JSON format me bhejta hai.
.json() us JSON ko JavaScript object me convert karta hai.

fetch() → Server se data lane ya bhejne ke liye use hota hai.
fetch() returns a Promise.

await fetch() → Response ka wait karta hai.
*/



// 6 wale kaaam ko .then() and .catch() se karenge 
//i.e 7 
fetch ('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))
