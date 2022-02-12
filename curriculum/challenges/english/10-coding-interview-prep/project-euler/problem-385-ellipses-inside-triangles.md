---
id: 5900f4ee1000cf542c510000
title: 'Problem 385: Ellipses inside triangles'
challengeType: 5
forumTopicId: 302049
dashedName: problem-385-ellipses-inside-triangles
---

# --description--

ให้ $T$ เป็นสามเหลี่ยมบนระนาบ จะพบว่ามีวงรีเฉพาะที่มีพื้นที่ใหญ่ที่สุดอยู่ภายใน $T$

<img class="img-responsive center-block" alt="ellipse completely insisde of triangle" src="https://cdn.freecodecamp.org/curriculum/project-euler/ellipses-inside-triangles.png" style="background-color: white; padding: 10px;">

สำหรับ $n$ ที่กำหนด ให้พิจารณาสามเหลี่ยม $T$ ว่า:

- จุดยอดของ $T$ มีพิกัดจำนวนเต็มที่มีค่าสัมบูรณ์ $≤ n$ และ
- จุดโฟกัส<sup>1</sup> ของวงรีพื้นที่ที่ใหญ่ที่สุดภายใน $T$ คือ $(\sqrt{13}, 0)$ และ $(-\sqrt{13}, 0)$

ให้ $A(n)$ เป็นผลรวมของพื้นที่ของสามเหลี่ยมดังกล่าวทั้งหมด

เช่น ถ้า $n = 8$ จะมีสามเหลี่ยมสองรูป โดยจุดยอดคือ (-4,-3), (-4,3), (8,0) และ (4,3), (4,-3), (-8,0) และพื้นที่ของสามเหลี่ยมแต่ละรูป คือ 36 ดังนั้น $A(8) = 36 + 36 = 72$

ถ้า $A(10) = 252$, $A(100) = 34\\,632$ และ $A(1000) = 3\\,529\\,008$

ให้หา $A(1\\,000\\,000\\,000)$

<sup>1</sup> จุดโฟกัสของวงรีมีสองจุด คือ $A$ และ $B$ ดังนั้นสำหรับทุกจุด $P$ บนขอบเขตของวงรี $AP + PB$ เป็นค่าคงที่

# --hints--

`ellipsesInsideTriangles()` ต้องคืนค่าเป็น `3776957309612154000`

```js
assert.strictEqual(ellipsesInsideTriangles(), 3776957309612154000);
```

# --seed--

## --seed-contents--

```js
function ellipsesInsideTriangles() {

  return true;
}

ellipsesInsideTriangles();
```

# --solutions--

```js
// solution required
```
