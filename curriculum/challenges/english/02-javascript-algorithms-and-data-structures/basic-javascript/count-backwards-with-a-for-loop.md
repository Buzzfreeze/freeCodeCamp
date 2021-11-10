---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

for loop สามารถนับถอยหลังได้ ตราบที่เราสามารถกำหนดเงื่อนไขที่ถูกต้อง

เพื่อให้การวนแต่ละครั้งลดลงทีละสองใน เราต้องเปลี่ยนการกำหนดค่าเริ่มต้น, เงื่อนไข และ expression สุดท้าย


เราจะเริ่มจาก `i = 10` และ loop เมื่อ `i > 0` เราจะลด `i` ทีละ 2 ใน loop แต่ละรอบ ด้วย expression `i -= 2`

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` ตอนนี้จะประกอบด้วย `[10,8,6,4,2]` ลองเปลี่ยนการกำหนดค่าเริ่มต้น และ expression สุดท้าย เพื่อให้เราสามารถนับถอยหลังได้ทีละสอง สำหรับการสร้าง array ที่ประกอบด้วยเลขคี่เรียงจากมากไปน้อย

# --instructions--

จง push เลขคี่จาก 9 ถึง 1 ให้กับ `myArray` โดยใช้ `for` loop

# --hints--

ในที่นี้คุณควรใช้  `for` loop

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

คุณควรใช้ array method `push`

```js
assert(code.match(/myArray.push/));
```

`myArray` ควรเท่ากับ `[9,7,5,3,1]`.



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
// Setup
var myArray = [];

// Only change code below this line
```

# --solutions--

```js
var myArray = [];
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
