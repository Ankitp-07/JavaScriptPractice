// let a =34
// const b=3
// var c=30

// //{  }  ->>> when comes with if , function or loop ,then it is called as scope of that


// console.log(a)
// console.log(b)
// console.log(c)
    ///here it is printing all

// But
 if(true){
     let a =34
     const b=3
     var c=30

 }
//  console.log(a)     //-->> genrate an error due to  a is only defined under only if block
// console.log(b)      //-->> genrate an error due to  a is only defined under only if block
console.log(c)   // var is used for global scope , anywhere can be used this variable 



// 
const a=300
if(true){
     let a =34
     const b=3
     var c=30
     console.log("inner:",a)

 }
 console.log(a)

