let randomNumber=parseInt(Math.random()*100+1); //math.random se values float me aati rahengi , wo bhi 0to1 ke bich ki , multply by 100 make it from 0 to 100 , and +1 make it 1to100, parseint make it oonly int 

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi= document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p=document.createElement('p')

let prevGuess=[]         //array rahega jisme saaare guessNumbers store karenge 
let numGuess=1              //kon sa guess hai 

let playGame = true //jo allow karega ki game khelna hai 

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()  //idhar udhar le jaane se rokega 
       const guess= parseInt(userInput.value);
       validateGuess(guess);

    })
}

function validateGuess(guess){
    //input guess number is valid or not  ,for ex:  1 to 100 hai ya nhi
    if(isNaN(guess)){    //nan is not a number
        alert('please entere a valid number')
    }else if(guess<1){
        alert('please entere a valid number i.e more than 1')
    }else if(guess>100){
        alert('please enter a valid number i.e less than 100')
    }else{
        prevGuess.push(guess)    //agar valid hai toh array me daal do
        if(numGuess===10){
            displayGuess(guess)
            checkGuess(guess)
            displayMessage(`Game Over .  Random number was ${randomNumber}`)
            endgame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    //message print kareyange with help of displayMessage() , ki value random number ke equal toh nhi hai or low or hi\
    if(guess===randomNumber) {
        displayMessage(`You Guessed it Right!`)
        endgame()
    }else if(guess<randomNumber){
        displayMessage(`Entered Number is Tooo low`)
    }else if(guess>randomNumber){
        displayMessage(`Enterd number is Too high`)
    }

}

function displayGuess(guess){
//values ko clean kaerga , array ko update karega , guess limmit update karega 

userInput.value = '' //cleanup method
guessSlot.innerHTML +=`${guess}  `      //as prevoius guess me dikhega screen par
numGuess++; 
remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    //message attach ho jayega aaur usko print kr dega 
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}


function endgame(){    //game khtm ho jayega   //jitne bhi input field hain sabko clean kar do aaur kahi koi value add na ho paaye 
    userInput.value=''
    userInput.setAttribute('disabled','')     //disable ho jayeag 
    p.classList.add('button')
    p.innerHTML =  `<h2 id ="newGame"> startNewGame</h2>`;
    startOver.appendChild(p)    //resultParas wali class me add ho jayega paragraph
    playGame=false;
    newGame()
}

function newGame(){ ///naya game shuru ho jayega 

    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
         prevGuess=[]
        numGuess=1  
        guessSlot.innerHTML='';
        remaining.innerHTML=`${10-numGuess}`;
        userInput.removeAttribute('disabled')
        startOver.removeChild(p);           //naya game start hone par  startOver ne jo new para add kiya tha new game wala wo hat jaega , jab game end hoga tbhi aayega wo 

        playGame=true
    })

}

