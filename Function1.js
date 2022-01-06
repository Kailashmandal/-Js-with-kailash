// Calling a function inside the objects
// suppose we have an object with function fullName
const person={
     firstName: "kailash",
      lastName : " mandal",
      fullName : function(){
          return this.firstName+this.lastName ;
          /** in javascript 'this' is a keyword that is used to point to the object that owns the current code .
           * and this how wer can have a function inside the objects
           */
      },
      // we can have more functions like :-
      fname : function(){
          return this.firstName;
      },

      address:function(city , state){
          console.log(this.city+this.state);
      }

}

const person1={
    firstName:"xyz ",
    lastName:"pqr",
    city:"faridabad",
    state:"haryana"
}
const person2={
    firstName:"hhh ",
    lastName:"ooo"
}
console.log(person.fullName()); // for person object full name 

/**
 * we can use call() method for calling the function in other objects
 * 
 *    syntax :   FunctionObjectName.FunctionName.call(our objectName);
 */
person1_name = person.fullName.call(person1);
console.log(person1_name);


/**
 * using apply function - apply() working is same as call() but in arguments apply takes arguments as array 
 * but call take seprately.
 * 
 *
 */

person2_name=person.fullName.apply(person2);
console.log(person2_name);

