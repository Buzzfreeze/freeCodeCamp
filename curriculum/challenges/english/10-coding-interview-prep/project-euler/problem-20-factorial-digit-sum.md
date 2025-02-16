---
id: 5900f3801000cf542c50fe93
title: 'Problem 20: Factorial digit sum'
challengeType: 5
forumTopicId: 301839
dashedName: problem-20-factorial-digit-sum
---

# --description--

`n`! คือ `n` × (`n` − 1) × ... × 3 × 2 × 1

เช่น 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,  
และผลรวมของตัวเลขทุกหลักของ 10! คือ 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

หาผลรวมของตัวเลขทุกหลักของ `n`!

# --hints--

`sumFactorialDigits(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sumFactorialDigits(10) === 'number');
```

`sumFactorialDigits(10)` ต้องคืนค่าเป็น 27

```js
assert.strictEqual(sumFactorialDigits(10), 27);
```

`sumFactorialDigits(25)` ต้องคืนค่าเป็น 72

```js
assert.strictEqual(sumFactorialDigits(25), 72);
```

`sumFactorialDigits(50)` ต้องคืนค่าเป็น 216

```js
assert.strictEqual(sumFactorialDigits(50), 216);
```

`sumFactorialDigits(75)` ต้องคืนค่าเป็น 432

```js
assert.strictEqual(sumFactorialDigits(75), 432);
```

`sumFactorialDigits(100)` ต้องคืนค่าเป็น 648

```js
assert.strictEqual(sumFactorialDigits(100), 648);
```

# --seed--

## --seed-contents--

```js
function sumFactorialDigits(n) {

  return n;
}

sumFactorialDigits(100);
```

# --solutions--

```js
let factorial = (n) => n <= 1 ? BigInt(n) : BigInt(n) * BigInt(factorial(--n));

let sumDigits = n => n.toString().split('').map(x => parseInt(x)).reduce((a,b) => a + b);

function sumFactorialDigits(n) {
  return sumDigits(factorial(n));
}
```
