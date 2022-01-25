/**
 * When you nest a function inside another function as an argument,
 * that's called a callback.Then you can also call that nested function
 *  in another function.
 */

// for example 

function One() {
    console.log('hye this One');
}
function Two(callOne){
    callOne(); // calling the One() by reference
    console.log('this is Two');
}

// calling the Two()
Two(One); // pass reference of One here

// more example 

let order=(callProduction)=>{
    console.log('order placed , please start the produnction.');
    callProduction();
}


order(
    // passing an arrow function- produnction
    ()=>{
    console.log('produnction is started');
   }
);