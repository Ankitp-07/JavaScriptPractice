//destructuring an object 


const course={
    coursename:"jsin hindi",
    Price:"999",
    courseinstructor:"chaiwithcode"
    }
    //console.log(course.courseinstructor)   //M-1

   const {courseinstructor}=course    //M-2
   console.log(courseinstructor) 



const{courseinstructor:instructor}=course      //courseinstructor name jada bada lage ya accha na lage tog dusre naam se bula skte i.e instuctor <--- wohi kiya gya hai , jo nya name hai usi ko call bhi karenge print ke liye 
console.log(instructor)



//Json API      ->> javascript object notation


// {
//     "firstname":"Arya",
//     "lastname": "patel",

// }


















