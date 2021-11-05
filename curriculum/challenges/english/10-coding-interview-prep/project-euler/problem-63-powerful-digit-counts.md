---
id: 5900f3ab1000cf542c50febe
title: 'Problem 63: Powerful digit counts'
challengeType: 5
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

5-digit number, 16807 = 7<sup>5</sup> มีกำลัง 5 เหมือนกับ 9-digit number, 134217728 = 8<sup>9</sup>, มีกำลัง 9

ทำ function ที่ returns positive integers ที่มีความยาว `n` และมี `n`th power

# --hints--

`powerfulDigitCounts(1)` ควร return number.

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` ควร return `9`.

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` ควร return `6`.

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` ควร return `5`.

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` ควร return `4`.

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` ควร return `3`.

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` ควร return `3`.

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` ควร return `2`.

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` ควร return `2`.

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` ควร return `2`.

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` ควร return `1`.

```js
assert.strictEqual(powerfulDigitCounts(21), 1);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitCounts(n) {

  return true;
}

powerfulDigitCounts(1);
```

# --solutions--

```js
function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let numbersCount = 0;

  let curNum = 1;
  while (curNum < 10) {
    let power = n;
    if (power === countDigits(curNum ** power)) {
      numbersCount++;
    }
    curNum++;
  }

  return numbersCount;
}
```
