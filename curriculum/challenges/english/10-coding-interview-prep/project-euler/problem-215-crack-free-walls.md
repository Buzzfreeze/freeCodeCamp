---
id: 5900f4431000cf542c50ff56
title: 'Problem 215: Crack-free Walls'
challengeType: 5
forumTopicId: 301857
dashedName: problem-215-crack-free-walls
---

# --description--

พิจารณาปัญหาการสร้างกำแพงจากอิฐ 2×1 และ 3×1 (ขนาดแนวนอน×แนวตั้ง) เพื่อให้มีความแข็งแรงมากขึ้น ช่องว่างระหว่างอิฐในแนวนอนจะไม่เรียงเป็นชั้นๆ แตก".

ตัวอย่างเช่น ผนังขนาด 9×3 ต่อไปนี้ไม่ยอมรับเนื่องจากรอยแตกที่ทำงานเป็นสีแดง:

<img class="img-responsive center-block" alt="9x3 wall with one lined up gap between horizontally-adjacent bricks" src="https://cdn.freecodecamp.org/curriculum/project-euler/crack-free-walls.gif" style="background-color: white; padding: 10px;">

มีแปดวิธีในการสร้างกำแพง 9×3 ที่ไม่มีการแตกร้าว เขียนเป็น $W(9,3) = 8$

คำนวณ $W(32,10)$

# --hints--

`crackFreeWalls()` ควร return `806844323190414`.

```js
assert.strictEqual(crackFreeWalls(), 806844323190414);
```

# --seed--

## --seed-contents--

```js
function crackFreeWalls() {

  return true;
}

crackFreeWalls();
```

# --solutions--

```js
// solution required
```
