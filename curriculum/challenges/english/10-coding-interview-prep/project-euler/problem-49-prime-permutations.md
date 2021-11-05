---
id: 5900f39d1000cf542c50feb0
title: 'Problem 49: Prime permutations'
challengeType: 5
forumTopicId: 302159
dashedName: problem-49-prime-permutations
---

# --description--

arithmetic sequence 1487, 4817, 8147 ของแต่ละตัวถูกเพิ่มจาก 3330 มีสองวิธีที่เป็น unusual: (i) แต่ละตัวเป็นค่า prime และ (ii) แต่ละ digit สามารถเป็น permutations ของเลขอื่นได้

ไม่มี arithmetic sequences ที่เกิดจาก 1-, 2-, หรือ 3-digit primes มีคุณสมบัตินี้แต่มี 4-digit เพิ่ม sequence

12-digit number ที่มีรูปแบบของ concatenating ทั้งหมด 3 terms ใน sequence นี้คืออะไร

# --hints--

`primePermutations()` ควร return number.

```js
assert(typeof primePermutations() === 'number');
```

`primePermutations()` ควร return 296962999629.

```js
assert.strictEqual(primePermutations(), 296962999629);
```

# --seed--

## --seed-contents--

```js
function primePermutations() {

  return true;
}

primePermutations();
```

# --solutions--

```js
function primePermutations() {
  function arePermutations(num1, num2) {
    const numStr1 = num1.toString();
    let numStr2 = num2.toString();
    if (numStr1.length !== numStr2.length) {
      return false;
    }

    for (let i = 0; i < numStr1.length; i++) {
      const index = numStr2.indexOf(numStr1[i]);
      if (index === -1) {
        return false;
      }
      numStr2 = numStr2.slice(0, index) + numStr2.slice(index + 1);
    }
    return true;
  }

  function isPrime(num) {
    if (num < 2) {
      return false;
    } else if (num === 2) {
      return true;
    }
    const sqrtOfNum = Math.floor(num ** 0.5);
    for (let i = 2; i <= sqrtOfNum + 1; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  for (let num1 = 1000; num1 <= 9999; num1++) {
    const num2 = num1 + 3330;
    const num3 = num2 + 3330;
    if (isPrime(num1) && isPrime(num2) && isPrime(num3)) {
      if (arePermutations(num1, num2) && arePermutations(num1, num3)
        && num1 !== 1487) {
        // concatenate and return numbers
        return (num1 * 100000000) + (num2 * 10000) + num3;
      }
    }
  }
  return 0;
}
```
