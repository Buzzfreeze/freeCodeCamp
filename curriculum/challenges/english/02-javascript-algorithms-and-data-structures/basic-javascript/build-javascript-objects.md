---
id: 56bbb991ad1ed5201cd392d0
title: Build JavaScript Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWGkbtd'
forumTopicId: 16769
dashedName: build-javascript-objects
---

# --description--

คุณอาจจะเคยได้ยินคำว่า `object` มาก่อน

Objects คล้ายกับ `arrays` เว้นแต่แทนที่จะใช้ indexes ในการเข้าถึง และแก้ไขข้อมูล คุณจะเข้าถึงข้อมูลใน object ผ่านสิ่งที่เรียกว่า `properties`

Object มีประโยชน์สำหรับการจัดเก็บข้อมูลในลักษณะที่มีโครงสร้าง และสามารถเป็นสิ่งแทนวัตถุในโลกแห่งความเป็นจริงได้ เช่น แมว

ต่อไปนี้เป็นตัวอย่างของ cat object:

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```

ในตัวอย่างนี้ properties (คุณสมบัติ) ทั้งหมดจะถูกเก็บไว้ใน string เช่น `name`, `legs` และ `tails` อย่างไรก็ตาม คุณสามารถใช้ตัวเลขเป็นค่า properties ได้ คุณยังสามารถละเครื่องหมายคำพูด กรณีที่ค่า properties เป็น string คำเดียวได้ดังนี้:


```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```

อย่างไรก็ตาม หาก object ของคุณมี properties ที่ไม่ใช่ string JavaScript จะปรับเป็น string โดยอัตโนมัติ

# --instructions--

จงสร้าง object แทนสุนัข เรียกว่า `myDog` ซึ่งมี properties `name` (string) `legs`, `tails` และ `friends`

คุณสามารถกำหนด properties ของ object เหล่านี้ เป็นค่าใดก็ได้ที่คุณต้องการ ตราบใดที่ `name` เป็น string `tails` เป้น numbers  และ `friends` เป็น array


# --hints--

`myDog` ควรมี property `name` และควรเป็น `string`


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

`myDog` ควรมี property  `legs` และควรเป็น`number`.



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

`myDog` ควรมี property  `tails` และควรเป็น`number`.

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

`myDog` ควรมี property  `friends` และควรเป็น `array`.

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

`myDog` ควรมีแค่ properties ที่กำหนดให้

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
// Only change code below this line


// Only change code above this line
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
