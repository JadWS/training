// let yourName;
// while (!yourName) {
//     yourName = prompt("What is your name ?")
// }

// for (i = 0; i <= 100; i++){
//     if( i % 2 == 0){
//         console.log(i)
//     }
// }

// for (i = 0; i <= 20; i++) {
//     if (i % 3 === 0) {
//        continue
//     }
//     console.log(i)
// }

// for (i = 0; i <= 20; i++) {
//     if (i % 3 === 0) {
//        i = i+1
//     }
//     console.log(i)
// }

// let str = "";
// let mult;
// for (let i = 1; i <= 10; i++) {
//     for (let j = 0; j <= 10; j++) {
//         mult = i * j;
//         str = str + mult + "  ";
//     }
//     console.log(i + " : " + str)
//     str = "";
// }

//////////////////////////////////////////////////////////////////////////////////////////

//boo , boobs
// check nbs from 1 to 100 (included)
//if the nb is divisble by 3,print boo
//if the nb is divisble by 5,print boots
//if the nb is divisble by both 3 and 5 ,print booboots

/* solution */

// for (i = 1; i <= 100; i++) {

//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("booboots")
//     } else if (i % 3 == 0) {
//         console.log("boo")
//     } else if (i % 5 == 0) {
//         console.log("boots")
//     } else {
//         console.log(i)
//     }

// }

//////////////////////////////////////////////////////////////////////////////////////////

// check a number if it's greater than 10 then
// get the sum of the first number to the left and the first nb to the right
// note: you're not allowed to use strings and arrays methods
// eg: 123 returns 4
// eg2: 1546 : 1+6 = 7

/* solution */

// let nb = 4165419464914;
// let l = nb;
// let r = nb % 10;
// while (l >= 10) {
//     l = Math.trunc(l / 10);
// }
// let sum = l + r;
// console.log(sum);

// let n = prompt("insert a number");

// if (n > 10) {
//     // first to string
//     const firstnString = String(n)[0];
//     // first to number
//     const firstnNum = Number(firstnString);

//     // last to string
//     const lastnString = String(n).slice(-1);;
//     // last to number
//     const lastnNum = Number(lastnString);

//     // result calculation
//     sum = firstnNum + lastnNum
//     console.log(`the result is "${sum}" `)

//     alert("Done (result in console)")
// }else{
//     alert(`"${n}" < 10`)
// }

//////////////////////////////////////////////////////////////////////////////////////////

// ###
// ###
// ###
// ###
// ###
// #########

/* solution */

// for (i = 0; i <= 5; i++) {
//     if (i == 5) {
//         console.log("#########")
//     } else {
//         console.log("###")
//     }
// }

//////////////////////////////////////////////////////////////////////////////////////////

// *            *
// **          **
// ***        ***
// ****      ****
// *****    *****
// ******  ******
// **************

/* solution */

// let stars = ""
// for (i = 0; i < 7; i++) { console.log(stars += '*') }

// let counter = 0
// let stars = "*******"
// for (i = 7; i > 0; i--) {
//     console.log(stars.slice(counter))
//     counter++
// }

// let rows = 7;
// let stars = "";
// for (let i = 1; i < rows; i++) {

//     for (let j = i; j < rows-1; j++) {
//         stars += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         stars += "*";
//     }
//     console.log(stars);
//     stars = ""
// }

// let rows = 55
// let stars = '';
// let factor = rows * 2 - 2
// for (i = 1; i < rows; i++) {

//     for (let j = 0; j < i; j++) {
//         j % 2 == 0 ? stars += '0' : stars += '1';
//     }
//     // for (let k = 0; k < (factor - i * 2); k++) {
//     for (let k = 0; k < (rows - i - 1) * 2; k++) {
//         stars += ' '
//     }
//     for (let j = 0; j < i; j++) {
//         // stars += '*';
//         j % 2 == 0 ? stars += '0' : stars += '1';
//     }
//     console.log(stars);
//     stars = ""
// }

