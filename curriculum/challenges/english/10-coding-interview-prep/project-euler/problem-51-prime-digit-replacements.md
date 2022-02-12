---
id: 5900f39f1000cf542c50feb2
title: 'Problem 51: Prime digit replacements'
challengeType: 5
forumTopicId: 302162
dashedName: problem-51-prime-digit-replacements
---

# --description--

การเปลี่ยนเลขหลักที่ 1 ของเลขสองหลักที่ลงท้ายด้วย 3 จะมีทั้งหมดเก้าค่า ซึ่งหกในเก้าค่านั้นเป็นจำนวนเฉพาะ คือ 13, 23, 43, 53, 73, และ 83

การแทนที่เลขหลักที่ 3 และหลักที่ 4 ให้เป็นเลขเดียวกัน ในรูป 56\*\*3 จะทำให้เกิดเลขห้าหลัก ที่เป็นจำนวนเฉพาะ 7 ตัว ใน จากทั้งหมด 10 ตัว คือ 56003, 56113, 56333, 56443, 56663, 56773, และ 56993  
ดังนั้น 56003 เป็นค่าแรกที่มีค่าน้อยที่สุดในกลุ่มนี้

ให้หาจำนวนเฉพาะที่น้อยที่สุด ที่เป็นส่วนหนึ่งของกลุ่มจำนวนเฉพาะที่จะยังเปลี่ยนจำนวนเฉพาะ อยู่เมื่อเปลี่ยนค่าตัวเลข โดยกลุ่มนั้นต้องมีจำนวน `n` ตัว

# --hints--

`primeDigitReplacements(6)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof primeDigitReplacements(6) === 'number');
```

`primeDigitReplacements(6)` ต้องคืนค่าเป็น `13`

```js
assert.strictEqual(primeDigitReplacements(6), 13);
```

`primeDigitReplacements(7)` ต้องคืนค่าเป็น `56003`

```js
assert.strictEqual(primeDigitReplacements(7), 56003);
```

`primeDigitReplacements(8)` ต้องคืนค่าเป็น `121313`

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
