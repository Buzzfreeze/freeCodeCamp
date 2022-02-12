---
id: 5900f52a1000cf542c51003c
title: 'Problem 445: Retractions A'
challengeType: 5
forumTopicId: 302117
dashedName: problem-445-retractions-a
---

# --description--

จำนวนเต็มที่ $n > 1$ ทุกจำนวน  
กลุ่มของฟังก์ชัน $f_{n, a, b}$ จะถูกกำหนดโดย:

$f_{n, a, b}(x) ≡ ax + b\bmod n$ เมื่อ $a, b, x$ เป็นจำนวนเต็มและ $0 \lt a \lt n$, $0 \le b \lt n$, $0 \ le x \lt n$

โดย $f_{n, a, b}$ จะเป็น retraction ถ้า $f_{n, a, b}(f_{n, a, b}(x)) \equiv f_{n, a, b}(x )\bmod n$ ถ้า $n$ ทุกตัวเป็น $0 \le x \lt n$

ให้ $R(n)$ เป็นจำนวน retraction ของ $n$

กำหนดให้

$$\sum_{k = 1}^{99\\,999} R(\displaystyle\binom{100\\,000}{k}) \equiv 628\\,701\\,600\bmod 1\\,000\\,000\\,007$$

ให้หา $$\sum_{k = 1}^{9\\,999\\,999} R(\displaystyle\binom{10\\,000\\,000}{k})$$ ให้นำคำตอบไป mod กับ $1 \\,000\\,000\\,007$

# --hints--

`retractionsA()` ต้องคืนค่าเป็น `659104042`

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
