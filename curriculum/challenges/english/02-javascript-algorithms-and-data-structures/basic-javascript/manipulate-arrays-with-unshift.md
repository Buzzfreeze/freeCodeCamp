---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

นอกจากที่คุณสามารถ `shift` element ออกจากตำแหน่งแรกของ array แล้ว คุณยังสามารถ `unshift` element ที่ตำแหน่งแรกของ array ได้ด้วย เช่น เพิ่ม element ที่ด้านหน้า array

`.unshift()` ทำงานเหมือนกับ `.push()` แต่แทนที่จะเพิ่ม element ที่ส่วนท้ายของ array `unshift()` จะเพิ่ม element ที่จุดเริ่มต้นของ array

ตัวอย่าง:

```js
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

หลังจาก `shift` แล้ว `ourArray` ควรมีค่า `["J", "cat"]` และหลังจาก `unshift` แล้ว `ourArray` ควรมีค่า `["Happy", "J", "cat"]`.

# --instructions--

จงเพิ่ม `["Paul",35]` ที่ตำแหน่งแรกของตัวแปร `myArray` โดยใช้ `unshift()`

# --hints--

`myArray` ตอนนี้ควรมีค่า `[["Paul", 35], ["dog", 3]]`

```js
assert(
  (function (d) {
    if (
      typeof d[0] === 'object' &&
      d[0][0] == 'Paul' &&
      d[0][1] === 35 &&
      d[1][0] != undefined &&
      d[1][0] == 'dog' &&
      d[1][1] != undefined &&
      d[1][1] == 3
    ) {
      return true;
    } else {
      return false;
    }
  })(myArray)
);
```

# --seed--

## --after-user-code--

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

## --seed-contents--

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
