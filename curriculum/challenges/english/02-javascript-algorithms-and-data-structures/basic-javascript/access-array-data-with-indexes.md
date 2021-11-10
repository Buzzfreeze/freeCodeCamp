---
id: 56bbb991ad1ed5201cd392ca
title: Access Array Data with Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBZQbTz'
forumTopicId: 16158
dashedName: access-array-data-with-indexes
---

# --description--

เราสามารถเข้าถึงข้อมูลภายใน array โดยใช้ <dfn>indexes</dfn>

Array indexes ใช้ bracket notation เช่นเดียวกับ string เว้นแต่แทนที่จะระบุอักขระ ก็ระบุรายการใน array แทน อย่างไรก็ตาม array ใช้ <dfn>zero-based</dfn> indexing เช่นเดียวกับ string ดังนั้น element แรกของ array จะมี index เป็น `0`

<br>

**Example**

```js
var array = [50,60,70];
array[0];
var data = array[1];
```

`array[0]` ตอนนี้มีค่าเป็น `50` และ `data` มีค่าเป็น `60`

**หมายเหตุ:** ไม่ควรมีช่องว่างระหว่างชื่อ array และ square brackets เช่น `array [0]` แม้ว่า JavaScript สามารถประมวลผลได้อย่างถูกต้อง แต่อาจทำให้โปรแกรมเมอร์คนอื่นอ่านโค้ดของคุณแล้วสับสน

# --instructions--

จงสร้างตัวแปร `myData` และกำหนดให้มีค่าเท่ากับค่าแรกของ `myArray` โดยใช้ bracket notation

# --hints--

ตัวแปร `myData` ควรมีค่าเท่ากับค่าแรกของ `myArray`

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

ข้อมูลในตัวแปร `myArray` ควรเข้าถึงได้ ด้วยการใช้ bracket notation

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
