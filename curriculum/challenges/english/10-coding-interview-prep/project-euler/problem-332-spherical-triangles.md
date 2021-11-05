---
id: 5900f4b91000cf542c50ffcb
title: 'Problem 332: Spherical triangles'
challengeType: 5
forumTopicId: 301990
dashedName: problem-332-spherical-triangles
---

# --description--

สามเหลี่ยมทรงกลมคือรูปที่เกิดขึ้นบนพื้นผิวของทรงกลมโดยมีส่วนโค้งวงกลมขนาดใหญ่สามส่วนตัดกันเป็นคู่ในจุดยอดสามจุด

<img class="img-responsive center-block" alt="spherical triangle formed on the surface of a sphere" src="https://cdn.freecodecamp.org/curriculum/project-euler/spherical-triangles.jpg" style="background-color: white; padding: 10px;">

ให้ $C(r)$ เป็นทรงกลมโดยมีจุดศูนย์กลาง (0,0,0) และรัศมี $r$

ให้ $Z(r)$ เป็นเซตของจุดบนพื้นผิวของ $C(r)$ ด้วยพิกัดจำนวนเต็ม

ให้ $T(r)$ เป็นเซตของสามเหลี่ยมทรงกลมที่มีจุดยอดเป็น $Z(r)$ รูปสามเหลี่ยมทรงกลมที่เสื่อมโทรม ซึ่งเกิดจากสามจุดบนส่วนโค้งเดียวกันนั้น <u>ไม่</u> รวมอยู่ใน $T(r)$

ให้ $A(r)$ เป็นพื้นที่ของสามเหลี่ยมทรงกลมที่เล็กที่สุดใน $T(r)$

ตัวอย่างเช่น $A(14)$ คือ 3.294040 ปัดเศษทศนิยมหกตำแหน่ง

หา $\displaystyle \sum_{r = 1}^{50} A(r)$ ให้คำตอบของคุณเป็นทศนิยมหกตำแหน่ง

# --hints--

`sphericalTriangles()` ควร return `2717.751525`.

```js
assert.strictEqual(sphericalTriangles(), 2717.751525);
```

# --seed--

## --seed-contents--

```js
function sphericalTriangles() {

  return true;
}

sphericalTriangles();
```

# --solutions--

```js
// solution required
```
