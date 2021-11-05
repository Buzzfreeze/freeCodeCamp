---
id: 5900f38d1000cf542c50fea0
title: 'Problem 33: Digit cancelling fractions'
challengeType: 5
forumTopicId: 301987
dashedName: problem-33-digit-cancelling-fractions
---

# --description--

เศษส่วน <sup>49</sup>/<sub>98</sub> เป็น curious fraction ในฐานะนักคณิตศาสตร์ที่ไม่มีประสบการณ์ในการพยายามลดความซับซ้อนอาจเชื่ออย่างผิด ๆ ว่า <sup>49</sup>/<sub>98</sub> = <sup>4</sup>/<sub>8</sub>ซึ่งถูกต้องได้มาจากการยกเลิก 9s

พิจารณาเศษส่วนเช่น <sup>30</sup>/<sub>50</sub> = <sup>3</sup>/<sub>5</sub>

มี 4 non-trivial ตัวอย่างเช่น fraction ที่มีค่าน้อยกว่าหนึ่ง ประกอบด้วย 2 digits ทั้งของ numerator และ denominator

ผลคูณของเศษส่วนสี่จำนวน กำหนดให้มีผลคูณร่วมที่นอยที่สุดร่วมกัน โดยหาค่าของตัวส่วน(denominator)

# --hints--

`digitCancellingFractions()` ควร return number.

```js
assert(typeof digitCancellingFractions() === 'number');
```

`digitCancellingFractions()` ควร return 100.

```js
assert.strictEqual(digitCancellingFractions(), 100);
```

# --seed--

## --seed-contents--

```js
function digitCancellingFractions() {

  return true;
}

digitCancellingFractions();
```

# --solutions--

```js
function digitCancellingFractions() {
  function isCurious(numerator, denominator) {
    const fraction = numerator / denominator;
    const numString = numerator.toString();
    const denString = denominator.toString();

    if (numString[1] === '0' && denString[1] === '0') {
      // trivial
      return false;
    }
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        if (numString[i] === denString[j]) {
          const newNum = parseInt(numString[1 - i], 10);
          const newDen = parseInt(denString[1 - j], 10);
          if (newNum / newDen === fraction) {
            return true;
          }
        }
      }
    }
    return false;
  }
  function findLargestDivisor(a, b) {
    let gcd = a > b ? b : a;
    while (gcd > 1) {
      if (a % gcd === 0 && b % gcd === 0) {
        return gcd;
      }
      gcd--;
    }
    return gcd;
  }

  function simplifyFraction(numerator, denominator) {
    const divisor = findLargestDivisor(numerator, denominator);
    return [numerator / divisor, denominator / divisor];
  }

  let multipleNumerator = 1;
  let multipleDenominator = 1;

  for (let denominator = 11; denominator < 100; denominator++) {
    for (let numerator = 10; numerator < denominator; numerator++) {
      if (isCurious(numerator, denominator)) {
        multipleNumerator *= numerator;
        multipleDenominator *= denominator;
      }
    }
  }

  return simplifyFraction(multipleNumerator, multipleDenominator)[1];
}
```
