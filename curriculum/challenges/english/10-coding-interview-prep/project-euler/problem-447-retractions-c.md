---
id: 5900f52c1000cf542c51003e
title: 'Problem 447: Retractions C'
challengeType: 5
forumTopicId: 302119
dashedName: problem-447-retractions-c
---

# --description--

จำนวนเต็มที่ $n > 1$ ทุกจำนวน  
กลุ่มของฟังก์ชัน $f_{n, a, b}$ จะถูกกำหนดโดย:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ เมื่อ $a, b, x$ เป็นจำนวนเต็มและ $0 \lt a \lt n$, $0 \le b \lt n$, $0 \ le x \lt n$

โดย $f_{n, a, b}$ จะเป็น retraction ถ้า $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x )\bmod n$ ถ้า $n$ ทุกตัวเป็น $0 \le x \lt n$

ให้ $R(n)$ เป็นจำนวน retraction ของ $n$

$F(N) = \displaystyle\sum_{n = 2}^N R(n)$

$F({10}^7) ≡ 638\\,042\\,271\bmod 1\\,000\\,000\\,007$.

ให้หา $F({10}^{14})$ และตอบโดย mod กับ $1\\,000\\,000\\,007$

# --hints--

`retractionsC()` ต้องคืนค่าเป็น `530553372`

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
