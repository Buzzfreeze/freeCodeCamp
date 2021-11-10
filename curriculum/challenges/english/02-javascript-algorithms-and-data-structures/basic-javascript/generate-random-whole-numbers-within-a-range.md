---
id: cf1111c1c12feddfaeb2bdef
title: Generate Random Whole Numbers within a Range
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

แทนที่จะสุ่มเลขจำนวนเต็มที่มีค่าระหว่างศูนย์ถึงจำนวนที่กำหนดเหมือนที่เราทำก่อนหน้านี้ เราสามารถสุ่มเลขจำนวนเต็มที่อยู่ในช่วงของเลขสองตัวที่กำหนด

ในการทำ เราจะประกาศตัวเลขน้อย `min` และตัวเลขมาก `max`

ต่อไปนี้เป็นสูตรที่เราจะใช้ จงใช้เวลาอ่านและลองทำความเข้าใจว่าโค้ดนี้ทำงานยังไง

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

จงสร้าง function `randomRange` เพื่อรับค่า range `myMin` และ `myMax` และคืนค่าจำนวนเต็มแบบสุ่ม ซึ่งมากกว่า หรือเท่ากับ `myMin` และน้อยกว่าหรือเท่ากับ `myMax` (รวม `myMin` และ `myMax`)

# --hints--

ตัวเลขที่น้อยที่สุดที่สุ่มได้จาก `randomRange` ควรเท่ากับ `myMin` ซึ่งเป็นตัวเลขที่น้อยที่สุดของคุณ

```js
assert(calcMin === 5);
```

ตัวเลขที่มากที่สุดที่สุ่มได้จาก `randomRange` ควรเท่ากับ `myMax` ซึ่งเป็นตัวเลขที่มากที่สุดของคุณ


```js
assert(calcMax === 15);
```

ตัวเลขที่สุ่มได้จาก `randomRange` ควรเป็น integer ไม่ใช่ decimal

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` ควรใช้ทั้ง `myMax` และ `myMin` และคืนค่าเป็นเลขสุ่มที่อยู่ในช่วงของคุณ

```js
assert(
  (function () {
    if (
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
    ) {
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
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  // Only change code below this line
  return 0;
  // Only change code above this line
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
