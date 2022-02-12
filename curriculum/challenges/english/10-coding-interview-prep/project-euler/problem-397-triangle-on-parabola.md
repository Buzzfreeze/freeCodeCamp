---
id: 5900f4f91000cf542c51000c
title: 'Problem 397: Triangle on parabola'
challengeType: 5
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

บนพาราโบลา $y = \frac{x^2}{k}$ เราเลือกจุดสามจุด คือ $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ และ $C(c, \frac{c^2}{k})$

ให้ $F(K, X)$ เป็นจำนวนของจตุภาคของจำนวนเต็ม $(k, a, b, c)$ โดยที่มุมอย่างน้อยหนึ่งมุมของสามเหลี่ยม $ABC$ คือ 45° โดย $1 ≤ k ≤ K$ และ $-X ≤ a &lt; b &lt; c ≤ X$

เช่น $F(1, 10) = 41$ และ $F(10, 100) = 12\\,492$

.shหา $F({10}^6, {10}^9)$

# --hints--

`triangleOnParabola()` ต้องคืนค่าเป็น `141630459461893730`

```js
assert.strictEqual(triangleOnParabola(), 141630459461893730);
```

# --seed--

## --seed-contents--

```js
function triangleOnParabola() {

  return true;
}

triangleOnParabola();
```

# --solutions--

```js
// solution required
```
