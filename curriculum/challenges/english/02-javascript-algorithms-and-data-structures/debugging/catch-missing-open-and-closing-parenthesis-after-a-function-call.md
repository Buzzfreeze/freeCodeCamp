---
id: 587d7b85367417b2b2512b39
title: Catch Missing Open and Closing Parenthesis After a Function Call
challengeType: 1
forumTopicId: 301185
dashedName: catch-missing-open-and-closing-parenthesis-after-a-function-call
---

# --description--

คุณอาจลืมใส่วงเล็บ `()` ถ้าเรียกใช้งาน function หรือ method ที่ไม่มี argument ปกติแล้วเรามักเก็บค่าที่ได้คืนมาจากฟังก์ชันในตัวแปร เพื่อนำไปใช้งานในส่วนอื่นของโค้ด 
เราจะเห็นข้อผิดพลาดแบบนี้ได้ถ้าเรา log ค่าของตัวแปรออกมาบน console โดยจะแสดงค่าของตัวแปรนี้ เป็นข้อมูลของฟังก์ชันที่เอามากำหนดให้ตัวแปรนี้ (function reference) แทนที่จะเป็นค่าที่คืนมาจากฟังก์ชัน

ลองดูตัวอย่างด้านล่าง ตัวแปรสองตัวนี้จะไม่เหมือนกัน:

```js
function myFunction() {
  return "You rock!";
}
let varOne = myFunction;
let varTwo = myFunction();
```

ตัวแปร `varOne` จะเป็นฟังก์ชัน `myFunction` และตัวแปร `varTwo` จะมีค่าเป็น string `You rock!`

# --instructions--

ให้แก้ไขโค้ดเพื่อให้ตัวแปร `result` มีค่าเป็นตัวเลขที่ได้มาจากการเรียกใช้ฟังก์ชัน `getNine`

# --hints--

ต้องแก้โค้ดให้ตัวแปร `result` มีค่าเป็นตัวเลขที่ได้มาจากการเรียกใช้ฟังก์ชัน `getNine`

```js
assert(result == 9);
```

ต้องมีการเรียกใช้ฟังก์ชัน `getNine` ในโค้ด

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
