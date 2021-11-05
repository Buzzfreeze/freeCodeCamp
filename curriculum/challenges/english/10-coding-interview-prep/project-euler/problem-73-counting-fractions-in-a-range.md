---
id: 5900f3b61000cf542c50fec8
title: 'Problem 73: Counting fractions in a range'
challengeType: 5
forumTopicId: 302186
dashedName: problem-73-counting-fractions-in-a-range
---

# --description--

จากเศษส่วน $\frac{n}{d}$ ที่ `n` และ `d` เป็น positive integers ถ้า `n` &lt; `d` และ มี common factor มีค่าสูงสุด, ${HCF}(n, d) = 1$ เรียกว่า เศษส่วนที่ตัดทอน

ถ้า list set เศษส่วนที่ตัดทอนสำหรับ `d` ≤ 8 จากน้อยไปมากของขนาด เราได้รับ:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \mathbf{\frac{3}{8}, \frac{2}{5}, \frac{3}{7}}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

เห็นว่ามี `3` fractions ระหว่าง $\frac{1}{3}$ และ $\frac{1}{2}$

มีกี่ fractions ระหว่าง $\frac{1}{3}$ และ $\frac{1}{2}$ 
ในชุดการเรียงลำดับเศษส่วนที่เหมาะสมลดลงสำหรับ `d` ≤ `limit`

# --hints--

`countingFractionsInARange(8)` ควร return number.

```js
assert(typeof countingFractionsInARange(8) === 'number');
```

`countingFractionsInARange(8)` ควร return `3`.

```js
assert.strictEqual(countingFractionsInARange(8), 3);
```

`countingFractionsInARange(1000)` ควร return `50695`.

```js
assert.strictEqual(countingFractionsInARange(1000), 50695);
```

`countingFractionsInARange(6000)` ควร return `1823861`.

```js
assert.strictEqual(countingFractionsInARange(6000), 1823861);
```

`countingFractionsInARange(12000)` ควร return `7295372`.

```js
assert.strictEqual(countingFractionsInARange(12000), 7295372);
```

# --seed--

## --seed-contents--

```js
function countingFractionsInARange(limit) {

  return true;
}

countingFractionsInARange(8);
```

# --solutions--

```js
function countingFractionsInARange(limit) {
  let result = 0;
  const stack = [[3, 2]];
  while (stack.length > 0) {
    const [startDenominator, endDenominator] = stack.pop();
    const curDenominator = startDenominator + endDenominator;
    if (curDenominator <= limit) {
      result++;
      stack.push([startDenominator, curDenominator]);
      stack.push([curDenominator, endDenominator]);
    }
  }
  return result;
}
```
