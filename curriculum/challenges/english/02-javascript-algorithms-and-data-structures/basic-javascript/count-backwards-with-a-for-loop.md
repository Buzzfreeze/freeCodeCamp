---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

ถ้าเรากำหนดเงื่อนไขถูกต้อง เราจะทำให้ `for` loop สามารถนับถอยหลังก็ได้

เพื่อให้การนับถอยหลังทีละสองเลขถูกต้อง เราต้องเปลี่ยนการกำหนดค่าเริ่มต้น เงื่อนไข และคำสั่งสุดท้าย

ในตัวอย่าง เราเริ่มจากการประกาศให้ `i = 10` และวนตรวจสอบว่าถ้า `i > 0` เป็น `true` เราจะลด `i` ทีละ 2 ใน loop แต่ละรอบ ด้วยคำสั่ง `i -= 2`

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

ตัวแปร `ourArray` จะมีค่าเป็น `[10,8,6,4,2]`
มาลองเปลี่ยน `var i = 10` และ `i -= 2` เพื่อนับเลขคี่ย้อนหลังกัน

# --instructions--

จงเพิ่มเลขคี่ตังแต่ 9 ถึง 1 ลงใน `myArray` โดยใช้ `for` loop

# --hints--

ต้องใช้  `for` loop

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

ต้องใช้ method `push` ของ array

```js
assert(code.match(/myArray.push/));
```

`myArray` ต้องมีค่าเป็น `[9,7,5,3,1]`



```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myArray = [];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
