---
id: 5900f3911000cf542c50fea4
title: 'Problem 37: Truncatable primes'
challengeType: 5
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

จำนวน 3797 มีลักษณะที่น่าสนใจคือ 

โดยเลขนี้เป็นจำนวนเฉพาะ และเมื่อลบและถ้าลบเลขจากซ้ายไปขวา ก็จะยังเป็นจำนวนเฉพาะอยู่ 3797, 797, 97, และ 7 ซึ่งถ้าลบเลขจากขวาไปซ้าย ก็จะยังเป็นจำนวนเฉพาะอยู่: 3797, 379, 37, และ 3

หาผลรวมของจำนวนเฉพาะ `n` ตัวแรก (โดย 8 ≤ `n` ≤ 11) ที่สามารถลบเลขจากซ้ายไปขวา และขวาไปซ้ายได้ โดยที่ยังเป็นจำนวนเฉพาะอยุ่

NOTE: 2, 3, 5, และ 7 ไม่เป็น truncatable prime

# --hints--

`truncatablePrimes(8)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` ต้องคืนค่าเป็น 1986

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` ต้องคืนค่าเป็น 5123

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` ต้องคืนค่าเป็น 8920

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` ต้องคืนค่าเป็น 748317

```js
assert(truncatablePrimes(11) == 748317);
```

# --seed--

## --seed-contents--

```js
function truncatablePrimes(n) {

  return n;
}

truncatablePrimes(11);
```

# --solutions--

```js
// solution required
```
