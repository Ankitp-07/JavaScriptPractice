 //M-1
 
 //console.log(addone(3))  <---ye yaha kar skte hainnn 
 function addone(num){
    return num+1
 }
 console.log(addone(3))   //is case me isko pahle bhi call kar skte hn 



//M-2

//console.log(addtwo(2))     <<---- ye yaha declare nhi kar skte , give error
 const addtwo = function(num){       //function declare toh hua usko hold kiye hn ek variable me i.e addtwo
    return num+2
 }
 console.log(addtwo(9))