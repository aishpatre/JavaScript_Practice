// // object.prototype
// // Person.prototype


// // perdon constructor

// function Person(fName,lName,dob){
//   this.fName = fName;
//   this.lName = lName;
//   this.birthday = new Date(dob);
// //   this.calculateAge = function(){
// //     const diff = Date.now() - this.bdyy.getTime();
// //     const ageDate = new Date(diff);
// //     return Math.abs(ageDate.getUTCFullYear -1970);

// //   }
// }
// //calculate age
// Person.prototype.calculateAge =  function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);

//   }

// // get FullName
// Person.prototype.getFullName = function(){
//     return `${this.fName} ${this.lName}`
// }

// // grts Mrried

// Person.prototype.getsMaried = function(newLname){
//     this.lName = newLname;
// }
// const john = new Person('John' ,'doe' ,'8-12-90');
// const mary = new Person('Mary','Jonson','March 20 1978');

// console.log(mary);
// console.log(mary.calculateAge());
// console.log(mary.getFullName());
// mary.getsMaried('smith');
// console.log(mary.getFullName());
// console.log(mary.hasOwnProperty('fName'));


// // Prototype Inheritance 
// function Person(firstName,lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }

// Person.prototype.greeting = function(){
//     return `hey there ${this.firstName} ${this.lastName}`;
// }
 
// const person1 = new Person('john' ,'doe');
// console.log(person1.greeting());

// //customer constructor

// function Customer(firstName,lastName,phone,membership){
//     Person.call(this,firstName,lastName);
//     this.phone = phone;
//     this.membership = membership;
// }
// // Inherit the person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// //Make customer.prototype return Customer()

// Customer.prototype.constructor = Customer;

// // customer greeting

// Customer.prototype.greeting = function(){
//     return `hey there ${this.firstName} ${this.lastName} wellcome to TCS !!!`
// }

// // create customer
// const customer1 = new Customer('john','doe' ,'666-6666-666','standard');
// console.log(customer1);
// console.log(customer1.greeting());



// --------Object.create()--------

const personPrototypes ={
    greeting:function(){
        return `Hello there ${this.fName} ${this.lName}`;
    },
    getMarried:function(newLname){
        this.lName =newLname;
    }
}

const mary = Object.create(personPrototypes);
mary.fName = 'Mary';
mary.lName = 'Johnson';
mary.age = 34;
mary.getMarried('Thomson');
console.log(mary.greeting());


const brad = Object.create(personPrototypes,{
    fName:{value:'Brad'},
    lName:{value:'traversy'},
    age:{value:46}
})
console.log(brad);
console.log(brad.greeting())