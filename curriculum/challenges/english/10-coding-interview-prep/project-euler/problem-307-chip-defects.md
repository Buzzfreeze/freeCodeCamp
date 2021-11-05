---
id: 5900f4a01000cf542c50ffb2
title: 'Problem 307: Chip Defects'
challengeType: 5
forumTopicId: 301961
dashedName: problem-307-chip-defects
---

# --description--

ข้อบกพร่อง $k$ จะถูกสุ่มแจกจ่ายระหว่างชิปวงจรรวม $n$ ที่ผลิตโดยโรงงาน (อาจพบข้อบกพร่องจำนวนเท่าใดก็ได้บนชิป และข้อบกพร่องแต่ละข้อไม่ขึ้นกับข้อบกพร่องอื่นๆ)

ให้ $p(k,n)$ แทนความน่าจะเป็นที่จะมีchipที่มีข้อบกพร่องอย่างน้อย 3 รายการ ตัวอย่างเช่น $p(3,7) ≈ 0.0204081633$

หา $p(20\\,000, 1\\,000\\,000)$ และให้คำตอบของคุณเป็นทศนิยม 10 ตำแหน่งในรูปแบบ 0.abcdefghij

# --hints--

`chipDefects()` ควร return `0.7311720251`.

```js
assert.strictEqual(chipDefects(), 0.7311720251);
```

# --seed--

## --seed-contents--

```js
function chipDefects() {

  return true;
}

chipDefects();
```

# --solutions--

```js
// solution required
```
