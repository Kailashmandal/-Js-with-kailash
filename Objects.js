var user={ 
      firstName: "kailash" ,
      lastName: " mandal" ,
      role: "backendDevlepor",
      loginCount:32 ,
      loginFromGoogle: true
}

/**access the value from object */

console.log(user.firstName);

//OR
console.log(user["lastName"]);

user.loginCount=45; // we can also update the values
console.log(user.loginCount);
console.table(user)

var Iphone ={
    model:"pro model",
    name : "Iphone 12 pro",
    size: "6.7 inches",
    price :"kidney"
}
console.table(Iphone)

//we can also use console.table( ) to print array as table
array=[1,44,55,66,77,90]
console.table(array);

var course ={
     name : "kailash" ,
     role :"consumer",
     isLoginByGoogle: true,
     courseList : [ ] ,
     buyCousre : function(courseName ){

         this.courseList.push(courseName);

     },

     getCourseCount : function( ){
         return `${this.name} is enrolled in ${this.courseList.length} .`
     },

     userInfo : function( ){
         return ` ${this.name} have enrolled in ${this.courseList.length} course : ${ this.courseList}`
     }
};

console.log(course.getCourseCount( ));
course.buyCousre("NodeJs development ")
console.log(course.getCourseCount( ));
console.log(course.userInfo( ));
course.buyCousre("Java Spring MVC ")
course.buyCousre("Java Spring Boot ")
console.log(course.userInfo( ));

