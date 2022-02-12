---
id: 5900f3ab1000cf542c50febe
title: 'Problem 63: Powerful digit counts'
challengeType: 5
forumTopicId: 302175
dashedName: problem-63-powerful-digit-counts
---

# --description--

เลข 5 หลัก 16807 = 7<sup>5</sup> มีกำลัง 5 เหมือนกัน และเลข 9 หลัก 134217728 = 8<sup>9</sup> ก็มีกำลัง 9 เหมือนกัน

ให้เขียนฟังก์ชันเพื่อหาจำนวนเต็มบวกที่มีความยาวเป็น `n` เป็นค่าของ `n` ยกกำลัง

# --hints--

`powerfulDigitCounts(1)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof powerfulDigitCounts(1) === 'number');
```

`powerfulDigitCounts(1)` ต้องคืนค่าเป็น `9`

```js
assert.strictEqual(powerfulDigitCounts(1), 9);
```

`powerfulDigitCounts(2)` ต้องคืนค่าเป็น `6`

```js
assert.strictEqual(powerfulDigitCounts(2), 6);
```

`powerfulDigitCounts(3)` ต้องคืนค่าเป็น `5`

```js
assert.strictEqual(powerfulDigitCounts(3), 5);
```

`powerfulDigitCounts(4)` ต้องคืนค่าเป็น `4`

```js
assert.strictEqual(powerfulDigitCounts(4), 4);
```

`powerfulDigitCounts(5)` ต้องคืนค่าเป็น `3`

```js
assert.strictEqual(powerfulDigitCounts(5), 3);
```

`powerfulDigitCounts(6)` ต้องคืนค่าเป็น `3`

```js
assert.strictEqual(powerfulDigitCounts(6), 3);
```

`powerfulDigitCounts(7)` ต้องคืนค่าเป็น `2`

```js
assert.strictEqual(powerfulDigitCounts(7), 2);
```

`powerfulDigitCounts(8)` ต้องคืนค่าเป็น `2`

```js
assert.strictEqual(powerfulDigitCounts(8), 2);
```

`powerfulDigitCounts(10)` ต้องคืนค่าเป็น `2`

```js
assert.strictEqual(powerfulDigitCounts(10), 2);
```

`powerfulDigitCounts(21)` ต้องคืนค่าเป็น `1`

```js
assert.strictEqual(powerfulDigitCounts(21), 1);
```

# --seed--

## --seed-contents--

```js
function powerfulDigitCounts(n) {

  return true;
}

powerfulDigitCounts(1);
```

# --solutions--

```js
function powerfulDigitCounts(n) {
  function countDigits(num) {
    let counter = 0;
    while (num > 0) {
      num = Math.floor(num / 10);
      counter++;
    }
    return counter;
  }

  let numbersCount = 0;

  let curNum = 1;
  while (curNum < 10) {
    let power = n;
    if (power === countDigits(curNum ** power)) {
      numbersCount++;
    }
    curNum++;
  }

  return numbersCount;
}
```
