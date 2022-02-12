---
id: 5900f3a51000cf542c50feb8
title: 'Problem 57: Square root convergents'
challengeType: 5
forumTopicId: 302168
dashedName: problem-57-square-root-convergents
---

# --description--

เราสามารถแสดงรูทของสองเป็นเศษส่วนต่อเนื่องได้

<div style='text-align: center;'>$\sqrt 2 =1+ \frac 1 {2+ \frac 1 {2 +\frac 1 {2+ \dots}}}$</div>

โดยการวนสี่ครั้งแรกจะเป็น:

$1 + \\frac 1 2 = \\frac 32 = 1.5$

$1 + \\frac 1 {2 + \\frac 1 2} = \\frac 7 5 = 1.4$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 2}} = \\frac {17}{12} = 1.41666 \\dots$

$1 + \\frac 1 {2 + \\frac 1 {2+\\frac 1 {2+\\frac 1 2}}} = \\frac {41}{29} = 1.41379 \\dots$

อีก 3 ครั้งถัดไปจะเป็น $\\frac {99}{70}$, $\\frac {239}{169}$, และ $\\frac {577}{408}$, แต่ในครั้งที่ 8 จะเป็น $\\frac {1393}{985}$ ซึ่งเป็นครั้งแรกที่ตัวเลขในตัวเศษมีหลักมากกว่าตัวเลขในตัวส่วน

ให้หาว่าในครั้งที่ `n` มีกี่ครั้งที่ตัวเลขในตัวเศษมีหลักมากกว่าตัวเลขในตัวส่วน

# --hints--

`squareRootConvergents(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof squareRootConvergents(10) === 'number');
```

`squareRootConvergents(10)` ต้องคืนค่าเป็น 1

```js
assert.strictEqual(squareRootConvergents(10), 1);
```

`squareRootConvergents(100)` ต้องคืนค่าเป็น 15

```js
assert.strictEqual(squareRootConvergents(100), 15);
```

`squareRootConvergents(1000)` ต้องคืนค่าเป็น 153

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
