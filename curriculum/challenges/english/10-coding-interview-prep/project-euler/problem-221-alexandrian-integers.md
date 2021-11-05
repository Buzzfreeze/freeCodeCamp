---
id: 5900f4491000cf542c50ff5c
title: 'Problem 221: Alexandrian Integers'
challengeType: 5
forumTopicId: 301864
dashedName: problem-221-alexandrian-integers
---

# --description--

เราจะเรียกจำนวนเต็มบวก $A$ ว่า "Alexandrian integer" ถ้ามีจำนวนเต็ม $p$, $q$, $r$ ในลักษณะที่ว่า:

$$A = p \times q \times r$$

and

$$\frac{1}{A} = \frac{1}{p} + \frac{1}{q} + \frac{1}{r}$$


ตัวอย่างเช่น 630 เป็น Alexandrian integer ($p = 5$, $q = −7$, $r = −18$) อันที่จริง 630 เป็น Alexandrian integer ที่ 6 โดย Alexandrian integer 6 ตัวแรกคือ: 6, 42, 120, 156, 420 และ 630

หาลำดับที่ 150000th Alexandrian integer.

# --hints--

`alexandrianIntegers()` ควร return `1884161251122450`.

```js
assert.strictEqual(alexandrianIntegers(), 1884161251122450);
```

# --seed--

## --seed-contents--

```js
function alexandrianIntegers() {

  return true;
}

alexandrianIntegers();
```

# --solutions--

```js
// solution required
```
