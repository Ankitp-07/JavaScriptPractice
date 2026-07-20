
//Object.getOwnPropertyDescriptor(Math)     //object ki hidden chijo ke baare me batati hai  just like here , math 

console.log(Math.PI);
Math.PI=5
console.log(Math.PI);   //change nahi huyyiu \

//over write nahi huyi , 

//kyu  nhi huyi aakhir!!!!


const desc=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(desc)

/* output 

{
  value: 3.141592653589793,
  writable: false,     //hardcoded value false kar rakhi  hai , matlab chnge nahi kar skte hainnnn
  enumerable: false,
  configurable: false
}

*/


//ham khud se aise property daal ke object bana skte hain !!

const chai={
    name:'ginger chai',
    price:344,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai , "name"));

/*
output 

{
  value: 'ginger chai',
  writable: true,
  enumerable: true,
  configurable: true
}

*/


//customising the descriptor  
///chai object ke name element ka property modify karte hain 
Object.defineProperty(chai,'name', {
    writable:false,
    enumerable:false  //issse iterate honi band ho jaati hai matlab loop lagane par ye nhi print hoga , matlab name print hi nhi hoga

})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

/* Output 
{
  value: 'ginger chai',
  writable: false,
  enumerable: false,     //issse iterate honi band ho jaati hai matlab loop lagane par ye nhi print hoga , matlab name print hi nhi hoga 
  configurable: true
}
*/


//now doing this with loop , on whole chai object , which will modify the proprty of each element of the chai object 


for(let [key,value] of Object.entries(chai)){

    //aaab agar chai object ke andar koi ek aaur method/function bana diye tab toh ye fatt jaye , so isko handle karenge if() else laga ke 
    if(typeof value !== 'function'){   //iss condiiton aab iterate ho jayega 
console.log(`${key}: ${value}`);
    }
    }

    /* output 
    price: 344
isAvailable: true

as above the name is modified enumerable : false , so it cannot be iterated means isko print nahi karega 

*/ 
   


/*

Key Points :

Enumerable : Enumerable means kisi object ki property visible hai aur listing (for...in, Object.keys()) me aayegi

iterable : Iterable means object ko ek-ek value ke form me loop (for...of) kar sakte hain


Enumerable refers to whether an object's properties can be listed, while iterable refers to whether an object can be traversed value by value using for...of or similar iteration mechanisms.

*/