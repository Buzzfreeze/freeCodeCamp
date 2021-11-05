---
id: 5900f4311000cf542c50ff43
title: 'Problem 195: Inscribed circles of triangles with one angle of 60 degrees'
challengeType: 5
forumTopicId: 301833
dashedName: problem-195-inscribed-circles-of-triangles-with-one-angle-of-60-degrees
---

# --description--

ลองเรียกสามเหลี่ยมด้านจำนวนเต็มที่มีมุมเดียวเท่ากับ 60° กับสามเหลี่ยม 60° กัน

ให้ $r$ เป็นรัศมีของวงกลมที่จารึกไว้ของสามเหลี่ยม 60° ดังกล่าว

มีสามเหลี่ยม 60° จำนวน 1234 รูป ซึ่ง $r ≤ 100$

ให้ $T(n)$ เป็นจำนวนสามเหลี่ยม 60° ซึ่ง $r ≤ n$ ดังนั้น $T(100) = 1234$, $T(1000) = 22767$ และ $T(10000) = 359912$ 

หา $T(1053779)$

# --hints--

`inscribedCirclesOfTriangles()` ควร return `75085391`.

```js
assert.strictEqual(inscribedCirclesOfTriangles(), 75085391);
```

# --seed--

## --seed-contents--

```js
function inscribedCirclesOfTriangles() {

  return true;
}

inscribedCirclesOfTriangles();
```

# --solutions--

```js
// solution required
```
