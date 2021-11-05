---
id: 5900f41a1000cf542c50ff2d
title: >-
  Problem 174: Counting the number of "hollow" square laminae that can form one,
  two, three, ... distinct arrangements
challengeType: 5
forumTopicId: 301809
dashedName: >-
  problem-174-counting-the-number-of-hollow-square-laminae-that-can-form-one-two-three-----distinct-arrangements
---

# --description--

เราจะกำหนดแผ่นสี่เหลี่ยมจัตุรัสให้เป็นโครงร่างสี่เหลี่ยมจัตุรัสที่มี "รู" สี่เหลี่ยมเพื่อให้รูปร่างมีความสมมาตรในแนวตั้งและแนวนอน

ด้วยแผ่นกระเบื้องแปดแผ่น คุณสามารถสร้างแผ่นลามิเนตได้ทางเดียวเท่านั้น: สี่เหลี่ยม 3x3 ที่มีรู 1x1 ตรงกลาง อย่างไรก็ตาม การใช้แผ่นกระเบื้อง 32 แผ่น สามารถสร้างแผ่นลามิเนตสองแผ่นที่แตกต่างกันได้

<img class="img-responsive center-block" alt="two square lamina with holes 2x2 and 7x7" src="https://cdn.freecodecamp.org/curriculum/project-euler/using-up-to-one-million-tiles-how-many-different-hollow-square-laminae-can-be-formed.gif" style="background-color: white; padding: 10px;">

ถ้า $t$ แทนจำนวนกระเบื้องที่ใช้ เราจะบอกว่า $t = 8$ เป็นประเภท $L(1)$ และ $t = 32$ เป็นประเภท $L(2)$

ให้ $N(n)$ เป็นจำนวน $t ≤ 1000000$ เพื่อให้ $t$ เป็นประเภท $L(n)$; ตัวอย่างเช่น $N(15) = 832$

$\sum N(n)$ สำหรับ $1 ≤ n ≤ 10$ คืออะไร

# --hints--

`hollowSquareLaminaeDistinctArrangements()` ควร return `209566`.

```js
assert.strictEqual(hollowSquareLaminaeDistinctArrangements(), 209566);
```

# --seed--

## --seed-contents--

```js
function hollowSquareLaminaeDistinctArrangements() {

  return true;
}

hollowSquareLaminaeDistinctArrangements();
```

# --solutions--

```js
// solution required
```
