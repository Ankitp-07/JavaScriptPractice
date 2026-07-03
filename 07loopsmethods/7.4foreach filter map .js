//for each loop ----->>>>> in high order function 

const coding=["js","ruby","java","python"]
coding.forEach(function (val) {                             //callback leta hai
    console.log(val)
} )

//forEach with arrow function
coding.forEach( (item) => {
    console.log(item)
} )


//function  pass on in forEach loop
function printme(item){
    console.log(item)

}
coding.forEach(printme)

//object in array as element

const Mycoding =[
    {
       languagename:"javascript",
       langfile:"js"
    },
    {
        languagename:"java",
        langfile:"java"
    }

]
Mycoding.forEach( (item)=>{    //har object ko item hi bola hai hmne yaha

    console.log(item)
    //console.log(item.languagename)
    //console.log(item.langfile)


}
)

//foeeach function doesnot return value e.g

const lang=["js","ruby","java","python","cpp"]
const values=lang.forEach( (item) =>{
    console.log(item)
    return(item) //;foreach function doesnot return value
}

)
//console.log(values)     




//Filter operation        --->>>it return the value 
const myNums=[1,2,3,4,5,6,7,8]

// const newnums=myNums.filter((num) => num>5)            //ye bhi call back hi leta hai      syntaxx --->  //filter(() => {})  //filter ke andar arrowfunction
// console.log(newnums)
const newnums=myNums.filter((num) => {
    return num>4})    //return is used to give or return the value after filter is used

console.log(newnums)

//M-2
const newnums1=[]
myNums.forEach((num)=>
{
   if(num>4){
    newnums1.push(num)
   } 
})    
console.log(newnums1)


//above both are doing same thing , differnetiable by their effcieny radability 

const Books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1991 }
];
const userbooks = Books.filter( (bk)=> bk.genre==='History')
console.log(userbooks)      //gives two object as object 
const userbooks1 = Books.filter( (bk)=> bk.publish==1986)
console.log(userbooks1)      //gives one object as object 
// const userbooks1 = Books.filter( (bk)=> {    <<<----- scope{ } is opened so return statement will use  insde scope like 
// return  <-----  
// bk.publish==1986                             
//}
// console.log(userbooks1)      


const userbooks2 = Books.filter( (bk)=> bk.publish==1986 && bk.genre==='History')
console.log(userbooks2)   //it gives  one object which satisfies the condition of both as output 