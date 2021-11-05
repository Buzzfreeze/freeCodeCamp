---
id: 5900f5131000cf542c510024
title: 'Problem 421: Prime factors of n15+1'
challengeType: 5
forumTopicId: 302091
dashedName: problem-421-prime-factors-of-n151
---

# --description--

ตัวเลขของรูปแบบ $n^{15} + 1$ เป็นจำนวนรวมของจำนวนเต็ม $n > 1$

สำหรับจำนวนเต็มบวก $n$ และ $m$ ให้ $s(n, m)$ ถูกกำหนดเป็นผลรวมของปัจจัยเฉพาะที่แตกต่างกันของ $n^{15} + 1$ ไม่เกิน $m$

เช่น. $2^{15} + 1 = 3 × 3 × 11 × 331$

ดังนั้น $s(2, 10) = 3$ และ $s(2, 1000) = 3 + 11 + 331 = 345$

นอกจากนี้ ${10}^{15} + 1 = 7 × 11 × 13 × 211 × 241 × 2161 × 9091$

ดังนั้น $s(10, 100) = 31$ และ $s(10, 1000) = 483$

หา $\sum s(n, {10}^8)$ สำหรับ $1 ≤ n ≤ {10}^{11}$

# --hints--

`primeFactorsOfN15Plus1()` ควร return `2304215802083466200`.

```js
assert.strictEqual(primeFactorsOfN15Plus1(), 2304215802083466200);
```

# --seed--

## --seed-contents--

```js
function primeFactorsOfN15Plus1() {

  return true;
}

primeFactorsOfN15Plus1();
```

# --solutions--

```js
// solution required
```
