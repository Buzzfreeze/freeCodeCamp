---
id: 5900f3a61000cf542c50feb9
title: 'Problem 58: Spiral primes'
challengeType: 5
forumTopicId: 302169
dashedName: problem-58-spiral-primes
---

# --description--

เริ่มจาก 1 และหมุนทวนเข็มนาฬิกาเป็นก้อนหอย จะได้รูปด้านล่างี่มีด้านละ 7 เลข

<div style='text-align: center;'>
  <strong><span style='color: red;'>37</span></strong> 36 35 34 33 32 <strong><span style='color: red;'>31</span></strong><br>
  38 <strong><span style='color: red;'>17</span></strong> 16 15 14 <strong><span style='color: red;'>13</span></strong> 30<br>
  39 18  <strong><span style='color: red;'>5</span></strong>  4  <strong><span style='color: red;'>3</span></strong> 12 29<br>
  40 19  6  1  2 11 28<br>
  41 20  <strong><span style='color: red;'>7</span></strong>  8  9 10 27<br>
  42 21 22 23 24 25 26<br>
  <strong><span style='color: red;'>43</span></strong> 44 45 46 47 48 49<br>
</div>

odd squares ตาม bottom right diagonal แต่มี 8 จาก 13 numbers ตาม diagonals เป็นค่า prime ที่มี ratio 8/13 ≈ 62%

หากมีเลเยอร์ใหม่ที่สมบูรณ์หนึ่งชั้นล้อมรอบ spiral ข้างบน  square spiral จะมี side length เป็น 9  หากกระบวนการนี้ดำเนินต่อไป side length ของ square spiral ที่เป็น percent ของ primes ตาม diagonals ตัวแรกที่ตำกว่า `percent` มีค่าเป็นเท่าไหร่

# --hints--

`spiralPrimes(50)` ต้องเป็นตัวเลข

```js
assert(typeof spiralPrimes(50) === 'number');
```

`spiralPrimes(50)` ต้องเป็น `11`

```js
assert.strictEqual(spiralPrimes(50), 11);
```

`spiralPrimes(15)` ต้องเป็น `981`

```js
assert.strictEqual(spiralPrimes(15), 981);
```

`spiralPrimes(10)` ต้องเป็น `26241`

```js
assert.strictEqual(spiralPrimes(10), 26241);
```

# --seed--

## --seed-contents--

```js
function spiralPrimes(percent) {

  return true;
}

spiralPrimes(50);
```

# --solutions--

```js
function spiralPrimes(percent) {
  function isPrime(n) {
    if (n <= 3) {
      return n > 1;
    } else if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
    }
    return true;
  }

  let totalCount = 1;
  let primesCount = 0;
  let curNumber = 1;
  let curSideLength = 1;
  let ratio = 1;
  const wantedRatio = percent / 100;

  while (ratio >= wantedRatio) {
    curSideLength += 2;
    for (let i = 0; i < 4; i++) {
      curNumber += curSideLength - 1;
      totalCount++;
      if (i !== 3 && isPrime(curNumber)) {
        primesCount++;
      }
    }
    ratio = primesCount / totalCount;
  }
  return curSideLength;
}
```
