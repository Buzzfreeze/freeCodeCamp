---
id: 5900f5471000cf542c510059
title: 'Problem 474: Last digits of divisors'
challengeType: 5
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

สำหรับจำนวนเต็มบวก $n$ และหลัก $d$ เรากำหนด $F(n, d)$ เป็นจำนวนของตัวหารของ $n$ ซึ่งหลักสุดท้ายเท่ากับ $d$

ตัวอย่างเช่น $F(84, 4) = 3$ ในบรรดาตัวหารของ 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84) สามตัว (4, 14, 84) มีตัวเลขสุดท้าย 4

เรายังสามารถตรวจสอบได้ว่า $F(12!, 12) = 11$ และ $F(50!, 123) = 17\\,888$

หา $F({10}^6!, 65\\,432) \text{ modulo } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` ควร return `9690646731515010`.

```js
assert.strictEqual(lastDigitsOfDivisors(), 9690646731515010);
```

# --seed--

## --seed-contents--

```js
function lastDigitsOfDivisors() {

  return true;
}

lastDigitsOfDivisors();
```

# --solutions--

```js
// solution required
```
