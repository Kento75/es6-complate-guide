# map

## ES5までの記述

```
var numbers = [1, 2, 3];
var doubledNumbers = [];

for(var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

doubleNumbers;
```

## ES6

```
const numbers = [1, 2, 3];

let doubled = numbers.map(function(number) {
  return number * 2;
})

doubled;
```
