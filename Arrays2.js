/**
 * Arrays methods in js 
 */
/** push() method in arrays 
 *  it is used to push an element at the back of the array
*/

var array=['body' ,'ears' ,'eyes' , 'legs' ,'hands'];

array.push('fingers');

console.log('array is ' ,array);

array.pop();
// will pop the last element

console.log(array);
array.push('fingers');

/**
 *  .delete() method leaves an empty space behind it is better to use the shift() or pop() method
 */
delete array[array.length-1];
console.log("now arrray is " , array);

/**
 * Merging two arrays : use .concat() method
 */

const hrr=[1,2,3,3,4];
const krr=[7,8,9,0];

const arr=hrr.concat(krr); // this will append the krr to hrr array and give a new array

console.log('arr is ' , arr);

// concat can take more than one argument as well as value
const newArr=arr.concat(hrr ,'kailash' , krr); // everything will be appended 

console.log('newArr is ' ,newArr);

/**
 *  Slice(start pos , end pos.) methods
 * 
 * start position is inclusive and end position is excluded
 *  return the new array between a range 
 */

console.log(
    // this gonna print 2 , 3 ,4 
[1,2,3,4,5].slice(1,4)
);

/**
 * splice(start pos , count of element , '"over required inputs one or more than one" );
 * it's edit the original array
 */

array.splice(1,2, "hye this splice method" , "and started from pos 1 and deleted 2 elements " , 'and added three lines');

console.log("array is " , array);
/**
 * toString() converts the js array to comma seprated arrays
 */

console.log(krr.toString());

// sort() method to sort the array 
krr.sort();
console.log('sorted krr is : ' , krr);
// sort function is not  simple as you think because its sort the array on string bases 
// it means that it thick every element is tring so '100 ' is smaller than '25'  because '2' is greater than '1'

// we caan solve this problem passing a compare function to sort function

FFF=[2,44,100,55];
FFF.sort((a,b)=>a-b)
/**OR
 * 
 *            FFF.sort(function(a,b){
 *           return a-b;}
 *           )
 */

console.log(FFF);
/**
 * 
 * reverse the array using rverse( ) method 
 */

krr.reverse();

console.log('revrsed krr is ' ,krr);

/**
 *  fill( ) function syntax :   .fil( "any value " , starting index) 
 * 
 *  it modifies the actual array
 */

const  l=[1,2,3,4,5,6,,6,7,7];

console.log( l.fill("hye" ,3) );

/**
 *  filter( ) function syntax:   filter( call back function )
 * 
 * it give new array
 */

k=[5,5,,6,6,8,9];
const result =k.filter( ( num)=>  num%2===0 );

console.log(result);