---
id: 5900f52c1000cf542c51003d
title: 'Problem 446: Retractions B'
challengeType: 5
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

สำหรับทุกจำนวนเต็ม $n > 1$ ตระกูลของฟังก์ชัน $f_{n, a, b}$ ถูกกำหนดโดย:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ สำหรับ $a, b, x$ จำนวนเต็มและ $0 \lt a \lt n$, $0 \le b \lt n$, $0 \ le x \lt n$

เราจะเรียก $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x )\bmod n$ สำหรับทุก ๆ $0 \le x \lt n$

ให้ $R(n)$ เป็นจำนวนการถอนกลับของ $n$

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77\\,532\\,377\\,300\\,600$

หา $F({10}^7)$ ให้คำตอบแบบmodulo $1\\,000\\,000\\,007$

# --hints--

`retractionsB()` ควร return `907803852`.

```js
assert.strictEqual(retractionsB(), 907803852);
```

# --seed--

## --seed-contents--

```js
function retractionsB() {

  return true;
}

retractionsB();
```

# --solutions--

```js
// solution required
```
