---
id: 5900f5261000cf542c510038
title: 'Problem 441: The inverse summation of coprime couples'
challengeType: 5
forumTopicId: 302113
dashedName: problem-441-the-inverse-summation-of-coprime-couples
---

# --description--

สำหรับจำนวนเต็ม $M$ เรากำหนด $R(M)$ เป็นผลรวมของ $\frac{1}{p·q}$ สำหรับคู่จำนวนเต็ม $p$ และ $q$ ซึ่งเป็นไปตามเงื่อนไขเหล่านี้ทั้งหมด:

- $1 ≤ p &lt; q ≤ M$
- $p + q ≥ M$
- $p$ และ $q$ เป็น coprime

นอกจากนี้เรายังกำหนด $S(N)$ เป็นผลรวมของ $R(i)$ สำหรับ $2 ≤ i ≤ N$

เราสามารถยืนยันได้ว่า $S(2) = R(2) = \frac{1}{2}$, $S(10) ≈ 6.9147$ and $S(100) ≈ 58.2962$

หา $S({10}^7)$ ให้คำตอบของคุณปัดเศษทศนิยมสี่ตำแหน่ง

# --hints--

`inverseSummationCoprimeCouples()` ควร return `5000088.8395`.

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
