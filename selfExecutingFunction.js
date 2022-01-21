/**
 *  self executing anonymous function are functions that executes itself their is no need to call implicitly and have no name as well.
 * 
 *  syntax :   ( function defintion)( ) ;
 */

// as usal function 
function sayHello( ){
    console.log("hello everyone !!");
}

// needed to be called implicityly 
sayHello( ) ;

( function( ){
    console.log("hye everyone !!");
})( ) ;
 // no need to call