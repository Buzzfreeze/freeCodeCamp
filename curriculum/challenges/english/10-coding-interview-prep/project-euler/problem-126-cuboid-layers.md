---
id: 5900f3ea1000cf542c50fefd
title: 'Problem 126: Cuboid layers'
challengeType: 5
forumTopicId: 301753
dashedName: problem-126-cuboid-layers
---

# --description--

จำนวนลูกบาศก์ขั้นต่ำที่จะครอบคลุมทุกใบหน้าที่มองเห็นได้บนลูกบาศก์ที่มีขนาด 3 x 2 x 1 คือยี่สิบสอง

<img class="img-responsive center-block" alt="3x2x1 cuboid covered by twenty-two 1x1x1 cubes" src="https://cdn.freecodecamp.org/curriculum/project-euler/cuboid-layers.png" style="background-color: white; padding: 10px;">

หากเราเพิ่มชั้นที่สองให้กับของแข็งนี้ จะต้องมีลูกบาศก์สี่สิบหกก้อนเพื่อปกปิดทุกใบหน้าที่มองเห็นได้ ชั้นที่สามจะต้องใช้ลูกบาศก์เจ็ดสิบแปดก้อน และชั้นที่สี่จะต้องหนึ่งร้อยสิบแปดลูกบาศก์เพื่อปกปิดทุกใบหน้าที่มองเห็นได้

อย่างไรก็ตาม ชั้นแรกบนลูกบาศก์ที่มีขนาด 5 x 1 x 1 ก็ต้องใช้ลูกบาศก์ยี่สิบสองเช่นกัน ในทำนองเดียวกัน ชั้นแรกบนลูกบาศก์ที่มีขนาด 5 x 3 x 1, 7 x 2 x 1 และ 11 x 1 x 1 ทั้งหมดมีลูกบาศก์สี่สิบหก

เราจะกำหนด $C(n)$ เพื่อแสดงจำนวนลูกบาศก์ที่มีลูกบาศก์ $n$ ในชั้นใดชั้นหนึ่ง ดังนั้น $C(22) = 2$, $C(46) = 4$, $C(78) = 5$ และ $C(118) = 8$

ปรากฎว่า 154 เป็นค่าที่น้อยที่สุดของ $n$ โดยที่ $C(n) = 10$

หาค่าที่น้อยที่สุดของ $n$ โดยที่ $C(n) = 1,000$

# --hints--

`cuboidLayers()` ควร return `18522`.

```js
assert.strictEqual(cuboidLayers(), 18522);
```

# --seed--

## --seed-contents--

```js
function cuboidLayers() {

  return true;
}

cuboidLayers();
```

# --solutions--

```js
// solution required
```
