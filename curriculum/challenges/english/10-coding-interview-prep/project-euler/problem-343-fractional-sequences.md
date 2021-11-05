---
id: 5900f4c41000cf542c50ffd6
title: 'Problem 343: Fractional Sequences'
challengeType: 5
forumTopicId: 302002
dashedName: problem-343-fractional-sequences
---

# --description--

สำหรับจำนวนเต็มบวก $k$ ลำดับจำกัด $a_i$ ของเศษส่วน $\frac{x_i}{y_i}$ ถูกกำหนดโดย:

- $a_1 = \displaystyle\frac{1}{k}$ และ
- $a_i = \displaystyle\frac{(x_{i - 1} + 1)}{(y_{i - 1} - 1)}$ ถูกลดเหลือเงื่อนไขต่ำสุดสำหรับ $i > 1$

เมื่อ $a_i$ ถึงจำนวนเต็ม $n$ ลำดับจะหยุด (นั่นคือเมื่อ $y_i = 1$.)

กำหนด $f(k) = n$

ตัวอย่างเช่น สำหรับ $k = 20$:

$$\frac{1}{20} → \frac{2}{19} → \frac{3}{18} = \frac{1}{6} → \frac{2}{5} → \frac{3}{4} → \frac{4}{3} → \frac{5}{2} → \frac{6}{1} = 6$$

ดังนั้น $f(20) = 6$

นอกจากนี้ $f(1) = 1$, $f(2) = 2$, $f(3) = 1$ and $\sum f(k^3) = 118\\,937$ for $1 ≤ k ≤ 100 $.

หา $\sum f(k^3)$ สำหรับ $1 ≤ k ≤ 2 × {10}^6$

# --hints--

`fractionalSequences()` หา return `269533451410884200`.

```js
assert.strictEqual(fractionalSequences(), 269533451410884200);
```

# --seed--

## --seed-contents--

```js
function fractionalSequences() {

  return true;
}

fractionalSequences();
```

# --solutions--

```js
// solution required
```
