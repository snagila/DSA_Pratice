// Time Complexity
// We dont measure time complexity in time; we measure it in the number of operations. the reason is that if we take the same code in two different computers;the faster computer will run the code faster but the number of operations performed will be the same.

//  1. BIG O: O(n)

// case 1: Without constants
const logItems = (n) => {
  //the number of operation is n only
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

// console.log(logItems(5));
// output:0 1 2 3 4

// ============================================================================================//

//  case 2: With Constants (Drop Constants)
const logItems2 = (n) => {
  // n number of items output
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  // n number of items output
  for (let j = 0; j < n; j++) {
    console.log(j);
  }
};
// console.log(logItems2(5));
// output: 0 1 2 3 4 0 1 2 3 4

// total number of code operation= (n+n=2n) => O(2n)
// if we have constants we drop the constant . So this opeartion is also O(n)

//-----------------------Author: Sachin Nagila------------------------------------------------------------------//

// 2 BIG 0 : O(n^2)

// case 1:
const logItems3 = (n) => {
  // number of items output= n
  for (let i = 0; i < n; i++) {
    // number of items output= n
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
// console.log(logItems3(2));
// output: 00 01 10 11
// total number of code operations= n*n => n^2 => O(n^2)

// ============================================================================================//

// case 2: Drop non-Dominants
const logItems4 = (n) => {
  // number of items output= n
  for (let i = 0; i < n; i++) {
    // number of items output= n
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
  // number of items output= n
  for (let k = 0; k < n; k++) {
    console.log(k);
  }
};
// console.log(logItems4(2));
// output : 00 01 10 11 0 1
// total number of code operations= (n*n)+ n => n^2+n => O(n^2+n)
// here if n=100 then n^2=10000. Here n is non dominant so we drop n. And this is also O(n^2)

//-----------------------Author: Sachin Nagila------------------------------------------------------------------//

//  3. BIG O: O(1) / constant time  (This is the most effective big O)

// case 1:
const addItems = (n) => {
  // number of operation = 1
  return n + n;
};

console.log(addItems(1)); // output = 2
console.log(addItems(1000000)); // output= 2,000,000
// here no matter the value of n the number of operation will always be 1

// ============================================================================================//

// case 2:
const addItems1 = (n) => {
  // number of operation = 1+1=2
  return n + n + n;
};
console.log(addItems1(1)); // output = 3
// since the number of operation is same no matter how much n changes; this is also constant time.So, we write  O(2) as O(1)

//-----------------------Author: Sachin Nagila------------------------------------------------------------------//
