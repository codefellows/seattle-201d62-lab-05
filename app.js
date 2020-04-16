'use strict';
/////////////////////////////////////
/* Problem 1 (this is your demo that we'll solve in class)
Write a function called sum() that takes in two numbers as arguments and then returns an array where the first element is the sum of those numbers, and the second element is a concatenated string that EXACTLY follows this example and uses the values that were input into the function:

"The sum of 4 and 7 is 11."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSum() function below and check the console to see if the test passes.*/

// Write your code here
function sum(a, b) { //eslint-disable-line
    //add and output a string
    //output an array
    // sum(4,7)[0] === 11 && sum(4,7)[1] === 'The sum of 4 and 7 is 11.
    var addedSum = a + b;
    var concatenatedString = 'The sum of 4 and 7 is 11.';
    return [addedSum, concatenatedString];
}

// Here is the test for sum(); uncomment it to run it
testSum(4, 7);
// var x = sum(33, 21)
// var y = sum (33, 11) = [addedSum, concatenatedString]
// y[0] = 
// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 2
Write a function called multiply() that takes in two numbers as arguments and returns an array where the first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The product of 5 and 9 is 45."

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiply() function and see if the test passes.*/

// Write your code here
function multiply(a, b) { //eslint-disable-line
    //multiply(5,9)[0] === 45 && multiply(5,9)[1] === 'The product of 5 and 9 is 45.
    var multipliedSum = a * b;
    var string = 'The product of 5 and 9 is 45.';
    return [multipliedSum, string];
}

// Here is the test for multiply(); uncomment it to run it
testMultiply(5, 9);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 3
Write a function called sumAndMultiply() that takes in three numbers as separate arguments and returns an array where the first element is the sum of those three numbers, the second element is the product of those three numbers,  and the third and fourth elements are strings that EXACTLY follow this example and use the values that were input into the function:

Third element: "4 and 7 and 5 sum to 16."
Fourth element: "The product of 4 and 7 and 5 is 140."

IMPORTANT DETAIL: You may not use the arithmetic operators + and * in this function. To do addition, use your sum() function, and to do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumAndMultiply() function and see if the test passes.*/

// Write your code here
function sumAndMultiply(a, b, c) { //eslint-disable-line
    // sumAndMultiply(4, 7, 5)[0] === 16 && sumAndMultiply(4, 7, 5)[1] === 140 && sumAndMultiply(4, 7, 5)[2] === '4 and 7 and 5 sum to 16.' && sumAndMultiply(4, 7, 5)[3] === 'The product of 4 and 7 and 5 is 140.'
    //  Third element: "4 and 7 and 5 sum to 16."
    // Fourth element: "The product of a and b and c is 140."

    var sumOne = sum(a, b)[0];
    var sumTwo = sum(sumOne, c)[0];
    var sumString = a + ' and ' + b + ' and ' + c + ' sum to ' + sumTwo + '.';

    var multiOne = multiply(a, b)[0];
    var multiTwo = multiply(multiOne, c)[0];
    var multiString = 'The product of ' + a + ' and ' + b + ' and ' + c + ' is ' + multiTwo + '.';
    //  console.log(sumString);
    //console.log(multiString);
    return [sumTwo, multiTwo, sumString, multiString];
}

// Here is the test for sumAndMultiply(); uncomment it to run it
testSumAndMultiply(4, 7, 5);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 4
Write a function called sumArray() that takes in an array of numbers as its single argument and then returns an array where the first element is the sum of the numbers in the array, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"2,3,4 was passed in as an array of numbers, and 9 is their sum."

IMPORTANT DETAIL: You may not use the arithmetic operator + in this function. To do addition, use your sum() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testSumArray() function and see if the test passes.*/

// Write your code here
var testArray = [2, 3, 4]; //eslint-disable-line

function sumArray(sumArr) { //eslint-disable-line
    var arrayTotal = 0;
    for (var i = 0; i < sumArr.length; i++) {
        arrayTotal = sum(arrayTotal, sumArr[i])[0];
        // console.log(arrayTotal);
    }
    var totalString = sumArr + ' was passed in as an array of numbers, and ' + arrayTotal + ' is their sum.';
    //console.log(arrayTotal);
    // console.log(totalString);
    return [arrayTotal, totalString];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. Don't forget to create a new branch for your work on the next question!

/////////////////////////////////////
/* Problem 5
Write a function called multiplyArray() that takes an array of numbers as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and uses the values that were input into the function:

"The numbers 2,3,4 have a product of 24."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. This function should handle an array containing three elements. However, you may continue to use the + operator for string concatenation.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyArray() function and see if the test passes.*/

// Write your code here
function multiplyArray(multArr) { //eslint-disable-line

    var counter = 1;
    for (var i = 0; i < multArr.length; i++) {
        counter = multiply(counter, multArr[i])[0];
        // console.log(totalMultiArray);
    }
    var stringstring = 'The numbers ' + multArr + ' have a product of ' + counter + '.';
    // console.log(stringstring);
    return [counter, stringstring];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyArray(testArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. 

// You're done! Submit the link to the repo following the instructions in Canvas. Or, try out the stretch goal below...

// Don't forget to create a new branch for your work on the next question, if you attempt it.

/////////////////////////////////////
/* STRETCH GOAL: Problem 6
Write a function called multiplyAnyArray() that takes an array of numbers of any length as its argument and returns an array whose first element is the product of those numbers, and the second element is a string that EXACTLY follows this example and concatenates a message using the arguments that were passed into the function:

"The numbers 1,2,3,4,5 have a product of 120."

IMPORTANT DETAIL: You may not use the arithmetic operator * in this function. To do multiplication, use your multiply() function that you've already created. You're going to have to be resourceful to figure out how to do this. However, you may continue to use the + operator for string concatenation.

This function should be dynamic, accepting an array of any length.

Test this function by hand in the console to get it working, and when you think it is finished, uncomment the call for the testMultiplyAnyArray() function and see if the test passes.*/

// Write your code here
var testDynamicArray = [1, 2, 3, 4, 5]; //eslint-disable-line

function multiplyAnyArray(dynamicArray) { //eslint-disable-line
    var counter = 1;
    for (var i = 0; i < dynamicArray.length; i++) {
        counter = multiply(counter, dynamicArray[i])[0];
        // console.log(totalMultiArray);
    }
    var stringstring = 'The numbers ' + dynamicArray + ' have a product of ' + counter + '.';
    // console.log(stringstring);
    return [counter, stringstring];
}

// Here is the test for multiplyArray(); uncomment it to run it
testMultiplyAnyArray(testDynamicArray);

// Once you get the test passing, do an a-c-p cycle and synchronize the code between GitHub and your laptop. You're done! Submit the link to the repo following the instructions in Canvas.