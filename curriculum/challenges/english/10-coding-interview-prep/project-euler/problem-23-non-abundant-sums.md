---
id: 5900f3831000cf542c50fe96
title: 'Problem 23: Non-abundant sums'
challengeType: 5
forumTopicId: 301873
dashedName: problem-23-non-abundant-sums
---

# --description--

perfect number จะมีผลรวมของตัวหาร เท่ากับตัวเอง

เช่น ผลรวมของตัวหารของ 28 คือ 1 + 2 + 4 + 7 + 14 = 28 ดังนั้น 28 เป็น perfect number

ถ้าผลรวมของตัวหารของ `n` มีค่าน้อยกว่า `n` จะเรียกว่า deficient number 
ถ้าผลรวมของตัวหารของ `n` มีค่ามากกว่า `n` จะเรียกว่า abundant number

ให้หาผลรวมของจำนวนเต็มบวกทุกตัวที่มีค่าน้อยกว่า `n` ที่ไม่ได้มีค่าเป็นผลรวมของ abundant number สองตัว

# --hints--

`sumOfNonAbundantNumbers(10000)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sumOfNonAbundantNumbers(10000) === 'number');
```

`sumOfNonAbundantNumbers(10000)` ต้องคืนค่าเป็น 3731004

```js
assert(sumOfNonAbundantNumbers(10000) === 3731004);
```

`sumOfNonAbundantNumbers(15000)` ต้องคืนค่าเป็น 4039939

```js
assert(sumOfNonAbundantNumbers(15000) === 4039939);
```

`sumOfNonAbundantNumbers(20000)` ต้องคืนค่าเป็น 4159710

```js
assert(sumOfNonAbundantNumbers(20000) === 4159710);
```

`sumOfNonAbundantNumbers(28123)` ต้องคืนค่าเป็น 4179871

```js
assert(sumOfNonAbundantNumbers(28123) === 4179871);
```

# --seed--

## --seed-contents--

```js
function sumOfNonAbundantNumbers(n) {

  return n;
}

sumOfNonAbundantNumbers(28123);
```

# --solutions--

```js
function abundantCheck(number) {
  let sum = 1;

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if(number % i === 0) {
      sum += i + +(i !== Math.sqrt(number) && number / i);
    }
  }
  return sum > number;
}

function sumOfNonAbundantNumbers(n) {
  let sum = 0;
  const memo = {};
  let abundantList = [];

  // Function checkSum checks if num can be represented as a sum of numbers in the stack (array)
  const checkSum = (num, stack, memo) => {
    for (let i = 0; i < stack.length; i += 1) {
      if ((num - stack[i]) in memo) return true;
    }
    return false;
  };

  for (let i = 1; i <= n; i += 1) {
    if (abundantCheck(i)) {
      abundantList.push(i);
      memo[i] = 1;
    }
    if (checkSum(i, abundantList, memo)) continue;
    sum += i;
  }
  return sum;
}
```
