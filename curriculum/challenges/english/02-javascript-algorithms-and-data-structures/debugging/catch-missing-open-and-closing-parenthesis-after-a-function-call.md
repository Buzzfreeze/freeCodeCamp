---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

คุณอาจลืมใส่ "()" เวลาเรียกใช้งาน function หรือ method ที่ไม่มี argument บ่อยครั้งที่เรามักกำหนดผลของการเรียกฟังก์ชันให้กับตัวแปร เพื่อนำไปใช้งานในส่วนอื่นของโค้ด ซึ่งการลืมใส่ "()" จะทำให้เกิด error ที่สามารถเห็นได้จากหน้า console เวลาสั่ง log ค่าตัวแปร โดยแสดงเป็นรายละเอียดของฟังก์ชัน (function reference) แทนที่จะเป็นค่าที่คืนมาจากฟังก์ชัน

ตัวแปรในตัวอย่างต่อไปนี้ให้ผลต่างกัน

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

`varOne` คือ ฟังก์ชัน `myFunction` และ `varTwo` คือ string `You rock!`

# --instructions--

จงแก้ไขโค้ด เพื่อให้ตัวแปร `result` มีค่าเป็นตัวเลขที่รับการคืนค่ามาจากฟังก์ชัน `getNine`.

# --hints--

โค้ดของคุณควรแก้ไขตัวแปร `result` เพื่อให้มีค่าเป็นตัวเลขที่รับการคืนค่ามาจากฟังก์ชัน `getNine`

```js
assert(result == 9);
```

โค้ดของคุณควรเรียกฟังก์ชัน `getNine`

```js
assert(code.match(/getNine\(\)/g).length == 2);
```

# --seed--

## --seed-contents--

```js
function getNine() {
  let x = 6;
  let y = 3;
  return x + y;
}

let result = getNine;
console.log(result);
```

# --solutions--

```js
function getNine() {
 let x = 6;
 let y = 3;
 return x + y;
}

let result = getNine();
console.log(result);
```
