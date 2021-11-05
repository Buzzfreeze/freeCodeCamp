---
id: 5900f5311000cf542c510044
title: 'Problem 453: Lattice Quadrilaterals'
challengeType: 5
forumTopicId: 302126
dashedName: problem-453-lattice-quadrilaterals
---

# --description--

รูปสี่เหลี่ยมธรรมดาคือรูปหลายเหลี่ยมที่มีจุดยอดต่างกันสี่จุด ไม่มีมุมตรงและไม่ตัดกัน

ให้ $Q(m, n)$ เป็นจำนวนของรูปสี่เหลี่ยมธรรมดาที่มีจุดยอดเป็นจุดแลตทิซที่มีพิกัด ($x$, $y$) เท่ากับ $0 ≤ x ≤ m$ และ $0 ≤ y ≤ n$

ตัวอย่างเช่น $Q(2, 2) = 94$ ดังที่แสดงด้านล่าง

<img class="img-responsive center-block" alt="94 quadrilaterals whose vertices are lattice points with coordinates (x, y) satiffying 0 &le; x &le; m and 0 &le; y &le; n" src="https://cdn.freecodecamp.org/curriculum/project-euler/lattice-quadrilaterals.png" style="background-color: white; padding: 10px;">

นอกจากนี้ยังสามารถตรวจสอบได้ว่า $Q(3, 7) = 39\\,590$, $Q(12, 3) = 309\\,000$ และ $Q(123, 45) = 70\\,542\ \,215\\,894\\,646$.

หา $Q(12\\,345, 6\\,789)\bmod 135\\,707\\,531$.

# --hints--

`latticeQuadrilaterals()` ควร return `104354107`.

```js
assert.strictEqual(latticeQuadrilaterals(), 104354107);
```

# --seed--

## --seed-contents--

```js
function latticeQuadrilaterals() {

  return true;
}

latticeQuadrilaterals();
```

# --solutions--

```js
// solution required
```
