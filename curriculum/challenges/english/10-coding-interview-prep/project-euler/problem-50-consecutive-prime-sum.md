---
id: 5900f39e1000cf542c50feb1
title: 'Problem 50: Consecutive prime sum'
challengeType: 5
forumTopicId: 302161
dashedName: problem-50-consecutive-prime-sum
---

# --description--

เลข prime 41 สามารถเขียนผลรวมได้เป็นแบบ consecutive primes

<div style='text-align: center;'>41 = 2 + 3 + 5 + 7 + 11 + 13</div>

ค่าที่ยาวที่สุดเมื่อ sum consecutive primes ที่น้อยกว่า 1000

ค่าที่ยาวที่สุดเมื่อ sum consecutive primes ที่น้อยกว่า 10 มีทั้งหมด 21 จำนวนและเท่ากับ 953.

ค่า prime ที่ต่ำกว่า one-million เขียนเป็นผลรวมของ consecutive primes ได้เท่ากับเท่าไหร่

# --hints--

`consecutivePrimeSum(1000)` ควร return number

```js
assert(typeof consecutivePrimeSum(1000) === 'number');
```

`consecutivePrimeSum(1000)` ควร return 953.

```js
assert.strictEqual(consecutivePrimeSum(1000), 953);
```

`consecutivePrimeSum(1000000)` ควร return 997651.

```js
assert.strictEqual(consecutivePrimeSum(1000000), 997651);
```

# --seed--

## --seed-contents--

```js
function consecutivePrimeSum(limit) {

  return true;
}

consecutivePrimeSum(1000000);
```

# --solutions--

```js
function consecutivePrimeSum(limit) {
  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  function getPrimes(limit) {
    const primes = [];
    for (let i = 0; i <= limit; i++) {
      if (isPrime(i)) primes.push(i);
    }
    return primes;
  }

  const primes = getPrimes(limit);
  let primeSum = [...primes];
  primeSum.reduce((acc, n, i) => {
    primeSum[i] += acc;
    return acc += n;
  }, 0);

  for (let j = primeSum.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      const sum = primeSum[j] - primeSum[i];
      if (sum > limit) break;
      if (isPrime(sum) && primes.indexOf(sum) > -1) return sum;
    }
  }
}
```
