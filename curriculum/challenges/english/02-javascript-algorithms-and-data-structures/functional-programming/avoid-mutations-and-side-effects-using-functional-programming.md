---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

ถ้าคุณยังไม่เห็นว่าในแบบทดสอบที่ต้องสิ่งที่ต้องแก้คืออะไร ประเด็นของแบบทดสอบที่แล้วคือการใช้ `splice` ภายในฟังก์ชัน `tabClose()` ซึ่ง `splice` จะเป็นการเปลี่ยนแปลง array เดิม ทำให้เมื่อการเรียกใช้ array ตัวนี้อีกครั้ง ผลลัพธ์ที่ได้ก็จะไม่ตรงกับที่เราคิดไว้ 

ตัวอย่างที่เรายกขึ้นมานี้เป็นแค่ตัวอย่างเล็กๆเท่านั้น ซึ่งในภาพรวม เวลาที่เราเรียกใช้ฟังก์ชันโดยใช้ ตัวแปร array หรือ object ฟังก์ชันก็จะทำการเปลี่ยนแปลงค่าของตัวแปรหรือสิ่งที่อยู่ใน object นั้น

แต่หลักการของ functional programming คือการไม่เปลี่ยนแปลงค่าของสิ่งที่จะส่งผลให้เกิดบัคได้ วิธีที่ง่ายที่สุดที่จะป้องกันบัคก็คือ ฟังก์ชันของจะคุณต้องไม่ไปเปลี่ยนแปลงอะไร รวมถึง argument ของ function หรือ global variable ด้วย

ในตัวอย่างที่แล้วนั้นเราไม่ได้ทำอะไรที่ซับซ้อน แต่ method `splice` ได้เปลี่ยนข้อมูลใน array เดิม และทำให้เกิดบัคขึ้น

ในเรื่อง functional programming การแก้ไขหรือเปลี่ยนแปลงค่าต่างๆ เรียกว่า <dfn>mutation</dfn> และผลกระทบที่เกิดขึ้นนี้เรียกว่า <dfn>side effect</dfn> 
ฟังก์ชันในอุดมคติคือฟังก์ชันที่เป็น <dfn>pure function</dfn> ซึ่งหมายถึงเป็นฟังก์ชันที่จะไม่ก่อให้เกิด side effect

ให้ลองทำตามหลักการนี้ โดยที่ทำให้ในโค้ดของเราไม่มีการเปลี่ยนค่าของตัวแปร หรือ object

# --instructions--

ให้เขียนโค้ดในฟังก์ชัน `incrementer` เพื่อให้คืนค่าเป็นค่าของ global variable `fixedValue` บวกด้วย 1

# --hints--

ฟังก์ชัน `incrementer` ต้องไม่เปลี่ยนแปลงค่าของ `fixedValue` (ซึ่งมีค่าเป็น `4`).

```js
incrementer();
assert(fixedValue === 4);
```

ฟังก์ชัน `incrementer` ต้องคืนค่าเป็น `fixedValue` บวกด้วย 1

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

ฟังก์ชัน `incrementer` ต้องใช้ค่าของตัวแปร global `fixedValue` 

```js
(function () {
  fixedValue = 10;
  const newValue = incrementer();
  assert(fixedValue === 10 && newValue === 11);
  fixedValue = 4;
})();
```

# --seed--

## --seed-contents--

```js
// ตัวแปรระดับ global
var fixedValue = 4;

function incrementer () {
  // แก้โค้ดใต้บรรทัดนี้เท่านั้น


  // แก้โค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
var fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
