---
id: 5a23c84252665b21eecc8028
title: Stern-Brocot sequence
challengeType: 5
forumTopicId: 302324
dashedName: stern-brocot-sequence
---

# --description--

ให้สร้างลำดับ Stern-Brocot จะถูกสร้างขึ้นโดยalgorithmที่คล้ายกับที่ใช้ในการสร้าง [ลำดับ Fibonacci](<https://rosettacode.org/wiki/Fibonacci sequence>)

<ol>
  <li>The first and second members of the sequence are both 1:</li>
    <ul><li>1, 1</li></ul>
  <li>Start by considering the second member of the sequence</li>
  <li>Sum the considered member of the sequence and its precedent, (1 + 1) = 2, and append it to the end of the
    sequence:</li>
    <ul><li>1, 1, 2</li></ul>
  <li>Append the considered member of the sequence to the end of the sequence:</li>
    <ul><li>1, 1, 2, 1</li></ul>
  <li>Consider the next member of the series, (the third member i.e. 2)</li>
  <li>GOTO 3 </li>
    <ul>
      <li></li>
      <li> ─── Expanding another loop we get: ───</li>
      <li></li>
    </ul>
  <li>Sum the considered member of the sequence and its precedent, (2 + 1) = 3, and append it to the end of the
    sequence:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>Append the considered member of the sequence to the end of the sequence:</li>
    <ul><li>1, 1, 2, 1, 3, 2</li></ul>
  <li>Consider the next member of the series, (the fourth member i.e. 1)</li>
</ol>

# --instructions--

สร้างฟังก์ชันที่return indexในลำดับ Stern-Brocot ซึ่งพบ $ n $ เป็นครั้งแรก โดยลำดับจะถูกสร้างขึ้นด้วยวิธีการที่ระบุไว้ข้างต้น โปรดทราบว่าลำดับนี้ใช้การจัดทำดัชนีแบบอิง 1 รายการ

# --hints--

`sternBrocot` ควรเป็น function.

```js
assert(typeof sternBrocot == 'function');
```

`sternBrocot(2)` คสร return number.

```js
assert(typeof sternBrocot(2) == 'number');
```

`sternBrocot(2)` คสร return `3`.

```js
assert.equal(sternBrocot(2), 3);
```

`sternBrocot(3)` คสร return `5`.

```js
assert.equal(sternBrocot(3), 5);
```

`sternBrocot(5)` คสร return `11`.

```js
assert.equal(sternBrocot(5), 11);
```

`sternBrocot(7)` คสร return `19`.

```js
assert.equal(sternBrocot(7), 19);
```

`sternBrocot(10)` คสร return `39`.

```js
assert.equal(sternBrocot(10), 39);
```

# --seed--

## --seed-contents--

```js
function sternBrocot(num) {

}
```

# --solutions--

```js
function sternBrocot(num) {
  function f(n) {
    return n < 2
      ? n
      : n & 1
      ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1))
      : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? (a < b ? gcd(b % a, a) : gcd(a % b, b)) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```
