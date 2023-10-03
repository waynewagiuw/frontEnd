//JavaScript Function

// function greetings() {
//   return "Hello";
// }
// const age = 17; //Global

// const greetings = function (fullName) {
//   //parameter
//   console.log(age); //Local
//   const job = "teacher";
//   if (job === teacher) {
//     const address = "Manado"; //Blok
//   }
//   console.log(address);
//   return "Hello";
// };
// // console.log(job);
// console.log(greetings("John")); //argument

//Anonymous Function
//IIFE (Immediately Invoked Function Expressions)
(function () {
    console.log("Hello IIFE");
  })();
  
  //Callback Function
  function createGreetings(name, callback) {
    const greetings = "Hello " + name;
    callback(greetings);
  }
  
  createGreetings("John", function (greetings) {
    console.log(greetings);
  });