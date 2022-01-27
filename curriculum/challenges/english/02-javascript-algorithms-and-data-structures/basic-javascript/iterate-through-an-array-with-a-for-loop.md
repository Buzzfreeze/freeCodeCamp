---
id: 5675e877dbd60be8ad28edc6
title: Iterate Through an Array with a For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

ในการเขียนโค้ดเราจะใช้ JavaScript วนอ่านข้อมูลใน array เป็นปกติอยู่แล้ว โดยเราสามารถใช้ `for` loop เพื่ออ่านข้อมูลใน array ได้ด้วย 
โค้ดตัวอย่างด้านล่างนี้จะแสดงแต่ละ element ของ array ที่ชื่อ `arr` ในหน้า console:

```js
var arr = [10, 9, 8, 7, 6];
for (var i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

อย่าลืมว่า arrays เป็น zero-based index แปลว่า index สุดท้ายของ array คือ `length - 1`  
เงื่อนไขสำหรับ loop ของเราคือ `i < arr.length` ซึ่งจะหยุดการวนเมื่อ `i` เท่ากับ `length` ในกรณีนี้ loop ครั้งสุดท้ายคือเมื่อ `i === 4`  
ในตัวอย่างด้านบน เมื่อ `i` เท่ากับ `arr.length - 1` และแสดง `6` บน console จากนั้น `i` จะเพิ่มขึ้นเป็น `5` และจะออกจาก loop เนื่องจาก `i < arr.length` (5 < 5) เป็น `false`

# --instructions--

ให้ประกาศตัวแปร `total` และกำหนดค่าเริ่มต้นเป็น `0` และใช้ `for` loop เพื่อนำค่า element ของ array `myArr` ไปบวกลงในตัวแปร `total`

# --hints--

ต้องประกาศตัวแปร `total` และกำหนดค่าเริ่มต้นเป็น `0`

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

ตัวแปร `total` ต้องมีค่าเท่ากับ `20`



```js
assert(total === 20);
```

ต้องใช้ `for` loop เข้าไปอ่านค่าใน `myArr`

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

ห้ามกำหนดค่า `total` เป็น 20 โดยตรง


```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myArr = [ 2, 3, 4, 5, 6];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
