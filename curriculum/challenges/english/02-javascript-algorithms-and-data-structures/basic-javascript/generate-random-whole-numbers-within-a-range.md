---
id: cf1111c1c12feddfaeb2bdef
title: Generate Random Whole Numbers within a Range
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

นอกจากการสุ่มจำนวนเต็มที่มีค่าตั้งแต่ศูนย์ถึงเลขที่กำหนดแล้ว เราก็ยังสุ่มเลขจำนวนเต็มโดยระบุช่วงที่ต้องการสุ่มได้อีกด้วย

ในการสุ่มแบบนี้ เราจะต้องประกาศตัวเลขน้อย `min` และตัวเลขมาก `max` ก่อน

เราจะใช้สมการด้านล่างนี้ ลองอ่านและลองทำความเข้าใจว่าโค้ดนี้ทำงานยังไง
(การลองแทนตัวเลขลงใน `min` และ `max` จะช่วยให้เข้าใจได้ง่ายขึ้น)

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

จงสร้างฟังก์ชัน `randomRange` เพื่อรับค่า `myMin` และ `myMax` และคืนค่าจำนวนเต็มแบบสุ่ม ซึ่งจะต้องมากกว่าหรือเท่ากับ `myMin` และน้อยกว่าหรือเท่ากับ `myMax`

# --hints--

ตัวเลขที่น้อยที่สุดที่สุ่มได้จาก `randomRange` ควรเท่ากับ `myMin`

```js
assert(calcMin === 5);
```

ตัวเลขที่มากที่สุดที่สุ่มได้จาก `randomRange` ควรเท่ากับ `myMax`

```js
assert(calcMax === 15);
```

ตัวเลขที่สุ่มได้จาก `randomRange` ควรเป็นจำนวนเต็ม ไม่ใช่ทศนิยม

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` ควรใช้ทั้ง `myMax` และ `myMin` และคืนค่าเป็นเลขสุ่มที่อยู่ในช่วงที่ระบุ

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
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  return 0;
  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
