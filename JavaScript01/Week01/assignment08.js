// Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
let day = "Monday";
let date = 13;
let info = true;
let months= ["january", "february", "march", "april"];

console.log("The value of my variable day is: " + day);
console.log("The value of my variable date is: " + date);
console.log("The value of my variable info is: " + info);
console.log("The value of my variable months is: " + months);

console.log("The type of variable day is a string");
console.log("The type of variable date is a number");
console.log("The type of variable info is a boolean");
console.log("The type of variable months  is an object (specifically, an array).");

console.log(typeof(day));
console.log(typeof(date));
console.log(typeof(info));
console.log(typeof(months));

if ( day === date ) {
    console.log(" SAME TYPE");
  } else {
    console.log("DIFFERENT TYPES");
  }
  
  if ( day === info ) {
    console.log(" SAME TYPE");
  } else {
    console.log("DIFFERENT TYPES");
  }
  
  if ( day ===  months) {
    console.log(" SAME TYPE");
  } else {
    console.log("DIFFERENT TYPES");
  }
  
  if ( date ===  info) {
    console.log(" SAME TYPE");
  } else {
    console.log("DIFFERENT TYPES");
  }

  if ( date ===  months) {
    console.log(" SAME TYPE");
  } else {
    console.log("DIFFERENT TYPES");
  }

  if ( info ===  months) {
    console.log(" SAME TYPE");
  } else {
    console.log("DIFFERENT TYPES");
  }
