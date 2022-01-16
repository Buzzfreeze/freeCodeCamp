---
id: 587d7b86367417b2b2512b3d
title: Prevent Infinite Loops with a Valid Terminal Condition
challengeType: 1
forumTopicId: 301192
dashedName: prevent-infinite-loops-with-a-valid-terminal-condition
---

# --description--

หัวข้อสุดท้ายคือเรื่อง loop ที่วนไม่รู้จบ (infinite loop) 
Loop เป็นเครื่องมือที่ดีมากๆ ถ้าคุณต้องการรันโค้ดตามจำนวนรอบที่กำหนด หรือรันโค้ดจนกว่าจะโค้ดจะเข้าเงื่อนไข แต่ Loop จำเป็นต้องมีเงื่อนไขเพื่อหยุดหรืออกจาก loop 
ถ้าเกิด loop ที่วนไม่รู้จบขึ้น จะทำให้ browser ค้างหรือพังได้เลย และยังทำให้โปรแกรมทำงานต่อไม่ได้อีกด้วย ซึ่งไม่มีใครอยากให้เกิดหรอจริงมั้ย?

ตัวอย่างด้านล่างเป็น loop ที่จะวนไม่รู้จบ ตัวอย่างนี้ไม่มีเงื่อนไขที่จะใช้หยุด `while` loop ในฟังก์ชัน `loopy()` ดังนั้นห้ามเรียกใช้ฟังก์ชันนี้!

```js
function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}
```

เป็นหน้าที่ของโปรแกรมเมอร์ที่จะต้องคอยดูว่าทุกๆ loop จะต้องมีจุดออกหรือหยุด
การติดอยู่ใน loop อาจเกิดขึ้นได้จากการเพิ่มหรือลดค่าตัวแปร counter ผิดทาง (เช่น เรามี `i = 0` และจะหยุด loop เมื่อ `i > 10` แต่เรากลับใช้ `i--`) นอกจากนี้ยังมีการรีเซ็ตค่าของตัวแปร counter หรือ index ภายใน loop แทนที่จะทำการเพิ่มหรือลดค่า


# --instructions--

ภายในฟังก์ชัน `myFunc()` มี loop ที่วนไม่รู้จบอยู่ เพราะเงื่อนไขการสิ้นสุด loop คือ `i != 4` จะไม่มีทางมีค่าเป็น `false` 
ในการวนแต่ละรอบ `i` จะเพิ่มขึ้นทีละ 2 และเพราะว่า `i` มีค่าเริ่มต้นเป็น `1` เมื่อ `+2` แล้ว `i` จะไม่มีทางเท่ากับ 4 
จงแก้ comparison operator ที่เงื่อนไขการสิ้นสุด loop เพื่อให้ loop ทำงานเมื่อ `i` น้อยกว่าหรือเท่ากับ 4 เท่านั้น

# --hints--

ต้องแก้ comparison operator ที่เงื่อนไขการสิ้นสุด loop (คำสั่งตรงกลาง) ของ `for` loop

```js
assert(code.match(/i\s*?<=\s*?4;/g).length == 1);
```

ต้องแก้ comparison operator ที่เงื่อนไขการสิ้นสุด loop

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
