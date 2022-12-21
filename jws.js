// reverse half the array
// function reverseHalfTheArray(arrayParam) {

//     let array = arrayParam

//     /*
//     array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     array.lentgh = 9
//     array.lentgh / 2 = 4.5 = 4
//     index = [0, 1, 2, 3, 4, 5, 6, 7, 8]

//     array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     temp = 5
//     array = [1, 2, 3, 4, 5, 6, 7, 8, 5]
//     */

//     let j = 0
//     for (i = array.length / 2; i < (array.length - (Math.floor(array.length / 2)/2)); i++) {
//         let k = Math.floor(i)
//         let temp = array[array.length - 1 - j]
//         array[array.length - 1 - j] =  array[k]
//         array[k] = temp
//         j++
//         // console.log(array)
//     }
    
//     console.log(array)

//     /*
//         array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//         iteration 1
//             j = 0
//             i = 4
//             temp = 9
//             array[8] = array[4]
//             array = [1, 2, 3, 4, 5, 6, 7, 8, 5]
//             array[4] = temp
//             array = [1, 2, 3, 4, 9, 6, 7, 8, 5]
//         iteration 2
//             j = 1
//             i = 5
//             temp = 8
//             array[7] = array[5]
//             array = [1, 2, 3, 4, 9, 6, 7, 6, 5]
//             array[5] = 8
//             array = [1, 2, 3, 4, 9, 8, 7, 6, 5]
//     */

//     // res = [1, 2, 3, 4, 9, 8, 7, 6, 5]
// }

// let array = ["Yes", "No", "Maybe", "Sure", "Nope", "Very Nope", "Very very Nope"]
// let array2 = ["Yes", "No", "Maybe", "Sure"]

// reverseHalfTheArray(array)
// reverseHalfTheArray(array2)

//////////////////////////////////////////////////////////////////////////////////////////////////

// write a function that takes 2 objects as a parameter, if the objects are different in 
// any way (type, values, size etc) return false else take the second object and switch
// the keys and the value (ex: {x: y} because {y: x} ) and print the 2 objects

function compareArrays(arr1, arr2) {
    if(arr1.length != arr2.length)
        return false
    
    let stack = []
    for(e of arr1)
        stack.push(e)

    for(s of stack)
        for(e of arr2)
            if(s == e)
                stack.pop()

    if(stack.length != 0)
        return false

    return true
}

function compareArraysWithType(arr1, arr2) {
    if(!compareArrays(arr1, arr2))
        return false

    let stackType = []
    for(e of arr1)
        stack.push(typeof e)

    for(s of stackType)
        for(e of arr2)
            if(s == typeof e)
                stack.pop() 

    if(stackType.length != 0)
        return false 

    return true
}


function fn(obj1, obj2) {

    const errors = []

    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)

    if(!compareArrays(keys1, keys2))
        errors.push("Different keys")

    let value1 = Object.values(obj1)
    let value2 = Object.values(obj2)

    if(!compareArraysWithType(value1, value2))
        errors.push("Different objects")
    
    if(errors.length != 0) {
        console.log(errors)
    } else {
        let obj = {}
        
        for(key of keys2) {
            obj[obj2[key]] = key
        }

        console.log(obj)
    }

}

let obj1 = {x: "y", z: "t"}
let obj2 = {x: "y", z: "t"}

fn(obj1, obj2)

//////////////////////////////////////////////////////////////////////////////////////////////////

// compare a starting and ending point from 2 arrays
function compare(arr1, arr2, v1, v2) {
    // arr1 = [1, 2, 3]
    // arr2 = [7, 6, 5, 4, 3, 2, 1]

    if (v1 > v2) {
        return false;
    }
    if (v2 > arr1.length || v2 > arr2.length) {
        return false;
    }
    if (v1 < 0) {
        return false;
    }

    let stack = []

    for (i = v1; i < v2; i++) {
        stack.push(arr1[i])
    }

    for(e of stack) {
        for (i = v1; i < v2; i++) {
            if(arr2[i] === e) {
                stack.pop()
            }
        }
    }

    if(stack.length != 0)
        return false

    return true
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// palendrom checker
function checkIfPalendrom(str) {
    for(i = 0; i < str.length / 2; i++) {
        if(str.charAt(i) != str.charAt(str.length - i - 1)) {
            return false
        }
    }
    return true
}