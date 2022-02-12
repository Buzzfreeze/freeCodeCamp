---
id: 5900f4591000cf542c50ff6c
title: 'Problem 237: Tours on a 4 x n playing board'
challengeType: 5
forumTopicId: 301882
dashedName: problem-237-tours-on-a-4-x-n-playing-board
---

# --description--

ให้ $T(n)$ เป็นจำนวนการเดินบนกระดาน 4 × $n$ โดยมีเงื่อนไขดังนี้

- การเดินเริ่มต้นที่มุมบนซ้าย
- การเดินประกอบด้วยการเคลื่อนไหวที่ขึ้น ลง ซ้าย หรือขวาหนึ่งตาราง
- การเดินจะผ่านแต่ละตารางเพียงครั้งเดียว
- การเดินสิ้นสุดที่มุมล่างซ้าย

แผนภาพแสดงการเดินบนกระดาน 4 × 10 หนึ่งแบบ

<img class="img-responsive center-block" alt="one tour over 4 x 10 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/tours-on-a-4-x-n-playing-board.gif" style="background-color: white; padding: 10px;">

ถ้า $T(10)$ เป็น 2329  
แล้ว $T({10}^{12})$ modulo ${10}^8$ เป็นเท่าใด

# --hints--

`toursOnPlayingBoard()` ต้องคืนค่าเป็น `15836928`

```js
assert.strictEqual(toursOnPlayingBoard(), 15836928);
```

# --seed--

## --seed-contents--

```js
function toursOnPlayingBoard() {

  return true;
}

toursOnPlayingBoard();
```

# --solutions--

```js
// solution required
```
