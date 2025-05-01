// ---------первое задание---------//

function greeting(name) {
    return 'Hello ' + name
}

console.log(greeting('Alex'))

// ---------второе задание---------//

const numbers = [1, 5, 17, 8, 10, 12, 31];

function sortNumbers(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      console.log(arr[i]);
    }
  }
}

sortNumbers(numbers)

// ---------третье задание---------//

function calculate(num1, num2, operation) {
  switch (operation) {
    case "sum":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multiply":
      return num1 * num2;
    case "divide":
      return num1 / num2;
  }
}

console.log(calculate(3,8,'sum'))
console.log(calculate(3,8,'subtract'))
console.log(calculate(3,8,'multiply'))
console.log(calculate(3,8,'divide'))

// ---------четвертое задание---------//

const users = [
  {name: 'Maria', isAdmin: false },
  {name: 'Oleg', isAdmin: false },
  {name: 'Stefan', isAdmin: true },
  {name: 'Polina', isAdmin: false },
]
let simpleUsersCount = 0

for (let i = 0; i<users.length; i++)
{
  if (!users[i].isAdmin) {
    simpleUsersCount++
  }
}

console.log('Количество простых пользователей:', simpleUsersCount)
