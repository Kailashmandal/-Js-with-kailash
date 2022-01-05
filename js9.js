/**
 * Objects is Js : Objects in js are variables but it can more than one named value and functions also.
 * 
 *  in js almost everything is objects 
Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Date is object ,Array is object ,Maths is object etc. etc.

  syntax of decalaring an object is :

           const Object_name ={
               attribute1 : value ,
               attribute2 : value ,
               attribute3 : value ,
               // you can add more .
           }
 it is similar as Hash tables in C
 */

const person={
    // suppose what attributes can a person have name , height ,weight, age etc. we will make object with this 
    name:"kailash",
    age : 21,
    heigth:"5.5 feet",
}
// accessing the attributes of objects
/**
 * we can use . operator or 
 * square brackets [] for accessing the values of attributes
 */
person.eyeColor="blue";
person.name="mandal"
console.log(person.age+" "+person.name+" "+person.eyeColor);

/**
 * we can also declare it once and then add values
 */

const programmer={} 
        //  OR
const coder= new Object()

programmer.firstLanguage="c++"
programmer.secondLanguage="java"
programmer.thirdLanguage="javascript" // etc.

console.log(programmer.thirdLanguage);

coder.firstLanguage="c++" // we can add more 
console.log(coder.firstLanguage);


// if we do something like this and try to change an attribute
const x=y={
    school:"NV",
    area :"FBD"
}

// then both objects attribuites gets changed

x.school="AVM" // y's school also gets changed to "AVM"
console.log(y.school);
