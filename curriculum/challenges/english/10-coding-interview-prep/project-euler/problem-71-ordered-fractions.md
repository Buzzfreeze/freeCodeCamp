---
id: 5900f3b31000cf542c50fec6
title: 'Problem 71: Ordered fractions'
challengeType: 5
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

Consider the fraction, $\frac{n}{d}$, where `n` and `d` are positive integers. If `n` &lt; `d` and highest common factor, ${{HCF}(n, d)} = 1$, it is called a reduced proper fraction.

If we list the set of reduced proper fractions for `d` ≤ 8 in ascending order of size, we get:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{\textbf2}{\textbf5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

จะเห็นได้ว่า $\frac{2}{5}$ เป็นเศษส่วนทางซ้ายของ $\frac{3}{7}$

โดยแสดงsetเศษส่วนที่เหมาะสมที่ลดแล้วสำหรับ `d` ≤ `limit` เรียงลำดับขนาดจากน้อยไปหามาก ให้หาตัวเศษของเศษส่วนทางซ้ายของ $\frac{3}{7}$.

# --hints--

`orderedFractions(8)` ควร return number.

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` ควร return `2`.

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` ควร return `2`.

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` ควร return `4283`.

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` ควร return `214283`.

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` ควร return `428570`.

```js
assert.strictEqual(orderedFractions(1000000), 428570);
```

# --seed--

## --seed-contents--

```js
function orderedFractions(limit) {

  return true;
}

orderedFractions(8);
```

# --solutions--

```js
function orderedFractions(limit) {
  const fractions = [];
  const fractionValues = {};
  const highBoundary = 3 / 7;
  let lowBoundary = 2 / 7;

  for (let denominator = limit; denominator > 2; denominator--) {
    let numerator = Math.floor((3 * denominator - 1) / 7);
    let value = numerator / denominator;
    if (value > highBoundary || value < lowBoundary) {
      continue;
    }
    fractionValues[value] = [numerator, denominator];
    fractions.push(value);
    lowBoundary = value;
  }

  fractions.sort();
  return fractionValues[fractions[fractions.length - 1]][0];
}
```
