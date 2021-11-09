---
id: 587d7b8e367417b2b2512b5e
title: Avoid Mutations and Side Effects Using Functional Programming
challengeType: 1
forumTopicId: 301228
dashedName: avoid-mutations-and-side-effects-using-functional-programming
---

# --description--

หากคุณยังมองภาพไม่ออกว่า จริงๆ แล้ว ประเด็นของแบบทดสอบที่แล้วคือการใช้ `splice` ภายในฟังก์ชัน `tabClose()` ซึ่ง `splice` ทำให้ array ตั้งต้นถูกเปลี่ยนแปลงแก้ไข ดังนั้น เมื่อมีการเรียกใช้ array ตัวนี้เป็นครั้งที่สอง ก็ทำให้ได้ผลลัพธ์ที่ไม่พึงปรารถนา 

นี่เป็นเพียงตัวอย่างเล็กๆ ที่สะท้อนรูปแบบที่มากกว่านั้น กล่าวคือ มีการเรียกฟังก์ชันที่มี variable, array หรือ object และฟังก์ชันก็มีการเปลี่ยนแปลงค่า variable หรือสิ่งที่อยู่ใน object

แต่หลักของ functional programming คือการไม่เปลี่ยนแปลงสิ่งใดๆ เพราะการเปลี่ยนแปลงอาจก่อให้เกิดข้อผิดพลาด วิธีที่ง่ายที่สุดที่จะป้องกันข้อผิดพลาดก็คือ ฟังก์ชันของคุณต้องไม่เปลี่ยนแปลงค่าใดๆ รวมถึง function arguments หรือ globle variables ด้วย

ตัวอย่างที่แล้วนั้น ไม่ได้มีอะไรซับซ้อน มีเพียงใช้ `splice` method ที่เปลี่ยนแปลงแก้ไข array ตั้งต้น และก่อให้เกิดผลลัพธ์ที่ผิด

ในเรื่อง functional programming การแก้ไขหรือเปลี่ยนแปลงค่าต่างๆ เรียกว่า <dfn>mutation</dfn> และผลกระทบที่เกิดขึ้น เรียกว่า <dfn>side effect</dfn> อย่างไรก็ตาม ฟังก์ชันที่สมบูรณ์แบบควรเป็น <dfn>pure function</dfn> หมายถึงเป็นฟังก์ชันที่ไม่ก่อให้เกิด side effects 

ลองทำตามหลักการและไม่แก้ไขค่า variable หรือ object ในโค้ดของเรา

# --instructions--

จงเติมโค้ดในฟังก์ชัน `incrementer` เพื่อให้คืนค่าเป็นค่าของ global variable `fixedValue` บวกด้วย 1

# --hints--

ฟังก์ชันของคุณ `incrementer` ไม่ควรเปลี่ยนแปลงค่าของ `fixedValue` (ซึ่งมีค่าเป็น `4`).

```js
incrementer();
assert(fixedValue === 4);
```

ฟังก์ชัน `incrementer` ควรคืนค่าเป็น `fixedValue` บวกด้วย 1

```js
const __newValue = incrementer();
assert(__newValue === 5);
```

ฟังก์ชัน `incrementer` ควรคืนค่าตาม `fixedValue` global variable

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
// The global variable
var fixedValue = 4;

function incrementer () {
  // Only change code below this line


  // Only change code above this line
}
```

# --solutions--

```js
var fixedValue = 4

function incrementer() {
  return fixedValue + 1
}
```
