---
id: 5900f52c1000cf542c51003e
title: 'Problem 447: Retractions C'
challengeType: 5
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

สำหรับทุกจำนวนเต็ม $n > 1$ ตระกูลของฟังก์ชัน $f_{n, a, b}$ ถูกกำหนดโดย:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ สำหรับ $a, b, x$ จำนวนเต็มและ $0 \lt a \lt n$, $0 \le b \lt n$, $0 \ le x \lt n$

เราจะเรียก $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x )\bmod n$ สำหรับทุก ๆ $0 \le x \lt n$

ให้ $R(n)$ เป็นจำนวนการถอนกลับของ $n$

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$.

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$.

หา $F({10}^{14})$ ให้คำตอบแบบmodulo $1\\,000\\,000\\,007$

# --hints--

`retractionsC()` ควร return `530553372`.

```js
assert.strictEqual(retractionsC(), 530553372);
```

# --seed--

## --seed-contents--

```js
function retractionsC() {

  return true;
}

retractionsC();
```

# --solutions--

```js
// solution required
```
