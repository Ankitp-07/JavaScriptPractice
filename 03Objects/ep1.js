//singleton       ->> object made by constructor
// object.create   //constructor method //singleton 


//object literals
const title = Symbol("")
const Jsuser ={
    name:"ankit"  ,  //by default name is string 
    age : 18,
    location : "delhi",
    email:"ankitnavodayan89",
    isloggedin: false,
    [title]:"patel"     //symbol ko aise hi use karte hain , variable ko string se hta do , array bna do

}
console.log(Jsuser.email)     //dot se access karne pe email already treated as string 
console.log(Jsuser["email"])    //in this type , we should specify email as string by putting into " "
console.log(Jsuser.name)
console.log(Jsuser[title])
console.log(typeof Jsuser.[title])


//modification
Jsuser.email="ankitnav"
//Object.freeze(Jsuser)   //no one can change 


//declaring using funtion
Jsuser.greeting=function(){
    console.log("Hello jsuser")

}

Jsuser.greeting1=function(){
    console.log(`hello jsuser -> ${this.name}`)   //this is used for accessing inside object things //Jsuser.name also can be use 
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting1())



