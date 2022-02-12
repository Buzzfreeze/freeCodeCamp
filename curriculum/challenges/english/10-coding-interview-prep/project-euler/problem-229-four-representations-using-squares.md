---
id: 5900f4521000cf542c50ff64
title: 'Problem 229: Four Representations using Squares'
challengeType: 5
forumTopicId: 301872
dashedName: problem-229-four-representations-using-squares
---

# --description--

ลองดูเลข 3600:

$$\begin{align}
  & 3600 = {48}^2 + {36}^2   \\\\
  & 3600 = {20}^2 + {2×40}^2 \\\\
  & 3600 = {30}^2 + {3×30}^2 \\\\
  & 3600 = {45}^2 + {7×15}^2 \\\\
\end{align}$$

แล้วเราจะเห็นว่า $88201 = {99}^2 + {280}^2 = {287}^2 + 2 × {54}^2 = {283}^2 + 3 × {52}^2 = {197}^2 + 7 × {84}^2$

ในปี ค.ศ. 1747 ออยเลอร์ได้พิสูจน์ว่าตัวเลขใดแทนผลรวมของสองกำลังสอง เรามีความสนใจในตัวเลข $n$ ซึ่งยอมรับการเป็นตัวแทนของสี่ประเภทต่อไปนี้ทั้งหมด

$$\begin{align}
  & n = {a_1}^2 + {b_1}^2  \\\\
  & n = {a_2}^2 + 2{b_2}^2 \\\\
  & n = {a_3}^2 + 3{b_3}^2 \\\\
  & n = {a_7}^2 + 7{b_7}^2 \\\\
\end{align}$$

โดยที่ $a_k$ และ $b_k$ เป็นจำนวนเต็มบวก

มี 75373 ตัวเลขที่ไม่เกิน ${10}^7$

มีจำนวนแบบนี้กี่ตัวที่ไม่เกิน $2 × {10}^9$?

# --hints--

`representationsUsingSquares()` ต้องคืนค่าเป็น `11325263`

```js
assert.strictEqual(representationsUsingSquares(), 11325263);
```

# --seed--

## --seed-contents--

```js
function representationsUsingSquares() {

  return true;
}

representationsUsingSquares();
```

# --solutions--

```js
// solution required
```
