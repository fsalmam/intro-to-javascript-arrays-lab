/*
Exercise 1: Define an empty array
1) Create an empty array and assign it to a variable called `foods`.
*/

const foods = []
console.log('Exercise 1 result:', foods)

/*
Exercise 2: Add strings to the array
1) Add 'pizza' and 'cheeseburger' to the `foods` array.
*/

foods.push('pizza')
foods.push('cheeseburger')
console.log('Exercise 2 result:', foods)

/*
Exercise 3: Insert at the beginning
1) Insert the string 'taco' at the beginning of the `foods` array.
*/

foods.unshift('taco')
console.log('Exercise 3 result:', foods)

/*
Exercise 4: Access an array element
1) Retrieve the 'pizza' string from the array based on its position (index).
2) Assign it to a variable called `favFood`.
*/

const favFood = foods[1]
console.log('Exercise 4 result:', favFood)

/*
Exercise 5: Insert an element between two others
1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.
*/

foods.splice(2, 0, 'tofu')
console.log('Exercise 5 result:', foods)

/*
Exercise 6: Replace elements
1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.
*/

foods.splice(1, 1, 'sushi', 'cupcake')
console.log('Exercise 6 result:', foods)

/*
Exercise 7: Using the `slice()` method
1) Use the `slice()` method to create a new array that contains 'sushi' and 'cupcake'.
2) Assign it to a variable named `yummy`.
*/

const yummy = foods.slice(1, 3)
console.log('Exercise 7 result:', yummy)

/*
Exercise 8: Finding an index
1) Using the `indexOf()` method, find the index of the string 'tofu' in the `foods` array.
2) Assign it to a variable named `soyIdx`.
*/

const soyIdx = foods.indexOf('tofu')
console.log('Exercise 8 result:', soyIdx)

/*
Exercise 9: Joining elements
1) Use the `join()` method to concatenate the strings in the `foods` array, separated by ' -> '.
2) Assign the result to a variable called `allFoods`.
*/

const allFoods = foods.join(' -> ')
console.log('Exercise 9 result:', allFoods)

/*
Exercise 10: Check for an element
1) Using the .includes() method, check if the `foods` array contains the string 'soup'.
2) Assign the result to a variable called `hasSoup`.
*/

const hasSoup = foods.includes('soup')
console.log('Exercise 10 result:', hasSoup)

/*
Exercise 11: Odd numbers from an array
1) Choose a method to iterate through the `nums` array.
2) Push each odd number to a new array named `odds`.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90]
const odds = []
for (const num of nums) {
  if (num % 2 !== 0) odds.push(num)
}
console.log('Exercise 11 result:', odds)

/*
Exercise 12: FizzBuzz with arrays
1) Choose a method to iterate through the `nums` array.
2) Sort the numbers into `fizz`, `buzz`, and `fizzbuzz` arrays based on the rules.
*/

const fizz = []
const buzz = []
const fizzbuzz = []
for (const num of nums) {
  if (num % 3 === 0) fizz.push(num)
  if (num % 5 === 0) buzz.push(num)
  if (num % 3 === 0 && num % 5 === 0) fizzbuzz.push(num)
}
console.log('Exercise 12 Results:')
console.log('  fizz:', fizz)
console.log('  buzz:', buzz)
console.log('  fizzbuzz:', fizzbuzz)

/*
Exercise 13: Retrieve the Last Array
1) Assign the last nested array in the `numArrays` below to a variable named `numList`.
*/

const numArrays = [
  [100, 5, 23],
  [15, 21, 72, 9],
  [45, 66],
  [7, 81, 90]
]
const numList = numArrays[numArrays.length - 1]
console.log('Exercise 13 result:', numList)

/*
Exercise 14: Accessing within nested arrays
1) Retrieve the number `66` from the `numArrays` array.
2) Assign it to a variable called `num`.
*/

const num = numArrays[2][1]
console.log('Exercise 14 result:', num)

/*
Exercise 15: Nested array sum
1) Use nested loops or `forEach()` methods to sum up all numbers within `numArrays` nested arrays.
2) Assign the sum to a variable called `total`.
*/

let total = 0
numArrays.forEach(innerArray => {
  innerArray.forEach(num => {
    total += num
  })
})
console.log('Exercise 15 result:', total)
