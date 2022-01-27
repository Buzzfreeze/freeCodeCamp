---
id: 56533eb9ac21ba0edf2244c9
title: Accessing Object Properties with Variables
challengeType: 1
videoUrl: 'https://scrimba.com/c/cnQyKur'
forumTopicId: 16165
dashedName: accessing-object-properties-with-variables
---

# --description--

การใช้ bracket notation อีกแบบนึง คือการเข้าถึง property ของ object ที่ชื่อของ property นั้นเก็บอยู่ในตัวแปร การทำแบบนี้จะช่วยให้วนอ่าน property ของ object หรือ lookup table ได้

ด้านล่างนี้เป็นตัวอย่างการใช้ตัวแปรเพื่อเข้าถึง property


```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed);
```

หน้า console จะแสดง string เป็นคำว่า `Doberman`

คุณสามารถใช้วิธีนี้เพื่อเข้าถึง property ที่ชื่อเปลี่ยนไปในระหว่างที่โปรแกรมทำงานได้ด้วย

ดูตัวอย่างด้านล่าง:

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

ตัวแปร `someProp` จะมีค่าเป็น string `propName` และหน้า console จะแสดง string เป็นคำว่า `John` 


หมายเหตุ เรา *ไม่ได้* ใช้เครื่องหมายคำพูดครอบชื่อตัวแปรเมื่อเข้าถึง property เพราะเราใช้ *ค่า* ของตัวแปร ไม่ใช่ *ชื่อ* ตัวแปร

# --instructions--

กำหนดค่าตัวแปร `playerNumber` เป็น `16` จากนั้นใช้ตัวแปรค้นหาชื่อผู้เล่น แล้วนำชื่อผู้เล่นมากำหนดค่าให้กับ `player`

# --hints--

ตัวแปร `playerNumber` ต้องเป็นข้อมูลประเภท number

```js
assert(typeof playerNumber === 'number');
```

ตัวแปร `player` ต้องเป็นข้อมูลประเภท string

```js
assert(typeof player === 'string');
```

ตัวแปร `player` ต้องเป็น string ซึ่งมีค่าเป็น `Montana`

```js
assert(player === 'Montana');
```

คุณควรใช้ Bracket Notation ในการเข้าถึง `testObj`

```js
assert(/testObj\s*?\[.*?\]/.test(code));
```

คุณไม่ควรกำหนดค่า `Montana` ให้กับ `player` โดยตรง

```js
assert(!code.match(/player\s*=\s*"|\'\s*Montana\s*"|\'\s*;/gi));
```

คุณควรใช้ตัวแปร `playerNumber` ใน Bracket Notation

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
// เตรียมข้อมูล
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

var playerNumber;       // แก้ไขโค้ดบรรทัดนี้
var player = testObj;   // แก้ไขโค้ดบรรทัดนี้
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
