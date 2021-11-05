---
id: 5900f3731000cf542c50fe86
title: 'Problem 7: 10001st prime'
challengeType: 5
forumTopicId: 302182
dashedName: problem-7-10001st-prime
---

# --description--

จำนวนเฉพาะหกตัวแรกคือ 2, 3, 5, 7, 11, และ 13 
สามารถเห็นว่าลำดับที่หกของจำนวนเฉพาะหกตัวแรกเป็น is 13

ให้หาจำนวนเฉพาะลำดับที่ `n`

# --hints--

`nthPrime(6)` ควร return number

```js
assert(typeof nthPrime(6) === 'number');
```

`nthPrime(6)` ควร return 13

```js
assert.strictEqual(nthPrime(6), 13);
```

`nthPrime(10)` ควร return 29

```js
assert.strictEqual(nthPrime(10), 29);
```

`nthPrime(100)` ควร return 541

```js
assert.strictEqual(nthPrime(100), 541);
```

`nthPrime(1000)` ควร return 7919

```js
assert.strictEqual(nthPrime(1000), 7919);
```

`nthPrime(10001)` ควร return 104743

```js
assert.strictEqual(nthPrime(10001), 104743);
```

# --seed--

## --seed-contents--

```js
function nthPrime(n) {

  return true;
}

nthPrime(10001);
```

# --solutions--

```js
const nthPrime = n => {
  let pN = 2;
  let step = 0;
  while (step < n) {
    let isPrime = true;
    let rootN = Math.sqrt(pN);
    for (let i = 2; i <= rootN; i++) {
      if (!(pN % i)) {
        isPrime = false;
        break;
      }
    }
    isPrime ? step++ : '';
    pN++;
  }
  return pN - 1;
}
```
