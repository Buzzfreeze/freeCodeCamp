---
id: 5900f36e1000cf542c50fe81
title: 'Problem 2: Even Fibonacci Numbers'
challengeType: 5
forumTopicId: 301838
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

เลข Fibonacci sequence จะได้จากการนำเลขสองลำดับข้างหน้ามาบวกกัน เช่นหากเริ่มที่ 1 และ 2  
แล้ว 10 เลขแรกจะเป็น

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

ให้หา Fibonacci sequence ที่ไม่เกิน `n` และนำเลขที่เป็นเลขคู่มาบวกกัน

# --hints--

`fiboEvenSum(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof fiboEvenSum(10) === 'number');
```

ค่าที่คืนออกมาต้องเป็นเลขคู่

```js
assert.equal(fiboEvenSum(10) % 2 === 0, true);
```

ต้องบวกค่าที่เป็นเลขคู่ของ Fibonacci sequence และ `fiboEvenSum(8)` ต้องคืนค่าเป็น 10

```js
assert.strictEqual(fiboEvenSum(8), 10);
```

`fiboEvenSum(10)` ต้องคืนค่าเป็น 10

```js
assert.strictEqual(fiboEvenSum(10), 10);
```

`fiboEvenSum(34)` ต้องคืนค่าเป็น 44

```js
assert.strictEqual(fiboEvenSum(34), 44);
```

`fiboEvenSum(60)` ต้องคืนค่าเป็น 44

```js
assert.strictEqual(fiboEvenSum(60), 44);
```

`fiboEvenSum(1000)` ต้องคืนค่าเป็น 798

```js
assert.strictEqual(fiboEvenSum(1000), 798);
```

`fiboEvenSum(100000)` ต้องคืนค่าเป็น 60696

```js
assert.strictEqual(fiboEvenSum(100000), 60696);
```

`fiboEvenSum(4000000)` ต้องคืนค่าเป็น 4613732

```js
assert.strictEqual(fiboEvenSum(4000000), 4613732);
```

# --seed--

## --seed-contents--

```js
function fiboEvenSum(n) {

  return true;
}
```

# --solutions--

```js
const fiboEvenSum = (number) => {
  if (number <= 1) {
    return 0;
  } else {
    let evenSum = 0,
      prevFibNum = 1,
      fibNum = 2; // According to problem description our Fibonacci series starts with 1, 2
    for (let i = 2; fibNum <= number; i++) {
      if (fibNum % 2 == 0) {
        evenSum += fibNum;
      }
      [prevFibNum, fibNum] = [fibNum, prevFibNum + fibNum];
    }
    return evenSum;
  }
};
```
