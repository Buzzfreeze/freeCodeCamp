---
id: 595608ff8bcd7a50bd490181
title: Hailstone sequence
challengeType: 5
forumTopicId: 302279
dashedName: hailstone-sequence
---

# --description--

Hailstone sequence ของตัวเลขสามารถสร้างได้จากจำนวนเต็มบวกเริ่มต้น, `n` โดย:

- ถ้า `n` คือ `1` ลำดับจะสิ้นสุดลง
- ถ้า `n` เป็น `even` ดังนั้น `n` ถัดไปของลำดับ `= n/2`
- ถ้า `n` เป็น `คี่` ดังนั้น `n` ถัดไปของลำดับ `= (3 * n) + 1`

การคาดคะเน (ไม่ได้รับการพิสูจน์) ของ Collatz คือhailstone sequenceสำหรับหมายเลขเริ่มต้นใด ๆ จะสิ้นสุดลงเสมอ

hailstone sequenceเรียกอีกอย่างว่าหมายhailstone(เนื่องจากค่ามักจะขึ้นอยู่กับการลงมาและการขึ้นหลายครั้งเช่นhailstoneในก้อนเมฆ) หรือเป็นลำดับ Collatz


# --instructions--

1. สร้างกิจวัตรเพื่อสร้างลำดับhailstoneสำหรับตัวเลข
2. ฟังก์ชันของคุณควรreturn arrayที่มีตัวเลขน้อยกว่า "จำกัด" ซึ่งมีลำดับhailstoneที่ยาวที่สุดและความยาวของลำดับนั้น (แต่อย่าแสดงลำดับจริง!)

# --hints--

`hailstoneSequence` ควรเป็น function.

```js
assert(typeof hailstoneSequence === 'function');
```

`hailstoneSequence(30)` ควร return array.

```js
assert(Array.isArray(hailstoneSequence(30)));
```

`hailstoneSequence(30)` ควร return `[27, 112]`.

```js
assert.deepEqual(hailstoneSequence(30), [27, 112]);
```

`hailstoneSequence(50000)` ควร return `[35655, 324]`.

```js
assert.deepEqual(hailstoneSequence(50000), [35655, 324]);
```

`hailstoneSequence(100000)` ควร return `[77031, 351]`.

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
