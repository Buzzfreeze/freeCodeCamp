---
id: 5900f4241000cf542c50ff37
title: 'Problem 184: Triangles containing the origin'
challengeType: 5
forumTopicId: 301820
dashedName: problem-184-triangles-containing-the-origin
---

# --description--

พิจารณาเซ็ท $I_r$ ของจุด $(x,y)$ ที่มีพิกัดจำนวนเต็มภายในวงกลมที่มีรัศมี $r$ ซึ่งอยู่กึ่งกลางที่จุดกำเนิด นั่นคือ $x^2 + y^2 &lt; r^2$

ถ้ารัศมีเป็น 2 แล้ว $I_2$ มีเก้าจุด (0,0), (1,0), (1,1), (0,1), (-1,1), (-1,0) , (-1,-1), (0,-1) และ (1,-1) มีสามเหลี่ยมแปดรูปที่มีจุดยอดทั้งสามใน $I_2$ ซึ่งมีจุดกำเนิดอยู่ภายใน สองรายการแสดงอยู่ด้านล่าง ส่วนรายการอื่นๆ ได้มาจากการหมุน

<img class="img-responsive center-block" alt="circle with radius 2, centered at the origin, with nine marked points and two triangles - (-1,0), (0,1), (1,-1) and (-1,1), (0,-1), (1,1)" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangles-containing-the-origin.gif" style="background-color: white; padding: 10px;">

ถ้ารัศมีเป็น 3 มีสามเหลี่ยม 360 รูปที่มีจุดกำเนิดภายในและมีจุดยอดทั้งหมดใน $I_3$ และถ้า $I_5$ จะมีตัวเลขเป็น 10600

มีสามเหลี่ยมจำนวนเท่าใดที่มีจุดกำเนิดภายในและมีจุดยอดทั้งสามใน $I_{105}$

# --hints--

`trianglesConttainingOrigin()` ต้องคืนค่าเป็น `1725323624056`

```js
assert.strictEqual(trianglesConttainingOrigin(), 1725323624056);
```

# --seed--

## --seed-contents--

```js
function trianglesContainingOrigin() {

  return true;
}

trianglesContainingOrigin();
```

# --solutions--

```js
// solution required
```
