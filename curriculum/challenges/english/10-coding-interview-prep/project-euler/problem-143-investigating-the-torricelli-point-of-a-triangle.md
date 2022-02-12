---
id: 5900f3fc1000cf542c50ff0e
title: 'Problem 143: Investigating the Torricelli point of a triangle'
challengeType: 5
forumTopicId: 301772
dashedName: problem-143-investigating-the-torricelli-point-of-a-triangle
---

# --description--

ให้ ABC เป็นรูปสามเหลี่ยมที่มีมุมภายในทุกมุมมีค่าน้อยกว่า 120 องศา และให้ X เป็นจุดใดก็ได้ภายในสามเหลี่ยม แล้วให้ $XA = p$, $XC = q$ และ $XB = r$

Fermat ได้ท้า Torricelli ให้หาตำแหน่งของ X โดยมี p + q + r ให้ต่ำที่สุด

Torricelli สามารถพิสูจน์ได้ว่าถ้ารูปสามเหลี่ยมด้านเท่า AOB, BNC และ AMC ถูกสร้างขึ้นในแต่ละด้านของสามเหลี่ยม ABC วงกลมที่ล้อมรอบของ AOB, BNC และ AMC จะตัดกันที่จุดเดียว T ภายในรูปสามเหลี่ยม นอกจากนี้เขายังพิสูจน์ว่า T ซึ่งเรียกว่าจุด Torricelli/Fermat ย่อขนาด $p + q + r$ ให้เล็กสุด ที่น่าทึ่งยิ่งกว่านั้น สามารถแสดงให้เห็นได้ว่าเมื่อผลรวมลดลง $AN = BM = CO = p + q + r$ และ AN, BM และ CO จะตัดกันที่ T

<img class="img-responsive center-block" alt="equilateral triangles AOB, BNC and AMC constructed on each side of triangle ABC; with the circumscribed circles of AOB, BNC, and AMC will intersecting at a single point, T, inside the triangle" src="https://cdn.freecodecamp.org/curriculum/project-euler/investigating-the-torricelli-point-of-a-triangle.png" style="background-color: white; padding: 10px;">

หากผลรวมมีค่าต่ำสุด และ a, b, c, p, q และ r เป็นจำนวนเต็มบวกทั้งหมด เราจะเรียกสามเหลี่ยม ABC ว่าสามเหลี่ยม Torricelli เช่น $a = 399$, $b = 455$, $c = 511$ เป็นตัวอย่างของสามเหลี่ยม Torricelli โดยที่ $p + q + r = 784$ 

ให้หาผลรวมของสามเหลี่ยม Torricelli ทุกตัว ที่ $p + q + r ≤ 120000$ 

# --hints--

`sumTorricelliTriangles()` ต้องคืนค่าเป็น `30758397`

```js
assert.strictEqual(sumTorricelliTriangles(), 30758397);
```

# --seed--

## --seed-contents--

```js
function sumTorricelliTriangles() {

  return true;
}

sumTorricelliTriangles();
```

# --solutions--

```js
// solution required
```
