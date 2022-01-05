/**
 * Operators in js - these are reserved symbols and characters that are used to perform different operations 
 * between the variables.
 * 
 * Types -   arthematics operator , logical , comparision operators , assignment operator.
 * 
 * arthematic are  :   - , +, *, % , / 
 * comparision are : (equal to ==) , (equal value equal type ===), (not equal !=) , (not equal value and not type !==),
 *                    (greater than equal to >=) etc.
 * 
 * logical are : (&& and ) , (|| OR ) , (! not)
 * 
 * assignment is =
 * 
 * bitwise operators we gonna see later
 */

// let demonstrate these
var x=66;
var y=55;
var flag=true;
var isValid="yes";

console.log(`
  Is x is greater than y ? : ${x>y}
  Multiplication of x and y : ${x*y}
  Division of x and y is : ${x/y}

  `);

// assigning value of x*y to x
x*=y; // we can do same thing we other arthematic operators as well
console.log("x is : "+x);

/**
 * Conditionals in js .
 * 
 * conditional statement are used to perform different task in different conditions or checking points
 * 
 * these are : - if-else statement , switch cases
 * 
 * if-else statement : 
 *  
 *    if statement used to perform task when a specific condition is true otherwise else block get executed
 *     
 *    syntax of else if is :   
 * 
 *  if (condition) {
               //  block of code to be executed if the condition is true
      } else {
              //  block of code to be executed if the condition is false
     }

      switch statement : is used to perform different operations based on different conditions
      
          syntax :   
            
            switch(expression){

                case 1 :{
                    // block of code 
                    break;
                }
                case 2 :{
                    // block of code 
                    break;
                }
                case 3 :{
                    // block of code 
                    break;
                }
                case 4 :{
                    // block of code 
                    break;
                }
                default{
                    block of code 
                }
            }

    these statements basically use comparision operator for evaluating wether a certain codition is true or not

    some examples of conditional statements
 */

var temparture =35;

if(temparture<25 ){
    console.log("Its cold outside !!");
}
else if(temparture>25 && temparture< 30){
    // we can also use more than one condition with else if(condition) block
    console.log("Its moderate outside !!");
}
else
  console.log("Its hot outside !!"); // you can also skip{} if you will execute only one line of code in a block

  // now tempature is 35 show output will be : Its hot outside !!


  /**
   *  The Date object in js : 
   *     By default Date object will use the browser's time zone and display a date .
   *     
   * we can create date objects using : 
   *              new Date()
                  new Date(year, month, day, hours, minutes, seconds, milliseconds)
                  new Date(milliseconds)
                  new Date(date string)
      constructors .

      soon we will do object and construors .
      example of displaying date using js

   */

const date= new Date();

console.log("date is : "+date);

/**
 * getDay() method that returns the weekday as a number between 0 and 6.
 * 
 * example of switch cases are : 
 */

switch(date.getDate()){
    case 0:
        day="sunday";
        break;
    case 1 :
        day="monday";
        break;
    case 2 :
        day="tuesday";
        break;
    case 3 :
        day="wednesday";
        break;
    case 4 :
        day="thursday";
        break;
    case  5 :
        day="friday";
        break;
    case 6 :
        day="saturday";
        break;
    default:
        day="no a valid day"
}

console.log("day is : "+day);