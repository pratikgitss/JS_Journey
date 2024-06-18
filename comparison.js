// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// equality(==) and cmparisons(<, >, <=, >=)
// they both works differntly as in comparisons null is converted to 0 therfore the third sentence will show true as 0 >= 0.

// these type of coversions should be avoided as they bring ambiguity for the reader.

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === strict check checks with datatype

console.log(5 == '5');         // true (string '5' is converted to number 5)
console.log(false == 0);       // true (false is converted to 0)
console.log('' == false);      // true (empty string is converted to false)
console.log(null == undefined); // true (null and undefined are considered equal)


console.log("2" === 2);

// Same type and value
console.log(5 === 5);          // true
console.log('hello' === 'hello'); // true

// Different type
console.log(5 === '5');        // false

// Different value
console.log(5 === 10);         // false

// Different types with equal values when coerced
console.log('5' == 5);         // true (due to type coercion)
console.log('5' === 5);        // false (no type coercion)

// Special cases
console.log(null === null);    // true
console.log(undefined === undefined); // true
console.log(NaN === NaN);      // false (NaN is never equal to anything, even itself)
console.log(0 === -0);         // true (0 and -0 are considered equal)
