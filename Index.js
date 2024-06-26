
// Write a function named ‘calculateSum’ that takes two arguments and returns their sum.//
function calculateSum(numb1, numb2) {
    return numb1 + numb2;
}

// const a = 20;
// const b = 45;
// let result = calculateSum(a , b);
// console.log(result);
// output : 65


//Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.//
function isEven(numb) {
    return numb % 2 === 0;
}  

// let a = 230;
// console.log(isEven(a));
// output : true
    

// Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.//
function findMax(numbers) {
    if (numbers.length === 0) {
        return null;
    }

    let max = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }

    return max;
}

// const ary = [30, 45, 220, 615, 128];
// const largestNumber = findMax(ary);
// console.log(`The largest number in the array is: ${largestNumber}`);
// output : 615


// Write a function named ‘reverseString’ that takes a string and returns the string reversed.//
function reverseString(inputString) {
    return inputString.split('').reverse().join('');
}

// const originalString = 'Hello, World!';
// const reversedString = reverseString(originalString);
// console.log(`Original: ${originalString}`);
// console.log(`Reversed: ${reversedString}`);
// output : Original: Hello, World!
//       Reversed: !dlroW ,olleH


// Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.//
function filterOddNumbers(numb){
    return numb.filter(num => num % 2 !== 0);
}


// const ary = [1, 2, 3, 4, 5, 6, 7, 8];
// const oddNumbers = filterOddNumbers(ary);
// console.log("Odd numbers:", oddNumbers);
// output : Odd numbers: [ 1, 3, 5, 7 ]


// Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.//
function sumArray(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

// const myArray = [1, 2, 3, 4, 5];
// const totalSum = sumArray(myArray);
// console.log(`Sum of array elements: ${totalSum}`);
// output : Sum of array elements: 15


//Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.//
function sortArray(numbers) {
    return numbers.slice().sort((a, b) => a - b);
}


// const myArray = [5, 2, 8, 1, 3];
// const sortedArray = sortArray(myArray);
// console.log("Sorted array:", sortedArray);
// output : Sorted array: [ 1, 2, 3, 5, 8 ]


//Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
function capitalizeFirstLetter(inputString) {
    return inputString.charAt(0).toUpperCase() + inputString.slice(1);
}


// const originalString = "hello";
// const capitalizedString = capitalizeFirstLetter(originalString);
// console.log(capitalizedString); 
// Output: "Hello"
