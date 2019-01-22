// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let z = 5;
function me(){
  let a = 0;
  console.log('challenge 1', a + z);
  return function mum(){
    let b = 1;
    return a + b;
  }
}
me();
// ==== Challenge 2: Create a counter function ====
const counter = () => {
  let a = 1;
  // Return a function that when invoked increments and returns a counter variable.
  function increaseNum(){
    return a++;
  }
};
console.log(counter());
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
