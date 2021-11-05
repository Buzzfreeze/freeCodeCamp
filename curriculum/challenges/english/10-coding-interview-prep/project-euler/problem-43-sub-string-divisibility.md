---
id: 5900f3971000cf542c50feaa
title: 'Problem 43: Sub-string divisibility'
challengeType: 5
forumTopicId: 302100
dashedName: problem-43-sub-string-divisibility
---

# --description--

เลข 1406357289 มี 0 ถึง 9 pandigital number เพราะว่าประกอบด้วย digits จาก 0 ถึง 9 แต่มันประกอบด้วยคุณสมบัติการแบ่ง string ย่อยที่น่าสนใจ

ให้ $d_1$ เป็น $1^{st}$ digit, $d_2$ เป็น $2^{nd}$ digit ตามลำดับ 

- ${d_2}{d_3}{d_4} = 406$ is divisible by 2
- ${d_3}{d_4}{d_5} = 063$ is divisible by 3
- ${d_4}{d_5}{d_6} = 635$ is divisible by 5
- ${d_5}{d_6}{d_7} = 357$ is divisible by 7
- ${d_6}{d_7}{d_8} = 572$ is divisible by 11
- ${d_7}{d_8}{d_9} = 728$ is divisible by 13
- ${d_8}{d_9}{d_{10}} = 289$ is divisible by 17

จากผลรวมตั้งแต่ 0 ถึง `n` pandigital numbers กับ sub-strings เติมจาก`n - 2` ของการแบ่งproperties

**Note:** Pandigital numbers เริ่มจาก `0` ถูกพิจารณาเป็น result

# --hints--

`substringDivisibility(5)` ควร return number.

```js
assert(typeof substringDivisibility(5) === 'number');
```

`substringDivisibility(5)` ควร return `12444480`.

```js
assert.strictEqual(substringDivisibility(5), 12444480)
```

`substringDivisibility(7)` ควร return `1099210170`.

```js
assert.strictEqual(substringDivisibility(7), 1099210170)
```

`substringDivisibility(8)` ควร return `1113342912`.

```js
assert.strictEqual(substringDivisibility(8), 1113342912)
```

`substringDivisibility(9)` ควร return `16695334890`.

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
