---
id: 56533eb9ac21ba0edf2244c7
title: Accessing Object Properties with Dot Notation
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

เราจะเข้าถึง property ของ object ได้ 2 วิธี คือ:

1. จุด (`.`) และ
2. วงเล็บใหญ่ (`[]`) ซึ่งคล้ายกับการเข้าถึงข้อมูลใน array

การใช้จุด (`.`) หรือที่เรียกว่า Dot Notation นั้นใช้ในการเข้าถึงค่าใน object ถ้าเรารู้ชื่อของ property 

โค้ดด้านล่างเป็นตัวอย่างการใช้จุดเพื่ออ่าน property ของ object:

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1;
var prop2val = myObj.prop2;
```

ตัวแปร `prop1val` จะมีค่าเป็น string `val1` และ `prop2val` จะมีค่าเป็น string `val2`

# --instructions--

จงอ่านค่าของ property ของ `testObj` โดยใช้จุด หลังจากนั้นให้นำค่าของ property `hat` มากำหนดให้กับตัวแปร `hatValue` และนำค่าของ property `shirt` มากำหนดให้กับตัวแปร `shirtValue` 

# --hints--

ตัวแปร `hatValue` ต้องเป็นข้อมูลประเภท string

```js
assert(typeof hatValue === 'string');
```

ตัวแปร `hatValue` ต้องเป็น string ซึ่งมีค่าเป็น `ballcap`

```js
assert(hatValue === 'ballcap');
```

ตัวแปร `shirtValue` ต้องเป็นข้อมูลประเภท string

```js
assert(typeof shirtValue === 'string');
```

ตัวแปร `shirtValue` ต้องเป็น string ซึ่งมีค่าเป็น `jersey`

```js
assert(shirtValue === 'jersey');
```


เวลาใช้เครื่องหมายจุด ให้จุดทีละครั้ง

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
// เตรียมข้อมูล
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

var hatValue = testObj;      // แก้ไขโค้ดบรรทัดนี้
var shirtValue = testObj;    // แก้ไขโค้ดบรรทัดนี้
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
