---
id: 5a23c84252665b21eecc7ee0
title: Left factorials
challengeType: 5
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Left factorials** $!n$ อาจเป็น *subfactorials* หรือ *factorial sums* ก็ได้ 

โดย *subfactorials* (หรือที่เรียกกันว่า *derangements*) อาจเขียนเป็น

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

แบบฝึกหัดนี้จะใช้สูตรนี้เพื่อคำนวณ **left factorial**:

$ !n = \\sum\_{k=0}^{n-1} k! $

เมื่อ $!0 = 0$

# --instructions--

ให้เขียนฟังก์ชันเพื่อคำนวณ **left factorial** ของจำนวนที่กำหนด

# --hints--

`leftFactorial` ต้องเป็นฟังก์ชัน

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` ต้องคืนค่าเป็น `0`

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` ต้องคืนค่าเป็น `1`

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` ต้องคืนค่าเป็น `2`

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` ต้องคืนค่าเป็น `4`

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` ต้องคืนค่าเป็น `409114`

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` ต้องคืนค่าเป็น `22324392524314`

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` ต้องคืนค่าเป็น `6780385526348314`

```js
assert.equal(leftFactorial(19), 6780385526348314);
```

# --seed--

## --seed-contents--

```js
function leftFactorial(n) {

}
```

# --solutions--

```js
function leftFactorial(n) {
  if (n == 0) return 0;
  if (n == 1) return 1;

  // Note: for n>=20, the result may not be correct.
  // This is because JavaScript uses 53 bit integers and
  // for n>=20 result becomes too large.

  let res = 2,
    fact = 2;
  for (var i = 2; i < n; i++) {
    res += fact;
    fact *= i + 1;
  }

  return res;
}
```
