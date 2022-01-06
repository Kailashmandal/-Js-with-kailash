/**
 * Closures : is combination of the function and the environment within that function is declared
 *   the environment consists of any no. local variables that were in scope at the time the closure was created.
 * 
 *     *a function can access all the global and local variable but not other function local variables.
 * 
 *     *Variables created without a declaration keyword (var, let, or const) are always global,
 *      even if they are created inside a function.
 * 
 *     Lifetime of variables : 
 *     Global variables live until the page is discarded, like when you navigate to another page or close the window.

        Local variables have short lives. They are created when the function is invoked, 
        and deleted when the function is finished.

 */

let x=7;
function myFunction(){
    let y=9;
    z=0;

    /** myFunction can access x,y,z ,k even k is created after it */
    console.log(x);
    console.log(y);
    console.log(z);
    console.log(k);
}
k=77;

 function myFunc(){
     // z can be accessed by myFunc because z is declared without the keyword let or var , const
     console.log(z);
 }
myFunction();
myFunc();

/**
 * Nested functions :js support nested functions that is function inside a function.
 * 
 *  nested function can asscess all the vaiables of above function but above function can not access them
 */

function add(){
    let counter=0; // counter variable
    function plus(){
        /** nested function accessing counter variable of add function */
        counter+=1; // this will increase the counter
    }
    plus(); // calling plus function

    return counter; // it will return 0
}
var sum=add();
console.log(`sum is ${sum}`);