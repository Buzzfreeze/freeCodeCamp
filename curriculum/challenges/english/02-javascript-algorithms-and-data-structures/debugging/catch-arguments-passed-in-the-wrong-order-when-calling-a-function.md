---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

เรายังไม่จบเรื่องการเรียกใช้ฟังก์ชัน ข้อผิดพลาดอีกอย่างที่ควรระวังก็คือ การส่ง argument เข้าในฟังก์ชันผิดลำดับ  
ถ้า argument เป็นข้อมูลคนละชนิดกัน เช่น ฟังก์ชันที่รับค่า array และ integer ถ้าเราใส่ข้อมูลสลับกันตอนเรียกใช้ฟังก์ชันนี้จะมีโอกาศเกิด runtime error  
แต่ถ้า argument รับข้อมูลชนิดเดียวกัน (เช่นเป็น integer เหมือนกัน) ก็อาจทำให้เราได้ค่าที่คืนมาผิด เราต้องดู argument ที่ส่งเข้าไปในฟังก์ชันให้ดี ต้องดูว่าค่าที่ส่งไปอยู่ในลำดับที่ถูกต้อง เพื่อป้องกันข้อผิดพลาดแบบนี้

# --instructions--

เรามีฟังก์ชัน `raiseToPower` ที่นำเลขฐานมายกกำลัง แต่ตอนนี้ฟังก์ชันนี้ทำงานผิดอยู่ จงแก้โค้ดเพื่อให้ค่า `power` มีค่าเป็น 8

# --hints--

ต้องแก้โค้ดเพื่อให้ `power` เพื่อให้มีค่าเท่ากับ 2 ยกกำลัง 3 ไม่ใช่ 3 ยกกำลัง 2

```js
assert(power == 8);
```

ต้องแก้โค้ดเพื่อเรียงลำดับ argument ในการเรียกใช้ฟังก์ชัน `raiseToPower` ให้ถูกต้อง

```js
assert(code.match(/raiseToPower\(\s*?base\s*?,\s*?exp\s*?\);/g));
```

# --seed--

## --seed-contents--

```js
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(exp, base);
console.log(power);
```

# --solutions--

```js
function raiseToPower(b, e) {
 return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);
```
