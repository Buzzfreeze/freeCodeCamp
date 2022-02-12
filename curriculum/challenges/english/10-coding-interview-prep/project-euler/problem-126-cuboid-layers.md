---
id: 5900f3ea1000cf542c50fefd
title: 'Problem 126: Cuboid layers'
challengeType: 5
forumTopicId: 301753
dashedName: problem-126-cuboid-layers
---

# --description--

จำนวนลูกบาศก์ขั้นต่ำที่จะครอบคลุมทุกใบหน้าที่มองเห็นได้ของรูปทรงขนาด 3 x 2 x 1 คือยี่สิบสองลูกบาศก์

<img class="img-responsive center-block" alt="3x2x1 cuboid covered by twenty-two 1x1x1 cubes" src="https://cdn.freecodecamp.org/curriculum/project-euler/cuboid-layers.png" style="background-color: white; padding: 10px;">

หากเราเพิ่มชั้นที่สองให้กับรูปทรงนี้ จะต้องมีลูกบาศก์สี่สิบหกก้อนเพื่อปกปิดทุกใบหน้าที่มองเห็นได้ ชั้นที่สามจะต้องใช้ลูกบาศก์เจ็ดสิบแปดก้อน และชั้นที่สี่จะต้องใช้ลูกบาศก์หนึ่งร้อยสิบแปดลูกเพื่อปกปิดทุกใบหน้าที่มองเห็นได้

แต่ชั้นแรกของรูปทรงที่มีขนาด 5 x 1 x 1 ก็ต้องใช้ลูกบาศก์ยี่สิบสองลูกเช่นกัน และชั้นแรกของรูปทรงที่มีขนาด 5 x 3 x 1, 7 x 2 x 1 และ 11 x 1 x 1 ก็จะต้องใช้ลูกบาศก์ 46 ลูก

เราจะกำหนดให้ $C(n)$ แทนรูปทรงที่มีลูกบาศ์ $n$ ลูก ในหนึ่งชั้น ดังนั้น $C(22) = 2$, $C(46) = 4$, $C(78) = 5$ และ $C(118) = 8$

ปรากฎว่า 154 เป็นค่าที่น้อยที่สุดของ $n$ โดยที่ $C(n) = 10$

ให้หาค่าที่น้อยที่สุดของ $n$ โดยที่ $C(n) = 1,000$

# --hints--

`cuboidLayers()` ต้องคืนค่าเป็น `18522`

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
