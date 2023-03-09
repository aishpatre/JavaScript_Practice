// // //var, let , const

// // var name1 ="John doe";
// // console.log(name1);
// // name1 = 'Steve jobs';
// // console.log(name1);

// // // init var 
// // var greet;
// // console.log(greet);
// // greet = "hey hello";
// // console.log(greet);

// // // letter,undescore,$ are allowed
// // // numbers at start is not allowed

// // // var firstName = "Aishwarya";//camelcase
// // // var first_name = "Shruti"; //underscore
// // // var Firstname ="siddhant";//Pascle case


// // //Let 
// // let name2;
// // name2 = "Girish";
// // console.log(name2);
// // name2 = "vedant";
// // console.log(name2);

// // // const
// // const fruit = "apple";
// // console.log(fruit);
// // //   we can not rrassign const

// // Switches

// const color = "brown";

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'yellow':
//     console.log('color is yellow');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   case 'pink':
//     console.log('color is pink');
//     break;
//   default:
//      console.log("color is not red,blue,yellow or pink");
//   break;
// }

// let day;

// switch(new Date().getDay()){
//     case 0:
//     day = 'Sunday';
//     break;
//     case 1:
//     day = 'Monday';
//     break;
//     case 2:
//     day = 'Tuesday';
//     break;
//     case 4:
//     day = 'wednesday';
//     break;
//     case 5:
//     day = 'Thursday';
//     break;
//     case 6:
//     day = 'Fryday';
//     break;
//     case 7:
//     day = 'Satday';
//     break;
// }
// console.log(`today is ${day}`);


// // Function decorations

// function greet(fname = "john"){
//     // console.log("Hello");
//     return 'hello ' + fname;
// }
// console.log(greet());


// // Function expression 

// const square = function(x = 8){
//     return x*x;
// }
// console.log(square());  

// // property methods

// const todo = {
//     add: function(){
//         console.log('Add todo..')
//     },
//     edit: function(id){
//         console.log(`edit todo...${id}`);
//     }
// }
// todo.delete = function(){
//     console.log("delete todo...");
// }

// todo.add();
// todo.edit(34);
// todo.delete();