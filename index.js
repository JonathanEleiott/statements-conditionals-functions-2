// Truthy Falsy
// console.log(Boolean(undefined));



// Equal Symbols
// let name = `Sally`;
// name = `Gerald`;

// console.log(name = `Bill`);


// const userInputPassword = `I love bunnies`;
// const databasePassword = `I love bunnies`;

// console.log(userInputPassword !== databasePassword); // false



// Control Flow
// confirm('Is this true?!?');
// const userInputPassword = `bunnies`;

// const userResponse = prompt(`Enter a password`);
// const databasePassword = `bunnies`;
// const adminPassword = `admin`;

// if(userResponse === databasePassword) {
//   alert(`They match!`);
// } else if (userResponse === adminPassword) {
//   alert(`You have full control!`);
// } else if (userResponse === `walrus`) {
//   alert(`I am the walrus!`);
// } else {
//   alert(`WRONG AGAIN!`);
// }

// if(userResponse !== databasePassword) {
//   alert('WRONG AGAIN!');
// }


// const userGuess = prompt(`Enter a number!`);
// const userNumber = Number(userGuess);
// // console.log(typeof userNumber);
// const correctNumber = 22;

// if(!Boolean(userNumber) && userNumber !== 0) {
// //  ! Boolean(NaN)      &&     NaN    !== 0
// //  !     false         &&      true
// //      true            &&      true
// //                    true
//   alert(`I said enter a number!`);
// } else if(userNumber === correctNumber) {
//   alert(`You win!`);
// }

// if(userNumber === correctNumber) {
//   alert(`You win!`);
// } else if(!Boolean(userNumber) && userNumber !== 0) {
//   alert(`I said enter a number!`);
// }



// // Fullstack Rentals
// const isOver25 = false;
// const hasSignedWaiver = false;
// const isEmployee = true;
// const hasInsurance = true;
// const hasKeys = false;


// if(isEmployee && (hasInsurance || isOver25) && hasSignedWaiver) {
//  //  true    && (    true     ||  false  ) &&        false
// //    true    &&              true          &&        false
// //                true                      &&        false
// //                                  false
//   alert(`Have a great trip!`);
// }




// Function

// ES6
// const sayHello = () => {
//   const usersName = prompt(`Enter your name`);
//   alert(`Hello ${usersName}!`);
// }

// const sayGoodbye = () => {
//   alert(`Goodbye`);
// }

// const greet = () => {
//   sayHello();
//   sayGoodbye();
// }

// greet();



// const add = (num1, num2) => {
//   alert(Number(num1) + Number(num2));
// }

// const usersFirstNumber = prompt(`Enter your first number`);
// const firstInputAsNum = Number(usersFirstNumber);

// const usersSecondNumber = prompt(`Enter your second number`);
// const secondInputAsNum = Number(usersSecondNumber);

// add(usersFirstNumber, usersSecondNumber);
// add(1, 3);
// add(1, 3);
// add(4, 9);


// const name = prompt(`Enter your name`)
// const message = `Hey there ${name}`;





const differenceMessage = (num1, num2) => {
  const newTotal = Number(num1) - Number(num2);
  if(newTotal > 500) {
    return `Wow! That's a big number`
  } else {
    return `That's a small number`;
  }
}

// let total = subtract(5, 3); // 2
// total = total + 10;
// alert(total);

const message = subtract(1000, 12); // Wow! That's a big number
console.log(message);