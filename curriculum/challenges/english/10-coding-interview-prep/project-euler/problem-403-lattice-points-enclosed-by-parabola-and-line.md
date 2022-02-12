---
id: 5900f5001000cf542c510013
title: 'Problem 403: Lattice points enclosed by parabola and line'
challengeType: 5
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

ให้ $a$ และ $b$ เป็นจำนวนเต็ม กำหนดให้ $D(a, b)$ เป็นโดเมนที่ล้อมรอบด้วยพาราโบลา $y = x^2$ และเส้น $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ขวาน + b \\}$

$L(a, b)$ ถูกกำหนดให้เป็นจำนวนจุดที่สัมผัสที่มีอยู่ใน $D(a, b)$ งเช่น $L(1, 2) = 8$ และ $L(2, -1) = 1$

นอกจากนี้เรายังกำหนด $S(N)$ เป็นผลรวมของ $L(a, b)$ สำหรับคู่ทั้งหมด ($a$, $b$) เพื่อให้พื้นที่ของ $D(a, b)$ เป็นตัวเลขตรรกยะ และ $|a|,|b| ≤ N$

ให้ $S(5) = 344$ และ $S(100) = 26\\,709\\,528$

ให้หา $S({10}^{12})$ โดยนำคำตอบไป $\bmod {10}^8$

# --hints--

`latticePoints()` ต้องคืนค่าเป็น `18224771`

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
