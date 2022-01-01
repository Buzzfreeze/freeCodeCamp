---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

เราสามารถเข้าถึงข้อมูลภายใน array ได้โดยใช้ <dfn>index</dfn>

การเข้าถึงข้อมูลของ array โดยใช้ index ก็ใช้ bracket notation (`[]`) เหมือนกับ string แต่แทนที่จะเป็นการดึงตัวอักษรตามตำแหน่ง จะเป็นการดึงข้อมูลที่อยู่ภายใน array แทน และการดึงข้อมูลของ array ก็ใช้ <dfn>zero-based</dfn> index เหมือนกับ string เลย ดังนั้นข้อมูลแรกของ array ก็จะมี index เป็น `0` เช่นเดียวกัน

<br>

**ตัวอย่าง**

```js
var array = [50,60,70];
array[0];
var data = array[1];
```

`array[0]` จะมีค่าเป็น `50` และตัวแปร `data` จะมีค่าเป็น `60`

**หมายเหตุ:** ไม่ควรมีช่องว่างหลังชื่อ array หรือหน้า square brackets เช่น `array [0]` ถึง JavaScript จะเข้าใจว่าคุณต้องการจะทำอะไร แต่ก็อาจทำให้โปรแกรมเมอร์คนอื่นที่มาอ่านโค้ดของคุณสับสนได้

# --instructions--

จงสร้างตัวแปร `myData` และกำหนดให้มีค่าเท่ากับค่าแรกของ `myArray` โดยใช้ bracket notation

# --hints--

ตัวแปร `myData` ต้องมีค่าเท่ากับค่าแรกของ `myArray`

```js
assert(
  (function () {
    if (
      typeof myArray !== 'undefined' &&
      typeof myData !== 'undefined' &&
      myArray[0] === myData
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

ต้องดึงข้อมูลจากตัวแปร `myArray` โดยใช้ bracket notation

```js
assert(
  (function () {
    if (code.match(/\s*=\s*myArray\[0\]/g)) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined" && typeof myData !== "undefined"){(function(y,z){return 'myArray = ' + JSON.stringify(y) + ', myData = ' + JSON.stringify(z);})(myArray, myData);}
```

## --seed-contents--

```js
var myArray = [50,60,70];


```

# --solutions--

```js
var myArray = [50,60,70];
var myData = myArray[0];
```
