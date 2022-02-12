---
id: 5900f5231000cf542c510034
title: 'Problem 438: Integer part of polynomial equation''s solutions'
challengeType: 5
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

สำหรับ $n$-tuple ของจำนวนเต็ม  
ให้ $t = (a_1, \ldots, a_n)$ ให้ $(x_1, \ldots, x_n)$ เป็นคำตอบของสมการพหุนาม $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$

พิจารณาสองเงื่อนไขต่อไปนี้:

- $x_1, \ldots, x_n$ เป็นจำนวนจริงทั้งหมด
- ถ้า $x_1, ..., x_n$ เรียงลำดับอยู่แล้ว แล้ว $⌊x_i⌋ = i$ ถ้า $1 ≤ i ≤ n$ ($⌊·⌋:$ floor function)

ในกรณีของ $n = 4$ จะมี $n$-tuple 12 ตัวที่เป็นจำนวนเต็ม ซึ่งตรงตามเงื่อนไขทั้งสองข้อ

กำหนดให้ $S(t)$ เป็นผลรวมของค่าสัมบูรณ์ของจำนวนเต็มใน $t$

ถ้า $n = 4$ แล้ว $\sum S(t) = 2087$ สำหรับ $n$-tuple t ทั้งหมด ซึ่งตรงตามเงื่อนไขทั้งสองข้อ

ให้หา $\sum S(t)$ ถ้า $n = 7$

# --hints--

`polynomialIntegerPart()` ต้องคืนค่าเป็น `2046409616809`

```js
assert.strictEqual(polynomialIntegerPart(), 2046409616809);
```

# --seed--

## --seed-contents--

```js
function polynomialIntegerPart() {

  return true;
}

polynomialIntegerPart();
```

# --solutions--

```js
// solution required
```
