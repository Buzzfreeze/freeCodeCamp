---
id: 5900f3971000cf542c50feaa
title: 'Problem 43: Sub-string divisibility'
challengeType: 5
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

เลข 1406357289 เป็น pandigital เพราะมีตัวเลขตั้งแต่ 0 ถึง 9 

แต่มีเรื่องน่าสนใจอีกอย่างคือ:

ให้ $d_1$ เป็นเลขหลักที่ $1$ และ $d_2$ เป็นเลขหลักที่ $2$ ฯลฯ

- ${d_2}{d_3}{d_4} = 406$ จะหาร 2 ลงตัว
- ${d_3}{d_4}{d_5} = 063$ จะหาร 3 ลงตัว
- ${d_4}{d_5}{d_6} = 635$ จะหาร 5 ลงตัว
- ${d_5}{d_6}{d_7} = 357$ จะหาร 7 ลงตัว
- ${d_6}{d_7}{d_8} = 572$ จะหาร 11 ลงตัว
- ${d_7}{d_8}{d_9} = 728$ จะหาร 13 ลงตัว
- ${d_8}{d_9}{d_{10}} = 289$ จะหาร 17 ลงตัว

ให้หาผลรวมของเลขที่เป็น pandigital ตั้งแต่ 0 ถึง `n` โดยที่มีคุณสมบัติเหมือนด้านบน  

**Note:** Pandigital ที่จะดูให้เริ่มจาก `0` เลย

# --hints--

`substringDivisibility(5)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` ต้องคืนค่าเป็น `12444480`

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` ต้องคืนค่าเป็น `1099210170`

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` ต้องคืนค่าเป็น `1113342912`

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` ต้องคืนค่าเป็น `16695334890`

```js
assert.strictEqual(substringDivisibility(9), 16695334890)
```

# --seed--

## --seed-contents--

```js
function substringDivisibility(n) {

  return true;
}

substringDivisibility(5);
```

# --solutions--

```js
function substringDivisibility(n) {
  function isSubDivisable(digits) {
    const factors = [2, 3, 5, 7, 11, 13, 17];

    for (let i = 1; i < digits.length - 2; i++) {
      const subNumber = digits[i] * 100 + digits[i + 1] * 10 + digits[i + 2];
      if (subNumber % factors[i - 1] !== 0) {
        return false;
      }
    }
    return true;
  }

  function heapsPermutations(k, digits, conditionCheck, results) {
    if (k === 1) {
      if (conditionCheck(digits)) {
        const number = parseInt(digits.join(''), 10);
        results.push(number);
      }
      return;
    }

    heapsPermutations(k - 1, digits, conditionCheck, results);

    for (let i = 0; i < k - 1; i++) {
      if (k % 2 === 0) {
        [digits[i], digits[k - 1]] = [digits[k - 1], digits[i]];
      } else {
        [digits[0], digits[k - 1]] = [digits[k - 1], digits[0]];
      }
      heapsPermutations(k - 1, digits, conditionCheck, results);
    }
    return;
  }

  const allowedDigits = [...new Array(n + 1).keys()];
  const divisablePandigitals = [];
  heapsPermutations(
    allowedDigits.length,
    allowedDigits,
    isSubDivisable,
    divisablePandigitals
  );

  let sum = 0;
  for (let i = 0; i < divisablePandigitals.length; i++) {
    sum += divisablePandigitals[i];
  }

  return sum;
}
```
