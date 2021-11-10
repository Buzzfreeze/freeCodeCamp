---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

วิธีที่สองที่สามารถเข้าถึง property ของ object คือเครื่องหมายวงเล็บ (`[]`) หากชื่อ property ของ object ที่คุณพยายามเข้าถึงมีเว้นวรรค คุณจะต้องใช้เครื่องหมายวงเล็บ

อย่างไรก็ตาม คุณยังสามารถใช้เครื่องหมายวงเล็บกับ property ของ object ได้โดยไม่มีเว้นวรรค

นี่เป็นตัวอย่างการใช้เครื่องหมายวงเล็บเพื่ออ่าน property ของ object

```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

 `myObj["Space Name"]` ควรเป็น string `Kirk`, `myObj['More Space']` ควรเป็น string `Spock` และ `myObj["NoSpace"]` ควรเป็น string `USS Enterprise`.


โปรดทราบว่าชื่อ property ที่มีเว้นวรรคจะต้องอยู่ในเครื่องหมายคำพูด (single quotes หรือ double quotes)


# --instructions--

จงอ่านค่า values ของ properties `an entree` และ `the drink` ของ `testObj` โดยใช้ bracket notation และกำหนดค่านั้นให้กับ `entreeValue` และ `drinkValue` ตามลำดับ

# --hints--

`entreeValue` ควรเป็น string

```js
assert(typeof entreeValue === 'string');
```

ค่าของ `entreeValue` ควรเป็น string `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` ควรเป็น string

```js
assert(typeof drinkValue === 'string');
```

ค่าของ `drinkValue` ควรเป็น string  `water`

```js
assert(drinkValue === 'water');
```

คุณควรใช้เครื่องหมายวงเล็บสองครั้ง

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj;   // Change this line
var drinkValue = testObj;    // Change this line
```

# --solutions--

```js
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj['the drink'];
```
