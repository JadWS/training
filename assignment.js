/*Q1*/
// given a string s, check whether this string is a palyndrom

/**
 * function with a parameter -> string for example 
 * assuming that s = 'dad'
 */

/*solution*/
function stringChecker(s) {
    for (i = 0; i < s.length; i++) {
        let lastElement = s.length - 1;
        if (s[i] != s[lastElement]) {
            return false
        }
        return true;
    }
}

// console.log(stringChecker('boob'));

/*Q2*/
// given a number x, check if the number is a palyndrom

/**
 * let x = 121
 * first step: check last and first digit
 * to get the last digit of a number : number % 10 = this digit
 * to get the first digit of a number : we keep dividing it, it stops when the number becomes smaller than 10
 * second step:
 */

/*solution*/
function nbChecker(nb) {
    let tempNb = nb;
    let newNb = nb % 10;

    while (tempNb > 10) {
        tempNb = Math.floor(tempNb /= 10);
    }
    if (tempNb == newNb) {
        return true
    }

    return false;

}

// console.log(nbChecker(1231))

/*Q3*/
// given a value n, print all odd numbers from 0 to n

/*solution*/
function odd(n) {
    for (i = 0; i <= n; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

// odd(10)

/*Q4*/
// given a value n, print all even numbers from 0 to n

/*solution*/
function even(n) {
    for (i = 0; i <= n; i++) {
        if (i % 2 === 0 && i != 0) {
            console.log(i)
        }
    }
}

// even(10)


/*Q5*/
// given an array of integers, check whether all the values inside that array are prime

/*solution*/
/**
 * prime number: can be divided by 1 and itself only
 * array = [2, 3, 5, 7]
 * mro2 aa kel element of the array then check if it is a prime number
 * so i'll use a loop and an if statment
 * expected output: true
*/

function isPrime(array) {
    // let array = [2, 3, 5, 7]
    for (e of array) {
        if (e > 1) {
            for (i = 1; i < array.length; i++) {
                if (e % 1 == 1) {
                    console.log(e);
                }
            }
        }
    }
}

// isPrime([2, 3, 5, 7]);

/*Q6*/
// given a number x, reverse x

/*solution*/
let x = 123
let temp = x
while (temp > 10) {
    temp = Math.floor(temp / 10);
    console.log(temp);
}




// given 2 arrays a and b, check whether b contains all the values of a
// given 2 arrays a and b, check whether these arrays are similar (size, values, etc)
// given 2 objects, check for any differences between the objects
// write the Fibonacci Sequence until a value n
// given 2 numbers x and y representing the starting positions of 2 frogs, and v1 and v2 representing the jumping distance for each frog, check whether these frogs meet inside a pond of size n
// given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.