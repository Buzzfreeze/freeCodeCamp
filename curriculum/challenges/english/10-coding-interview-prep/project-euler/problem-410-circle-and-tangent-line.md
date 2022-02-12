---
id: 5900f5071000cf542c510018
title: 'Problem 410: Circle and tangent line'
challengeType: 5
forumTopicId: 302079
dashedName: problem-410-circle-and-tangent-line
---

# --description--

ให้ $C$ เป็นวงกลมที่มีรัศมี $r$, $x^2 + y^2 = r^2$  
เราเลือกจุดสองจุด $P(a, b)$ และ $Q(-a, c)$ เพื่อให้เส้นที่ผ่าน $P$ และ $Q$ สัมผัสกับ $C$

เช่น quadruplet  $(r, a, b, c) = (2, 6, 2, -7)$ ตรงตามคุณสมบัตินี้

ให้ $F(R, X)$ เป็นจำนวนของ quadruplet ที่เป็นจำนวนเต็ม $(r, a, b, c)$ ที่มีคุณสมบัตินี้ และ $0 &lt; r ≤ R$ และ $0 &lt; ≤ X$

ซึ่ง $F(1, 5) = 10$, $F(2, 10) = 52$ และ $F(10, 100) = 3384$

ให้หา $F({10}^8, {10}^9) + F({10}^9, {10}^8)$

# --hints--

`circleAndTangentLine()` ต้องคืนค่าเป็น `799999783589946600`

```js
assert.strictEqual(circleAndTangentLine(), 799999783589946600);
```

# --seed--

## --seed-contents--

```js
function circleAndTangentLine() {

  return true;
}

circleAndTangentLine();
```

# --solutions--

```js
// solution required
```
