# filter

## ES5までの記述

```
var products = [
  { name: "きゅうり", type: "野菜" },
  { name: "りんご", type: "フルーツ" },
  { name: "セロリ", type: "野菜" }
];

var filteredProducts = [];

for(var i = 0; i < products.length; i++) {
  if(products[i].type === "フルーツ") {
    filteredProducts.push(products[i]);
  }
}
```

## ES6のコード

```
const products = [
  { name: "きゅうり", type: "野菜" },
  { name: "りんご", type: "フルーツ" },
  { name: "セロリ", type: "野菜" }
];

products.filter(function(product) {
  return product.type === "フルーツ";
});
```
