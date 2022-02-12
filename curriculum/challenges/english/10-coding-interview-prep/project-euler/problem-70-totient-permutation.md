---
id: 5900f3b21000cf542c50fec5
title: 'Problem 70: Totient permutation'
challengeType: 5
forumTopicId: 302183
dashedName: problem-70-totient-permutation
---

# --description--

Euler's Totient function หรือ ${\phi}(n)$ (phi function) 
ใช้เพื่อกำหนดจำนวนของจำนวนบวกที่น้อยกว่าหรือเท่ากับ `n` ซึ่งค่อนข้างสำคัญสำหรับ `n` ตัวอย่างเช่น เนื่องจาก 1, 2, 4, 5, 7 และ 8 มีค่าน้อยกว่าเก้าและค่อนข้างเฉพาะกับเก้า ${\phi}(9) = 6$ จำนวน 1 ถือเป็นจำนวนเฉพาะของจำนวนบวกทุกตัว ดังนั้น ${\phi}(1) = 1$

${\phi}(87109) = 79180$ จะเห็นว่า 87109 เป็น permutation ของ 79180

หาค่าของ `n`, 1 &lt; `n` &lt; `limit` ของแต่ละ ${\phi}(n)$ ที่เป็น permutation ของ `n` และมี ratio $\displaystyle\frac{n}{{\phi}(n)}$ ที่น้อยที่สุด

# --hints--

`totientPermutation(10000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof totientPermutation(10000) === 'number');
```

`totientPermutation(10000)` ต้องคืนค่าเป็น `4435`

```js
assert.strictEqual(totientPermutation(10000), 4435);
```

`totientPermutation(100000)` ต้องคืนค่าเป็น `75841`

```js
assert.strictEqual(totientPermutation(100000), 75841);
```

`totientPermutation(500000)` ต้องคืนค่าเป็น `474883`

```js
assert.strictEqual(totientPermutation(500000), 474883);
```

`totientPermutation(10000000)` ต้องคืนค่าเป็น `8319823`

```js
assert.strictEqual(totientPermutation(10000000), 8319823);
```

# --seed--

## --seed-contents--

```js
function totientPermutation(limit) {

  return true;
}

totientPermutation(10000);
```

# --solutions--

```js
function totientPermutation(limit) {
  function getSievePrimes(max) {
    const primes = [];
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i += 2) {
      if (primesMap[i]) {
        primes.push(i);
        for (let j = i * i; j < max; j += i) {
          primesMap[j] = false;
        }
      }
      if (i === 2) {
        i = 1;
      }
    }
    return primes;
  }

  function sortDigits(number) {
    return number.toString().split('').sort().join('');
  }

  function isPermutation(numberA, numberB) {
    return sortDigits(numberA) === sortDigits(numberB);
  }

  const MAX_PRIME = 4000;
  const primes = getSievePrimes(MAX_PRIME);

  let nValue = 1;
  let minRatio = Infinity;

  for (let i = 1; i < primes.length; i++) {
    for (let j = i + 1; j < primes.length; j++) {
      const num = primes[i] * primes[j];
      if (num > limit) {
        break;
      }

      const phi = (primes[i] - 1) * (primes[j] - 1);
      const ratio = num / phi;

      if (minRatio > ratio && isPermutation(num, phi)) {
        nValue = num;
        minRatio = ratio;
      }
    }
  }
  return nValue;
}
```
