---
id: 5900f3ba1000cf542c50fecd
title: 'Problem 78: Coin partitions'
challengeType: 5
forumTopicId: 302191
dashedName: problem-78-coin-partitions
---

# --description--

ให้ ${p}(n)$ แทนจำนวนวิธีต่างๆ ที่เหรียญ `n` สามารถแยกออกเป็นกองได้ ตัวอย่างเช่น สามารถแยกเหรียญห้าเหรียญออกเป็นกองได้เจ็ดวิธี ดังนั้น ${p}(5) = 7$

<div style='text-align: center;'>

| Coin piles        |
| ----------------- |
| OOOOO             |
| OOOO   O          |
| OOO   OO          |
| OOO   O   O       |
| OO   OO   O       |
| OO   O   O   O    |
| O   O   O   O   O |

</div><br>

ค้นหาค่าที่น้อยที่สุดของ `n` ซึ่ง ${p}(n)$ หารด้วย `divisor` ลงตัว

# --hints--

`coinPartitions(7)` ควร return number.

```js
assert(typeof coinPartitions(7) === 'number');
```

`coinPartitions(7)` ควร return `5`.

```js
assert.strictEqual(coinPartitions(7), 5);
```

`coinPartitions(10000)` ควร return `599`.

```js
assert.strictEqual(coinPartitions(10000), 599);
```

`coinPartitions(100000)` ควร return `11224`.

```js
assert.strictEqual(coinPartitions(100000), 11224);
```

`coinPartitions(1000000)` ควร return `55374`.

```js
assert.strictEqual(coinPartitions(1000000), 55374);
```

# --seed--

## --seed-contents--

```js
function coinPartitions(divisor) {

  return true;
}

coinPartitions(7);
```

# --solutions--

```js
function coinPartitions(divisor) {
  const partitions = [1];

  let n = 0;
  while (partitions[n] !== 0) {
    n++;
    partitions.push(0);

    let i = 0;
    let pentagonal = 1;
    while (pentagonal <= n) {
      const sign = i % 4 > 1 ? -1 : 1;
      partitions[n] += sign * partitions[n - pentagonal];
      partitions[n] = partitions[n] % divisor;

      i++;

      let k = Math.floor(i / 2) + 1;
      if (i % 2 !== 0) {
        k *= -1;
      }
      pentagonal = Math.floor((k * (3 * k - 1)) / 2);
    }
  }
  return n;
}
```
