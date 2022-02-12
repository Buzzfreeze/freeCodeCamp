---
id: 5900f5111000cf542c510023
title: 'Problem 420: 2x2 positive integer matrix'
challengeType: 5
forumTopicId: 302090
dashedName: problem-420-2x2-positive-integer-matrix
---

# --description--

เมทริกซ์จำนวนเต็มบวก คือเมทริกซ์ที่มีองค์ประกอบเป็นจำนวนเต็มบวกทั้งหมด

เมทริกซ์จำนวนเต็มบวกบางตัว สามารถแสดงเป็นกำลังสองของเมทริกซ์จำนวนเต็มบวกได้สองวิธี เช่น

$$\begin{pmatrix}
  40 & 12 \\\\
  48 & 40
\end{pmatrix} =
{\begin{pmatrix}
  2 & 3 \\\\
 12 & 2
\end{pmatrix}}^2 =
{\begin{pmatrix}
  6 & 1 \\\\
  4 & 6
\end{pmatrix}}^2$$

เรากำหนด $F(N)$ เป็นจำนวนของเมทริกซ์จำนวนเต็มบวก 2x2 ซึ่งน้อยกว่า N และสามารถแสดงเป็นกำลังสองของเมทริกซ์จำนวนเต็มบวก ในสองวิธีที่ต่างกันได้

ซึ่ง $F(50) = 7$ และ $F(1000) = 1019$

ให้หา $F({10}^7)$

# --hints--

`positiveIntegerMatrix()` ต้องคืนค่าเป็น `145159332`

```js
assert.strictEqual(positiveIntegerMatrix(), 145159332);
```

# --seed--

## --seed-contents--

```js
function positiveIntegerMatrix() {

  return true;
}

positiveIntegerMatrix();
```

# --solutions--

```js
// solution required
```
