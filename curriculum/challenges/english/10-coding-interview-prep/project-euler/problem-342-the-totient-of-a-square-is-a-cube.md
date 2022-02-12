---
id: 5900f4c31000cf542c50ffd5
title: 'Problem 342: The totient of a square is a cube'
challengeType: 5
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

พิจารณาหมายเลข 50

${50}^2 = 2500 = 2^2 × 5^4$ ดังนั้น $φ(2,500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$ $φ$ หมายถึง Euler's totient function

ดังนั้น 2500 เป็นกำลังสอง และ $φ(2,500)$ เป็นกำลังสาม

หาผลรวมของ $n$ ทั้งหมด ที่ $1 &lt; n &lt; {10}^{10}$ ซึ่ง $φ(n^2)$ เป็นกำลังสาม


# --hints--

`totientOfSquare()` ต้องคืนค่าเป็น `5943040885644`

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

# --seed--

## --seed-contents--

```js
function totientOfSquare() {

  return true;
}

totientOfSquare();
```

# --solutions--

```js
// solution required
```
