---
id: 5900f5001000cf542c510013
title: 'Problem 403: Lattice points enclosed by parabola and line'
challengeType: 5
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

สำหรับจำนวนเต็ม $a$ และ $b$ เรากำหนด $D(a, b)$ เป็นโดเมนที่ล้อมรอบด้วยพาราโบลา $y = x^2$ และบรรทัด $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ขวาน + b \\}$

$L(a, b)$ ถูกกำหนดให้เป็นจำนวนจุดที่แตะที่มีอยู่ใน $D(a, b)$ ตัวอย่างเช่น $L(1, 2) = 8$ และ $L(2, -1) = 1$

นอกจากนี้เรายังกำหนด $S(N)$ เป็นผลรวมของ $L(a, b)$ สำหรับคู่ทั้งหมด ($a$, $b$) เพื่อให้พื้นที่ของ $D(a, b)$ เป็นตรรกยะ ตัวเลขและ $|a|,|b| ≤ N$

เราสามารถยืนยันได้ว่า $S(5) = 344$ และ $S(100) = 26\\,709\\,528$

หา $S({10}^{12})$ ให้คำตอบของคุณ $\bmod {10}^8$

# --hints--

`latticePoints()` ควร return `18224771`.

```js
assert.strictEqual(latticePoints(), 18224771);
```

# --seed--

## --seed-contents--

```js
function latticePoints() {

  return true;
}

latticePoints();
```

# --solutions--

```js
// solution required
```