//////////////////////////////////////////////////////////////////////////////////////////

// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #

/* solution */

// let hashtags = '# # # #'
// for (i = 0; i < 8; i++) { (i % 2 == 0) ? console.log(hashtags) : console.log(' ' + hashtags) }

//////////////////////////////////////////////////////////////////////////////////////////

// let output = ""
// for (let i = 0; i < 7; i++) {
//     for (let j = i; j < 7; j++) {
//         output += "*"
//     }
//     console.log(output);
//     output = ""
// }

// let output = "";
// let nbOfRows = 7;
// for (let i = 0; i < nbOfRows; i++) {
//     if (i == 0 || i == nbOfRows - 1) {
//         for (let k = 0; k < nbOfRows; k++) {
//             output += "*";
//         }
//         console.log(output);
//         output = "";
//     }
//     else {
//         for (let j = 0; j < i + 1; j++) {
//             j == i ? output += "*" : output += " ";
//         }
//         console.log(output);
//         output = "";
//     }
// }

// let output = "";
// let nbOfRows = 13;
// for (i = 0; i < nbOfRows; i++) {
//     if (i == 0 || i == nbOfRows - 1) {
//         for (let k = 0; k < nbOfRows; k++) {
//             output += "*";
//         }
//         console.log(output);
//         output = "";
//     } else {
//         for (let j = 1; j <= nbOfRows - i; j++) {
//             j == (nbOfRows - i) ? output += "*" : output += " ";
//         }
//         console.log(output);
//         output = "";
//     }
// }

////////////////* FUNCTIONS */////////////////

//part 1 
// function isPrime(a) {
//     if (a > 1) {
//         for (let i = 2; i <= Math.sqrt(a); i++) {
//             if (a % i == 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
//     return false;
// }

// // for testing

// // let nb = 9;
// // console.log(isPrime(nb));
// // if (isPrime(nb)) {
// //     console.log(`${nb} is a prime number`);
// // } else {
// //     console.log(`${nb} is not prime number`);
// // }

// //part 2
// function nextPrime(a) {
//     a = a + 1;
//     while (!isPrime(a))
//         a++;
//     return a;
// }

// //for testing
// // console.log(nextPrime(541) + ' is the first next prime number')

// //final result
// for (i = 0; i < 101; i++) {
//     if (isPrime(i) && nextPrime(i) == i + 2 ) {
//         console.log(i + " - " + (i + 2))
//     }
// }

// let number = "1"
// for (i = 0; i < 5; i++) {
//     console.log(number + (number += 3))
// }


//         1
//        121
//       12321
//      1234321
//     123454321
//    12345654321
//   1234567654321
//  123456787654321
// 12345678987654321
//  123456787654321
//   1234567654321
//    12345654321
//     123454321
//      1234321
//       12321
//        121
//         1

/*solution*/

// let rows = 9
// let str1 = ''
// let str2 = ''
// for (i = 1; i <= rows; i++) {

//     for (j = 1; j <= rows - i; j++) {
//         str1 += " ";
//     }
//     //to print numbers in ascending order
//     for (let k = 1; k <= i; k++) {
//         str1 += k
//         // k % 2 == 0 ? str1 += 0 : str1 += 1;
//     }
//     // to print numbers in reversed order
//     for (let m = i - 1; m >= 1; m--) {
//         str1 += m;
//         // m % 2 == 0 ? str1 += 0 : str1 += 1;
//     }

//     console.log(str1);
//     str1 = ""
// }

// for (l = 1; l <= rows; l++) {

//     for (let s = 0; s < l; s++) {
//         str2 += ' '
//     }

//     //to print numbers in descending order
//     for (let t = 1; t < rows - l + 1; t++) {
//         str2 += t
//     }

