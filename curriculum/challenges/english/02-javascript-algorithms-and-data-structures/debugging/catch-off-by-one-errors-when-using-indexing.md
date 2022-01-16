---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

<dfn>Off by one error</dfn> (บางครั้งเรียกว่า OBOE) จะเกิดขึ้นเมื่อคุณพยายามเข้าถึง index ของ string หรือ array ที่ไม่มีอยู่ โดย index ของ JavaScript จะเริ่มที่ 0 ไม่ใช่ 1 แปลว่า index สุดท้ายจะเป็นความยาวของ string หรือ array ลบด้วย 1 (`.length - 1`)
ถ้าคุณพยายามเข้าถึง index ที่มีค่าเท่ากับความยาวของ string หรือ array โปรแกรมจะขึ้น reference error "index out of range" หรือคุณอาจได้ค่าเป็น `undefined`

เวลาที่คุณเรียกใช้ method ที่จัดการ string หรือ array ที่รับ argument เป็นช่วงของ index เราแนะนำให้อ่านวิธีการใช้งาน method นั้นว่ารับค่าเป็น inclusive หรือไม่ (inclusive หมายถึง method จะใช้ค่าจาก index ที่ระบุลงไปเลย)
โค้ดด้านล่างเป็นตัวอย่างของ off by one error:

```js
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  console.log(alphabet[k]);
}
```

ตัวอย่างแรกมีการวนลูปเกินไป 1 รอบ, ตัวอย่างที่สองวนลูปน้อยไป 1 รอบ (ข้าม index 0 ไป) ส่วนตัวอย่างที่สามทำงานได้ถูกต้อง

# --instructions--

ให้แก้ข้อผิดพลาดจากการใช้ index ในฟังก์ชัน เพื่อ console แสดงตัวเลข 1 ถึง 5 

# --hints--

ต้องแก้ไข loop ให้เริ่มจาก index แรก

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

ต้องแก้ไข loop เพื่อให้ index เริ่มต้นจาก 0

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

ต้องแก้ไข loop ให้หยุดที่ index สุดท้าย

```js
assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1);
```

ต้องแก้ไข loop ให้หยุดที่ `.length-1`

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  for (let i = 1; i <= len; i++) {
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
    console.log(firstFive[i]);
  }
}

countToFive();
```

# --solutions--

```js
function countToFive() {
 let firstFive = "12345";
 let len = firstFive.length;
 // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
 for (let i = 0; i < len; i++) {
 // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
   console.log(firstFive[i]);
 }
}

countToFive();
```
