---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

แค่การสุ่มเลขทศนิยมได้ก็ดีมากแล้ว แต่เราจะใช้ประโยชน์ได้เยอะขึ้นถ้าเราใช้สุ่มเลขจำนวนเต็ม

<ol><li>ใช้ <code>Math.random()</code> เพื่อสุ่มเลขทศนิยม</li><li>เอา <code>20</code> ไปคุณทศนิยมที่เราสุ่มได้</li><li>แล้วใช้ฟังก์ชัน <code>Math.floor()</code> เพื่อการปัดตัวเลขลงให้เป็นจำนวนเต็ม</li></ol>


ถ้ายังจำได้ `Math.random()` จะไม่มีทางคืนค่า `1` ออกมาให้ และเพราะเราใช้การปัดเศษลง เราก็จะไม่มีทางที่จะได้เลข `20` เลย วิธีนี้จะทำให้เราสุ่มได้เลขในช่วง `0` และ `19` เท่านั้น

ถ้าลองเอาข้อมูลข้างบนมาเขียนโค้ด โค้ดของเราจะเป็นแบบนี้:

```js
Math.floor(Math.random() * 20);
```

เราใช้ `Math.random()` แล้วคูณด้วย 20 จากส่งค่าเข้าฟังก์ชัน `Math.floor()` เพื่อปัดเศษลงให้เป็นจำนวนเต็ม

# --instructions--

จงใช้วิธีด้านบนในการสุ่มตัวเลข และคืนค่าออกมาเป็นตัวเลขในช่วง `0` ถึง `9`

# --hints--

ผลลัพธ์ของ `randomWholeNum` ควรเป็นจำนวนเต็ม

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

ต้องใช้ฟังก์ชัน `Math.random` ในการสุ่มตัวเลข

```js
assert(code.match(/Math.random/g).length >= 1);
```

ต้องเอา 10 ไปคูณค่าที่ได้จาก `Math.random` เพื่อให้ได้ตัวเลขที่อยู่ในช่วง 0 ถึง 9

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

ต้องใช้ `Math.floor` เพื่อปัดเศษลง

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
