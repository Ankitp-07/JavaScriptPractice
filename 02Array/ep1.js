//Array 


// let A= ["ankit",4,4.9]   //mixed type
// console.log(A)


// //Array methods 
// // 1
// A.push(6)      //add into array
// console.log(A)
// console.log(A.pop())   //pop element and print

// //2
// let A1=[12,23,23,43,90]
// A1.unshift(8)   //value will insert at start
// A1.shift()   //delete which comes at unshift 
// console.log(A1)

// //3
// console.log(A.includes(12))   //not exist in array A so give false
// console.log(A1.includes(12))   //exist in array A1 so give true

// //4
// console.log(A.indexOf(4))

// //5
// console.log(A1.join())  //Array  convert into ->>>  (withsepartor)String 

//6  slice,splice
let A3=[12,3,5,6,7,8]
console.log("patel",A3)
const my1=A3.slice(1,2)   //give a subarray from index no 1 to 3(excluded)
console.log(my1)

const my2=A3.splice(1,2)    //last wala include rahega  
console.log(my2)             //one most important differnece between slice and splice is that , original array also will manipulate in splice ( elements comes in splice will removed from original array)