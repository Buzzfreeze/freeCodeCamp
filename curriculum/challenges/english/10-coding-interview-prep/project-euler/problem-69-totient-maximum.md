---
id: 5900f3b11000cf542c50fec4
title: 'Problem 69: Totient maximum'
challengeType: 5
forumTopicId: 302181
dashedName: problem-69-totient-maximum
---

# --description--

Euler's Totient function หรือ ${\phi}(n)$ (phi function)
ใช้เพื่อกำหนดจำนวนตัวเลขที่น้อยกว่า `n` ซึ่งค่อนข้างสำคัญสำหรับ `n` ตัวอย่างเช่น เนื่องจาก 1, 2, 4, 5, 7 และ 8 มีค่าน้อยกว่าเก้าและหารเก้าไม่ลงตัว ${\phi}(9) = 6$
<div style='margin-left: 4em;'>

| $n$ | $\text{Relatively Prime}$ | $\displaystyle{\phi}(n)$ | $\displaystyle\frac{n}{{\phi}(n)}$ |
| --- | ------------------------- | ------------------------ | ---------------------------------- |
| 2   | 1                         | 1                        | 2                                  |
| 3   | 1,2                       | 2                        | 1.5                                |
| 4   | 1,3                       | 2                        | 2                                  |
| 5   | 1,2,3,4                   | 4                        | 1.25                               |
| 6   | 1,5                       | 2                        | 3                                  |
| 7   | 1,2,3,4,5,6               | 6                        | 1.1666...                          |
| 8   | 1,3,5,7                   | 4                        | 2                                  |
| 9   | 1,2,4,5,7,8               | 6                        | 1.5                                |
| 10  | 1,3,7,9                   | 4                        | 2.5                                |

</div>

จะเห็นได้ว่า `n` = 6 มีค่าสูงสุด $\displaystyle\frac{n}{{\phi}(n)}$ สำหรับ `n` ≤ 10

หาค่า `n` ≤ `limit` สำหรับ $\displaystyle\frac{n}{{\phi(n)}}$ ที่สูงสุด

# --hints--

`totientMaximum(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof totientMaximum(10) === 'number');
```

`totientMaximum(10)` ต้องคืนค่าเป็น `6`

```js
assert.strictEqual(totientMaximum(10), 6);
```

`totientMaximum(10000)` ต้องคืนค่าเป็น `2310`

```js
assert.strictEqual(totientMaximum(10000), 2310);
```

`totientMaximum(500000)` ต้องคืนค่าเป็น `30030`

```js
assert.strictEqual(totientMaximum(500000), 30030);
```

`totientMaximum(1000000)` ต้องคืนค่าเป็น `510510`

```js
assert.strictEqual(totientMaximum(1000000), 510510);
```

# --seed--

## --seed-contents--

```js
function totientMaximum(limit) {

  return true;
}

totientMaximum(10);
```

# --solutions--

```js
function totientMaximum(limit) {
  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;
    const primes = [];
    for (let i = 2; i < max; i = i + 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j = j + i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  const MAX_PRIME = 50;
  const primes = getSievePrimes(MAX_PRIME);
  let result = 1;

  for (let i = 0; result * primes[i] < limit; i++) {
    result *= primes[i];
  }
  return result;
}
```
