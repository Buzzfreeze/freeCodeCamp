---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

คุณอาจเคยได้ยินคำว่า `object` มาก่อน

`object` นั้นจะคล้ายกับ `arrays` แต่ว่าแทนที่เราจะเข้าถึงข้อมูลตาม index เราจะเข้าถึงข้อมูลใน `object` ผ่านสิ่งที่เรียกว่า `property`

`object` นั้นมีประโยชน์สำหรับการจัดเก็บข้อมูลในลักษณะที่มีโครงสร้าง และเป็นตัวแทนวัตถุในโลกจริงได้ เช่น แมว

ลองดูตัวอย่างของ object ที่ชื่อว่า cat:

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

ในตัวอย่างนี้ property ทั้งหมดจะเป็น string เช่น `name`, `legs` และ `tails` แต่คุณก็สามารถใช้ตัวเลขเป็น property ได้ 
และถ้า property เป็น string ที่เป็นคำคำเดียว คุณจะไม่เขียนเครื่องหมาย quote ลงไปก็ได้ เช่นตัวอย่างด้านล่างนี้:


```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

ถ้า object ของคุณมี property ที่ไม่ใช่ string JavaScript จะเปลี่ยน property นั้นเป็น string ให้โดยอัตโนมัติ

# --instructions--

จงสร้าง object เพื่อเป็นตัวแทนสุนัข โดยให้มีชื่อว่า `myDog` ซึ่งมี property ตามนี้ `name`, `legs`, `tails` และ `friends`

คุณสามารถกำหนดค่าของ property ของ object นี้เป็นอะไรก็ได้ แต่ `name` ต้องเป็นข้อมูลประเภท string `tails` ต้องเป็นข้อมูลประเภท number และ `friends` ต้องเป็นข้อมูลประเภท array


# --hints--

`myDog` ต้องมี property ชื่อ `name` และเป็นข้อมูลประเภท `string`


```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('name') &&
      z.name !== undefined &&
      typeof z.name === 'string'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` ต้องมี property ชื่อ `legs` และเป็นข้อมูลประเภท `number`



```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('legs') &&
      z.legs !== undefined &&
      typeof z.legs === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` ต้องมี property ชื่อ  `tails` และเป็นข้อมูลประเภท `number`

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('tails') &&
      z.tails !== undefined &&
      typeof z.tails === 'number'
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` ต้องมี property ชื่อ  `friends` และเป็นข้อมูลประเภท `array`

```js
assert(
  (function (z) {
    if (
      z.hasOwnProperty('friends') &&
      z.friends !== undefined &&
      Array.isArray(z.friends)
    ) {
      return true;
    } else {
      return false;
    }
  })(myDog)
);
```

`myDog` ต้องมีแค่ property ที่กำหนดให้เท่านั้น

```js
assert(
  (function (z) {
    return Object.keys(z).length === 4;
  })(myDog)
);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
var myDog = {
// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น


// แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
};
```

# --solutions--

```js
var myDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```
