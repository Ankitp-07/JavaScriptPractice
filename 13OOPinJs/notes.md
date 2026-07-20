# JS and Classes

Yes, JavaScript has classes, but there's an important point.

JavaScript classes are syntactic sugar over prototypes.

Simple words:

ES5 (before 2015): Objects were created using constructor functions + prototypes.
ES6 (2015): The class keyword was introduced to make OOP code easier to read and write.


## object : collection of properties and methods
            e.g  toLowerCase


## why use OOP    
OOP in JavaScript is used to write reusable, organized, maintainable, scalable, and real-world-oriented code by using objects and classes.

Class/Object → Data ko represent karega (User, Product, Car, Student).
Service → Us data par operations karega (Create User, Deposit Money, Login, Send Email, Fetch Data).


## parts ofOOP
object literal is used

    -constructor function
    -prototype
    -classess
    -instances(new, this)

## 4 pillars 
        Abstraction
        Encapsulation
        Inheritance
        Polymorphism
        


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/