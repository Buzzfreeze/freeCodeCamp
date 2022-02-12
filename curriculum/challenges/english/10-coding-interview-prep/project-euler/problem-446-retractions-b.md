---
id: 5900f52c1000cf542c51003d
title: 'Problem 446: Retractions B'
challengeType: 5
forumTopicId: 302118
dashedName: problem-446-retractions-b
---

# --description--

จำนวนเต็มที่ $n > 1$ ทุกจำนวน  
กลุ่มของฟังก์ชัน $f_{n, a, b}$ จะถูกกำหนดโดย:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ เมื่อ $a, b, x$ เป็นจำนวนเต็มและ $0 \lt a \lt n$, $0 \le b \lt n$, $0 \ le x \lt n$

โดย $f_{n, a, b}$ จะเป็น retraction ถ้า $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x )\bmod n$ ถ้า $n$ ทุกตัวเป็น $0 \le x \lt n$

ให้ $R(n)$ เป็นจำนวน retraction ของ $n$

$F(N) = \displaystyle\sum_{n = 1}^N R(n^4 + 4)$.

$F(1024) = 77\\,532\\,377\\,300\\,600$

ให้หา $F({10}^7)$ และตอบโดย mod กับ $1\\,000\\,000\\,007$

# --hints--

`retractionsB()` ต้องคืนค่าเป็น `907803852`

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
