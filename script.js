//
// let prompt1 = prompt("Bhaiya apni age daalie");
// if (prompt1 < 18) {
//   console.log("Sir aap minor hai");
// } else if (prompt1 >= 18 && prompt1 < 60) {
//   console.log("Sir aap vote de sakte hain");
// } else {
//   console.log("Abe budhau");
// }

// let num1 = Number(prompt("Enter number 1 bhaiya: "));
// let num2 = Number(prompt("Enter number 2: "));

// let sum = num1 + num2;
// if (sum % 2 == 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// let character = prompt("Enter the character: ");
// if (character == Number(character)) {
//   console.log("number h bhaiya");
// } else if (character == character.toUpperCase()) {
//   console.log("Bada letter h bhaiya");
// } else {
//   console.log("chota letter h bhaiya");
// }

// let num1 = Number(prompt("Enter number 1"));
// let num2 = Number(prompt("Enter number 2"));
// let num3 = Number(prompt("Enter number 3"));
// if (num1 == num2 && num1 == num3) {
//   console.log("NUmbers are equal");
// } else if (num1 > num2 && num1 > num3) {
//   console.log(num1 + " is greatest");
// } else if (num2 > num3 && num2 > num1) {
//   console.log(num2 + " is greatest");
// } else {
//   console.log(num3 + " is greatest");
// }
// let year = Number(prompt("Enter Year"));
// if (year % 100 === 0 && year % 400 !== 0) {
//   console.log("Not leap year");
// } else if (year % 4 === 0) {
//   console.log("Leap year");
// } else {
//   console.log("Not a leap year");
// }

// let num1 = Number(prompt("Enter number 1"));
// let num2 = Number(prompt("Enter number 2"));
// let operator = prompt("Enter operator");

// if (operator == "+") {
//   console.log(num1 + num2);
// } else if (operator == "-") {
//   console.log(num1 - num2);
// } else if (operator == "*") {
//   console.log(num1 * num2);
// } else if (operator == "/") {
//   console.log(num1 / num2);
// } else if (operator == "%") {
//   console.log(num1 % num2);
// }

// let num = Number(prompt("Enter a number"));
// if (num > 0) {
//   console.log(num + " is a positive number");
// } else if (num < 0) {
//   console.log(num + " is a negative number");
// } else if (num === 0) {
//   console.log(num);
// }

// let num1 = prompt("Enter the prompt: ");
// let i;
// let number1 = "";
// let number2 = "";
// let operator;
// for (i = 0; i < num1.length; i++) {
//   if (
//     num1[i] != "+" &&
//     num1[i] != "-" &&
//     num1[i] != "*" &&
//     num1[i] != "/" &&
//     num1[i] != "%"
//   ) {
//     number1 += num1[i];
//   } else {
//     operator = num1[i];
//     i++;
//     break;
//   }
// }

// for (i; i < num1.length; i++) {
//   number2 += num1[i];
// }
// number1 = Number(number1);
// number2 = Number(number2);
// if (operator == "+") {
//   console.log(number1 + number2);
// } else if (operator == "-") {
//   console.log(number1 - number2);
// } else if (operator == "*") {
//   console.log(number1 * number2);
// } else if (operator == "/") {
//   console.log(number1 / number2);
// } else if (operator == "%") {
//   console.log(number1 % number2);
// }

// let name1 = prompt("Enter name");
// let time = prompt("Enter Hour in 24 hour format (IST)");
// if (time >= 5 && time < 12) {
//   console.log("Good morning, " + name1);
// } else if (time >= 12 && time < 17) {
//   console.log("Good Afternoon, " + name1);
// } else if (time >= 17 && time < 21) {
//   console.log("Good Evening, " + name1);
// } else {
//   console.log("Good Night, " + name1);
// }

// let light = prompt("Enter the traffic light color");
// light = light.trim().toLowerCase();
// if ((light = "red")) {
//   console.log("Stop");
// } else if ((light = "yellow")) {
//   console.log("Get Ready");
// } else if ((light = "green")) {
//   console.log("Go!");
// }

// let num = Number(prompt("Enter the number"));
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " * " + i + " = " + num * i);
// }

// let marks = Number(prompt("Enter marks"));
// if (marks >= 90 && marks <= 100) {
//   console.log("A");
// } else if (marks >= 80 && marks < 90) {
//   console.log("B");
// } else if (marks >= 70 && marks < 80) {
//   console.log("C");
// } else if (marks >= 60 && marks < 70) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// let admin = "Uday";
// let adminpass = "123";

