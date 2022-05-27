# Homework

## Default parameter values

- In real life when define functions have parameter without imperative to assign so there for we use default parameter value.

> ES5

```
const logger = (log) => {
  if (typeof log === "undefined") {
    log = "default value";
  }
  console.log("value 1 :", log);
};
```

> ES6

```
const logger2 = (log = "default value") => {
  console.log("values 2: ", log);
};

```

## Rest parameter

- The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

- Not allow parameter after the rest parameter

- Support array destructuring

> Syntax

```
const restParamFunc = (a, ...numbers) => {
 console.log(a);
 console.log(numbers);
 let total = 0;
 for (let num of numbers) {
   total += num;
 }
 console.log(total);
};

restParamFunc(1, 2, 3, 4, 5, 6);
```

cre: [MDN-Web-Doc](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
