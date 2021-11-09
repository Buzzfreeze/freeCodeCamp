---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
forumTopicId: 301192
dashedName: prevent-infinite-loops-with-a-valid-terminal-condition
---

# --description--

หัวข้อสุดท้ายคือเรื่อง loop ที่วนไม่รู้จบ (infinite loop) Loop เป็นเครื่องมือที่ยอดเยี่ยม เมื่อคุณต้องการรันโค้ดตามจำนวนรอบที่กำหนด หรือรันโค้ดจนกว่าจะตรงกับเงื่อนไขหนึ่งๆ แต่ Loop จำเป็นต้องมีเงื่อนไขในการสิ้นสุด loop เนื่องจาก loop ที่วนไม่รู้จบจะทำให้ browser หยุดทำงานหรือพัง และยังทำให้โปรแกรมทำงานต่อไม่ได้ ซึ่งเป็นสิ่งที่ไม่มีใครต้องการให้เกิดขึ้น

ด้านล่างเป็นตัวอย่างของ loop ที่วนไม่รู้จบ ตัวอย่างนี้ไม่มีเงื่อนไขในการสิ้นสุด `while` loop ภายใน `loopy()` ดังนั้น ห้ามเรียกฟังก์ชันนี้

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

งานของโปรแกรมเมอร์คือการตรวจสอบเงื่อนไขการสิ้นสุด loop ซึ่งบอกให้โปรแกรมออกจาก loop ว่า สุดท้ายแล้วต้องมีการเรียกเสมอ ข้อผิดพลาดนึงที่อาจเกิดขึ้นคือ การเพิ่มหรือลดค่าตัวแปร counter ในทิศทางที่ต่างจากเงื่อนไขการสิ้นสุด loop นอกจากนี้ยังมีการรีเซ็ตตัวแปร counter หรือ index ภายใน loop โดยไม่ตั้งใจ ทำให้ค่า counter หรือ index ไม่เพิ่มหรือลด


# --instructions--

ภายในฟังก์ชัน `myFunc()` มี loop ที่วนไม่รู้จบ เพราะเงื่อนไขการสิ้นสุด loop `i != 4` จะไม่มีทางมีค่าเป็น `false` (และออกจาก loop) - `i` เพิ่มขึ้นทีละ 2 เมื่อวนแต่ละรอบ และข้ามเลข 4 ไป เพราะ `i` มีค่าเริ่มต้นเป็นเลขคี่ จงปรับแก้ comparison operator ที่เงื่อนไขการสิ้นสุด loop เพื่อให้ loop รันด้วยเงื่อนไข `i` น้อยกว่าหรือเท่ากับ 4

# --hints--

คุณควรปรับแก้ comparison operator ที่เงื่อนไขการสิ้นสุด loop (ที่อยู่ตรงกลาง) ของ `for` loop

```js
assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
```

คุณควรปรับแก้ comparison operator ที่เงื่อนไขการสิ้นสุด loop

```js
assert(!code.match(/i\s*?!=\s*?4;/g));
```

# --seed--

## --seed-contents--

```js
function myFunc() {
  for (let i = 1; i != 4; i += 2) {
    console.log("Still going!");
  }
}
```

# --solutions--

```js
function myFunc() {
 for (let i = 1; i <= 4; i += 2) {
   console.log("Still going!");
 }
}
```
