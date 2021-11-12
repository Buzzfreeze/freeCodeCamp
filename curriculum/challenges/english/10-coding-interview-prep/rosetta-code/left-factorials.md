---
id: 5a23c84252665b21eecc7ee0
title: Left factorials
challengeType: 5
forumTopicId: 302302
dashedName: left-factorials
---

# --description--

**Left factorials**, $ !n $, อาจหมายถึง *subfactorials* หรือ *factorial sums*. อาจใช้อย่างสับสนสำหรับคำจำกัดความที่แตกต่างกันสองแบบ บางครั้ง, *subfactorials* (ในนามของ *derangements*) อาจใช้ notations:

<ul>
  <li>$!n`$</li>
  <li>$!n$</li>
  <li>$n¡$</li>
</ul>

(อาจไม่ชัดเจน แต่ตัวอย่างสุดท้ายใช้เครื่องหมายอัศเจรีย์กลับหัว) งานนี้จะใช้สูตรนี้เพื่อ **left factorial**:

$ !n = \\sum\_{k=0}^{n-1} k! $

where $!0 = 0$

# --instructions--

เขียนฟังก์ชันเพื่อคำนวณfactorialทางซ้ายของจำนวนที่กำหนด

# --hints--

`leftFactorial` ควรเป็น function.

```js
assert(typeof leftFactorial == 'function');
```

`leftFactorial(0)` ควร return number.

```js
assert(typeof leftFactorial(0) == 'number');
```

`leftFactorial(0)` ควร return `0`.

```js
assert.equal(leftFactorial(0), 0);
```

`leftFactorial(1)` ควร return `1`.

```js
assert.equal(leftFactorial(1), 1);
```

`leftFactorial(2)` ควร return `2`.

```js
assert.equal(leftFactorial(2), 2);
```

`leftFactorial(3)` ควร return `4`.

```js
assert.equal(leftFactorial(3), 4);
```

`leftFactorial(10)` ควร return `409114`.

```js
assert.equal(leftFactorial(10), 409114);
```

`leftFactorial(17)` ควร return `22324392524314`.

```js
assert.equal(leftFactorial(17), 22324392524314);
```

`leftFactorial(19)` ควร return `6780385526348314`.

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
