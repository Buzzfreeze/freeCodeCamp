---
id: 5900f52c1000cf542c51003f
title: 'Problem 448: Average least common multiple'
challengeType: 5
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

ฟังก์ชัน $lcm(a, b)$ หมายถึงตัวคูณร่วมน้อยของ $a$ และ $b$

ให้ $A(n)$ เป็นค่าเฉลี่ยของค่าของ $lcm(n, i)$ สำหรับ $1 ≤ i ≤ n$

เช่น $A(2) = \frac{2 + 2}{2} = 2$ และ $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

ให้ $S(n) = \sum A(k)$ for $1 ≤ k ≤ n$.

$S(100) = 122\\,726$.

หา $S(99\\,999\\,999\\,019)\bmod 999\\,999\\,017$.

# --hints--

`averageLCM()` ควร return `106467648`.

```js
assert.strictEqual(averageLCM(), 106467648);
```

# --seed--

## --seed-contents--

```js
function averageLCM() {

  return true;
}

averageLCM();
```

# --solutions--

```js
// solution required
```
