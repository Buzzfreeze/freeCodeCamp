---
id: 5900f3981000cf542c50feab
title: 'Problem 44: Pentagon numbers'
challengeType: 5
forumTopicId: 302111
dashedName: problem-44-pentagon-numbers
---

# --description--

Pentagonal numbers ถูกกำหนดโดย P<sub>n</sub>=`n`(3`n`−1)/2 และสิบจำนวนแรกของ pentagonal numbers เป็น

1, 5, 12, 22, 35, 51, 70, 92, 117, 145, ...

เราจะเห็นว่า P<sub>4</sub> + P<sub>7</sub> = 22 + 70 = 92 = P<sub>8</sub>. อย่างไรก็ตามผลต่างคือ 70 − 22 = 48 ไม่ได้เป็น pentagonal

หาคู่ของ pentagonal numbers P<sub>j</sub> and P<sub>k</sub> ที่มีผลรวมและผลต่างเป็น pentagonal และ D = |P<sub>k</sub> − P<sub>j</sub>| มีค่าน้อยที่สุด ค่าของ D คืออะไร

# --hints--

`pentagonNumbers()` ควร return number.

```js
assert(typeof pentagonNumbers() === 'number');
```

`pentagonNumbers()` ควร return 5482660.

```js
assert.strictEqual(pentagonNumbers(), 5482660);
```

# --seed--

## --seed-contents--

```js
function pentagonNumbers() {

  return true;
}

pentagonNumbers();
```

# --solutions--

```js
function pentagonNumbers() {
  function isPentagonal(num) {
  // Formula found by solving pentagonal number
  // equation for n.
  const n = (Math.sqrt((24 * num) + 1) + 1) / 6;
  return n % 1 === 0;
  }

  function pentagonal(num) {
    return (num * ((3 * num) - 1)) / 2;
  }
  let result;
  let i = 1;
  while (!result) {
  i++;
  const num1 = (i * ((3 * i) - 1)) / 2; // Pentagonal num formula
  const minDiff = num1 - (((i - 1) * ((3 * (i - 1)) - 1)) / 2);
  let j = i - 1;
  while (j > 0 && !result) {
  const num2 = (j * ((3 * j) - 1)) / 2;
  if (isPentagonal(num1 - num2) && isPentagonal(num1 + num2)) {
        result = num1 - num2;
      }
      j--;
    }
  }
  return result;
  }
```
