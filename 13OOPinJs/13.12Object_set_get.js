//rare and weird 

const User = {
    _email: 'h@hc.com',     //defining private property 
    _password: "abc",

//get and set  email ko method ki tarah nhi property ki tarah le rhe hainn
    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)   //factory function i.e create(<on which basis object has to create , i.e user here as refence  >)
//Ek naya object banao jiska prototype User ho.

/*
in memory : User
│
├── _email = "h@hc.com"
├── _password = "abc"
├── get email()
└── set email()

        ▲
        │ Prototype (__proto__)
        │
tea

*/
console.log(tea.email);

//yaha par toh  koi email property nahi hai , toh accesss kaise ho rha hai 


/* 
flow of excution

Pehle tea me dhundta hai
tea

email ❌ nahi mila

Fir prototype me jata hai

User X

email getter ✔

Getter execute hota hai

return this._email.toUpperCase()

Ab yaha ek important baat:

this kaun hai?

👉 this = tea

Kyuki getter ko call kisne kiya?

tea.email ne

Isliye

this === tea

Ab JS dekhta hai

 :=> this._email

Tea ke andar _email nahi hai.

Fir prototype me dekhta hai

User._email

mil gaya

"h@hc.com"

uppercase karke return

H@HC.COM

*/


/* Important points 

Getter/Setter sirf class me hi nahi hote.
Ye Object Literal me bhi define kiye ja sakte hain.
Object.create() se prototype inheritance hoti hai.
Getter/Setter prototype ke through bhi inherit hote hain.



Object.create(obj) → obj ko prototype bana kar naya object create karta hai.
tea ke paas initially apni properties nahi hoti.
Getter/Setter bhi prototype se inherit hote hain.
Getter me this us object ko refer karta hai jisne property access ki (tea), na ki prototype (User) ko.
Agar setter chale aur property assign kare, to nayi property tea object me create ho jati hai.

*/