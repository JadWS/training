/* EX1 */

// You can get the Nth character, or letter, from a string by writing "string"[N].
// The returned value will be a string containing only one character (for example,
// "b"). The first character has position 0, which causes the last one to be found at
// position string.length - 1. In other words, a two-character string has length
// 2, and its characters have positions 0 and 1.
// Write a function countBs that takes a string as its only argument and returns
// a number that indicates how many uppercase “B” characters there are in the
// string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase “B” characters). Rewrite countBs to
// make use of this new function

/* Answer */

// first fn
function countBs(string) {

    let counter = 0;

    console.log('Number of "Bs": ');

    for (i = 0; i < string.length; i++) {

        if (string[i] === "B") {

            counter++

        }
    }
    console.log(counter);
}

// second fn
function countLetter(string, letter) {
    let counter = 0;

    console.log(`Number of "${letter}": `);

    for (i = 0; i < string.length; i++) {

        if (string[i] === letter) {

            counter++

        }
    }
    return counter;
}

function countChar(string, counter = 1) {

    console.log('The repeated characters are: ');

    for (k = 0; k < string.length; k++) {

        for (j = k + 1; j < string.length; j++) {

            if (string[k] == string[j]) {

                counter++;

                if (counter > 1 && string[k] != ' ')
                    console.log(string[k]);

            }
        }
    }

}

function countRepeated(string) {
    let repeated = [];
    for (k = 0; k < string.length; k++) {
        for (let l = k + 1; l < string.length; l++) {
            const element = string[l];
            if (element == string[k] && !repeated.includes(string[k]) && element != ' ') {
                repeated.push(string[k]);
                console.log(element);
                break;
            }
        }
    }
    return repeated;
}

countBs("Beep Beep Beep");
let l = countLetter("Bees and roots are temrosized rendered", "r");
console.log(l);
let repeated = countRepeated("Bees and roots !e!")
console.log(repeated);  