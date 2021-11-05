---
id: 5900f3721000cf542c50fe85
title: 'Problem 6: Sum square difference'
challengeType: 5
forumTopicId: 302171
dashedName: problem-6-sum-square-difference
---

# --description--

ผลรวมของกำลังสองของตัวเลขสิบตัวแรกคือ

<div style='text-align: center;'>1<sup>2</sup> + 2<sup>2</sup> + ... + 10<sup>2</sup> = 385</div>

กำลังสองของผลรวมตัวเลขสิบตัวแรกคือ
<div style='text-align: center;'>(1 + 2 + ... + 10)<sup>2</sup> = 55<sup>2</sup> = 3025</div>

กำลังสองของผลรวมตัวเลขสิบตัวแรกและผลรวมของกำลังสองของตัวเลขสิบตัวแรก มีค่าแตกต่างกันคือ 3025 − 385 = 2640.

หาความแตกต่างระหว่างผลรวมของกำลังสองของตัวเลข `n` ตัวและกำลังสองของผลรวมตัวเลขสิบตัวแรก

# --hints--

`sumSquareDifference(10)` ควร return เป็น number

```js
assert(typeof sumSquareDifference(10) === 'number');
```

`sumSquareDifference(10)` ควร return เป็น 2640

```js
assert.strictEqual(sumSquareDifference(10), 2640);
```

`sumSquareDifference(20)` ควร return เป็น 41230

```js
assert.strictEqual(sumSquareDifference(20), 41230);
```

`sumSquareDifference(100)` ควร return เป็น 25164150

```js
assert.strictEqual(sumSquareDifference(100), 25164150);
```

# --seed--

## --seed-contents--

```js
function sumSquareDifference(n) {

  return true;
}

sumSquareDifference(100);
```

# --solutions--

```js
const sumSquareDifference = (number)=>{
  let squareOfSum = Math.pow(sumOfArithmeticSeries(1,1,number),2);
  let sumOfSquare = sumOfSquareOfNumbers(number);
 return squareOfSum - sumOfSquare;
}

function sumOfArithmeticSeries(a,d,n){
  return (n/2)*(2*a+(n-1)*d);
}

function sumOfSquareOfNumbers(n){
 return (n*(n+1)*(2*n+1))/6;
}
```
