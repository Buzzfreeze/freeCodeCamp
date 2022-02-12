---
id: 5900f38c1000cf542c50fe9f
title: 'Problem 32: Pandigital products'
challengeType: 5
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

ตัวเลขที่มี `n` หลัก เป็น pandigital ถ้าใช้เลขทุกตัวตั้งแต่ 1 ถึง `n`

เช่น 15234 เป็นตัวเลข 5 หลักและใช้เลขทุกตัวตั้งแต่ 1 ถึง 5 เพราะฉะนั้น เลขนี้จะเป็น pandigital

คราวนี้ลองดูที่ 7254 ซึ่ง 39 × 186 = 7254 ซึ่งสมการนี้ใช้ตัวเลขครบ ตั้งแต่ 1 ถึง 9 เลย ก็จะถือว่าเป็นสมการแบบ pandigital

ให้หาผลรวมของทั้งตัวคูณและผลคูณที่มีตัวเลขประกอบตั้งแต่ 1 ถึง `n` pandigital

**Hint:** บางผลลัพธ์มีมากกว่าหนึ่งวิธี ต้องลองดูทุกวิธี

# --hints--

`pandigitalProducts(4)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` ต้องคืนค่าเป็น `12`

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` ต้องคืนค่าเป็น `162`

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` ต้องคืนค่าเป็น `0`

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` ต้องคืนค่าเป็น `13458`

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` ต้องคืนค่าเป็น `45228`.

```js
assert.strictEqual(pandigitalProducts(9), 45228);
```

# --seed--

## --seed-contents--

```js
function pandigitalProducts(n) {

  return true;
}

pandigitalProducts(4);
```

# --solutions--

```js
function pandigitalProducts(n) {
  function is1toNPandigital(n, digitStr) {
    // check if length is n
    if (digitStr.length !== n) {
      return false;
    }
    // check if pandigital
    for (let i = digitStr.length; i > 0; i--) {
      if (digitStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }
  function concatenateNums(...numbers) {
    let digitStr = '';
    for (let i = 0; i < numbers.length; i++) {
      digitStr += numbers[i].toString();
    }
    return digitStr;
  }

  const pandigitalNums = [];
  const limit = 10 ** Math.floor(n / 2) - 1;
  let sum = 0;
  for (let mult1 = 2; mult1 < limit; mult1++) {
    for (let mult2 = 2; mult2 < limit; mult2++) {
      const product = mult1 * mult2;
      const concatenated = concatenateNums(mult1, mult2, product);
      if (concatenated.length > n) {
        break;
      } else if (concatenated.length < n) {
        continue;
      }
      if (
        is1toNPandigital(n, concatenated) &&
        !pandigitalNums.includes(product)
      ) {
        pandigitalNums.push(product);
        sum += product;
      }
    }
  }
  return sum;
}
```
