---
id: 5900f3b31000cf542c50fec6
title: 'Problem 71: Ordered fractions'
challengeType: 5
forumTopicId: 302184
dashedName: problem-71-ordered-fractions
---

# --description--

ลองดูฟังก์ชัน, $\frac{n}{d}$, เมื่อ `n` และ `d` เป็ฯจำนวนเต็มบวก ถ้า `n` &lt; `d` และ ตัวหารร่วมมาก, ${{HCF}(n, d)} = 1$ แล้วจะถือว่าเป็น reduced proper fraction.

ถ้าเราเขียน reduced proper fraction ของ `d` ≤ 8 ทั้งหมด เรียงตามขนาด เราจะได้เป็น:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{\textbf2}{\textbf5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

จะเห็นได้ว่า $\frac{2}{5}$ เป็นเศษส่วนทางซ้ายของ $\frac{3}{7}$

ให้เขียนรายการของ reduced proper fraction `d` ≤ `limit` โดยเรียงลำดับขนาดจากน้อยไปหามาก ให้หาตัวเศษของเศษส่วนทางซ้ายของ $\frac{3}{7}$

# --hints--

`orderedFractions(8)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof orderedFractions(8) === 'number');
```

`orderedFractions(8)` ต้องคืนค่าเป็น `2`

```js
assert.strictEqual(orderedFractions(8), 2);
```

`orderedFractions(10)` ต้องคืนค่าเป็น `2`

```js
assert.strictEqual(orderedFractions(10), 2);
```

`orderedFractions(9994)` ต้องคืนค่าเป็น `4283`

```js
assert.strictEqual(orderedFractions(9994), 4283);
```

`orderedFractions(500000)` ต้องคืนค่าเป็น `214283`

```js
assert.strictEqual(orderedFractions(500000), 214283);
```

`orderedFractions(1000000)` ต้องคืนค่าเป็น `428570`

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
