---
id: cf1111c1c12feddfaeb1bdef
title: Generate Random Whole Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

เป็นเรื่องดีที่เราสามารถสุ่มตัวเลขทศนิยม แต่จะมีประโยชน์มากกว่า ถ้าเราใช้เพื่อสุ่มเลขจำนวนเต็ม

<ol><li>ใช้ <code>Math.random()</code> เพื่อสุ่มเลขทศนิยม</li><li>คูณตัวเลขทศนิยมสุ่มนี้ด้วย <code>20</code>.</li><li>ใช้อีก function <code>Math.floor()</code> ในการปัดตัวเลขลงให้เป็นจำนวนเต็ม</li></ol>


หากยังจำได้ `Math.random()` ไม่เคยคืนค่า `1` และเพราะเราปัดเศษลง จึงเป็นไปไม่ได้ที่เราจะได้ `20` เทคนิคนี้จะทำให้เราได้ตัวเลขระหว่าง  `0` และ `19`

หากรวมทุกอย่างเข้าด้วยกัน โค้ดของเราจะมีลักษณะดังนี้

```js
Math.floor(Math.random() * 20);
```

เราเรียก `Math.random()` แล้วคูณด้วย 20 จากนั้นนำค่าส่งเข้าใน function `Math.floor()` เพื่อทำการปัดเศษลงให้เป็นจำนวนเต็ม

# --instructions--

จงใช้เทคนิคนี้ในการสุ่ม และคืนค่าเป็นเลขจำนวนเต็มระหว่าง `0` และ `9`

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

คุณควรใช้ `Math.random`เพื่อสุ่มตัวเลข

```js
assert(code.match(/Math.random/g).length >= 1);
```

คุณควรคูณผลลัพธ์ของ `Math.random` ด้วย 10 เพื่อให้ได้ตัวเลขระหว่างศูนย์ และเก้า

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

คุณควรใช้ `Math.floor` เพื่อนำเศษทศนิยมออก

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

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
