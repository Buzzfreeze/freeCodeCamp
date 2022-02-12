---
id: 5900f3811000cf542c50fe94
title: 'Problem 21: Amicable numbers'
challengeType: 5
forumTopicId: 301851
dashedName: problem-21-amicable-numbers
---

# --description--

ให้ d(`n`) เป็นผลรวมของค่าที่เป็นตัวหารของ `n` 

ถ้า d(`a`) = `b` และ d(`b`) = `a` โดยที่ `a` ≠ `b`,  
จะทำให้ `a` และ `b` เป็นคู่ amicable-pair และแต่ละ `a` และ `b` จะเรียกเป็นจำนวน amicable-number

เช่น จำนวนที่สามารถหารด้วย 220 คือ 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 และ 110 ดังนั้น d(220) คือ 284 จำนวนที่เหมาะสมสำหรับการหาร 284 คือ 1, 2, 4, 71 และ 142 ดังนั้น 
d(284) = 220

หาผลรวมของจำนวนของ amicable-numbers ของ `n`

# --hints--

`sumAmicableNum(1000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sumAmicableNum(1000) === 'number');
```

`sumAmicableNum(1000)` ต้องคืนค่าเป็น 504

```js
assert.strictEqual(sumAmicableNum(1000), 504);
```

`sumAmicableNum(2000)` ต้องคืนค่าเป็น 2898

```js
assert.strictEqual(sumAmicableNum(2000), 2898);
```

`sumAmicableNum(5000)` ต้องคืนค่าเป็น 8442

```js
assert.strictEqual(sumAmicableNum(5000), 8442);
```

`sumAmicableNum(10000)` ต้องคืนค่าเป็น 31626

```js
assert.strictEqual(sumAmicableNum(10000), 31626);
```

# --seed--

## --seed-contents--

```js
function sumAmicableNum(n) {

  return n;
}

sumAmicableNum(10000);
```

# --solutions--

```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```
