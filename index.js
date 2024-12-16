// EASY SECTION

// 1 reverse the array

// let arr = [1, 2, 3, 4, 5, 6];
// arr.reverse();
// console.log(arr);

// 2 write string with uppercase

// let str = "hello";
// console.log(str.toUpperCase());

// 3 adding a element to the array

// let arr = [1, 2, 3, 4];
// arr.push(5, 6);
// console.log(arr);

// 4 find the length of massiv

// let mass = [1, 3, 5, 5, 8];
// console.log(mass.length);

// 5 changing the info in string

// let str = "hello world";
// let newstr = str.replace("world", "shohjahon:");
// console.log(newstr);

// 6 taking the first element from massiv

// let mass = [2, 4, 6];
// let firstElement = mass[0];
// console.log(firstElement);

// 7 find the length of string

// let str = "shohjahon";
// console.log(str.length);

// 8 adding the element to the head of massiv

// let mass = [1, 2, 3, 4];
// mass.unshift(0)
// console.log(mass);

// 9 write the string with lowercase

// let str = "SHOHJAHON";
// console.log(str.toLowerCase());

// 10 fix the array to the string

// let arr = ['js', "css", "html"];
// let str = arr.join(" ");
// console.log(str);

// MEDIUM SECTION

// 1

// let arr = [5, 4, 2, 8, 1];
// let mass = arr.sort();
// console.log(mass);

// 2

// let str = "apple, banana, cherry ";
// let result = str.split(" , ");
// console.log(result);

// 3

// let mass = [1, 2, 3, 4, 5];
// console.log(mass.includes(5));

// 4

// let str = "shohjahon";
// let choose = str.slice(0, 4);
// console.log(choose);

// 5

// let mass = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumber = mass.filter(num => num % 2  ===0);
// console.log(evenNumber);

// 6

// let str = "hello world";
// console.log(str.includes("world"));

// 7

// let mass = [10, 20, 30, 40];
// let index = mass.indexOf(30);
// console.log(index);

// 8

// let mass = [1, 2, 3, 4, 5];
// let choose = mass.slice(1, 3);
// console.log(choose);

// 9

// let arr = [1, 20, 5];
// let sum = 0
// arr.forEach((item) => {
//     sum += item;
// }) ;
// console.log("count: ", sum);

// 10
// function removeHyphens(inputStr) {
//     return inputStr.split('-').join(' ');
// }
// const inputStr = "123-456-789";
// const outputStr = removeHyphens(inputStr);
// console.log(outputStr);

// 11

// let array = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// let max = Math.max(...array);
// console.log("Eng katta element:", max);

// 12

// let mass = ["orange", "banana", "apple"];
// mass.sort();
// console.log(mass);

// 13

// let mass = [2, 4, 6];
// sum = true;
// mass.forEach((item) => {
//     if (item % 2 !== 0) {
//         sum = false;
//     }
// });
// console.log(sum);

// 14 

// let str = "javascript";
// let reverse = str.split('').reverse('').join('');
// console.log(reverse);

// 15 

// let mass = [1, 3, 4,];
// let updatedArray = mass.map(item => item + 2);
// console.log(updatedArray);

// ADVANCED SECTION 

// 1

// const string = "level";
// const isPalindrome = string === string.split('').reverse().join('');
// console.log(isPalindrome);

// 2 

// function getRandomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// const randomInt = getRandomInteger(1, 10);
// console.log(randomInt);

// 3 

// let str = ["apple", "banana", "apple", "banana", "orange"];
// const uniqueFruits = [...new Set(str)];
// console.log(uniqueFruits);


// 4

// function capitalizeWords(str) {
//     return str.split(' ')
//               .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//               .join(' ');
// }
// const inputString = "hello world from shohjahon";
// const result = capitalizeWords(inputString);
// console.log(result); 


// 5

// let nestedArray = [1, [2, 3,], [4, 5, 6]];
// let flattenedArray = nestedArray.flat();
// console.log(flattenedArray); 

