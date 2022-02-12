---
id: 5900f3c51000cf542c50fed6
title: 'Problem 88: Product-sum numbers'
challengeType: 5
forumTopicId: 302203
dashedName: problem-88-product-sum-numbers
---

# --description--

จำนวนธรรมชาติ `N` ที่สามารถเขียนเป็นผลรวม และผลคูณของเซ็ทที่กำหนดของจำนวนธรรมชาติอย่างน้อยสองตัว $\\{a_1, a_2, \ldots , a_k\\}$ เรียกว่าผลรวมผลคูณ จำนวน: $N = a_1 + a_2 + \cdots + a_k = a_1 × a_2 × \cdots × a_k$

เช่น 6 = 1 + 2 + 3 = 1 × 2 × 3.


สำหรับเซ็ทขนาดที่กำหนด `k` เราจะเรียก N ที่เล็กที่สุดด้วยคุณสมบัตินี้ว่าหมายเลขผลรวมขั้นต่ำ จำนวนรวมขั้นต่ำสำหรับเซ็ทขนาด `k` = 2, 3, 4, 5 และ 6 มีดังนี้

<div style='margin-left: 4em;'>
  <var>k</var>=2: 4 = 2 × 2 = 2 + 2<br>
  <var>k</var>=3: 6 = 1 × 2 × 3 = 1 + 2 + 3<br>
  <var>k</var>=4: 8 = 1 × 1 × 2 × 4 = 1 + 1 + 2 + 4<br>
  <var>k</var>=5: 8 = 1 × 1 × 2 × 2 × 2  = 1 + 1 + 2 + 2 + 2<br>
  <var>k</var>=6: 12 = 1 × 1 × 1 × 1 × 2 × 6 = 1 + 1 + 1 + 1 + 2 + 6
</div><br>

สำหรับ 2 ≤ `k` ≤ 6 ผลรวมของจำนวนรวมขั้นต่ำคือ 4 + 6 + 8 + 12 = 30 จะเห็นว่า `8` จะถูกนับเพียงครั้งเดียวในผลรวม


อันที่จริง เนื่องจากเซ็ทที่สมบูรณ์ของจำนวนผลรวมขั้นต่ำสำหรับ 2 ≤ `k` ≤ 12 คือ $\\{4, 6, 8, 12, 15, 16\\}$ ผลรวมคือ `61`

ผลรวมของตัวเลขผลรวมขั้นต่ำทั้งหมดสำหรับ 2 ≤ `k` ≤ `limit` เป็นเท่าใด

# --hints--

`productSumNumbers(6)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof productSumNumbers(6) === 'number');
```

`productSumNumbers(6)` ต้องคืนค่าเป็น `30`

```js
assert.strictEqual(productSumNumbers(6), 30);
```

`productSumNumbers(12)` ต้องคืนค่าเป็น `61`

```js
assert.strictEqual(productSumNumbers(12), 61);
```

`productSumNumbers(300)` ต้องคืนค่าเป็น `12686`

```js
assert.strictEqual(productSumNumbers(300), 12686);
```

`productSumNumbers(6000)` ต้องคืนค่าเป็น `2125990`

```js
assert.strictEqual(productSumNumbers(6000), 2125990);
```

`productSumNumbers(12000)` ต้องคืนค่าเป็น `7587457`

```js
assert.strictEqual(productSumNumbers(12000), 7587457);
```

# --seed--

## --seed-contents--

```js
function productSumNumbers(limit) {

  return true;
}

productSumNumbers(6);
```

# --solutions--

```js
function productSumNumbers(limit) {
  function getProductSums(curProduct, curSum, factorsCount, start) {
    const k = curProduct - curSum + factorsCount;
    if (k <= limit) {
      if (curProduct < minimalProductSums[k]) {
        minimalProductSums[k] = curProduct;
      }
      for (let i = start; i < Math.floor((limit / curProduct) * 2) + 1; i++) {
        getProductSums(curProduct * i, curSum + i, factorsCount + 1, i);
      }
    }
  }

  const minimalProductSums = new Array(limit + 1).fill(2 * limit);
  getProductSums(1, 1, 1, 2);

  const uniqueProductSums = [...new Set(minimalProductSums.slice(2))];

  let sum = 0;
  for (let i = 0; i < uniqueProductSums.length; i++) {
    sum += uniqueProductSums[i];
  }

  return sum;
}
```
