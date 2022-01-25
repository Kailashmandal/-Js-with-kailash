/**
 * javascript is single threaded language it means it executes every process one by one and line by line 
 *  if one statement is not finished its execution then other have to wait for its execution over.
 * 
 * but it can make web pages unresponesive while fetching the data from an API that may take 
 * some time to finise.
 * 
 * asynchronous : is way of programming where each tasks executes indipendently and 
 *  different task can run simultenously.
 * 
 */

// example of synchronous programming or system

function x(){
    console.log('hye this is x');
}

function y(){
    console.log('hye this is y');
}

// we call first x and then y
x();
y();

// output will be serially --- first execution of x and then execution of y
// move to AsyncJs now