//     // to print numbers in reversed order
//     for (let c = rows - l - 1; c >= 1; c--) {
//         str2 += c;
//     }

//     console.log(str2);
//     str2 = ""
// }

/*reverse a given number */

// let num = 12345;
// let newNum = 0;
// while (num > 0) {
//     newNum = (newNum * 10) + (num % 10);
//     num = Math.trunc(num / 10);
// }
// console.log(newNum)

/*factorial sum*/

// function getFactorial(nb) {

//     let result = 1;

//     for (let i = 1; i <= nb; i++) {
//         result *= i;
//     }

//     return result;
// }


// for (let i = 0; i < 5000000; i++) {
//     let sum = 0;
//     let temp = i;
//     while (temp > 0) {

//         let d = temp % 10;
//         let factorial = getFactorial(d);
//         sum += factorial;
//         temp = Math.floor(temp / 10);

//     }

//     if (i === sum) console.log(i)
// }


/* check if 153 = (1*1*1)+(5*5*5)+(3*3*3), then print all numbers between and 500 ... */

// let range = 500
// for (let i = 1; i <= range; i++) {
//     let nb = i;

//     while (nb > 0) {

//         let sum = 0;
//         while (nb > 0) {

//             let digit = nb % 10;
//             // console.log('digit: ' + digit);

//             let power = Math.pow(digit, 3);
//             // console.log('power: ' + power);

//             sum += power
//             // console.log('sum: ' + sum);

//             // }

//             nb = Math.floor(nb / 10)
//             // console.log('nb: ' + nb);
//         }

//         // console.log(sum === nb);

//         if (sum === i) {
//             console.log(i)
//         }
//     }

// }

// let nb = 367821;
// let temp = nb;
// let counter = 0;

// while (temp > 0) {
//     temp = Math.floor(temp / 10)
//     counter += 1
// }

// console.log(counter);



/* print
   *

  * *

 *****
*/

// let rows = 5
// for (let i = 1; i <= rows; i++) {
//     let stars = "";
//     for (let j = 0; j < rows - i; j++) {
//         stars += " ";
//     }
//     for (let k = 0; k < i; k++) {
//         stars += '* ';
//         if (i % 2 == 0) stars = ''
//     }
//     console.log(stars);
//     stars = ''
// }

// for (let i = 1; i <= rows; i++) {
//     let stars = "";
//     if (i % 2 != 0) {
//         for (let j = 0; j < rows - i; j++) {
//             stars += " ";
//         }
//         for (let k = 0; k < i; k++) {
//             if (((k == 0 || k == (i - 1)) && i != rows) || i == rows) {
//                 stars += "* ";
//             } else {
//                 stars += "  ";
//             }
//         }
//     }
//     console.log(stars);
//     stars = ''
// }

// function sequence(term) {
//     let n1 = 0, n2 = 1;
//     let sum;
//     let str = n1 + " - " + n2;
//     for (i = 2; i < term ; i++) {
//         sum = n1 + n2;
//         n1 = n2;
//         n2 = sum;
//         str = str + " - " + sum;
//     }
//     console.log(str);
// }
// sequence(12)
















































// function fn(term) {
//     let nb1 = 0
//     let nb2 = 1
//     let sum = 0
//     for (i = 1; i < term; i++) {
//         sum = nb1 + nb2
//         nb1 = nb2
//         nb2 = sum
//         console.log(sum);
//     }
// }
// fn(9)


// let stop = 3
// for (let i = 1; i <= stop; i++) {
//     let nb = i;

//         let sum = 0;
//         while (nb > 0) {

//             let digit = nb % 10;

//             let count = 0;
//             let number = i;
//             do {
//                 number = Math.floor(number / 10)
//                 count += 1
//             } while (number > 0)
//             let power = Math.pow(digit, 3);

//             sum += power

//             nb = Math.floor(nb / 10)
//         }

//         if (sum === i) {
//             console.log(i)
//         }
//     }