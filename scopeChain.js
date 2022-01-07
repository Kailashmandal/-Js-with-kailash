/**
 * Scope chaining : it is like younger can ask something from elder but elder ask ask or access the younger's things.
 * 
 *  this is scope chaining.
 * 
 * 
 */

var name ="kailash"
// this is global variable the eldest guy

console.log("line no. 12 ", name);

function printName(){
   
    // this guy doen't have name so it will ask from global scope for 'name' variable
    console.log("line no. 16" , name);
   
    function printName2(){
        // this function/guy  also doesn't have 'name' variable so it will ask from just above scope i.e. printName() then it 
        //  will ask to global context
         console.log("line no. 20 ",name);
    }

    printName2();
}

printName();