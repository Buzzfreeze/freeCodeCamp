---
id: 587d7b8e367417b2b2512b5f
title: Pass Arguments to Avoid External Dependence in a Function
challengeType: 1
forumTopicId: 301234
dashedName: pass-arguments-to-avoid-external-dependence-in-a-function
---

# --description--

แบบทดสอบที่แล้วเป็นการทำให้เราเห็นหลักการของ functional programming มากขึ้น แต่เราก็ยังเห็นไม่ครบ

ถึงเราจะไม่ได้เปลี่ยนค่าของ global variable แต่ฟังก์ชัน `incrementer` ก็จะทำงานไม่ได้ ถ้าไม่มี global variable `fixedValue`

หลักการอีกข้อของ functional programming คือ ต้องทำให้เห็น dependency ได้อย่างชัดเจน (dependency คือการที่โค้ดส่วนหนึ่งจำเป็นต้องใช้ค่าจากตัวแปร หรือโค้ดส่วนอื่น) ซึ่งถ้าฟังก์ชันจำเป็นต้องใช้ค่าของตัวแปร หรือ object ตัวไหน ก็ให้ส่งตัวแปร หรือ object ตัวนั้นเข้ามาเป็น argument ของฟังก์ชันด้วย

ข้อดีของหลักการนี้คือ จะทำให้ทดสอบฟังก์ชันได้ง่ายขึ้น เพราะคุณจะรู้ว่า input คืออะไร และฟังก์ชันก็จะไม่ไปกระทบกับส่วนอื่นในโปรแกรมของคุณ

การใช้หลักการนี้จะทำให้คุณมั่นใจมากขึ้นเวลาแก้ไข ลบ หรือ เพิ่มโค้ด เพราะคุณจะรู้ว่า ส่วนไหนแก้ไขได้ และส่วนไหนจะแก้ไขไม่ได้ และคุณจะเห็นห่วยว่าจุดที่อาจจะเกิดข้อผิดพลาดได้นั้นอยู่ตรงไหน

และอย่างสุดท้ายคือ ฟังก์ชันต้องให้ผลลัพธ์เหมือนเดิมทุกครั้ง ถ้า input เป็นค่าเดิม ไม่ว่าจะถูกเอาไปใช้ที่ไหนในโค้ดก็ตาม

# --instructions--

ให้แก้ไขฟังก์ชัน `incrementer` ให้แสดง dependency ให้เห็นอย่างชัดเจน

ให้เขียนฟังก์ชัน `incrementer` ให้รับ argument และคืนค่าเป็นผลลัพธ์ของ argument นั้นบวก 1

# --hints--

ฟังก์ชัน `incrementer` ต้องไม่เปลี่ยนค่าของตัวแปร `fixedValue` (ซึ่งมีค่าเป็น `4`).

```js
assert(fixedValue === 4);
```

ต้องเขียนให้ฟังก์ชัน `incrementer` รับ argument ด้วย

```js
assert(incrementer.length === 1);
```

ฟังก์ชัน `incrementer` ต้องคืนค่าเป็นผลลัพธ์ของการนำ `fixedValue` ไปบวก 1

```js
const __newValue = incrementer(fixedValue);
assert(__newValue === 5);
```

# --seed--

## --seed-contents--

```js
// ตัวแปร global
var fixedValue = 4;

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function incrementer () {


  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
// ตัวแปร global
var fixedValue = 4;

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
function incrementer (fixedValue) {
  return fixedValue + 1;

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}

  
```
