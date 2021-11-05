---
id: 5900f3a51000cf542c50feb8
title: 'Problem 57: Square root convergents'
challengeType: 5
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

แสดง square root ของ two สามารถอธิบาย infinite continued fraction.

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

4 iterations แรก:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

expansions ที่ 3 คือ $\\frac {99}{70}$, $\\frac {239}{169}$, และ $\\frac {577}{408}$, แต่ expansion ที่ 8, $\\frac {1393}{985}$คือตัวอย่างแรกที่มีจำนวนของ digits ใน numerator eมากกว่าจำนวนของ digits ใน denominator

ใน `n` expansions มีเศษส่วนกี่ตัวที่มี numerator ที่มี digits มากกว่า denominator?

# --hints--

`squareRootConvergents(10)` ควร return number.

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` ควร return 1.

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` ควร return 15.

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` ควร return 153.

```js
assert.strictEqual(squareRootConvergents(1000), 153);
```

# --seed--

## --seed-contents--

```js
function squareRootConvergents(n) {

  return true;
}

squareRootConvergents(1000);
```

# --solutions--

```js
function squareRootConvergents(n) {
  function countDigits(number) {
    let counter = 0;
    while (number > 0) {
      counter++;
      number = number / 10n;
    }
    return counter;
  }

  // Use BigInt as integer won't handle all cases
  let numerator = 3n;
  let denominator = 2n;
  let moreDigitsInNumerator = 0;

  for (let i = 2; i <= n; i++) {
    [numerator, denominator] = [
      numerator + 2n * denominator,
      denominator + numerator
    ];

    if (countDigits(numerator) > countDigits(denominator)) {
      moreDigitsInNumerator++;
    }
  }
  return moreDigitsInNumerator;
}
```
