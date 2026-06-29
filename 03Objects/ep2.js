//singleton methof of object 
//const tindeeruser = new object{}    //M-1
const tinderUser={}
//console.log(tinderUser)

tinderUser.id="123abc"
tinderUser.name="ankit"
tinderUser.lockin="Arya"

console.log(tinderUser)

//nested object 

const regularuser={
    email:"aryapatel20",
    fullname:
    {
        firstname:"Arya",
        lastname:"patel",
        parents:{
            father:"Arya",
            mother:"arya"
        }
    }
}
console.log(regularuser.fullname.firstname,regularuser.fullname.lastname)

//assignment of two obj values into third one

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
//const obj3=Object.assign(obj1,obj2)   //const target_object = object.assign(0bject1,object2)
//console.log(obj3)
 
//also use spread method
//like

const obj3={...obj1,...obj2}   //spread operator(...)is used here
console.log(obj3)

//objects in array as element
const users=[
     {
        id:"1",
        name:"arya"
    },
    {
        id:"2",
        name:"ankit"
    }
]
users[0].name
console.log(users)   
console.log(users[1])


console.log(Object.keys(regularuser)) 
console.log(Object.values(regularuser))
console.log(Object.entries(regularuser))  //will give all key : value pair in a array , makes the every key value pair an array 

  console.log(tinderUser.hasOwnProperty('lockin'))   //hasOwnProperty  ->>is used to check given property belongs to the object or not 
