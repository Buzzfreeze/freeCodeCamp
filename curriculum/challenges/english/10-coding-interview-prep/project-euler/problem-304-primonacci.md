---
id: 5900f49d1000cf542c50ffaf
title: 'Problem 304: Primonacci'
challengeType: 5
forumTopicId: 301958
dashedName: problem-304-primonacci
---

# --description--

สำหรับจำนวนเต็มบวก $n$ ฟังก์ชัน $\text{next_prime}(n)$ จะส่งกลับจำนวนเฉพาะที่เล็กที่สุด $p$ เพื่อให้ $p > n$

ลำดับ $a(n)$ ถูกกำหนดโดย: $a(1) = \text{next_prime}({10}^{14})$ และ $a(n) = \text{next_prime}(a(n - 1))$ สำหรับ $n > 1$

ลำดับฟีโบนักชี $f(n)$ ถูกกำหนดโดย: $f(0) = 0$, $f(1) = 1$ และ $f(n) = f(n - 1) + f(n - 2) $ สำหรับ $n > 1$

ลำดับ $b(n)$ ถูกกำหนดเป็น $f(a(n))$

หา $\sum b(n)$ สำหรับ $1≤n≤100\\,000$ ให้คำตอบของคุณ $\bmod 1\\,234\\,567\\,891\\,011$

# --hints--

`primonacci()` should return `283988410192`.

```js
assert.strictEqual(primonacci(), 283988410192);
```

# --seed--

## --seed-contents--

```js
function primonacci() {

  return true;
}

primonacci();
```

# --solutions--

```js
// solution required
```
