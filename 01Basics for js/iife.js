//immediately  invoked function expressions (IIFE)

(function chai(){
    console.log("db connected")

})() ;   //<<-- semicolon is must here to terminate first  , then will able tp run
//chai()
 

//(.....

//)  ()


((name)=>{      // <---- argument name is here 
    console.log(`db connected two ${name}`)
})('hitesh')    



/// TWo IIFE will be able to run in single file  when they are  separated or ended by semicolon