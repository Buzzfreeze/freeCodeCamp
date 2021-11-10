---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

For loops ไม่จำเป็นต้องวนอ่านแบบเพิ่ม/ลดทีละหนึ่งในแต่ละรอบ การเปลี่ยน expression สุดท้าย ทำให้เราสามารถนับเลขคู่ได้ 

เราจะเริ่มต้นด้วย `i = 0` และ loop เมื่อ `i < 10` เราจะเพิ่ม `i` ทีละ 2 ต่อรอบในการวน loop ด้วย `i += 2`

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

 `ourArray` ตอนนี้ประกอบด้วย `[0,2,4,6,8]` ลองเปลี่ยน `initialization` (การกำหนดค่าเริ่มต้น) เพื่อเราจะสามารถนับเลขคี่ได้


# --instructions--

ให้ push เลขคี่จาก 1 ถึง 9 เข้าไปใน `myArray` โดยใช้ `for` loop

# --hints--

ในที่นี้คุณควรใช้ `for` loop

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` ควรเท่ากับ `[1,3,5,7,9]`.



```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
