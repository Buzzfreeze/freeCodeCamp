---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

การใช้ `for` loops ไม่จำเป็นต้องใช้ `i++` เพื่อเพิ่มค่าที่ละ 1 ก็ได้ ถ้าเราเปลี่ยนคำสั่งตรงนี้เราจะสามารถนับเลขคู่ได้ 

เราจะประกาศ `i = 0` และทำวนไปเรื่อยๆ ถ้า `i < 10` ยังเป็น `true` อยู่ แล้วในการวน loop แต่ละรอบ เราจะเพิ่ม `i` ทีละ 2 โดยใช้คำสั่ง `i += 2`

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

 ตัวแปร `ourArray` จะมีค่าเป็น `[0,2,4,6,8]` 
 เราจะมาลองเปลี่ยนส่วนเริ่มต้นของ loop เพื่อให้เปลี่ยนไปนับเลขคี่แทน


# --instructions--

ให้เพิ่มเลขคี่ตั้งแต่ 1 ถึง 9 เข้าไปใน `myArray` โดยใช้ `for` loop

# --hints--

ต้องใช้ `for` loop

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` ต้องมีค่าเป็น `[1,3,5,7,9]`



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
// เตรียมข้อมูล
var myArray = [];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
