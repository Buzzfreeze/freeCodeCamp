---
id: 5900f3911000cf542c50fea4
title: 'Problem 37: Truncatable primes'
challengeType: 5
forumTopicId: 302031
dashedName: problem-37-truncatable-primes
---

# --description--

จำนวน 3797 มีส่วนประกอบที่น่าสนใจ เริ่มจากเลข prime ของตัวมันเอง และเมื่อลบ digits จากซ้ายไปขวา จะเหลือ prime เป็น: 3797, 797, 97, และ 7 ซึ่งเหมือนกับเราทำสลับด้านจากขวามาซ้าย: 3797, 379, 37, and 3

หาผลรวมของ `n` (8 ≤ `n` ≤ 11) primes ที่สามารถ truncatable จากซ้ายไปขวาและขวามาซ้ายได้

NOTE: 2, 3, 5, และ 7 ไม่เป็น truncatable primes.

# --hints--

`truncatablePrimes(8)` ควร return  number

```js
assert(typeof truncatablePrimes(8) === 'number');
```

`truncatablePrimes(8)` ควร return 1986.

```js
assert(truncatablePrimes(8) == 1986);
```

`truncatablePrimes(9)` ควร return 5123.

```js
assert(truncatablePrimes(9) == 5123);
```

`truncatablePrimes(10)` ควร return 8920.

```js
assert(truncatablePrimes(10) == 8920);
```

`truncatablePrimes(11)` ควร return 748317.

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
