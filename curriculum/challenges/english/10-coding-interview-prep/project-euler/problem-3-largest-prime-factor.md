---
id: 5900f36f1000cf542c50fe82
title: 'Problem 3: Largest prime factor'
challengeType: 5
forumTopicId: 301952
dashedName: problem-3-largest-prime-factor
---

# --description--

ตัวประกอบจำนวนเฉพาะ (Prime Number) ของ 13195 คือ 5, 7, 13 และ 29

ให้หาตัวประกอบจำนวนเฉพาะ ที่มากที่สุดของ `number`

# --hints--

`largestPrimeFactor(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof largestPrimeFactor(2) === 'number');
```

`largestPrimeFactor(2)` ต้องคืนค่าเป็น 2

```js
assert.strictEqual(largestPrimeFactor(2), 2);
```

`largestPrimeFactor(3)` ต้องคืนค่าเป็น 3

```js
assert.strictEqual(largestPrimeFactor(3), 3);
```

`largestPrimeFactor(5)` ต้องคืนค่าเป็น 5

```js
assert.strictEqual(largestPrimeFactor(5), 5);
```

`largestPrimeFactor(7)` ต้องคืนค่าเป็น 7

```js
assert.strictEqual(largestPrimeFactor(7), 7);
```

`largestPrimeFactor(8)` ต้องคืนค่าเป็น 2

```js
assert.strictEqual(largestPrimeFactor(8), 2);
```

`largestPrimeFactor(13195)` ต้องคืนค่าเป็น 29

```js
assert.strictEqual(largestPrimeFactor(13195), 29);
```

`largestPrimeFactor(600851475143)` ต้องคืนค่าเป็น 6857

```js
assert.strictEqual(largestPrimeFactor(600851475143), 6857);
```

# --seed--

## --seed-contents--

```js
function largestPrimeFactor(number) {

  return true;
}

largestPrimeFactor(13195);
```

# --solutions--

```js
const largestPrimeFactor = (number) => {
  let largestFactor = number;

  for (let i = 2; i <= Math.sqrt(largestFactor); i++) {
    if (!(largestFactor % i)) {
      let factor = largestFactor / i;
      let candidate = largestPrimeFactor(factor);

      return i > candidate ? i : candidate;
    }
  }

  return largestFactor;
}
```