// let username = prompt("Enter username");
// let password = prompt("Enter password");
// if (username == admin && password == adminpass) {
//   console.log("Login Successful");
// } else {
//   console.log("Incorrect username/password");
// }

// let num1 = Number(prompt("Enter number 1"));
// let num2 = Number(prompt("Enter number 2"));
// console.log("Before swapping", num1, num2);
// num1 = num1 + num2;
// num2 = num1 - num2;
// num1 = num1 - num2;
// console.log(num1, num2);

// let num1 = prompt("Enter the number");
// if (num1 % 3 == 0 && num1 % 5 == 0) {
//   console.log("FizzBuzz");
// } else if (num1 % 3 == 0) {
//   console.log("Fizz");
// } else if (num1 % 5 == 0) {
//   console.log("Buzz");
// } else {
//   console.log(num1);
// }

// let num1 = Number(prompt("Enter the number"));
// let numrev = "";
// let rem;
// while (num1 > 0) {
//   rem = num1 % 10;
//   numrev += rem;
//   num1 = Math.floor(num1 / 10);
// }
// console.log(numrev);

// let a = Number(prompt("Enter the number"));
// let sum = 0,
//   rem;
// while (a > 0) {
//   rem = a % 10;
//   sum += rem;
//   a = Math.floor(a / 10);
// }
// console.log(sum);

// let word = prompt("Enter the word");
// if (word == word.split("").reverse().join("")) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");2
// }

// let num1 = Number(prompt("Enter a number"));
// let num2 = Number(prompt("Enter number2"));
// let num3 = Number(prompt("Enter number 3"));
// if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
//   console.log(num1 + " is the second greatest.");
// } else if ((num2 >= num3 && num2 <= num1) || (num2 <= num3 && num2 >= num1)) {
//   console.log(num2 + " is the second greatest.");
// } else {
//   console.log(num3 + " is the second greatest.");
// }

// let word = prompt("Enter a word");
// let letter = "";
// let i;
// let count = {};
// for (let i = 0; i < word.length; i++) {
//   letter = word[i];
//   if (count[letter] == undefined) {
//     count[letter] = 0;
//   } else {
//     count[letter] = count[letter] + 1;
//   }
// }
// for (let i = 0; i < word.length; i++) {
//   if (count[word[i]] == 0) {
//     console.log(word[i]);
//     break;
//   }
// }

// console.log(letter);
// let num1 = prompt("Enter the number");
// let rem = "";
// let count = 0;
// for (let i = 0; i < num1.length; i++) {
//   rem = Number(num1[i]);
//   if (rem % 2 == 0) {
//     count++;
//   }
// }
// console.log(count);

// let age = prompt("Enter age");
// let salary = prompt("Enter your salary");
// if (age < 18) {
//   console.log("Not Eligible");
// } else {
//   if (salary < 20000) {
//     console.log("Low Salary.");
//   } else if (salary >= 50000) {
//     console.log("High Salary.");
//   } else {
//     console.log("Medium Salary.");
//   }
// }

// let word = prompt("Enter a word");
// let changedWord = "";
// for (let i = 0; i < word.length; i++) {
//   if (word[i] == word[i].toUpperCase()) {
//     changedWord += word[i].toLowerCase();
//   } else {
//     changedWord += word[i].toUpperCase();
//   }
// }
// console.log(changedWord);

// let numbers = [1, 2, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] + 1 != numbers[i + 1] && numbers[i + 1] != undefined) {
//     console.log(numbers[i] + 1 + " is the missing number in the sequence");
//   }
// }

// let num1 = prompt("Enter a single digit number");
// let numInWords = "";
// if (num1 < 0) {
//   numInWords += "Minus ";
// }
// if (num1 == 0) {
//   console.log(numInWords + "Zero");
// }
// if (num1 == 1) {
//   console.log(numInWords + "One");
// }

// if (num1 == 2) {
//   console.log(numInWords + "Two");
// }
// if (num1 == 3) {
//   console.log(numInWords + "Three");
// }
// if (num1 == 4) {
//   console.log(numInWords + "Four");
// }
// if (num1 == 5) {
//   console.log(numInWords + "Five");
// }
// if (num1 == 6) {
//   console.log(numInWords + "Six");
// }
// if (num1 == 7) {
//   console.log(numInWords + "Seven");
// }
// if (num1 == 8) {
//   console.log(numInWords + "Eight");
// }
// if (num1 == 9) {
//   console.log(numInWords + "Nine");
// }
