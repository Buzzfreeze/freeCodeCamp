---
id: 5900f5231000cf542c510034
title: 'Problem 438: Integer part of polynomial equation''s solutions'
challengeType: 5
forumTopicId: 302109
dashedName: problem-438-integer-part-of-polynomial-equations-solutions
---

# --description--

สำหรับ $n$-tuple ของจำนวนเต็ม $t = (a_1, \ldots, a_n)$ ให้ $(x_1, \ldots, x_n)$ เป็นคำตอบของสมการพหุนาม $x^n + a_1x^{n - 1} + a_2x^{n - 2} + \ldots + a_{n - 1}x + a_n = 0$

พิจารณาสองเงื่อนไขต่อไปนี้:

- $x_1, \ldots, x_n$ เป็นของจริงทั้งหมด
- ถ้า $x_1, ..., x_n$ ถูกจัดเรียง $⌊x_i⌋ = i$ สำหรับ $1 ≤ i ≤ n$ ($⌊·⌋:$ ฟังก์ชันชั้น)

ในกรณีของ $n = 4$ จะมีจำนวนเต็มจำนวน 12 $n$-tuples ซึ่งตรงตามเงื่อนไขทั้งสองข้อ

เรากำหนด $S(t)$ เป็นผลรวมของค่าสัมบูรณ์ของจำนวนเต็มใน $t$

สำหรับ $n = 4$ เราสามารถยืนยันได้ว่า $\sum S(t) = 2087$ สำหรับ $n$-tuples t ทั้งหมดซึ่งตรงตามเงื่อนไขทั้งสองข้อ

หา $\sum S(t)$ สำหรับ $n = 7$

# --hints--

`polynomialIntegerPart()` ควร return `2046409616809`.

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
