---
id: 5900f39f1000cf542c50feb2
title: 'Problem 51: Prime digit replacements'
challengeType: 5
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

แทนที่ 1st digit ด้วย 2-digit number \*3, จะได้ค่าที่เป็นไปได้มั้งหมดคือ 13, 23, 43, 53, 73, and 83 และทุกค่าเป็นค่า prime.

แทนที่ 3rd และ 4th digits ด้วย 56\*\*3 ที่มี digit เดียวกัน จะมี 5-digit number ที่มี primes 7 ตัว ใน generated numbers 10 ตัวและผลลัพธ์คือ: 56003, 56113, 56333, 56443, 56663, 56773, และ 56993. ดังนั้น 56003 เป็นค่าแรกที่มีค่าน้อยที่สุดในกลุ่มนี้

หาค่า prime ที่น้อยที่สุด โดยแทนค่าของตัวเลข (ไม่จำเป็นต้องเป็น adjacent digits) ที่อยู่ digit เดียวกัน `n` prime 

# --hints--

`primeDigitReplacements(6)` ควร return number

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` ควร return `13`.

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` ควร return `56003`.

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` ควร return `121313`.

```js
assert.strictEqual(primeDigitReplacements(8), 121313);
```

# --seed--

## --seed-contents--

```js
function primeDigitReplacements(n) {

  return true;
}

primeDigitReplacements(6);
```

# --solutions--

```js
function primeDigitReplacements(n) {
  function isNFamily(number, primesMap, n) {
    const prime = number.toString();
    const lastDigit = prime[prime.length - 1];
    return (
      doesReplacingMakeFamily(prime, '0', primesMap, n) ||
      (lastDigit !== '1' &&
        doesReplacingMakeFamily(prime, '1', primesMap, n)) ||
      doesReplacingMakeFamily(prime, '2', primesMap, n)
    );
  }

  function doesReplacingMakeFamily(prime, digitToReplace, primesMap, family) {
    let count = 0;
    const replaceWith = '0123456789';

    for (let i = 0; i < replaceWith.length; i++) {
      const nextNumber = parseInt(
        prime.replace(new RegExp(digitToReplace, 'g'), replaceWith[i]),
        10
      );

      if (isPartOfFamily(nextNumber, prime, primesMap)) {
        count++;
      }
    }
    return count === family;
  }

  function isPartOfFamily(number, prime, primesMap) {
    return (
      isPrime(number, primesMap) && number.toString().length === prime.length
    );
  }

  function getSievePrimes(max) {
    const primesMap = new Array(max).fill(true);
    primesMap[0] = false;
    primesMap[1] = false;

    for (let i = 2; i < max; i++) {
      if (primesMap[i]) {
        let j = i * i;
        for (j; j < max; j += i) {
          primesMap[j] = false;
        }
      }
    }
    return primesMap;
  }

  function isPrime(num, primesMap) {
    return primesMap[num];
  }

  const primesMap = getSievePrimes(1000000);

  for (let number = 1; number < 300000; number++) {
    if (primesMap[number]) {
      if (isNFamily(number, primesMap, n)) {
        return number;
      }
    }
  }
  return -1;
}
```
