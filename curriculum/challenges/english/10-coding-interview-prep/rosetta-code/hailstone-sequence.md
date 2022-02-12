---
id: 595608ff8bcd7a50bd490181
title: Hailstone sequence
challengeType: 5
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

Hailstone sequence ของตัวเลขสามารถสร้างได้จากจำนวนเต็มบวกเริ่มต้น `n` โดย:

- ถ้า `n` เป็น `1` ลำดับจะสิ้นสุดลง
- ถ้า `n` เป็น `เลขคู่` แล้ว `n` ถัดไปของลำดับจะ `= n/2`
- ถ้า `n` เป็น `เลขคี่` แล้ว `n` ถัดไปของลำดับจะ `= (3 * n) + 1`

Collatz มองว่า hailstone sequence ของทุกค่าจะต้องมีจุดสิ้นสุดเสมอ

# --instructions--

1. ให้สร้าง routine เพื่อสร้างลำดับ hailstone ของตัวเลข
2. ฟังก์ชันของคุณต้องคืนค่าเป็น array ที่มีตัวเลขน้อยกว่า `limit` ซึ่งมีลำดับ hailstone ที่ยาวที่สุดและความยาวของลำดับนั้น (แต่อย่าแสดงลำดับจริง)

# --hints--

`hailstoneSequence` ต้องเป็น

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` ต้องคืนค่าเป็น `[27, 112]`

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` ต้องคืนค่าเป็น `[35655, 324]`

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` ต้องคืนค่าเป็น `[77031, 351]`

```js
assert.deepEqual(hailstoneSequence(100000), [77031, 351]);
```

# --seed--

## --seed-contents--

```js
function hailstoneSequence(limit) {
  const res = [];


  return res;
}
```

# --solutions--

```js
function hailstoneSequence (limit) {
  function hailstone(n) {
    const seq = [n];
    while (n > 1) {
      n = n % 2 ? 3 * n + 1 : n / 2;
      seq.push(n);
    }
    return seq;
  }

  let n = 0;
  let max = 0;
  for (let i = limit; --i;) {
    const seq = hailstone(i);
    const sLen = seq.length;

    if (sLen > max) {
      n = i;
      max = sLen;
    }
  }

  return [n, max];
}
```
