---
id: 59f40b17e79dbf1ab720ed7a
title: Department Numbers
challengeType: 5
forumTopicId: 302249
dashedName: department-numbers
---

# --description--

มีเมืองที่มีการจัดระเบียบสูงซึ่งได้ตัดสินใจกำหนดหมายเลขให้กับแต่ละแผนกของตน:

<ul>
  <li>Police department</li>
  <li>Sanitation department</li>
  <li>Fire department</li>
</ul>

แต่ละแผนกสามารถมีตัวเลขได้ตั้งแต่ 1 ถึง 7 (รวม)

หมายเลขแผนกทั้งสามจะต้องไม่ซ้ำกัน (ต่างกัน) และต้องรวมกันเป็นเลข 12

ผบ.ตร.ไม่ชอบเลขคี่และอยากได้เลขคู่ประจำแผนก

# --instructions--

เขียนโปรแกรมที่ return valid combinations เป็น array

```js
[2, 3, 7] [2, 4, 6] [2, 6, 4]
[2, 7, 3] [4, 1, 7] [4, 2, 6]
[4, 3, 5] [4, 5, 3] [4, 6, 2]
[4, 7, 1] [6, 1, 5] [6, 2, 4]
[6, 4, 2] [6, 5, 1]
```

# --hints--

`combinations` ควรเป็น function.

```js
assert(typeof combinations === 'function');
```

`combinations([1, 2, 3], 6)` ควร return Array.

```js
assert(Array.isArray(combinations([1, 2, 3], 6)));
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` ควร return array มีความยาว 14.

```js
assert(combinations(nums, total).length === len);
```

`combinations([1, 2, 3, 4, 5, 6, 7], 12)` ควร return ทุก valid combinations.

```js
assert.deepEqual(combinations(nums, total), result);
```

# --seed--

## --after-user-code--

```js
const nums = [1, 2, 3, 4, 5, 6, 7];
const total = 12;
const len = 14;
const result = [
  [2, 3, 7],
  [2, 4, 6],
  [2, 6, 4],
  [2, 7, 3],
  [4, 1, 7],
  [4, 2, 6],
  [4, 3, 5],
  [4, 5, 3],
  [4, 6, 2],
  [4, 7, 1],
  [6, 1, 5],
  [6, 2, 4],
  [6, 4, 2],
  [6, 5, 1]
];
```

## --seed-contents--

```js
function combinations(possibleNumbers, total) {

  return true;
}
```

# --solutions--

```js
function combinations(possibleNumbers, total) {
  let firstNumber;
  let secondNumber;
  let thridNumber;
  const allCombinations = [];

  for (let i = 0; i < possibleNumbers.length; i += 1) {
    firstNumber = possibleNumbers[i];

    if (firstNumber % 2 === 0) {
      for (let j = 0; j < possibleNumbers.length; j += 1) {
        secondNumber = possibleNumbers[j];

        if (j !== i && firstNumber + secondNumber <= total) {
          thridNumber = total - firstNumber - secondNumber;

          if (thridNumber !== firstNumber && thridNumber !== secondNumber && possibleNumbers.includes(thridNumber)) {
            allCombinations.push([firstNumber, secondNumber, thridNumber]);
          }
        }
      }
    }
  }
  return allCombinations;
}
```
