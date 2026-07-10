
//fetch API merged with 01 feb 2022 with Node.js
//intially xmlhttprequest was designed to fetch xml data 
//in 2015 fetch APi launched as modern successor of xmlhttprequest
//browser fetch api implementation is depenent on a browswer based web stream API and the AboryController , tab node,js ne bola ki ham khud likhenge apni webstream api  

/*
fetch() is a built-in JavaScript function used to send HTTP requests (like GET, POST, PUT, DELETE) to a server and it returns a Promise.

=>fetch() is a browser/JavaScript API used to make network (HTTP) requests to a server. It returns a Promise that resolves to a Response object
*/


//fetch prommises only rejcts a network e rror is encountered (which is usually when thwere is a permission issue or similar )
//A fetch() promise does not  reject on HTTP error ( 404 ,etc) //error code response me aayega , jab request kar hi nhi payega tbhi reject hogfa 
fetch ('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json()

})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))


//fetch() browser me network request karta hai.
//  Response aane par uska .then() callback Microtask Queue me jata hai, 
// jabki setTimeout() ka callback Task Queue me jata hai.
//  Event Loop hamesha pehle Microtask Queue ko execute karta hai, 
// isliye Promises (fetch, .then) generally setTimeout se pehle execute hote hain.



//how fetch request processed  : 

// do part me kaam karta hai   1.  DATA => variables me space reserve krne ke liye  i.e in onfulfilled(resolve) and onrejection(rejection)
//                              2. web browser/node ki api handle karne ke liye   -> network request -> response aaya kch wo jayega onfulfilled me jayega chahe error code hi generate ho ,  nhi toh rejct hoke onrejection me jayega  

//                        Data fulfill hoti hai onfulflled and on rejection function se , 
//                          global memory me data jake response deta hai 


/* 
fetch(url)

↓

Browser request bhejta hai

↓

Promise return hota hai

↓

Promise = Pending

↓

Server response

↓

Promise = Fulfilled

↓

Response Object

↓

response.json()

↓

JavaScript Object

↓

Use data





fetch() turant data return nahi karta; 
wo ek Promise return karta hai. Browser background me network request karta hai.
 Jab response aa jata hai, Promise resolve hota hai aur hume Response object milta hai.
  Uske baad response.json() se response body ko JavaScript object me convert karte hain.
*/