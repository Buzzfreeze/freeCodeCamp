---
id: 587d7b86367417b2b2512b3b
title: Catch Off By One Errors When Using Indexing
challengeType: 1
forumTopicId: 301189
dashedName: catch-off-by-one-errors-when-using-indexing
---

# --description--

<dfn>Off by one errors</dfn> (บางครั้งเรียกว่า OBOE) เกิดขึ้นเมื่อคุณพยายามอ้างถึง index ของ string หรือ array (เพื่อตัดหรือเข้าถึง item) หรือวนอ่าน index ที่ไม่มีอยู่ โดย JavaScript index เริ่มที่ 0 ไม่ใช่ 1 ซึ่งหมายความว่า index สุดท้ายต้องเป็นความยาวลบด้วย 1 ดังนั้น ถ้าคุณเข้าถึง index ที่มีค่าเท่ากับความยาว โปรแกรมจะขึ้น reference error "index out of range" หรือแสดงคำว่า `undefined`

เมื่อคุณเรียก string หรือ array methods ที่รับ argument เป็นค่าช่วง index (index range) มันจะอ่านและค้นหาว่า index นั้นมีอยู่หรือไม่ (item ที่อยู่ในตำแหน่งของ index เป็นสิ่งที่ถูกคืนค่า) ต่อไปนี้เป็นตัวอย่างของ off by one errors

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

ตัวอย่างแรกมีการวนลูปเกินไป 1 รอบ, ตัวอย่างที่สองวนลูปน้อยไป 1 รอบ (รอบแรก (index 0) หายไป) ส่วนตัวอย่างที่สามทำงานถูกต้อง

# --instructions--

จงปรับแก้ indexing error ในฟังก์ชัน เพื่อให้ตัวเลข 1 ถึง 5 พิมพ์ออกที่หน้า console

# --hints--

โค้ดของคุณควรกำหนดเงื่อนไขเริ่มต้นของ loop ให้เริ่มจาก index แรก

```js
assert(code.match(/i\s*?=\s*?0\s*?;/g).length == 1);
```

คุณควรปรับแก้เงื่อนไขเริ่มต้นของ loop เพื่อให้ index เริ่มต้นจาก 0

```js
assert(!code.match(/i\s?=\s*?1\s*?;/g));
```

คุณควรกำหนดให้เงื่อนไขสุดท้ายของ loop หยุดที่ index สุดท้าย

```js
assert(code.match(/i\s*?<\s*?len\s*?;/g).length == 1);
```

คุณควรปรับแก้เงื่อนไขสุดท้ายของ loop ให้หยุดก่อน 1 รอบก่อนถึงความยาว (length)

```js
assert(!code.match(/i\s*?<=\s*?len;/g));
```

# --seed--

## --seed-contents--

```js
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 1; i <= len; i++) {
  // Only change code above this line
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
 // Only change code below this line
 for (let i = 0; i < len; i++) {
 // Only change code above this line
   console.log(firstFive[i]);
 }
}

countToFive();
```
