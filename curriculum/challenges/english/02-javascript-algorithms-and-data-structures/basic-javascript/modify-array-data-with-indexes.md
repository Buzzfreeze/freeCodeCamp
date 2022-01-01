---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

ข้อมูลใน array นั้น <dfn>mutable</dfn> (เปลี่ยนแปลงได้) และสามารถเปลี่ยนแปลงได้อย่างอิสระ ซึ่งไม่เหมือน string ที่เราเรียนไปก่อนหน้านี้

**Example**

```js
var ourArray = [50,40,30];
ourArray[0] = 15;
```

`ourArray` จะมีค่าเป็น `[15, 40, 30]`

**หมายเหตุ:** ไม่ควรมีช่องว่างหลังชื่อ array หรือหน้า square brackets เช่น `array [0]` ถึง JavaScript จะเข้าใจว่าคุณต้องการจะทำอะไร แต่ก็อาจทำให้โปรแกรมเมอร์คนอื่นที่มาอ่านโค้ดของคุณสับสนได้

# --instructions--

จงแก้ไขข้อมูลที่อยู่ใน index ที่ `0` ของตัวแปร `myArray` ให้มีค่าเป็น `45`


# --hints--

ตัวแปร `myArray` ต้องมีค่าเป็น `[45,64,99]`

```js
assert(
  (function () {
    if (
      typeof myArray != 'undefined' &&
      myArray[0] == 45 &&
      myArray[1] == 64 &&
      myArray[2] == 99
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

index ที่เลือกไม่ตรงกับตำแหน่งของค่าที่ต้องแก้ไขใน `myArray`

```js
assert(
  (function () {
    if (code.match(/myArray\[0\]\s*=\s*/g)) {
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
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myArray = [18,64,99];

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myArray = [18,64,99];
myArray[0] = 45;
```
