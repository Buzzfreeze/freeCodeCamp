---
id: 56533eb9ac21ba0edf2244c8
title: Accessing Object Properties with Bracket Notation
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

วิธีที่สองที่เราสามารถใช้เพื่อสามารถเข้าถึง property ของ object คือการใช้เครื่องหมายวงเล็บใหญ่ (`[]`) หรือที่เรียกว่า Bracket Notation
คุณจำเป็นต้องใช้วงเล็บใหญ่ถ้าชื่อ property ของ object ที่คุณพยายามเข้าถึงมีเว้นวรรค

และคุณก็ยังสามารถใช้วงเล็บใหญ่กับ property ที่ไม่มีเว้นวรรคได้ด้วย 

ด้านล่างนี้เป็นตัวอย่างการวงเล็บใหญ่เพื่ออ่าน property ของ object

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

`myObj["Space Name"]` จะมีค่าเป็น string `Kirk`, 
`myObj['More Space']` จะมีค่าเป็น string `Spock` และ
`myObj["NoSpace"]` จะมีค่าเป็น string `USS Enterprise`


อย่าลืมว่า property ที่มีเว้นวรรคจำเป็นต้องอยู่ในเครื่องหมายคำพูดเท่านั้น (จะใช้ single หรือ double quote ก็ได้)


# --instructions--

จงอ่านค่าของ property `an entree` และ `the drink` ของ `testObj` โดยใช้ Bracket Notation และนำค่านั้นมากำหนดให้กับตัวแปร `entreeValue` และ `drinkValue` ตามลำดับ

# --hints--

ตัวแปร `entreeValue` ต้องเป็นข้อมูลประเภท string

```js
assert(typeof entreeValue === 'string');
```

ตัวแปร `entreeValue` ต้องเป็น string ซึ่งมีค่าเป็น `hamburger`

```js
assert(entreeValue === 'hamburger');
```

ตัวแปร `drinkValue` ต้องเป็นข้อมูลประเภท string

```js
assert(typeof drinkValue === 'string');
```

ตัวแปร `drinkValue` ต้องเป็น string ซึ่งมีค่าเป็น  `water`

```js
assert(drinkValue === 'water');
```

ต้องใช้ Bracket Notation สองครั้งในโค้ด

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
// เตรียมข้อมูล
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

var entreeValue = testObj;   // แก้ไขโค้ดบรรทัดนี้
var drinkValue = testObj;    // แก้ไขโค้ดบรรทัดนี้
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
