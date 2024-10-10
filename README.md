# Statements, Conditionals, and Functions

## Truthy vs Falsy - everything can be converted to a boolean

- Truthy Values
  - true
  - non-empty strings
  - ALL numbers except for zero

- Falsy Values
  - false
  - "", '', ``
  - 0
  - null
  - undefined
  - NaN - not a number

## Equals Symbols

- = -> assigning a variable to a value
- == -> loosely equals (DO NOT USE)
- === -> strictly equals
- != -> loosely inequal (DO NOT USE)
- !== -> strictly inequal

## Control Flow - how we tell the computer to make decisions

- if statements
  - if(condition) { do something }
- else if
  - else if (condition) { do seomthing }
- else statements
  - else { do something else}

## Conditional Prioritization

- Parenthesis
- &&
- ||

## Converting Data Types

- use the name of the name of the data type you want to convert to with a capital letter and then pass in the value you want to convert in parenthesis

## Prompt - one way to get user input

- allows the user to input a value
- ALWAYS come back as a string

## Functions - block of code that will execute a given task

- just a set of directions
- can be re-used throghout your code and can be called when something triggers it (like a button click)
- two ways to write a function
  - function functionName() { code here } (ES5)
  - const functionName = () => { code here } (ES6 / Arrow Functions)
- how to invoke (run) a function -> functionName()

## Parameters and Arguments

- parameters are in the function definition and act as a placeholder for values
- arguments are the real values that are passed into the function call

## The return keyword

- ONLY used in functions
- what the function sends back to whatever called it
- once you return, the function stops