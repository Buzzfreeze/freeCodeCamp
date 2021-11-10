---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
dashedName: iterate-with-javascript-do---while-loops
---

# --description--

loop ต่อไปนี้ที่คุณจะได้เรียนเรียกว่า `do...while` loop สาเหตุที่เรียกว่า `do...while` เพราะ `do` โค้ดภายใน loop ก่อนหนึ่งรอบเสมอ จากนั้นจึงรัน loop `while` ต่อหากเงื่อนไขเป็น `true`


```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

ตัวอย่างด้านบนทำงานคล้ายกับ loop ประเภทอื่นๆ และผลลัพธ์ของ array ที่ได้ จะมีลัษณะดังนี้ `[0, 1, 2, 3, 4]` อย่างไรก็ตาม สิ่งที่ทำให้ `do...while` แตกต่างจาก loop อื่นๆ คือ ลักษณะการทำงานเมื่อไม่เข้าเงื่อนไขในการตรวจสอบครั้งแรก มาดูตัวอย่างการทำงานกัน: นี่คือ`while` loop ทั่วไปที่จะรันโค้ดใน loop ตราบเท่าที่ `i < 5`:

```js
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

ในตัวอย่างนี้ เรากำหนดค่าเริ่มต้นของ `ourArray` เป็น empty array และค่าเริ่มต้นของ `i` เป็น 5 เมื่อเรารัน `while` loop ผลลัพธ์ของเงื่อนไข  เป็น `false` เพราะ  `i`  มีค่าไม่น้อยกว่า 5 ดังนั้นโค้ดภายในลูปจะไม่ถูกรัน ผลลัพธ์คือ `ourArray` จะจบลง โดยไม่มีการเพิ่มค่าใด ๆ และจะยังคงเป็น `[]` เมื่อโค้ดทั้งหมดในตัวอย่างด้านบนทำงานเสร็จ 

ตอนนี้ให้ดูที่ `do...while` loop:

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

ในกรณีนี้ เรากำหนดค่าเริ่มต้นของ `i` เป็น 5 เช่นเดียวกับที่เราทำกับ `while` loop เมื่อเราดูบรรทัดถัดไป ไม่พบเงื่อนไขใดๆ ดังนั้นเราจึงไปที่โค้ดภายในวงเล็บปีกกา แล้วรัน จากนั้นเพิ่ม element 1 ตัวใน array แล้วนำ `i` มาบวก 1 ก่อนตรวจสอบเงื่อนไข เมื่อเราตรวจสอบเงื่อนไข `i < 5` ในบรรทัดสุดท้าย เราจะเห็นว่า `i` ตอนนี้เป็น 6 ซึ่งไม่เข้าตามเงื่อนไข ดังนั้นเราจึงออกจาก loop และเป็นอันเสร็จสิ้น อย่างไรก็ตาม ที่ส่วนท้ายของตัวอย่างข้างต้น ค่าของ `ourArray` คือ `[5]` โดยหลักแล้ว `do...while` loop ทำให้โค้ดภายใน loop ทำงานอย่างน้อยหนึ่งครั้ง มาลองทำ `do...while` เพื่อส่งค่าไปยัง array กัน


# --instructions--

จงเปลี่ยน `while` loop ในโค้ดเป็น `do...while` loop ดังนั้น loop จะ push เฉพาะตัวเลข `10` เข้าไปยัง `myArray` และ `i` จะมีค่าเท่ากับ `11` เมื่อโค้ดของคุณรันเสร็จแล้ว

# --hints--

คุณควรใช้ `do...while` loop ในแบบฝึกหัดนี้

```js
assert(code.match(/do/g));
```

`myArray` ควรเท่ากับ `[10]`

```js
assert.deepEqual(myArray, [10]);
```

`i` ควรเท่ากับ `11`

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
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
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
