---
id: 5900f52a1000cf542c51003c
title: 'Problem 445: Retractions A'
challengeType: 5
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

สำหรับทุกจำนวนเต็ม $n > 1$ ตระกูลของฟังก์ชัน $f_{n, a, b}$ ถูกกำหนดโดย:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ สำหรับ $a, b, x$ จำนวนเต็มและ $0 \lt a \lt n$, $0 \le b \lt n$, $0 \ le x \lt n$

เราจะเรียก $f_{n, a, b}$ a retraction if $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x )\bmod n$ สำหรับทุก ๆ $0 \le x \lt n$

ให้ $R(n)$ เป็นจำนวนการถอนกลับของ $n$

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

หา $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ ให้คำตอบแบบมอดูโล $1 \\,000\\,000\\,007$.

# --hints--

`retractionsA()` ควร return `659104042`.

```js
assert.strictEqual(retractionsA(), 659104042);
```

# --seed--

## --seed-contents--

```js
function retractionsA() {

  return true;
}

retractionsA();
```

# --solutions--

```js
// solution required
```
