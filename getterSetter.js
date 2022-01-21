/**
 *  get syntax binds the property to a function that when called property can be looked up.
 * 
 * set syntax is used for binding property to function that is called when user wants to set the property value.
 */

const language={
    log:['a' ,'b' ,'c'],

    get alpha( ){
        if(this.log.length !==0){
            return this.log[this.log.length-1];
        }
    }
   
}

console.log(language.alpha); // remember alpha is property now

const books={
    names: ['k' ,'m' ,'n'],
    
    set setName( name ){
   this.names.push(name);
    }
}

//remember setter setName is property 
books.setName='o' // this wil push o at end of names

console.log(books.names);