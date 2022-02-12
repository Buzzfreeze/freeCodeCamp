---
id: 5900f4a31000cf542c50ffb6
title: 'Problem 311: Biclinic Integral Quadrilaterals'
challengeType: 5
forumTopicId: 301967
dashedName: problem-311-biclinic-integral-quadrilaterals
---

# --description--

$ABCD$ เป็นรูปสี่เหลี่ยมนูน ที่มีด้านเป็นจำนวนเต็ม ที่มี $1 ≤ AB &lt; BC &lt; CD &lt; AD$

$BD$ มีความยาวเป็นจำนวนเต็ม $O$ เป็นจุดกึ่งกลางของ $BD$ $AO$ มีความยาวเป็นจำนวนเต็ม

เราจะเรียก $ABCD$ ว่าเป็น biclinic integral quadrilateral ถ้า $AO = CO ≤ BO = DO$

เช่น รูปสี่เหลี่ยมต่อไปนี้เป็น biclinic integral quadrilateral: $AB = 19$, $BC = 29$, $CD = 37$, $AD = 43$, $BD = 48$ and $AO = CO = 23$

<img class="img-responsive center-block" alt="quadrilateral ABCD, with point O, an midpoint of BD" src="https://cdn.freecodecamp.org/curriculum/project-euler/biclinic-integral-quadrilaterals.gif" style="background-color: white; padding: 10px;">

ให้ $B(N)$ เป็นจำนวนของรูป biclinic integral quadrilateral $ABCD$ ที่ตรงตาม ${AB}^2 + {BC}^2 + {CD}^2 + {AD}^2 ≤ N$ เราสามารถยืนยันได้ว่า $B(10\\,000) = 49$ และ $B(1\\,000\\,000) = 38239$

ให้หา $B(10\\,000\\,000\\,000)$

# --hints--

`biclinicIntegralQuadrilaterals()` ต้องคืนค่าเป็น `2466018557`

```js
assert.strictEqual(biclinicIntegralQuadrilaterals(), 2466018557);
```

# --seed--

## --seed-contents--

```js
function biclinicIntegralQuadrilaterals() {

  return true;
}

biclinicIntegralQuadrilaterals();
```

# --solutions--

```js
// solution required
```
