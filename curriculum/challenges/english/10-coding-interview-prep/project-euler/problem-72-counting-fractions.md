---
id: 5900f3b41000cf542c50fec7
title: 'Problem 72: Counting fractions'
challengeType: 5
forumTopicId: 302185
dashedName: problem-72-counting-fractions
---

# --description--

จากเศษส่วน $\frac{n}{d}$ ที่ `n` และ `d` เป็น positive integers ถ้า `n` &lt; `d` และ มี common factor มีค่าสูงสุด, ${HCF}(n, d) = 1$ เรียกว่า เศษส่วนที่ตัดทอน
ถ้า list set เศษส่วนที่ตัดทอนสำหรับ `d` ≤ 8 จากน้อยไปมากของขนาด เราได้รับ:

$$\frac{1}{8}, \frac{1}{7}, \frac{1}{6}, \frac{1}{5}, \frac{1}{4}, \frac{2}{7}, \frac{1}{3}, \frac{3}{8}, \frac{2}{5}, \frac{3}{7}, \frac{1}{2}, \frac{4}{7}, \frac{3}{5}, \frac{5}{8}, \frac{2}{3}, \frac{5}{7}, \frac{3}{4}, \frac{4}{5}, \frac{5}{6}, \frac{6}{7}, \frac{7}{8}$$

จะเห็นว่ามี `21` elements ใน set

มีกี่ elements ที่มี set ของเศษส่วนที่ตัดทอนเมื่อ `d` ≤ `limit`

# --hints--

`countingFractions(8)` ควร return number.

```js
assert(typeof countingFractions(8) === 'number');
```

`countingFractions(8)` ควร return `21`.

```js
assert.strictEqual(countingFractions(8), 21);
```

`countingFractions(20000)` ควร return `121590395`.

```js
assert.strictEqual(countingFractions(20000), 121590395);
```

`countingFractions(500000)` ควร return `75991039675`.

```js
assert.strictEqual(countingFractions(500000), 75991039675);
```

`countingFractions(1000000)` ควร return `303963552391`.

```js
assert.strictEqual(countingFractions(1000000), 303963552391);
```

# --seed--

## --seed-contents--

```js
function countingFractions(limit) {

  return true;
}

countingFractions(8);
```

# --solutions--

```js
function countingFractions(limit) {
  const phi = {};
  let count = 0;

  for (let i = 2; i <= limit; i++) {
    if (!phi[i]) {
      phi[i] = i;
    }
    if (phi[i] === i) {
      for (let j = i; j <= limit; j += i) {
        if (!phi[j]) {
          phi[j] = j;
        }
        phi[j] = (phi[j] / i) * (i - 1);
      }
    }
    count += phi[i];
  }

  return count;
}
```
