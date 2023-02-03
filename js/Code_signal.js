"use strict";

// PROBLEM 1
// Write a function that returns the sum of two numbers.
//
//     Example
//
// For param1 = 1 and param2 = 2, the output should be
// solution(param1, param2) = 3.
//
// function solution(param1, param2) {
//     return param1 + param2;
// }

//PROBLEM 2
// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.
//
//     Example
//
// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.
//
// function solution(year) {
//     var yearCenturies = year/100;
//     return Math.ceil(yearCenturies);
// }

//PROBLEM 3
// Given the string, check if it is a palindrome.
//
//     Example
//
// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.
//
// function solution(inputString) {
//      var reverseString = inputString.split("").reverse().join("");
//     return inputString === reverseString;
// }

//PROBLEM 4
// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
//
//     Example
//
// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// solution(inputArray) = 21.
//
// 7 and 3 produce the largest product.
//
//     function solution(inputArray) {
//     var prod = inputArray[0] * inputArray[1];
//
//     for (var i = 1; i<inputArray.length - 1;i++) {
//         prod = Math.max(prod, inputArray[i] *      inputArray[i+1]);
//     }
//
//     return prod
// }

//PROBLEM 5
// Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained
// by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
// You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
//