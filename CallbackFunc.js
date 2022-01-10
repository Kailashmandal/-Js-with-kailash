/**
 * Arrow function and Callback function
 * 
 * 
 * we can declare functionas default syntax or by arrow functions .
 */

var isEven=(element)=>{  
     return element%2===0;   // return true if element is even else false
}

var is=[8,6,10,8].every(isEven);
console.log(is);

// writing call back functions in another function

/**
 *        syntax : 
 * 
 *             ( parameters ) => {  return something ; }  
 *                        
 *                         OR if we are not returning anything 
 *           (paramete) => ( console.log()  or any statements )
 */                      

var flag=[4,6,,6,10,2].every(  (e)=> { 
    return e%2===0 ; // return true and falsee wether every element is even or not
}  )

//           OR 
// var flag=[4,6,,6,10,2].every(  (e)=>  
//     e%2===0 ; // return true and falsee wether every element is even or not
//  )

console.log(flag);