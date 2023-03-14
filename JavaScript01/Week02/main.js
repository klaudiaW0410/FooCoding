// assignment01 - log messages in different languages

console.log("Hello World!"); //English
console.log("Witaj Swiecie!"); // Polish
console.log("Hej världen!"); // Swedish

// assignment02 - using appropriate quotation marks
console.log("I'm awesome");

// assignment03 -declare a variable x with a number
let x;
console.log("The value of my variable x will be: undefined ");
console.log(x);
x = 6;
console.log("The value of my variable x will be: 6");
console.log(x);

//  assignment04 - declare a variable y with a string
let y = "Today is Monday";
console.log("The value of my variable x will be: Today is monday ");
console.log(y);
y = "We start new week";
console.log("The value of my variable x will be: We start new week");
console.log(y);

// assignment05 - round the number  and show highest value
let z = 7.25;
console.log(z);
let a = Math.round(z);
console.log(a);
let highestValue;
if (z > a) {
  highestValue = z;
} else {
  highestValue = a;
}
console.log(highestValue);

//assignment06 - declare array  and add new statement to the existing array
let favoriteCities = [];
console.log("the value of my variable x will be: [] ");
console.log(favoriteCities);
let favoriteAnimals = [ "dog", "rabbit", "cow", "panda"];
console.log(favoriteAnimals);
favoriteAnimals.push("baby pig");
console.log(favoriteAnimals);

//assignment07 - check length of myString
let myString = "this is a test";
console.log(myString);
let myStringLength = myString.length;
console.log("The length of myString is: " + myStringLength);

//assignment08 -  Write a program that checks the types of two variables and prints out SAME TYPE if they are the same type.
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

//assignment09 -  The modulus operator, which gives the remainder 
let b = 7;
b = b % 3;
console.log(b);
console.log("If b will equal 4 then new remainder  will be 1 "); // 4 % 3
console.log("If b will equal 17 then new remainder  will be 2 "); // 17 % 3
console.log("If b will equal 9 then new remainder  will be 0 "); // 9 % 3

//assignment10 -   Can you store multiple types in an array? - Yes 
let typesOfArray= [6, true, "Hej"];
console.log(typesOfArray);
//Can you compare infinities? - Yes
let six = 6/0;
let ten = 10/0;
six === ten;
if (six === ten) {
    console.log("Yes, you can compare infinities");
  } else {
    console.log("No, you can't compare infinities");
  };