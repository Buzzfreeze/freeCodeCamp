---
id: cf1111c1c11feddfaeb8bdef
title: Modify Array Data With Indexes
challengeType: 1
videoUrl: 'https://scrimba.com/c/czQM4A8'
forumTopicId: 18241
dashedName: modify-array-data-with-indexes
---

# --description--

ต่างกับ string ตรงที่รายการของ array นั้น <dfn>mutable</dfn> (เปลี่ยนแปลงได้) และสามารถเปลี่ยนแปลงได้อย่างอิสระ

**Example**

```js
var ourArray = [50,40,30];
ourArray[0] = 15;
```

`ourArray` ตอนนี้มีค่า `[15, 40, 30]`

**หมายเหตุ:** ไม่ควรมีช่องว่างระหว่างชื่อ array และ square brackets เช่น `array [0]` แม้ว่า JavaScript สามารถประมวลผลได้อย่างถูกต้อง แต่อาจทำให้โปรแกรมเมอร์คนอื่นอ่านโค้ดของคุณแล้วสับสน

# --instructions--

จงแก้ไขข้อมูลที่อยู่ใน index `0` ของ `myArray` ให้มีค่า  `45`


# --hints--

`myArray` ควรมีค่า `[45,64,99]`

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

คุณควรใช้ index ที่ถูกต้อง เพื่อแก้ไขค่าใน `myArray`

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
// Setup
var myArray = [18,64,99];

// Only change code below this line
```

# --solutions--

```js
var myArray = [18,64,99];
myArray[0] = 45;
```
