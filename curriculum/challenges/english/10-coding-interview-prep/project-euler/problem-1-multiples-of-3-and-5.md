---
id: 5900f36e1000cf542c50fe80
title: 'Problem 1: Multiples of 3 and 5'
challengeType: 5
forumTopicId: 301722
dashedName: problem-1-multiples-of-3-and-5
---

# --description--

เลขที่ต่ำกว่า 10 และมีตัวประกอบเป็น 3 หรือ 5 จะมี 3, 5, 6 และ 9 และผลรวมของเลขทั้งหมด 23

ให้หาผลรวมของเลขที่มีตัวประกอบเป็นเป็น 3 หรือ 5 ที่มีค่าต่ำกว่า `number`

# --hints--

`multiplesOf3and5(10)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof multiplesOf3and5(10) === 'number');
```

`multiplesOf3and5(49)` ต้องคืนค่าเป็น 543

```js
assert.strictEqual(multiplesOf3and5(49), 543);
```

`multiplesOf3and5(1000)` ต้องคืนค่าเป็น 233168

```js
assert.strictEqual(multiplesOf3and5(1000), 233168);
```

`multiplesOf3and5(8456)` ต้องคืนค่าเป็น 16687353

```js
assert.strictEqual(multiplesOf3and5(8456), 16687353);
```

`multiplesOf3and5(19564)` ต้องคืนค่าเป็น 89301183

```js
assert.strictEqual(multiplesOf3and5(19564), 89301183);
```

# --seed--

## --seed-contents--

```js
function multiplesOf3and5(number) {

  return true;
}

multiplesOf3and5(1000);
```

# --solutions--

```js
const multiplesOf3and5 = (number) => {
  var total = 0;

  for(var i = 0; i < number; i++) {
    if(i % 3 == 0 || i % 5 == 0) {
      total += i;
    }
  }
  return total;
};
```
