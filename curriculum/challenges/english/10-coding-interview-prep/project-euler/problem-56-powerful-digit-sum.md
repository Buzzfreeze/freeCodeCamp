---
id: 5900f3a41000cf542c50feb7
title: 'Problem 56: Powerful digit sum'
challengeType: 5
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

googol ($10^{100}$) เป็นเลขที่มีค่ามาก: 1 ตามด้วย one-hundred zeros $100^{100}$ ใหญ่จนแทบจินตนาการไม่ออก 1 ตามด้วย two-hundred zeros แม้จะมีขนาดแต่ผลรวมของหลักในแต่ละตัวเลขมีเพียง 1

พิจารณา natural numbers ของรูปแบบ $a^b$, โดยที่ `a`, `b` &lt; `n`, ค่าสูงสุดของ digital sum เท่ากับเท่าไหร่

# --hints--

`powerfulDigitSum(3)` ควร return number.

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` ควร return `4`.

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` ควร return `45`.

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` ควร return `406`.

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` ควร return `684`.

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` ควร return `972`.

```js
assert.strictEqual(powerfulDigitSum(100), 972);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitSum(n) {

  return true;
}

powerfulDigitSum(3);
```

# --solutions--

```js
function powerfulDigitSum(n) {
  function sumDigitsOfPower(numA, numB) {
    let digitsSum = 0;
    let number = power(numA, numB);
    while (number > 0n) {
      const digit = number % 10n;
      digitsSum += parseInt(digit, 10);
      number = number / 10n;
    }
    return digitsSum;
  }

  function power(numA, numB) {
    let sum = 1n;
    for (let b = 0; b < numB; b++) {
      sum = sum * BigInt(numA);
    }
    return sum;
  }

  const limit = n - 1;
  let maxDigitsSum = 0;
  for (let a = limit; a > 0; a--) {
    for (let b = limit; b > 0; b--) {
      const curDigitSum = sumDigitsOfPower(a, b);
      if (curDigitSum > maxDigitsSum) {
        maxDigitsSum = curDigitSum;
      }
    }
  }
  return maxDigitsSum;
}
```
