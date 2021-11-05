---
id: 5900f38c1000cf542c50fe9f
title: 'Problem 32: Pandigital products'
challengeType: 5
forumTopicId: 301976
dashedName: problem-32-pandigital-products
---

# --description--

จำนวน `n`-digit number เป็น pandigital ถ้าใช้ทุก digits จาก 1 ถึง `n` digit ละครั้ง
เช่น 5-digit number, 15234, มี 1 ถึง 5 เป็น pandigital

ตัวคูณของ 7254 มาจาก 39 × 186 = 7254 ที่มีทั้งตัวคูณและผลคูณมาจาก 1 ถึง 9 เป็นแบบ pandigital

หาผลรวมของทั้งตัวคูณและผลคูณที่มีตัวเลขประกอบตั้งแต่ 1 ถึง `n` pandigital

**Hint:** บางผลลัพธ์มีมากกว่าหนึ่งวิธี ทำให้แน่ใจเมื่อนำผลลัพธ์มารวมกัน

# --hints--

`pandigitalProducts(4)` ควร return number.

```js
assert(typeof pandigitalProducts(4) === 'number');
```

`pandigitalProducts(4)` ควร return `12`.

```js
assert.strictEqual(pandigitalProducts(4), 12);
```

`pandigitalProducts(6)` ควร return `162`.

```js
assert.strictEqual(pandigitalProducts(6), 162);
```

`pandigitalProducts(7)` ควร return `0`.

```js
assert.strictEqual(pandigitalProducts(7), 0);
```

`pandigitalProducts(8)` ควร return `13458`.

```js
assert.strictEqual(pandigitalProducts(8), 13458);
```

`pandigitalProducts(9)` ควร return `45228`.

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
