// Task#01

for(let i=1; i<=10;i++)
{
    console.log(i);

}

// Task#02

for(let i=0; i<=20;i+=2)
{
    // if(i%2===0)
    // {
    // console.log(i);
    // }
    console.log(i);

}

// Task#03

//  0,1,1,2,3,5,8,13,21,34....

let firstNumber=0;
let secondNumber=1;
console.log(firstNumber);
console.log(secondNumber);
for(let i=0; i<10; i++)
{

let result=firstNumber+secondNumber;
console.log(result);
firstNumber=secondNumber;
secondNumber=result;

}

// Task#04

let number=prompt("Enter a number:")
for(let i=1; i<=10; i++)
{
  console.log(`${number} * ${i} = ${number*i}`);

}
console.log(`${number} * 1 = ${number*1}`);
console.log(`${number} * 2 = ${number*2}`);
console.log(`${number} * 3 = ${number*3}`);

// Functions
// Task#01

function sum(num1, num2) {
  return num1 + num2; //?

}

console.log(sum(3, 8));

// Task#02

function isEven(num) {
  if (num % 2 === 0) return true;
  return false;
}

console.log(isEven(102));

// Task#03

function reverseString(inputString) {
  let reversedString = "";

  for (let i = inputString.length - 1; i >= 0; i--) {
    reversedString += inputString[i];
  }

  return reversedString;
}

const originalString = "Shafqat";
const reversed = reverseString(originalString);
console.log(reversed);

// Task#04

function calFactorial(number) {
  if (number == 0 || number == 1) {
    return 1;
  } else {
    return number * calFactorial(number - 1);
  }
}
let number1 = prompt("Enter a number to calculate its factorial");
console.log(`Factorial of ${number1} is : ${calFactorial(number1)}`);

// TasK#05

function convertTemprature(tempreture) {
  return tempreture * (9 / 5) + 32;

}

let celciusTemperature = prompt(
  "Enter temprature in celcius to convert it into farenhiet"
);

console.log(
  `${celciusTemperature} celcius is equal to ${convertTemprature(
    celciusTemperature
  )} Farenheit`

);

// Task#06

const countVowels = (text) => {
  let vowelCount = 0;

  for (let start = 0; start < text.length; start++)
    if (
      text[start] === "a" ||
      text[start] === "e" ||
      text[start] === "i" ||
      text[start] === "o" ||
      text[start] === "u"
    ) {
      vowelCount++;
    }

  return vowelCount;
};

console.log("Count of Vowels: ", countVowels("hello"));
