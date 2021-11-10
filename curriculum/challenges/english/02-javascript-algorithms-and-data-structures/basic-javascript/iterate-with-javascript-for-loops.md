---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
dashedName: iterate-with-javascript-for-loops
---

# --description--

คุณสามารถรันโค้ดเดียวกันหลายๆ ครั้งโดยใช้ loop

JavaScript โดยทั่วไปนิยมใช้ `for` loop มากที่สุดเพราะรันตามจำนวนครั้งที่ระบุ

For loops มีการประกาศ expression 3 ส่วน แต่ละส่วนคั่นด้วย semicolons  

`for (a; b; c)` ซึ่ง `a` เป็นคำสั่งเริ่มต้น `b` เป็นคำสั่งเงื่อนไข และ `c` เป็น expression ท้ายสุด

คำสั่งเริ่มต้นจะทำงานหนึ่งครั้งเท่านั้นก่อน loop จะเริ่มต้น โดยทั่วไปมักใช้ในการประกาศ และตั้งค่าตัวแปรให้ loop 


คำสั่งเงื่อนไขจะถูกพิจารณาตั้งแต่เริ่มต้นของ loop ทุกครั้ง และจะทำต่อเนื่องไปตราบที่เงื่อนไขยังเป็น `true` ถ้าเงื่อนไขเป็น `false` ตั้งแต่เริ่มต้น loop จะหยุดทำงาน นั่นหมายถึงถ้าเงื่อนไขเริ่มต้นเป็น false แล้ว loop ของจะไม่ทำงานเลย

expression สุดท้าย จะทำงานท้ายสุดของแต่ละการวน loop ก่อนเงื่อนไขของ loop ถัดไปจะถูกเช็ค และส่วนใหญ่ใช้ในการเพิ่ม หรือลด loop counter (ตัวนับ loop)

ในตัวอย่างด้านล่าง เรากำหนดค่าเริ่มต้นด้วย `i = 0` และวนอ่านหากเงื่อนไข  `i < 5` เป็นจริง เราจะเพิ่มค่า `i` ทีละ `1` ในแต่ละรอบการวน loop ด้วย `i++` ซึ่งเป็น expression สุดท้ายของเรา

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```


`ourArray` ตอนนี้จะมีค่า `[0,1,2,3,4]`

# --instructions--

จงใช้ `for` loop เพื่อ push ค่า 1 ถึง 5 ให้กับ `myArray`

# --hints--


คุณควรใช้ `for` loop

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` ควรเท่ากับ `[1,2,3,4,5]`

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
// Setup
var myArray = [];

// Only change code below this line
```

# --solutions--

```js
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```
