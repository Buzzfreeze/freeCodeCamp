---
id: 5900f5141000cf542c510027
title: 'Problem 423: Consecutive die throws'
challengeType: 5
forumTopicId: 302093
dashedName: problem-423-consecutive-die-throws
---

# --description--

ให้ $n$ เป็นจำนวนเต็มบวก

ลูกเต๋า 6 ด้านถูกโยน $n$ ครั้ง ให้ $c$ เป็นจำนวนคู่ของการโยนต่อเนื่องที่ให้ค่าเท่ากัน

เช่น ถ้า $n = 7$ และค่าของการโยนลูกเต๋าคือ (1, 1, 5, 6, 6, 6, 3) ดังนั้นคู่ต่อไปนี้ของการโยนลูกต่อเนื่องจะให้ค่าเดียวกัน

$$\begin{align}
  & (\underline{1}, \underline{1}, 5, 6, 6, 6, 3) \\\\
  & (1, 1, 5, \underline{6}, \underline{6}, 6, 3) \\\\
  & (1, 1, 5, 6, \underline{6}, \underline{6}, 3)
\end{align}$$

ดังนั้น, $c = 3$ เมื่อ (1, 1, 5, 6, 6, 6, 3)

กำหนด $C(n)$ เป็นจำนวนผลลัพธ์ของการโยนลูกเต๋า 6 ด้าน $n$ ครั้งเพื่อให้ $c$ ไม่เกิน $π(n)$<sup>1</sup>

เช่น $C(3) = 216$, $C(4) = 1290$, $C(11) = 361\\,912\\,500$ and $C(24) = 4\\,727\ \,547\\,363\\,281\\,250\\,000$.

กำหนดให้ $S(L)$ เป็น $\sum C(n)$ เมื่อ $1 ≤ n ≤ L$

เช่น $S(50)\bmod 1\\,000\\,000\\,007 = 832\\,833\\,871$

ให้หา $S(50\\,000\\,000)\bmod 1\\,000\\,000\\,007$

<sup>1</sup> $π$ หมายถึงฟังก์ชันการนับจำนวนเฉพาะ เช่น $π(n)$ คือจำนวนของจำนวนเฉพาะ $≤ n$

# --hints--

`consecutiveDieThrows()` ต้องคืนค่าเป็น `653972374`

```js
assert.strictEqual(consecutiveDieThrows(), 653972374);
```

# --seed--

## --seed-contents--

```js
function consecutiveDieThrows() {

  return true;
}

consecutiveDieThrows();
```

# --solutions--

```js
// solution required
```
