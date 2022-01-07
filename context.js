/**
 * Date: 7-jan-2021
 * 
 * Scope/context in javascript : Scope determines the accessibility (visibility) of variables.

 block scope : { } a block in js have also scope and can not be accesed by other var present outside 

 local scope : a variable decalared in the function can only be used in the function called function scope

 function scope : each function creates its own scope other variable present outside cannot access them called function scope.

 Global scope : a variable decalared outside a function or without the var , const or let keywhere in the programm is global 
             varibale or it is in the global scope

 *    
 * 
 */

             /** Understanding the scopes */

// let a have function and call it before after its decalaration

sayHye(); // call before function definition

function sayHye(){
    // this function is present in the global context and can be accessed in the programm even before its decalaration
    console.log("hye");

}

sayHye() // calling after definition of function

// both will give same output

// let create a variable and function
var num=88;
function printNum(){
    console.log("num of printNum: "+num);
}

// lets call it 
printNum();
// it prints the num

// let create another function with a variable num
function printNum2(){
    var num=99;
    // now printNum2 doesn't care about num present outside of it though it can access it as well
    console.log("num of printNum2 is : "+num);
}
// lets call this function
printNum2();

// but num for global context is same 88
console.log("num for global context is : "+num);


/** Now when we decalare function as variable it actuall behave like variables 
 * 
 *  Execution context : 
 *           execution is programming statement context like block , function contexts .
 * 
 *   1. variable objects
 *    2. this keyword
 *    3. scope chain
 * 
 *   execution context rules :
 *               1.  function declarations are scanned and made undefined.
 *                                                                  : this means we can access function from anywhere
 * 
 *               2. variable declarations are scanned and made undefined .
 *                                                                 : this means variable before its declaration is undefined
 */                
 /**
  * Decalaring function as variable : we can use function as variable
  *         
  *            synntax : 
  *                   var name_of_function = function(arguments){
  *                                // body
  *                                             }
  */
 
 // calling before declaration of sayBye()
 //sayBye('rahul') // this will show sayBye is not function because a variablish like function is made undefined

 var sayBye=function(a){
     console.log("Bye "+a);
 };
 
 // calling after declaration
 sayBye('kailash'); // this will print result

 /**
  * now suppose we have a variable and want to access it before its declaration
  */

console.log("accessing name before declaration : "+name); 
// here js knows that there is a variable name but it will made it  undefined

 var name="kailash";
 // trying to access after declarations
 console.log("name after declaration : "+name);

 function printName(){
     var name ="mandal";
     console.log(name);
 }

 printName()
 // when we do this an execution context is loaded over global context

 console.log(name);
 // another execution context is loaded below the printName() context and above the global context.

 /** Execution context is executed and get poped from the stack memory */