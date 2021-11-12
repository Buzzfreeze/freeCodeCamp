---
id: 587d78b2367417b2b2512b10
title: Remove Items Using splice()
challengeType: 1
forumTopicId: 301166
dashedName: remove-items-using-splice
---

# --description--

ตอนนี้เราได้เรียนรู้วิธีลบ element จากจุดเริ่มต้น และจุดสิ้นสุดของ array โดยใช้ `shift()` และ `pop()` แต่ถ้าเราต้องการนำ element ออกจากที่ใดที่หนึ่งที่อยู่ตรงกลางล่ะ หรือลบมากกว่าหนึ่ง element ในครั้งเดียว? นั่นคือที่มาของ `splice()` โดย `splice()` ช่วยให้เรา **ลบ elements ที่ติดกันกี่ตัวก็ได้** ที่ตำแหน่งใดก็ได้ใน array

`splice()` สามารถรับพารามิเตอร์ได้สูงสุด 3 ตัว แต่สำหรับตอนนี้ เราจะเน้นเฉพาะ 2 ตัวแรก พารามิเตอร์สองตัวแรกของ `splice()` คือจำนวนเต็มที่แทน index หรือตำแหน่งของ array ที่ ` splice()` กำลังเรียก และจำไว้ว่า array นั้นเป็น *zero-indexed* ดังนั้นเพื่อระบุ element แรกของ array เราจะใช้ `0` อย่างไรก็ตาม พารามิเตอร์ตัวแรกของ `splice()` หมายถึง index เริ่มต้นของ array ที่ต้องการลบ ในขณะที่พารามิเตอร์ที่สอง หมายถึง จำนวน element ที่ต้องการลบ ตัวอย่างเช่น

```js
let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);
```

ที่นี่้เราลบ 2 elements เริ่มต้นด้วย element ที่สาม (ที่ index 2) สุดท้ายแล้ว `array` จะมีค่า `['today', 'was', 'great']`

`splice()` ไม่เพียงแต่ปรับเปลี่ยน array ที่ถูกเรียกใช้เท่านั้น แต่ยังคืนค่า array ใหม่ที่มีค่าของ element ที่ถูกลบออกด้วย:

```js
let array = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = array.splice(3, 2);
```

`newArray` มีค่า `['really', 'happy']`.

# --instructions--

เราได้กำหนดค่าเริ่มต้น array `arr` แล้ว จงใช้ `splice()` เพื่อนำ element ออกจาก `arr` เพื่อ `arr` เหลือเพียง element ที่บวกันได้ `10` เท่านั้น

# --hints--

คุณไม่ควรแก้ไขบรรทัดตั้งต้น `const arr = [2, 4, 5, 1, 7, 5, 2, 1];`

```js
assert(
  __helpers.removeWhiteSpace(code).match(/constarr=\[2,4,5,1,7,5,2,1\];?/)
);
```

`arr` ควรมีแค่ element ที่บวกกันแล้วได้ `10` เท่านั้น

```js
assert.strictEqual(
  arr.reduce((a, b) => a + b),
  10
);
```

โค้ดของคุณควรใช้ method `splice()` กับ `arr`

```js
assert(__helpers.removeWhiteSpace(code).match(/arr\.splice\(/));
```

splice ควรนำ element ออกจาก `arr` และไม่เพิ่ม element อื่นๆ ให้กับ `arr`

```js
assert(
  !__helpers.removeWhiteSpace(code).match(/arr\.splice\(\d+,\d+,\d+.*\)/g)
);
```

# --seed--

## --seed-contents--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line

// Only change code above this line
console.log(arr);
```

# --solutions--

```js
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(1, 4);
```
