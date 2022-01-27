---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
dashedName: manipulate-arrays-with-unshift
---

# --description--

เมื่อคุณสามารถ `shift` element แรกออกจาก array ได้แล้ว คุณก็ยังสามารถ `unshift` element ซึ่งก็คือการแทรก element เข้าไปข้างหน้า array ได้ด้วย

`.unshift()` ทำงานเหมือนกับการ `.push()` แต่แทนที่จะนำ element ไปต่อท้ายใน array `unshift()` จะเป็นการแทรก element ไปข้างหน้า array แทน

ตัวอย่าง:

```js
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
```

หลังจาก `shift` แล้ว `ourArray` จะมีค่าเป็น `["J", "cat"]` 
และหลังจาก `unshift` แล้ว `ourArray` จะมีค่าเป็น `["Happy", "J", "cat"]`

# --instructions--

จงแทรก `["Paul",35]` เข้าไปข้างหน้าตัวแปร `myArray` โดยใช้ `unshift()`

# --hints--

ตัวแปร `myArray` ต้องมีค่าเป็น `[["Paul", 35], ["dog", 3]]`

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
// เตรียมข้อมูล
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```
