---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

ถ้ายังจำได้ ในบทเรียนที่แล้วเราได้เรียนเรื่อง loop ซึ่งก็คือการนำโค้ดมาใช้งานซ้ำๆ

ปกติแล้ว JavaScript จะใช้ `for` loop มากที่สุดเพราะว่าเราจะระบุจำนวนครั้งที่ทำงานลงไปได้เลย  
ในการใช้ `for` loop จะต้องประกาศ expression 3 ส่วน โดยคั่นด้วย semicolons

ตัวอย่างเช่น: `for (a; b; c)`
ซึ่ง `a` เป็นคำสั่งเริ่มต้น `b` เป็นคำสั่งสำหรับเงื่อนไข และ `c` เป็นคำสั่งสุดท้าย  
`a` จะทำงานแค่ครั้งเดียวก่อนที่ loop จะเริ่มทำงาน ปกติจะใช้ในการประกาศและตั้งค่าตัวแปรให้ loop  
`b` จะทำงานก่อนที่จะเริ่มต้น loop รอบใหม่ และจะทำต่อไปเรื่อยๆ ถ้าเงื่อนไขยังเป็น `true` ถ้าเงื่อนไขเป็น `false` loop จะหยุดทำงาน ถ้าเราทำให้ `b` เป็น `false` ตั้งแต่แรก loop ของเราก็จะไม่ทำงานเลยซักรอบเดียว  
`c` จะเป็นตัวที่ทำงานตัวสุดท้าย หลังจากโค้ดใน loop ทำงานเสร็จหมดแล้ว เมื่อ `c` ทำงานเสร็จ โปรแกรมก็จะไปเรียกใช้ `b` ต่อ ส่วนใหญ่ `c` ในการเพิ่มหรือลดตัวนับ loop

ถ้ายังไม่เข้าใจให้ลองดูตัวอย่าง

ในตัวอย่างด้านล่าง เราจะประกาศให้ `i = 0` และตั้งเงื่อนไขว่าถ้า `i < 5` เป็นจริง เราจะเพิ่มค่า `i` ทีละ `1` ด้วย `i++` ในการวน loop แต่ละรอบ

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```


ตัวแปร `ourArray` ตอนนี้จะมีค่า `[0,1,2,3,4]`

# --instructions--

จงใช้ `for` loop เพื่อใส่ค่า 1 ถึง 5 ให้กับ `myArray`

# --hints--


ต้องใช้คำสั่ง `for` loop

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` ต้องมีค่าเป็น `[1,2,3,4,5]`

```js
assert.deepEqual(myArray, [1, 2, 3, 4, 5]);
```

# --seed--

## --after-user-code--

```js
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myArray = [];

// แก้ไขโค้ดใต้บรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```
