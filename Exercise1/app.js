//1.Find the value that is not being repeated inside the given array

function oddOne(arr){
    for(let i = 0; i <arr.length; i++){
        let element = arr[i]

        for(let j = 0; j < arr.length; j++){
            let secel = arr[j]

            if(element !== secel){
                return secel
            }
        }
    }
}

//2.Find the smallest and the largest number from the supplied numeric array. Return an array containing these numbers

function deduce(arr){

    let newArr = []

    let small = Math.min(...arr)
    let large = Math.max(...arr)
    newArr.push(small,large)
    
    return newArr
 
}

//3.From the given array of numbers create two arrays one containing only odd and the other only even numbers.

function twoArrays(arr){ 
    let evenArr = []
    let oddArr = []
    let mergeResualt = []

    for(let i = 0; i < arr.length; i++){
        let element = arr[i]
        if(element % 2 == 0){
            evenArr.push(element)
        } else {
            oddArr.push(element)
        }
    }
    mergeResualt.push(evenArr,oddArr)

    return mergeResualt
}


//4.In this JavaScript array exercise, the supplied array may contain duplicate values.
// Write a function to return only unique values — values that only occur exactly one time within the provided array.

function uniqueValues(arr){
    let newArr = []

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== arr[i + 1]){
            newArr.push(arr[i])
        } else {
            i++
        }
    }

    return newArr
}

//5.Create a function that accepts 2 arrays of words and returns the common words from each.

function commonWords(arr1, arr2){
    let newArr = []

    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                newArr.push(arr2[j])
            }
        }
    }
    return newArr
}

//6.Write a function that accepts 2 array arguments and returns a boolean value -
// Does the first array contain all elements represented in the second array.

function containAll(arr1, arr2){
    let x = arr1.length;
    let y = arr2.length;
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === arr2[i] && y === x){
            return true
        } else {
            return false
        }
    }
}

//7.The supplied array will contain both numeric and non-numeric characters.
//Return a new array where all numeric values are positioned at the beginning of the array

function sortNumbersAndStrings(arr){
    let str = []
    let num = []
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number"){
            num.push(arr[i])
        } else {
            str.push(arr[i])
        }
    }
    result.push(...num,...str)
    return result
}

//8.Create a function that will reverse the given string.

function reverseString(str){

    let newStr = ""

    for(let i = str.length -1; i >= 0; i--){
        newStr += str[i]
    }

    return newStr
    
}

//9. const lookup = ['i', 'love', 'sadakhlo', 'esminich']
//  const strings = ['i', 'i', 'sadakhlo', 'i'];
//  foo(lookup, strings)  output [3, 0, 1, 0]

function foo(arr1,arr2){
    let newArr = [];
    let count = 0;
    
    for(let i = 0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length; j++){
            if(arr1[i] === arr2[j]){
                count++
            }
        }
        newArr.push(count);
        count = 0
    }
    return newArr;
}

