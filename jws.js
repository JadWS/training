function reverseHalfTheArray(arrayParam) {

    let array = arrayParam

    /*
    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    array.lentgh = 9
    array.lentgh / 2 = 4.5 = 4
    index = [0, 1, 2, 3, 4, 5, 6, 7, 8]

    array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    temp = 5
    array = [1, 2, 3, 4, 5, 6, 7, 8, 5]
    */

    let j = 0
    for (i = array.length / 2; i < (array.length - (Math.floor(array.length / 2)/2)); i++) {
        let k = Math.floor(i)
        let temp = array[array.length - 1 - j]
        array[array.length - 1 - j] =  array[k]
        array[k] = temp
        j++
        // console.log(array)
    }
    
    console.log(array)

    /*
        array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        iteration 1
            j = 0
            i = 4
            temp = 9
            array[8] = array[4]
            array = [1, 2, 3, 4, 5, 6, 7, 8, 5]
            array[4] = temp
            array = [1, 2, 3, 4, 9, 6, 7, 8, 5]
        iteration 2
            j = 1
            i = 5
            temp = 8
            array[7] = array[5]
            array = [1, 2, 3, 4, 9, 6, 7, 6, 5]
            array[5] = 8
            array = [1, 2, 3, 4, 9, 8, 7, 6, 5]
    */

    // res = [1, 2, 3, 4, 9, 8, 7, 6, 5]
}

let array = ["Yes", "No", "Maybe", "Sure", "Nope", "Very Nope", "Very very Nope"]
let array2 = ["Yes", "No", "Maybe", "Sure"]

reverseHalfTheArray(array)
reverseHalfTheArray(array2)