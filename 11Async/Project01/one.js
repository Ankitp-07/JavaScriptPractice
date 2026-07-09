//generating random colors

const randomColor =function() {   //random color genrate hoga random hex value se 
const hex ="0123456789ABCDEF"
let color ='#'    //#ffffff  <= aise hi dikhte hain colors , starts from #  , += ka use krke iske andar value daalte rhange 
for(let i =0;i<6;i++){   //

color+=hex[Math.floor(Math.random()*16)]   //randomly genreate index milega aaur usko add karega 
}
return color;
};


// ye bas random values ko dekhne ka example tha : 
// console.log(Math.floor(Math.random()*16));  //0 se 16 tak mil jayegui Kyunki hex me 16 characters hote hain: 0 1 2 3 4 5 6 7 8 9 A B C D E F
                                //Isliye *16 likhte hain, taaki random index 0 se 15 ke beech mile.

                                
console.log(randomColor());   //yaha tak random color generate krne lag gya hai





//now taking button redfernces and adding to start and stop button

let intervalId;  //here it gllobally declared to use in stopchangingcolor
const startChangingColor=function(){
     
    if(!intervalId) {  //intervalId ki value flush karne ke baad ye lagana jaruri hai 
        intervalId=setInterval(changeBgColor,1000);  //function se aab har sec me bg change hota rahega 
    }
    function changeBgColor(){
    //backgrouund ka color change karane ke liye backgorund tak ka access lena oadega 
    document.body.style.backgroundColor = randomColor();
    }
}


//we need refernce for the function of setinterval but it is under the startChangingColorfunction , so we have to take a globally decalred variable ,which store the setinterval refence 
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null; //baar baar intervalId ki value overwrite ho rhi thi , isme flush kar diye iski value 

}

//if(!intervalId) → Ek time par sirf ek interval chalne dega.
//  intervalId = null → Stop ke baad Start ko fir se kaam karne dega.


document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click',stopChangingColor)

