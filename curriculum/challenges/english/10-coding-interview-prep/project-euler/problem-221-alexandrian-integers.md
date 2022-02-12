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


เช่น 630 เป็น Alexandrian integer ($p = 5$, $q = −7$, $r = −18$)  
โดย 630 เป็น Alexandrian integer ตัวที่ 6 เพราะ Alexandrian integer 6 ตัวแรกคือ 6, 42, 120, 156, 420 และ 630

หา Alexandrian integer ตัวที่ 150,000

# --hints--

`alexandrianIntegers()` ต้องคืนค่าเป็น `1884161251122450`

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
