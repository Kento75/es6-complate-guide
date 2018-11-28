# find

## ES5までの記述

```
var users = [
  { name: "taro" },
  { name: "jiro" },
  { name: "saburo" }
];

var user = [];

for(var i = 0; i < users.length; i++) {
  if(users[i].name === "jiro") {
    user = users[i];
  }
}

user;
```

## ES6

```
const users = [
  { name: "taro" },
  { name: "jiro" },
  { name: "saburo" }
];

users.find(function(user) {
  return user.name === "jiro";
});
```
