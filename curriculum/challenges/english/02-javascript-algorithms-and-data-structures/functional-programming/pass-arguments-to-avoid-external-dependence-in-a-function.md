---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

แบบทดสอบที่แล้วเป็นการขยับเข้ามาหาหลัก functional programming มากขึ้น แต่ก็ยังมีบางอย่างที่ยังไม่ครบถ้วน

แม้ว่าเราจะไม่ได้แก้ไขค่า global variable แต่ฟังก์ชัน `incrementer` ก็ไม่สามารถทำงานได้ หากไม่มี global variable `fixedValue`

อีกหลักการนึงของ functional programming ก็คือ ต้องประกาศ dependencies (ความสัมพันธ์) ให้ชัดเจน หมายความว่า ถ้าฟังก์ชันต้องทำงานกับ variable หรือ object หนึ่งๆ ก็ให้ส่งค่า variable หรือ object นั้นเข้ามายังฟังก์ชันในรูปแบบของ argument

หลักการนี้ทำให้เกิดข้อดีคือ ทำให้ทดสอบฟังก์ชันได้ง่ายขึ้น เพราะคุณทราบชัดเจนว่า input คืออะไร และฟังก์ชันก็จะไม่เกิดผลกระทบกับสิ่งอื่นใดในโปรแกรมของคุณ

วิธีนี้ทำให้คุณมั่นใจมากขึ้นเวลาแก้ไข, ลบ หรือ เพิ่มโค้ด เพราะคุณจะทราบว่า สิ่งใดที่คุณสามารถหรือไม่สามารถแก้ไขได้ และคุณยังเห็นสิ่งที่อาจทำให้เกิดข้อผิดพลาดได้ง่ายอีกด้วย

สุดท้ายแล้ว ฟังก์ชันควรให้ผลลัพธ์เหมือนกันทุกครั้ง เมื่อส่งค่า input ที่เหมือนเดิมเข้าไป ไม่ว่าประมวลผลด้วยส่วนใดของโค้ดก็ตาม

# --instructions--

จงปรับปรุงฟังก์ชัน `incrementer` ให้มีการประกาศ dependencies (ความสัมพันธ์) อย่างชัดเจน

โดยเขียนฟังก์ชัน `incrementer` ให้รับค่า argument และคืนค่าเป็นผลลัพธ์จากการบวก 1

# --hints--

ฟังก์ชัน `incrementer` ไม่ควรแก้ไขค่า `fixedValue` (ซึ่งมีค่าเป็น `4`).

```js
assert(fixedValue === 4);
```

ฟังก์ชัน `incrementer` ควรรับค่า argument

```js
assert(incrementer.length === 1);
```

ฟังก์ชัน `incrementer` ควรคืนค่าเป็น `fixedValue` บวก 1

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer () {


  // Only change code above this line
}
```

# --solutions--

```js
// The global variable
var fixedValue = 4;

// Only change code below this line
function incrementer (fixedValue) {
  return fixedValue + 1;

  // Only change code above this line
}

  
```
