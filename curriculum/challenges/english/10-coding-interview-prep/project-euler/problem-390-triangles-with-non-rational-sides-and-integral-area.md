---
id: 5900f4f21000cf542c510005
title: 'Problem 390: Triangles with non rational sides and integral area'
challengeType: 5
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

พิจารณาสามเหลี่ยมที่มีด้าน $\sqrt{5}$, $\sqrt{65}$ และ $\sqrt{68}$ แสดงว่าสามเหลี่ยมนี้มีพื้นที่ 9

$S(n)$ คือผลรวมของพื้นที่ของสามเหลี่ยมทั้งหมดที่มีด้าน $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ และ $\sqrt{b^2 + c ^2}$ (สำหรับจำนวนเต็มบวก $b$ และ $c$) ที่มีพื้นที่ปริพันธ์ไม่เกิน $n$

สามเหลี่ยมตัวอย่างมี $b = 2$ และ $c = 8$

$S({10}^6) = 18\\,018\\,206$.

หา $S({10}^{10})$

# --hints--

`nonRationalSidesAndIntegralArea()` ควร return `2919133642971`.

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

# --seed--

## --seed-contents--

```js
function nonRationalSidesAndIntegralArea() {

  return true;
}

nonRationalSidesAndIntegralArea();
```

# --solutions--

```js
// solution required
```
