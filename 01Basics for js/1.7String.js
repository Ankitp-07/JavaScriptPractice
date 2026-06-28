const name ="ankit"
const repocount = 50
console.log(name + repocount + " value") //ineffienct way 

//another efficient way 
console.log(`my name is ${name} and my repo count is ${repocount}`);

//one more way of declaration

const gamename = new String('ankit')
console.log(gamename[4])
console.log(gamename.__proto__)   // create an object 
console.log(gamename.length)    //length of string gamename
console.log(gamename.charAt(3))    //index no pe kon sa charcter hai
console.log(gamename.indexOf('t'))   // provide index no of given letter 
console.log(gamename.toUpperCase())  //convert whole string in capital letter


const newstring=gamename.substring(2,4)   //upperbound excluded
console.log(newstring)


const anotherstring = gamename.slice(-3,-1)   // slice also use for negatie numbers 
console.log(anotherstring)

const class1 = "   cse1  "
console.log(class1.trim())    //remove whitespaces
  

console.log(class1.replace('cse','IT'))    //replace the vlaue of any var
console.log(class1.includes('cse'))


const test_split = "i am a god boy,i am  in imsec , i can do it"
console.log(test_split.split(','))
