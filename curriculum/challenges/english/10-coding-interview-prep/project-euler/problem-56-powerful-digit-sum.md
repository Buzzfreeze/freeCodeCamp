---
id: 5900f3a41000cf542c50feb7
title: 'Problem 56: Powerful digit sum'
challengeType: 5
forumTopicId: 302167
dashedName: problem-56-powerful-digit-sum
---

# --description--

googol ($10^{100}$) เป็นเลขที่มีค่าสูงมากๆ คือเป็นเลข 1 ตามด้วย 0 อีก 100 ตัว และ $100^{100}$ เป็นเลข 1 ตามด้วย 0 อีก 200 ตัว ถึงจะดูเยอะ แต่พอบวกค่าแต่ละหลักเข้าด้วยกันกลับมีค่าแค่ 1 เท่านั้น

ถ้าตัวเลขอยู่ในรูป $a^b$ โดยที่ `a`, `b` &lt; `n` ให้หาผลรวมสูงสุดของเลขแต่ละหลักเท่ากับเท่าไหร่

# --hints--

`powerfulDigitSum(3)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof powerfulDigitSum(3) === 'number');
```

`powerfulDigitSum(3)` ต้องคืนค่าเป็น `4`

```js
assert.strictEqual(powerfulDigitSum(3), 4);
```

`powerfulDigitSum(10)` ต้องคืนค่าเป็น `45`

```js
assert.strictEqual(powerfulDigitSum(10), 45);
```

`powerfulDigitSum(50)` ต้องคืนค่าเป็น `406`

```js
assert.strictEqual(powerfulDigitSum(50), 406);
```

`powerfulDigitSum(75)` ต้องคืนค่าเป็น `684`

```js
assert.strictEqual(powerfulDigitSum(75), 684);
```

`powerfulDigitSum(100)` ต้องคืนค่าเป็น `972`

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
