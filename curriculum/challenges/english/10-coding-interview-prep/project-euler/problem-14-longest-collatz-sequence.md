---
id: 5900f37a1000cf542c50fe8d
title: 'Problem 14: Longest Collatz sequence'
challengeType: 5
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

ลำดับข้างล่างใช้กำหนด set ของจำนวนเต็มบวก:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> is even)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> is odd)</div>

ใช้กฎข้างบนและเริ่มที่ 13 เราจะได้ลำดับดังต่อไปนี้

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

เราสามารถเห็นลำดับ (เริ่มจาก 13 และสิ้นสุดที่ 1) ทั้งหมด 10 ลำดับ แม้ว่ายังไม่ได้ถูกพิสูจน์ (Collatz Problem) แต่ไม่ว่าจะหาเริ่มจากจำนวนไหนก็ตามก็จะสิ้นสดที่1

ให้จำนวนที่เริ่มอยู่ภายใต้ `limit` จะมีความยาวที่สุดของลำดับตัวเลขเป็นเท่าไหร่

**Note:** เริ่มจากค่าหนึ่งล้านได้

# --hints--

`longestCollatzSequence(14)` ควร return number

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` ควร return 9

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` ควร return 3711

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` ควร return 35655

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` ควร return 52527

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` ควร return 77031

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` ควร return 837799

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```
