//1.Make an array of numbers that are doubles of the first array

function double(arr){
    return arr.map(item => item * 2)
}

//2.Take an array of numbers and make them strings

function stringItUp(arr){
    return arr.toString().split(",")
}


// 3) Capitalize each of an array of names

function capitalizeNames(arr){
    return arr.map(element => {
        return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase()
    })
}

//4. Make an array of strings of the names

function namesOnly(arr){
    return arr.map(item => item.name)
}

//5.Make an array of strings of the names saying whether or not they can go to The Matrix

function makeStrings(arr){
    return arr.map(el => {
        let age = el.age
        let name = el.name 

        if(age < 18){
            return name + " is under age!!"
        } else {
            return name + " can go to The Matrix"
        }
    })
}

//6. If the given input is an array of numbers, return the sum of all the positives ones. If the array is empty or there aren't any positive numbers, return 0


function sum(arr){

   let sum = 0;

    for(let i = 0; i < arr.length; i++){
        if(!arr.length){
            return 0
        } else if(arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}

//7.Find the difference in age between the oldest and youngest family members, and return their respective ages and the age difference.

function differenceInAge(arr){

    let newArr = []
    
    let age = arr.map(elem => elem.age)
    
    let min = Math.min(...age)
    let max = Math.max(...age)
    let difference = max - min
    
    newArr.push(min,max,difference)

    return newArr
    
}

//8.Count the occurrences of distinct elements in the given 2D array. The given input is an array,
// the elements of which are arrays of strings. The result is an object whose
// property names are the values from the arrays and their value is the number of their occurrences.

function foo(arr){
    let newObj = {}

    let maped = arr.join().split(",")

    maped.forEach((elem) => {
        newObj[elem] = (newObj[elem] || 0) + 1
    })

    return newObj
}


//9.Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.


function majorityElement(arr){
    
    const size = Math.round(arr.length / 2)
    
    for(let i = 0; i < arr.length; i++){
        let value = arr[i]
        if(value > size){
            return value
        }
    }
}


//10gtnel trvats array i miji 3rd amenashate krknvox tive

function thirdElem(arr){

    let obj = {}

   arr.forEach(elem => {
       obj[elem] = (obj[elem] || 0) + 1
   })

    for(let key in obj){
        let value = obj[key]

        if(value === 3) return Number(key)
    }
}



//11.Given a string s and an array of strings words, determine whether s is a prefix string of words.
// A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.
// Return true if s is a prefix string of words, or false otherwise.


function prefix(str,arr){

    let newArr = arr.join("")

    if(newArr.includes(str)){
        return true
    }
    return false
}