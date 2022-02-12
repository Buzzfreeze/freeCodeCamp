---
id: 5900f53d1000cf542c51004f
title: 'Problem 464: Möbius function and intervals'
challengeType: 5
forumTopicId: 302139
dashedName: problem-464-mbius-function-and-intervals
---

# --description--

ฟังก์ชัน Möbius ($μ(n)$) กำหนดว่า:

- $μ(n) = (-1)^{ω(n)}$ ถ้า $n$ เป็น squarefree (โดยที่ $ω(n)$ คือจำนวนของตัวประกอบเฉพาะที่แตกต่างกันของ $n$)
- $μ(n) = 0$ ถ้า $n$ ไม่เป็น squarefree

ให้ $P(a, b)$ เป็นจำนวนเต็ม $n$ ในช่วง $[a, b]$ โดยที่ $μ(n) = 1$

ให้ $N(a, b)$ เป็นจำนวนเต็ม $n$ ในช่วง $[a, b]$ โดยที่ $μ(n) = -1$

เช่น $P(2, 10) = 2$ และ $N(2, 10) = 4$

ให้ $P(a, b)$ เป็นจำนวนเต็ม $n$ ในช่วง $[a, b]$ โดยที่ $μ(n) = 1$

ให้ $N(a, b)$ เป็นจำนวนเต็ม $n$ ในช่วง $[a, b]$ โดยที่ $μ(n) = -1$

เช่น $P(2, 10) = 2$ และ $N(2, 10) = 4$

ให้หา $C(20\\,000\\,000)$

# --hints--

`mobiusFunctionAndIntervals()` ต้องคืนค่าเป็น `198775297232878`

```js
assert.strictEqual(mobiusFunctionAndIntervals(), 198775297232878);
```

# --seed--

## --seed-contents--

```js
function mobiusFunctionAndIntervals() {

  return true;
}

mobiusFunctionAndIntervals();
```

# --solutions--

```js
// solution required
```
