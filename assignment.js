// Problem 1: Write a function to calculate the area of a triangle.
function getTriangleArea(height,base){
    let area = (height * base) / 2;
    return area ;
}
// Problem 2: Write a function to convert degrees to radians.
 function degreeToRadian(degree){
    const pi = 3.1416;
    radian = degree * (pi / 180);
    return radian;
 }
// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.
function getFactorial(number){
    if(number === 0 || number === 1){
        return 1;
    }else{
        let factorial = 1;
        for(let i = 2;i<number;i++){
            factorial = factorial * i;
        }
        return factorial;
    }
}
// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
function isPrime(number){
    if(number <= 1){
        return false;
    }else if(number === 2){
        return true;
    }else{
        let check = 0;
        for(let i = 2 ; i<number;i++){
            check = number % i;
            if(check === 0){
                return false;
                break;
            }else{
                return true;
            }
        }
    }
}
// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
function mergeArrays(array1,array2){
    let newArray = array1.push(...array2);
    return newArray;
}
// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year){
    if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)){
        return "This is a leap year";
    }else{
        return "Not Leap year";
    }
}
// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(array){
    let newArray = []
    for(let i = 0;i<array.length;i++){
        if(newArray.indexOf(array[i]) === -1){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(t){
    celcius = (t - 32) * (5/9);
    return celcius;
}
// Problem 9: Write a function to find the maximum of five numbers.
function getMaxNumber(array){
    let maxVal = array[0];
    for(let i = 1;i<array.length;i++){
        if(maxVal < array[i]){
            maxVal = array[i];
        }
}
    return maxVal;
}
// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]
function evenOdd(string){
    let len = string.length;
    if(len % 2 === 0){
        return 'even';
    }else{
        return 'odd';
    }
}