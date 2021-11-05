---
id: 5900f36e1000cf542c50fe81
title: 'Problem 2: Even Fibonacci Numbers'
challengeType: 5
forumTopicId: 301838
dashedName: problem-2-even-fibonacci-numbers
---

# --description--

จำนวนที่ได้จากการดำเนินการจาก Fibonacci sequence จะได้จากการนำเลขสองลำดับข้างหน้ามาบวกกัน เช่นหากเริ่มที่ 1 และ 2 
จะได้ 10 จำนวนแรกเช่นข้างล่าง

<div style='text-align: center;'>1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...</div>

หากพิจารณา Fibonacci sequence ค่าที่ได้ไม่ควรจะเกิน `n`, find the sum of the even-valued terms.
ให้หาค่าผลรวมของจำนวนที่เป็นเลขคู่

# --hints--

`fiboEvenSum(10)` ควร return เป็น number

```js
assert(typeof fiboEvenSum(10) === 'number');
```

function ควร return เป็น `even` value

```js
assert.equal(fiboEvenSum(10) % 2 === 0, true);
```

function ควร sum จำนวนที่เป็นเลขคู่ ของ Fibonacci numbers: `fiboEvenSum(8)` ควร return 10.

```js
assert.strictEqual(fiboEvenSum(8), 10);
```

`fiboEvenSum(10)` ควร return เป็น 10

```js
assert.strictEqual(fiboEvenSum(10), 10);
```

`fiboEvenSum(34)` ควร return เป็น 44

```js
assert.strictEqual(fiboEvenSum(34), 44);
```

`fiboEvenSum(60)` ควร return เป็น 44

```js
assert.strictEqual(fiboEvenSum(60), 44);
```

`fiboEvenSum(1000)` ควร return เป็น 798

```js
assert.strictEqual(fiboEvenSum(1000), 798);
```

`fiboEvenSum(100000)` ควร return เป็น 60696

```js
assert.strictEqual(fiboEvenSum(100000), 60696);
```

`fiboEvenSum(4000000)` ควร return เป็น 4613732

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
