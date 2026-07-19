function User(email, password){
    this._email = email;
    this._password = password


    //customisiation of the property , ki change vaigrah kar skte hain ya nahi 
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })


    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })

}

const test= new User("code@chai.com", "chai")

// console.log(test.email);
// console.log(test.password);
console.log(test.email);
console.log(test.password);  //CHAI
console.log(test._password);  //chai
console.log(test);   