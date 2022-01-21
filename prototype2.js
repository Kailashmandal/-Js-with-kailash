
        // // Objects have some inbuilt properties and functions which cames with  "__proto__" keyword  when user cretes an objectrs 
        // /**
        //  * 
        //  *  some of them are : 
        //  *  1 👍 constructor function
        //  *  2 👍 hasOwnProperty( )
        //  * 3 👍 isPrototypeOf( )
        //  * 4 👍 toString( )
        //  * 5 👍 valueOf( )
        //  * 6. 👍 get__proto__( )
        //  * 7 👍 set__proto__( )
        //  * 
        //  *  etc.  etc.
        // * /
         
        /** hasOwnProperty( argument) : 
         * 
         *  it takes an argument that is property name of an object an return true or false whether the proiperty is present or not 
         * 
        */

    var lco={
        firstName : "kailash" ,
        lastName :" mandal",

        //  a get firstName function
        getFirstName : function( ){
            console.log(this.firstName);
        }
        
    }    

    // supose first we want to check whether the firstName is present or notthan access the other functionality of that object

console.log(lco.hasOwnProperty("firstName")); // it should print true

if(lco.hasOwnProperty('firstName')){
    // if firstName property exist than call getFirsName( ) function
 
    lco.getFirstName( );
}

const user=function(name , courseCount){
    this.name=name;
    this.courseCount=courseCount;

    this.getCourseCount= function(){
        console.log(this.courseCount);
    }
}

// suppose we have new object of type user 
kailash =new user('kailash' , 10 );
console.log(kailash);

if(kailash.hasOwnProperty('courseCount')){
    // if courseCount property exist than call getCourseCount( ) function
    kailash.getCourseCount( );
}