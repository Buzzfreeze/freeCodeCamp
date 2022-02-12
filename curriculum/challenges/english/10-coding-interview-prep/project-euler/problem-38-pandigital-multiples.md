---
id: 5900f3931000cf542c50fea5
title: 'Problem 38: Pandigital multiples'
challengeType: 5
forumTopicId: 302042
dashedName: problem-38-pandigital-multiples
---

# --description--

เมื่อนำ 192 ไปคุณด้วย 1, 2, และ 3 จะเป็น

$$\begin{align}
  192 × 1 = 192\\\\
  192 × 2 = 384\\\\
  192 × 3 = 576\\\\
\end{align}$$

ผลคูณจะมีเลข 1 ถึง 9 เมื่อนำมาเรียงตือ 192384576 จะเป็น pandigital และเราจะเรียกว่า 192384576 เป็น concatenated product ของ 192 และ (1, 2, 3)

หาเริ่มจาก 9 และคูณโดย 1, 2, 3, 4, และ 5 เป็น pandigital 918273645 ที่เป็น concatenated product ของ 9 และ (1, 2, 3, 4, 5).

ค่ามากที่สุดของ 1 ถึง `k` pandigital `k`-digit number ที่สามารถอยู่ในรูปของ concatenated product ของจำนวน (1, 2, ..., `n`) โดยที่ `n` > 1?

# --hints--

`pandigitalMultiples(8)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof pandigitalMultiples(8) === 'number');
```

`pandigitalMultiples(8)` ต้องคืนค่าเป็น `78156234`

```js
assert.strictEqual(pandigitalMultiples(8), 78156234);
```

`pandigitalMultiples(9)` ต้องคืนค่าเป็น `932718654`

```js
assert.strictEqual(pandigitalMultiples(9), 932718654);
```

# --seed--

## --seed-contents--

```js
function pandigitalMultiples(k) {

  return true;
}

pandigitalMultiples(8);
```

# --solutions--

```js
function pandigitalMultiples(k) {
  function getKDigitConcatenatedProduct(num, k) {
    // returns false if concatenated product is not k digits
    let concatenatedProduct = num.toString();
    for (let i = 2; concatenatedProduct.length < k; i++) {
      concatenatedProduct += num * i;
    }
    return concatenatedProduct.length === k ? concatenatedProduct : false;
  }

  function is1toKPandigital(num, k) {
    const numStr = num.toString();

    // check if length is not k
    if (numStr.length !== k) {
      return false;
    }

    // check if pandigital
    for (let i = k; i > 0; i--) {
      if (numStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }

  let largestNum = 0;
  for (let i = 10 ** Math.floor(k / 2) + 1; i >= 1; i--) {
    const concatenatedProduct = getKDigitConcatenatedProduct(i, k);
    if (is1toKPandigital(concatenatedProduct, k)) {
      const number = parseInt(concatenatedProduct, 10);
      if (number > largestNum) {
        largestNum = number;
      }
    }
  }
  return largestNum;
}
```
