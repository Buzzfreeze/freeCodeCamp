---
id: 5900f4291000cf542c50ff3c
title: 'Problem 189: Tri-colouring a triangular grid'
challengeType: 5
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

พิจารณาการกำหนดค่าต่อไปนี้ของ 64 สามเหลี่ยม

<img class="img-responsive center-block" alt="64 triangles arranged to create larger triangle with side length of 8 triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;">

ต้องการระบายสีภายในของสามเหลี่ยมแต่ละรูปด้วยสีใดสีหนึ่งจากสามสี ได้แก่ สีแดง สีเขียว หรือสีน้ำเงิน เพื่อไม่ให้มีรูปสามเหลี่ยมที่อยู่ติดกันสองรูปมีสีเดียวกัน สีดังกล่าวให้เรียกว่าถูกต้อง ในที่นี้ กล่าวกันว่ารูปสามเหลี่ยมสองรูปอยู่ติดกันหากพวกมันมีส่วนขอบ หมายเหตุ: หากพวกเขาแบ่งปันเฉพาะจุดยอด แสดงว่าพวกเขาไม่ใช่เพื่อนบ้าน

ตัวอย่างเช่น นี่คือสีที่ถูกต้องของตารางด้านบน:

<img class="img-responsive center-block" alt="colored grid of 64 triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;">

การระบายสี C' ซึ่งได้มาจากการระบายสี C โดยการหมุนหรือการสะท้อนถือว่าแตกต่างจาก C เว้นแต่ทั้งสองจะเหมือนกัน

การกำหนดค่าด้านบนมีสีที่ถูกต้องแตกต่างกันกี่สี

# --hints--

`triangularGridColoring()` ควร return `10834893628237824`.

```js
assert.strictEqual(triangularGridColoring(), 10834893628237824);
```

# --seed--

## --seed-contents--

```js
function triangularGridColoring() {

  return true;
}

triangularGridColoring();
```

# --solutions--

```js
// solution required
```
