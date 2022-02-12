---
id: 5900f5261000cf542c510038
title: 'Problem 441: The inverse summation of coprime couples'
challengeType: 5
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

ให้ $M$ เป็นจำนวนเต็ม  
เรากำหนดให้ $R(M)$ เป็นผลรวมของ $\frac{1}{p·q}$ สำหรับคู่จำนวนเต็ม $p$ และ $q$ ซึ่งเป็นไปตามเงื่อนไขเหล่านี้ทั้งหมด:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ และ $q$ เป็น coprime

นอกจากนี้เรายังกำหนด $S(N)$ เป็นผลรวมของ $R(i)$ สำหรับ $2 ≤ i ≤ N$

โดยทำให้ $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$ และ $S(100) ≈ 58.2962$

ให้หา $S({10}^7)$ โดยตอบเป็นทศนิยมสี่ตำแหน่ง

# --hints--

`inverseSummationCoprimeCouples()` ต้องคืนค่าเป็น `5000088.8395`

```js
assert.strictEqual(inverseSummationCoprimeCouples(), 5000088.8395);
```

# --seed--

## --seed-contents--

```js
function inverseSummationCoprimeCouples() {

  return true;
}

inverseSummationCoprimeCouples();
```

# --solutions--

```js
// solution required
```
