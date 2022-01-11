var isTimeForCookiesAndMilk= function( date){
  if ( date.getDate( )==24 && date.getMonth( )==11){
      return true;
  }else{
      return false;
  }
}

console.log(   isTimeForCookiesAndMilk  (new Date(2022, 10,25) )   );

console.log( isTimeForCookiesAndMilk ( new Date( 2024 , 11, 24))  );


//  question Node. 2
function matchHousesSteps( house ){
    // one house is made up of 6 steps then 
    if(house===1){
        return 6;
    }else{
        // for greater no of houses
        return 6+(house-1)*5 ;
    }
}

console.log(matchHousesSteps(4));  // right solution

/** question no. 3
left shift operator  (  << )  is similar to mutliplying a number by power of 2's   
for example : 10<< n = 10*2^n  ;
*/

console.log(10<<2) // will give 10*2*2=40 ;
/**
 * Math.pow(a ,b ) = a^b ;
 */
console.log(Math.pow(3,3));


var leftShiftOperator=function( num1,num2 ){
    // left shift operator working function.
    return num1*Math.pow(2,num2);
}

console.log(leftShiftOperator(-32,2));

/** question no. 4 return max and minimum element of an array in an array */
var result=[];
var minMax=function( array){
    var min=array[0] ;
    var max=array[0] ;
    array.forEach( (element)=>{
        // if all element is unique
        if(element>max){
            max=element;
        }else{
            min=element
        }
    }
    )
    result.push(min);
    result.push(max);
}
minMax([1,2,3,4,5,6]);
console.log(result);