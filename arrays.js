/* Q1 */

// Write a function deepEqual that takes two values and returns true only if they
// are the same value or are objects with the same properties, where the values
// of the properties are equal when compared with a recursive call to deepEqual.
// To find out whether values should be compared directly (use the === operator
// for that) or have their properties compared, you can use the typeof operator.
// If it produces "object" for both values, you should do a deep comparison.
// But you have to take one silly exception into account: because of a historical
// accident, typeof null also produces "object".
// The Object.keys function will be useful when you need to go over the properties
// of objects to compare them.

// let obj = {here: {is: "an"}, object: 2};
// console.log(deepEqual(obj, obj));
// // → true
// console.log(deepEqual(obj, {here: 1, object: 2}));
// // → false

// console.log(deepEqual(1, '1'));
// // → false
// console.log(deepEqual(1, [1]));
// // → false

// null , undefined
// //false

/* Solution */

// function deepEqual(obj1, obj2) {

//     if (typeof obj1 == typeof obj2) {
//         return true;
//     } else {
//         return deepEqual();
//     }

// }

// console.log(deepEqual('2', 2));

/* Q2 */

// take an array as a parameter in a function and reverse it

/* Solution */

function reverse(arr) {

    let firstHalf = arr.slice(0, (arr.length) / 2);
    let secondtHalf = arr.slice((arr.length) / 2 + 0.1, arr.length);

    firstHalf.reverse()
    secondtHalf.reverse()

    let newArr = [...secondtHalf, ...firstHalf];

    return console.log(newArr);
}
let arr = [1, 2, 3, 8, 5]
let r = [];
// for (let i = arr.length - 1; i >= 0; i--){
//     r.push(arr[i])
// }
// for(el of arr)
//     r.unshift(el)
// return r;
function reverse(array) {
    for (let i = 0; i < array.length; i++) {
        let lastValue = array.pop();
        array.splice(i, 0, lastValue)
    }
}
reverse(arr)
console.log(arr);

/* Q3 */

// Write a range function that takes two arguments, start and end, and returns
// an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.
// Then modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements go up by increments of one, corresponding to the
// old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,
// 9]. Make sure it also works with negative step values so that range(5, 2, -1)
// produces [5, 4, 3, 2].

// console.log(sum(range(1, 10)));

/* Solution */

// function range()