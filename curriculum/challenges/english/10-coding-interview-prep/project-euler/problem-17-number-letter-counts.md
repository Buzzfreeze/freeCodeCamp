---
id: 5900f37d1000cf542c50fe90
title: 'Problem 17: Number letter counts'
challengeType: 5
forumTopicId: 301804
dashedName: problem-17-number-letter-counts
---

# --description--

ถ้าจำนวนของ 1 ถึง 5 ถูกเขียนเป็นคำเช่น: one, two, three, four, five, และมี 3 + 3 + 5 + 4 + 4 = 19 เป็นจำนวนตัวอักษรที่ใช้ทั้งหมด

ถ้าทุกจำนวนตั้งแต่ 1 ไปจนถึง `limit` ถูกเขียนเป็นคำ จะใช้ตัวอักษรกี่ตัว?

**Note:** ไม่ต้องนับเว้นวรรคหรือขีดกลาง เช่น 342 (three hundred and forty-two) มี 23 ตัวอักษร และ 115 (one hundred and fifteen) มี 20 ตัวอักษร ใช้ "and" เมื่อเขียนจำนวนเป็นแบบ British

# --hints--

`numberLetterCounts(5)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof numberLetterCounts(5) === 'number');
```

`numberLetterCounts(5)` ต้องคืนค่าเป็น 19

```js
assert.strictEqual(numberLetterCounts(5), 19);
```

`numberLetterCounts(150)` ต้องคืนค่าเป็น 1903

```js
assert.strictEqual(numberLetterCounts(150), 1903);
```

`numberLetterCounts(1000)` ต้องคืนค่าเป็น 21124

```js
assert.strictEqual(numberLetterCounts(1000), 21124);
```

# --seed--

## --seed-contents--

```js
function numberLetterCounts(limit) {

  return true;
}

numberLetterCounts(5);
```

# --solutions--

```js
function numberLetterCounts(limit) {
  const dictionary = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    1000: 'onethousand'
  };

  let numString = '';

  function convertToString(num) {
    // check dictionary for number
    if (dictionary[num]) {
      return dictionary[num];
    } else {
      const hundreds = Math.floor(num / 100);
      const tens =  Math.floor((num / 10) % 10) * 10;
      const remainder = num % 10;

      let tempStr = '';

      if (hundreds === 0) {
        tempStr += dictionary[tens] + dictionary[remainder];
      } else {
        tempStr += dictionary[hundreds] + 'hundred';

        if (tens !== 0 || remainder !== 0) {
          tempStr += 'and';
        }

        if (tens < 20) {
          const lessThanTwenty = tens + remainder;
          tempStr += dictionary[lessThanTwenty];
        } else {
          tempStr += dictionary[tens] + dictionary[remainder];
        }
      }
      return tempStr;
    }
  }

  for (let i = 1; i <= limit; i++) {
    numString += convertToString(i);
  }
  return numString.length;
}
```
