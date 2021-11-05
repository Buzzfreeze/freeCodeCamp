---
id: 5900f3781000cf542c50fe8b
title: 'Problem 12: Highly divisible triangular number'
challengeType: 5
forumTopicId: 301746
dashedName: problem-12-highly-divisible-triangular-number
---

# --description--

ลำดับของ triangle numbers ได้จากผลบวกของจำนวน ดังนั้นค่า triangle number เจ็ดลำดับเป็น 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. 
ค่าสิบลำดับแรกจะเป็น

<div style='text-align: center;'>1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...</div>

list ของ factor ของ triangle numbers ของเจ็ดลำดับแรกเป็น:

<div style='padding-left: 4em;'><b>1:</b> 1</div>
<div style='padding-left: 4em;'><b>3:</b> 1, 3</div>
<div style='padding-left: 4em;'><b>6:</b> 1, 2, 3, 6</div>
<div style='padding-left: 4em;'><b>10:</b> 1, 2, 5, 10</div>
<div style='padding-left: 4em;'><b>15:</b> 1, 3, 5, 15</div>
<div style='padding-left: 4em;'><b>21:</b> 1, 3, 7, 21</div>
<div style='padding-left: 4em;'><b>28:</b> 1, 2, 4, 7, 14, 28</div>

เราจะเห็นว่า 28 เป็น triangle number ตัวแรกที่มีตัวหารมากกว่าห้าตัว
ค่าของ triangle number ตัวแรกที่มีตัวหารมากกว่า `n` ตัวคืออะไร

# --hints--

`divisibleTriangleNumber(5)` ควร return number

```js
assert(typeof divisibleTriangleNumber(5) === 'number');
```

`divisibleTriangleNumber(5)` ควร return 28

```js
assert.strictEqual(divisibleTriangleNumber(5), 28);
```

`divisibleTriangleNumber(23)` ควร return 630

```js
assert.strictEqual(divisibleTriangleNumber(23), 630);
```

`divisibleTriangleNumber(167)` ควร return 1385280

```js
assert.strictEqual(divisibleTriangleNumber(167), 1385280);
```

`divisibleTriangleNumber(374)` ควร return 17907120

```js
assert.strictEqual(divisibleTriangleNumber(374), 17907120);
```

`divisibleTriangleNumber(500)` ควร return 76576500

```js
assert.strictEqual(divisibleTriangleNumber(500), 76576500);
```

# --seed--

## --seed-contents--

```js
function divisibleTriangleNumber(n) {

  return true;
}

divisibleTriangleNumber(500);
```

# --solutions--

```js
function divisibleTriangleNumber(n) {
  if (n === 1) return 3;
  let counter = 1;
  let triangleNumber = counter++;


 while (noOfFactors(triangleNumber) < n) {
   triangleNumber += counter++;
 }
return triangleNumber;
}

function noOfFactors(num) {
  const primeFactors = getPrimeFactors(num);
  let prod = 1;
  for(let p in primeFactors) {
    prod *= (primeFactors[p] + 1)
  }
  return prod;
}

function getPrimeFactors(num) {
  let n = num;
  let primes = {};

  let p = 2;
  let sqrt = Math.sqrt(num);

  function checkAndUpdate(inc) {
    if (n % p === 0) {
      const curr = primes[p];
      if (curr) {
        primes[p]++
      } else {
        primes[p] = 1;
      }
      n /= p;
    } else {
      p += inc;
    }
  }

  while(p === 2 && p <= n) {
    checkAndUpdate(1);
  }

  while (p <= n && p <= sqrt) {
    checkAndUpdate(2);
  }
  if(Object.keys(primes).length === 0) {
    primes[num] = 1;
  } else if(n !== 1) {
    primes[n] = 1;
  }
  return primes;
}
```
