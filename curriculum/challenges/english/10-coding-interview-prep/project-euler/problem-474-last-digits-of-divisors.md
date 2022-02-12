---
id: 5900f5471000cf542c510059
title: 'Problem 474: Last digits of divisors'
challengeType: 5
forumTopicId: 302151
dashedName: problem-474-last-digits-of-divisors
---

# --description--

ให้ $n$ เป็นจำนวนเต็มบวก และ $d$ เป็นหลัก  เรากำหนด $F(n, d)$ เป็นจำนวนของตัวหารของ $n$ ซึ่งหลักสุดท้ายเป็น $d$

เช่น $F(84, 4) = 3$ ในบรรดาตัวหารของ 84 (1, 2, 3, 4, 6, 7, 12, 14, 21, 28, 42, 84) โดยมีสามตัวในนี้ คือ (4, 14, 84) มี 4 เป็นเลขหลักสุดท้าย

ซึ่ง $F(12!, 12) = 11$ และ $F(50!, 123) = 17\\,888$

ให้หาหา $F({10}^6!, 65\\,432) \text{ modulo } ({10}^{16} + 61)$.

# --hints--

`lastDigitsOfDivisors()` ต้องคืนค่าเป็น `9690646731515010`

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
