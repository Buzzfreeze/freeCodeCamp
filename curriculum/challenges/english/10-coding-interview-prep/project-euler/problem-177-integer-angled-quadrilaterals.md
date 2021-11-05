---
id: 5900f41e1000cf542c50ff30
title: 'Problem 177: Integer angled Quadrilaterals'
challengeType: 5
forumTopicId: 301812
dashedName: problem-177-integer-angled-quadrilaterals
---

# --description--

ให้ ABCD เป็นรูปสี่เหลี่ยมนูน โดยมีเส้นทแยงมุม AC และ BD ที่จุดยอดแต่ละจุด เส้นทแยงมุมจะสร้างมุมกับแต่ละด้านของทั้งสองข้าง ทำให้เกิดมุมแปดมุม

<img class="img-responsive center-block" alt="convex quadrilateral ABCD, with diagonals AC and BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-angled-quadrilaterals.gif" style="background-color: white; padding: 10px;">

ตัวอย่างเช่น ที่จุดยอด A มุมทั้งสองคือ CAD, CAB

เราเรียกรูปสี่เหลี่ยมดังกล่าวซึ่งมุมทั้งแปดมุมมีค่าจำนวนเต็มเมื่อวัดเป็นองศาเป็น "รูปสี่เหลี่ยมมุมฉากจำนวนเต็ม" ตัวอย่างของรูปสี่เหลี่ยมมุมฉากที่เป็นจำนวนเต็มคือสี่เหลี่ยมจัตุรัส โดยที่มุมทั้งแปดมุมมีมุม 45° อีกตัวอย่างหนึ่งมาจาก DAC = 20°, BAC = 60°, ABD = 50°, CBD = 30°, BCA = 40°, DCA = 30°, CDB = 80°, ADB = 50°

จำนวนรวมของรูปสี่เหลี่ยมมุมฉากที่มีจำนวนเต็มไม่เท่ากันเป็นเท่าใด

**Note:** 
ในการคำนวณของคุณ คุณอาจถือว่ามุมที่คำนวณได้นั้นเป็นอินทิกรัล หากอยู่ภายในค่าความคลาดเคลื่อน ${10}^{-9}$ ของค่าจำนวนเต็ม

# --hints--

`integerAngledQuadrilaterals()` ควร return `129325`.

```js
assert.strictEqual(integerAngledQuadrilaterals(), 129325);
```

# --seed--

## --seed-contents--

```js
function integerAngledQuadrilaterals() {

  return true;
}

integerAngledQuadrilaterals();
```

# --solutions--

```js
// solution required
```
