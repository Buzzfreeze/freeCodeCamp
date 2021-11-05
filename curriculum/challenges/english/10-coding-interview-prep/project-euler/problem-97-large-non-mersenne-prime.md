---
id: 5900f3ce1000cf542c50fee0
title: 'Problem 97: Large non-Mersenne prime'
challengeType: 5
forumTopicId: 302214
dashedName: problem-97-large-non-mersenne-prime
---

# --description--

prime แรกที่รู้จักซึ่งพบว่ามีจำนวนเกินหนึ่งล้านหลักถูกค้นพบในปี 2542 และเป็นMersenne prime ในรูปแบบ $2^{6972593} − 1$; มีตัวเลข 2,098,960 หลักพอดี ต่อมาพบMersenne prime อื่นๆ ในรูปแบบ $2^p − 1$ ซึ่งมีตัวเลขมากกว่า

อย่างไรก็ตาม ในปี 2547 พบไพรม์ที่ไม่ใช่ Mersenne prime จำนวนมากซึ่งมีตัวเลข 2,357,207 หลัก: $28433 × 2^{7830457} + 1$

ค้นหาสิบหลักสุดท้ายของจำนวนเฉพาะที่ไม่ใช่ Mersenne prime ในรูปแบบ $multiplier × 2^{power} + 1$

# --hints--

`largeNonMersennePrime(19, 6833086)` ควร return a string.

```js
assert(typeof largeNonMersennePrime(19, 6833086) === 'string');
```

`largeNonMersennePrime(19, 6833086)` ควร return the string `3637590017`.

```js
assert.strictEqual(largeNonMersennePrime(19, 6833086), '3637590017');
```

`largeNonMersennePrime(27, 7046834)` ควร return the string `0130771969`.

```js
assert.strictEqual(largeNonMersennePrime(27, 7046834), '0130771969');
```

`largeNonMersennePrime(6679881, 6679881)` ควร return the string `4455386113`.

```js
assert.strictEqual(largeNonMersennePrime(6679881, 6679881), '4455386113');
```

`largeNonMersennePrime(28433, 7830457)` ควร return the string `8739992577`.

```js
assert.strictEqual(largeNonMersennePrime(28433, 7830457), '8739992577');
```

# --seed--

## --seed-contents--

```js
function largeNonMersennePrime(multiplier, power) {

  return true;
}

largeNonMersennePrime(19, 6833086);
```

# --solutions--

```js
function largeNonMersennePrime(multiplier, power) {
  function modStepsResults(number, other, mod, startValue, step) {
    let result = startValue;
    for (let i = 0; i < other; i++) {
      result = step(number, result) % mod;
    }
    return result;
  }

  const numOfDigits = 10;
  const mod = 10 ** numOfDigits;
  const digitsAfterPower = modStepsResults(2, power, mod, 1, (a, b) => a * b);
  const digitsAfterMultiply = modStepsResults(
    digitsAfterPower,
    multiplier,
    mod,
    0,
    (a, b) => a + b
  );
  const lastDigits = (digitsAfterMultiply + 1) % mod;

  return lastDigits.toString().padStart(10, '0');
}
```
