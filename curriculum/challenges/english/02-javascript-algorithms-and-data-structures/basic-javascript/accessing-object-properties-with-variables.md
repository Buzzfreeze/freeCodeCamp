---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

การใช้ bracket notation อีกแบบนึงกับ object คือการเข้าถึง property ซึ่งเก็บอยู่ในรูปของตัวแปร การทำเช่นนี้เป็นประโยชน์มากสำหรับการวนอ่าน property ของ object หรือเมื่อเข้าถึง lookup table

ต่อไปนี้เป็นตัวอย่างการใช้งานตัวแปรในการเข้าถึง property


```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
```

string `Doberman` ควรแสดงในหน้า console

อีกเหตุผลนึงที่คุณสามารถใช้แนวคิดนี้ คือเมื่อชื่อ property เป็นชื่อแบบ dynamic ระหว่างการทำงานของโปรแกรม ดังตัวอย่างนี้:

```js
var someObj = {
  propName: "John"
};
function propPrefix(str) {
  var s = "prop";
  return s + str;
}
var someProp = propPrefix("Name");
console.log(someObj[someProp]);
```

`someProp` มีค่าของ string `propName` และ string `John` ควรแสดงในหน้า console


หมายเหตุ เรา *ไม่ได้* ใช้เครื่องหมายคำพูดครอบชื่อตัวแปรเมื่อเข้าถึง property เพราะเราใช้ *ค่า* ของตัวแปร ไม่ใช่ *ชื่อ* ตัวแปร

# --instructions--

กำหนดตัวแปร `playerNumber` เป็น `16` จากนั้นใช้ตัวแปรค้นหาชื่อผู้เล่น แล้วกำหนดค่าให้กับ `player`

# --hints--

`playerNumber` ควรเป็น number

```js
assert(typeof playerNumber === 'number');
```

ค่าของ `player` ควรเป็น string

```js
assert(typeof player === 'string');
```

ค่าของ `player` ควรเป็น string `Montana`

```js
assert(player === 'Montana');
```

คุณควรใช้วงเล็บในการเข้าถึง `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

คุณไม่ควรกำหนดค่า `Montana` ให้กับ `player` โดยตรง

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

คุณไม่ควรใช้ตัวแปร `playerNumber` ในวงเล็บ

```js
assert(/testObj\s*?\[\s*playerNumber\s*\]/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof player !== "undefined"){(function(v){return v;})(player);}
```

## --seed-contents--

```js
// Setup
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line

var playerNumber;       // Change this line
var player = testObj;   // Change this line
```

# --solutions--

```js
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;
var player = testObj[playerNumber];
```
