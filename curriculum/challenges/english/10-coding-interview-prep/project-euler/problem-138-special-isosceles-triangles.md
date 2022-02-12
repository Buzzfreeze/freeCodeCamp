---
id: 5900f3f61000cf542c50ff09
title: 'Problem 138: Special isosceles triangles'
challengeType: 5
forumTopicId: 301766
dashedName: problem-138-special-isosceles-triangles
---

# --description--

พิจารณาสามเหลี่ยมหน้าจั่วที่มีความยาวฐาน $b = 16$ และด้าน $L = 17$

<img class="img-responsive center-block" alt="isosceles triangle with edges named as L - two edges with the same length and base of the triangle as b; and height of the triangle - h from the base of the triangle to the angle between L edges" src="https://cdn.freecodecamp.org/curriculum/project-euler/special-isosceles-triangles.png" style="background-color: white; padding: 10px;">

ถ้าใช้ทฤษฎีพีทาโกรัส จะเห็นได้ว่าความสูงของสามเหลี่ยม $h = \sqrt{{17}^2 − 8^2} = 15$ ซึ่งน้อยกว่าความยาวฐานหนึ่งจุด

ถ้า $b = 272$ และ $L = 305$ เราจะได้ $h = 273$ ซึ่งมากกว่าความยาวฐานหนึ่งหน่วย และนี่คือสามเหลี่ยมหน้าจั่วที่เล็กที่สุดเป็นอันดับสองที่มีคุณสมบัติที่ $h = b ± 1$

ให้หา $\sum{L}$ ที่ทำให้เกิดสามเหลี่ยมหน้าจั่วที่เล็กที่สุดสิบสองรูป โดยที่ $h = b ± 1$ และ $b$ กับ $L$ เป็นจำนวนเต็มบวก

# --hints--

`isoscelesTriangles()` ต้องคืนค่าเป็น `1118049290473932`

```js
assert.strictEqual(isoscelesTriangles(), 1118049290473932);
```

# --seed--

## --seed-contents--

```js
function isoscelesTriangles() {

  return true;
}

isoscelesTriangles();
```

# --solutions--

```js
// solution required
```
