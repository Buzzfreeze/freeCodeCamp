---
id: 587d7b85367417b2b2512b3a
title: Catch Arguments Passed in the Wrong Order When Calling a Function
challengeType: 1
forumTopicId: 301184
dashedName: catch-arguments-passed-in-the-wrong-order-when-calling-a-function
---

# --description--

กล่าวต่อเรื่องการเรียกฟังก์ชัน ข้อผิดพลาดอีกอย่างที่ควรระวังก็คือ การส่งผ่านค่า argument เข้าในฟังก์ชันผิดลำดับ หาก argument เป็นคนละชนิดข้อมูลกัน เช่น ฟังก์ชันรับค่า array และ integer แบบนี้มันจะขึ้น runtime error แต่ถ้า argument มีชนิดข้อมูลเดียวกัน (เช่นเป็น integer เหมือนกัน) ก็จะทำให้แสดงผลแปลกๆ ได้ ดังนั้น ให้ตรวจสอบให้ดีเมื่อส่งค่า argument เข้าฟังก์ชัน ต้องให้อยู่ในลำดับที่ถูกต้อง เพื่อป้องกันการเกิดเหตุการณ์นี้

# --instructions--

ฟังก์ชัน `raiseToPower` นำเลขฐานมายกกำลัง แต่ตอนนี้ฟังก์ชันนี้รันไม่ถูกต้อง จงปรับแก้โค้ดเพื่อให้ค่า `power` มีค่าเป็น 8

# --hints--

โค้ดของคุณควรแก้ไขตัวแปร `power` เพื่อให้มีค่าเท่ากับ 2 ยกกำลัง 3 ไม่ใช่ 3 ยกกำลัง 2

```js
assert(power == 8);
```

โค้ดของคุณควรเรียงลำดับ argument ของการเรียกฟังก์ชัน `raiseToPower` ให้ถูกต้อง

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
