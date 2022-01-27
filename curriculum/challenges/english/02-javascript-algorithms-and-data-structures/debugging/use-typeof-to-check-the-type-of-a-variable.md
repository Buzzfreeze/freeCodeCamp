---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
forumTopicId: 18374
dashedName: use-typeof-to-check-the-type-of-a-variable
---

# --description--


คุณสามารถใช้ `typeof` เพื่อตรวจสอบโครงสร้างหรือประเภทข้อมูลของตัวแปรได้ คำสั่งนี้มีประโยชน์ในการ debug โค้ดที่มีข้อมูลหลายประเภท  
เช่น ถ้าคุณจะนำเลข 2 ตัวมาบวกกัน แต่เลขตัวนึงเป็น string ซึ่งอาจทำให้ผลลัพธ์ผิดได้ ซึ่งข้อผิดพลาดจากประเภทข้อมูลนี้อาจซ่อนอยู่ในฟังก์ชันหรือการคำนวนของเราได้ เพราะฉะนั้นคุณต้องระวังเรื่องนี้ให้ดี โดยเฉพาะเมื่อคุณใช้ข้อมูลจากภายนอกที่อยู่ในรูป JavaScript Object Notation (JSON)

ลองดูตัวอย่างการใช้ `typeof`:

```js
console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
```

console จะแสดง string `string`, `number`, `object` และ `object` ตามลำดับ

JavaScript มีชนิดของข้อมูลที่เปลี่ยนแปลงไม่ได้ (immutable data type) อยู่ 6 ชนิด คือ `Boolean`, `Null`, `Undefined`, `Number`, `String` และ `Symbol` (เพิ่งมีใน ES6) และมีข้อมูลที่เปลี่ยนแปลงได้ (mutable data type) อยู่ 1 ชนิดคือ `Object`  
*หมายเหตุ* ในทางเทคนิค array ถือว่าเป็น object ใน JavaScript

# --instructions--

ให้ใช้คำสั่ง `console.log()` 2 ครั้ง เพื่ออ่านค่า `typeof` ของตัวแปรที่ชื่อ `seven` และ `three`

# --hints--

ต้องใช้ `typeof` ในคำสั่ง `console.log()` เพื่อตรวจสอบชนิดของตัวแปร

```js
assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
```

ต้องใช้ `typeof` เพื่อตรวจสอบชนิดของตัวแปร `seven`

```js
assert(code.match(/typeof[\( ]seven\)?/g));
```

ต้องใช้ `typeof` เพื่อตรวจสอบชนิดของตัวแปร `three`

```js
assert(code.match(/typeof[\( ]three\)?/g));
```

# --seed--

## --seed-contents--

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// แก้โค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```
