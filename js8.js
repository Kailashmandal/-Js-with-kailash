/**
 * Js arguments :    JavaScript functions have a built-in object called the arguments object.

The argument object contains an array of the arguments used when the function was called (invoked).

This way you can simply use a function to perform different operations.
 */


function findGreatest(){
    var max = -Infinity;
    for(let i =0 ;i<arguments.length;i++){
        // arguments object basicallyu take all of argument that we ahve passed into the function while calling
        if(max <arguments[i])
            max=arguments[i] ;
    }

    return max ;
}

max=findGreatest(1,22,66,11,69,0,999);
console.log("the greatest is : "+max);

// one more example
function sumAll(){
    var sum=0;
    for(let i =0;i<arguments.length;i++){
        sum+=arguments[i]
    }

    return sum ;
}

sum=sumAll(55 ,99,00,88);
console.log(sum);