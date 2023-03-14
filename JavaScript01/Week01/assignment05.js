// round the number  and show highest value
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