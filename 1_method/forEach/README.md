# forEach

## ES5までの記述

```
var colors = ["red", "blue", "green"];

for(var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

## ES6のコード

```
const colors = ["red", "blue", "green"];

colors.forEach(function(color) {
  console.log(color);
})
```
