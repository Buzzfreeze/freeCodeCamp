---
id: 5900f4b91000cf542c50ffcc
title: 'Problem 333: Special partitions'
challengeType: 5
forumTopicId: 301991
dashedName: problem-333-special-partitions
---

# --description--

จำนวนเต็มบวกทั้งหมดสามารถแบ่งพาร์ติชันในลักษณะที่แต่ละเทอมของพาร์ติชันสามารถแสดงเป็น $2^i \times 3^j$ โดยที่ $i, j ≥ 0$

ลองพิจารณาเฉพาะpartitionที่ไม่มีเงื่อนไขใดสามารถแบ่งเงื่อนไขอื่นใดได้ ตัวอย่างเช่น พาร์ติชันของ $17 = 2 + 6 + 9 = (2^1 \times 3^0 + 2^1 \times 3^1 + 2^0 \times 3^2)$ จะไม่ถูกต้องเนื่องจาก 2 สามารถ หาร 6 partition $17 = 16 + 1 = (2^4 \times 3^0 + 2^0 \times 3^0)$ ก็เช่นกัน เนื่องจาก 1 สามารถหาร 16 ได้ partitionที่ถูกต้องของ 17 คือ $8 + 9 = (2^3 \คูณ 3^0 + 2^0 \คูณ 3^2)$

จำนวนเต็มจำนวนมากมีpartitionที่ถูกต้องมากกว่าหนึ่งpartition โดยอันแรกคือ 11 partitionที่มีสองpartitionต่อไปนี้

$$\begin{align}
  & 11 = 2 + 9 = (2^1 \times 3^0 + 2^0 \times 3^2) \\\\
  & 11 = 8 + 3 = (2^3 \times 3^0 + 2^0 \times 3^1)
\end{align}$$

กำหนด $P(n)$ เป็นจำนวนpartitionที่ถูกต้องของ $n$ ตัวอย่างเช่น $P(11) = 2$

ลองพิจารณาเฉพาะจำนวนเฉพาะจำนวนเฉพาะ $q$ ซึ่งจะมีpartitionที่ถูกต้องเพียงpartitionเดียว เช่น $P(17)$

ผลรวมของจำนวนเฉพาะ $q &lt;100$ โดยที่ $P(q) = 1$ เท่ากับ 233

หาผลรวมของจำนวนเฉพาะ $q &lt; 1\\,000\\,000$ โดยที่ $P(q) = 1$

# --hints--

`specialPartitions()` ควร return `3053105`.

```js
assert.strictEqual(specialPartitions(), 3053105);
```

# --seed--

## --seed-contents--

```js
function specialPartitions() {

  return true;
}

specialPartitions();
```

# --solutions--

```js
// solution required
```
