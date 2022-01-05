/**
 * Functions in js : block of code used to perform a specific task again again
 * 
 *  syntax : function keyword followedby func name  for e.g. :
 * 
 *              function name(parameter1, parameter2, parameter3) {
                               // code to be executed
                            }
            
   functions increase the code readability and modulation.
 */


function myFunction(a,b){ // giving parameters to the function
    return a%b ;      // returninh value for function after evaluation
}  
// this function gives remainder of two numbers when we divide a by b

let remainder=myFunction(10 , 6) ; // calling the function and pasing the parameters to it

// printing the remainder
console.log("remainder is : "+remainder);

// we can surely make more and more functions 

function printTable(n){
    // this function will take when number and prints its value
   console.log("table of "+n+" is : ");
    for(let i=1;i<11;++i){
        console.log(n+"*"+i+"="+n*i);
    }

}
printTable(11);

// fehrenheit to celsius
function toCelsius(fehrenheigt){
    return (5/9)*(fehrenheigt-32);
}

let celsius=toCelsius(96);
console.log("Temparture in celsius is : "+Math.round(celsius));