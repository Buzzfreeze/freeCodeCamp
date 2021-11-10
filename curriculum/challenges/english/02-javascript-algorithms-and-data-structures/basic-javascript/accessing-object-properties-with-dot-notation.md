---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

มีสองวิธีในการเข้าถึง properties ของ object คือ เครื่องหมายจุด (`.`) และเครื่องหมายวงเล็บ (`[]`) ซึ่งคล้ายกับ array

เครื่องหมายจุด (`.`) ใช้ในการเข้าถึงค่าใน object เมื่อทราบชื่อของ property 

นี่เป็นตัวอย่างการใช้เครื่องหมายจุด (`.`) เพื่ออ่าน properties ของ object:

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1;
var prop2val = myObj.prop2;
```

`prop1val` ควรมีค่าของ string `val1` และ `prop2val` ควรมีค่า string `val2`

# --instructions--

จงอ่าน property values ของ `testObj` โดยใช้เครื่องหมายจุด และจงกำหนดตัวแปร `hatValue` ให้มีค่าเท่ากับ property ของ object `hat` และกำหนดค่าตัวแปร `shirtValue` ให้มีค่าเท่ากับ property ของ object `shirt`

# --hints--

`hatValue` ควรเป็น string

```js
assert(typeof hatValue === 'string');
```

ค่าของ `hatValue` ควรเป็น string `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` ควรเป็น string

```js
assert(typeof shirtValue === 'string');
```

ค่าของ `shirtValue` ควรเป็น string `jersey`

```js
assert(shirtValue === 'jersey');
```


คุณไม่ควรใช้เครื่องหมายจุดสองครั้ง

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj;      // Change this line
var shirtValue = testObj;    // Change this line
```

# --solutions--

```js
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;
```
