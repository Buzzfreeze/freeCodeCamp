---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--


คุณสามารถใช้ `typeof` เพื่อตรวจสอบ data structure (โครงสร้างข้อมูล) หรือ data type (ชนิดข้อมูล) ของตัวแปรได้ คำสั่งนี้มีประโยชน์เมื่อ debug โปรแกรมที่มี data type หลายตัว ถ้าคุณกำลังนำเลข 2 ตัวมาบวกกัน แต่เลขตัวนึงจริงๆ แล้วเป็น string ผลลัพธ์ที่ได้ก็จะไม่เป็นไปตามที่เราต้องการ ซึ่ง error ที่เกิดจาก data type สามารถทำให้เกิดข้อผิดพลาดเมื่อมีการคำนวณหรือเรียกใช้ฟังก์ชันได้ ดังนั้น ให้ระมัดระวัง โดยเฉพาะเมื่อคุณเข้าถึงหรือทำงานกับข้อมูลภายนอกที่อยู่ในรูปของ JavaScript Object Notation (JSON) object

ต่อไปนี้เป็นตัวอย่างการใช้ `typeof`

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

console ควรแสดง strings ต่อไปนี้ตามลำดับ `string`, `number`, `object` และ `object`

JavaScript มี 6 primitive immutable (แก้ไขเปลี่ยนแปลงไม่ได้) data types คือ `Boolean`, `Null`, `Undefined`, `Number`, `String` และ `Symbol` (เพิ่งมีใน ES6) และมี mutable (แก้ไขเปลี่ยนแปลงได้) data type อยู่ 1 ตัวคือ `Object` 
หมายเหตุ  arrays โดยทางเทคนิคถือเป็นประเภท object ในภาษา JavaScript  

# --instructions--

ให้เพิ่ม `console.log()` จำนวน 2 statements เพื่อตรวจสอบ `typeof` ของตัวแปร `seven` และ `three`

# --hints--

โค้ดของคุณควรใช้ `typeof` ภายในทั้งสอง `console.log()` statements to เพื่อตรวจสอบชนิดของตัวแปร

```js
assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
```

โค้ดของคุณควรใช้ `typeof` to เพื่อตรวจสอบชนิดของตัวแปร `seven`

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

โค้ดของคุณควรใช้ `typeof` to เพื่อตรวจสอบชนิดของตัวแปร `three`

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Only change code below this line
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
