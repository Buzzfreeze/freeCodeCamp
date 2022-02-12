---
id: 5900f4291000cf542c50ff3c
title: 'Problem 189: Tri-colouring a triangular grid'
challengeType: 5
forumTopicId: 301825
dashedName: problem-189-tri-colouring-a-triangular-grid
---

# --description--

พิจารณาการกำหนดค่าต่อไปนี้ของสามเหลี่ยม 64 รูป

<img class="img-responsive center-block" alt="64 triangles arranged to create larger triangle with side length of 8 triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-1.gif" style="background-color: white; padding: 10px;">

ถ้าต้องการระบายสีภายในของสามเหลี่ยมแต่ละรูป ด้วยสีใดสีหนึ่งจากสามสีนี้ สีแดง สีเขียว หรือสีน้ำเงิน โดยไม่ให้สามเหลี่ยมที่อยู่ติดกันมีสีเดียวกัน (สามเหลี่ยมที่อยู่ติดกัน คือสามเหลี่ยมที่ใช้เส้นขอบร่วมกัน)

เช่น นี่คือสีที่ถูกต้องของตารางด้านบน:

<img class="img-responsive center-block" alt="colored grid of 64 triangles" src="https://cdn.freecodecamp.org/curriculum/project-euler/tri-colouring-a-triangular-grid-2.gif" style="background-color: white; padding: 10px;">

การระบายสี C' ซึ่งได้มาจากการระบายสี C โดยการหมุนหรือการสะท้อนถือว่าแตกต่างจาก C เว้นแต่ทั้งสองจะเหมือนกัน

เราสามารถลงสีรูปสามเหลี่ยนมด้านบนตามกฎนี้ได้กี่แบบ

# --hints--

`triangularGridColoring()` ต้องคืนค่าเป็น `10834893628237824`

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
