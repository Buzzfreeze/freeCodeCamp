---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

ต่อไปคุณจะได้เรียนเรื่อง `do...while` loop เราเรียก loop ประเภทนี้ว่า `do...while` ก็เพราะว่าเราจะทำ (`do`) โค้ดภายใน loop ก่อนหนึ่งรอบเสมอ จากนั้นจึงรัน loop `while` ต่อหากเงื่อนไขเป็น `true`


```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

ตัวอย่างด้านบนทำงานคล้ายกับ loop ประเภทอื่นๆ และก็จะได้ผลลัพธ์เป็น array แบบนี้ `[0, 1, 2, 3, 4]`
แต่ `do...while` จะแตกต่างจาก loop อื่นๆ เพราะว่าวิธีการทำงานเมื่อเงื่อนไขรอบแรกเป็น `false` 
มาดูตัวอย่างการทำงานกัน: 
ตัวอย่างด้านล่างเป็น `while` loop ปกติ ที่จะรันโค้ดใน loop ไปเรื่อยๆ ถ้า `i < 5` เป็น `true`:

```js
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

ในตัวอย่างนี้ เรากำหนดค่าเริ่มต้นของ `ourArray` เป็น empty array และค่าเริ่มต้นของ `i` เป็น 5 เมื่อเรารัน `while` loop แล้ว `i < 5` จะเป็น `false` เพราะ  `i`  มีค่าไม่น้อยกว่า 5 ดังนั้นโค้ดภายในลูปจะไม่ถูกรัน ผลคือ `ourArray` จะไม่ถูกเพิ่มค่าเข้าไป และจะมีค่าเป็น `[]` เหมือนเดิม

มาลองดู `do...while` ต่อ:

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

ในกรณีนี้ เรากำหนดค่าเริ่มต้นของ `i` เป็น 5 เหมือนกับในตัวอย่าง `while` loop จากนั้นถึงไปรันโค้ดภายในวงเล็บปีกกา แล้วเพิ่ม element 1 ตัวใน array แล้วนำ `i` มาบวก 1 แล้วค่อยไปตรวจสอบเงื่อนไข 
เมื่อเราไปดู `i < 5` ในบรรทัดสุดท้าย เราจะเห็นว่า `i` ตอนนี้เป็น 6 ทำให้ `i < 5` เป็น `false` ดังนั้นเราจึงออกจาก loop
จากตัวอย่างด้านบนถ้าโค้ดรันเสร็จแล้ว `ourArray` จะมีค่าเป็น `[5]` ถ้าจะให้สรุปก็คือ `do...while` loop ทำให้โค้ดภายใน loop ทำงานอย่างน้อยหนึ่งครั้ง มาลองเขียน `do...while` เพิ่มค่าใน array กัน


# --instructions--

จงเปลี่ยน `while` loop ในโค้ดเป็น `do...while` loop ซึ่งจะทำให้ `myArray` มีแค่เลข `10` ข้างใน และเมื่อโค้ดของคุณรันเสร็จ `i` จะมีค่าเท่ากับ `11` 

# --hints--

ต้องใช้ `do...while` loop ในแบบฝึกหัดนี้

```js
assert(code.match(/do/g));
```

เมื่อโค้ดทำงานเสร็จแล้ว `myArray` ต้องมีค่าเป็น `[10]`

```js
assert.deepEqual(myArray, [10]);
```

เมื่อโค้ดทำงานเสร็จแล้ว `i` ต้องมีค่าเป็น `11`

```js
assert.equal(i, 11);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myArray = [];
var i = 10;

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
while (i < 5) {
  myArray.push(i);
  i++;
}
```

# --solutions--

```js
var myArray = [];
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```
