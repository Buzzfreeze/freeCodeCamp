---
id: 5900f4301000cf542c50ff42
title: 'Problem 196: Prime triplets'
challengeType: 5
forumTopicId: 301834
dashedName: problem-196-prime-triplets
---

# --description--

สร้างสามเหลี่ยมจากจำนวนเต็มบวกทั้งหมดด้วยวิธีต่อไปนี้:

$$\begin{array}{rrr}
  &  1 \\\\
  &  \color{red}{2} &  \color{red}{3} \\\\
  &  4 & \color{red}{5} &  6 \\\\
  &  \color{red}{7} &  8 &  9 & 10 \\\\
  & \color{red}{11} & 12 & \color{red}{13} & 14 & 15  \\\\
  & 16 & \color{red}{17} & 18 & \color{red}{19} & 20 & 21 \\\\
  & 22 & \color{red}{23} & 24 & 25 & 26 & 27 & 28 \\\\
  & \color{red}{29} & 30 & \color{red}{31} & 32 & 33 & 34 & 35 & 36 \\\\
  & \color{red}{37} & 38 & 39 & 40 & \color{red}{41} & 42 & \color{red}{43} & 44 & 45 \\\\
  & 46 & \color{red}{47} & 48 & 49 & 50 & 51 & 52 & \color{red}{53} & 54 & 55 \\\\
  & 56 & 57 & 58 & \color{red}{59} & 60 & \color{red}{61} & 62 & 63 & 64 & 65 & 66 \\\\
  & \cdots
\end{array}$$

จำนวนเต็มบวกแต่ละตัวมีเลขที่อยู่ติดกันไม่เกินแปดตัวในรูปสามเหลี่ยม

ชุดของจำนวนเฉพาะสามจำนวนเรียกว่า prime triplet เฉพาะถ้าหนึ่งในสามจำนวนเฉพาะมีอีกสองตัวเป็นเลขที่อยู่ติดกันในรูปสามเหลี่ยม

เช่น ในแถวที่สอง จำนวนเฉพาะ 2 และ 3 เป็นองค์ประกอบของ prime triplet

หากพิจารณาแถวที่ 8 จะประกอบด้วยจำนวนเฉพาะสองจำนวนซึ่งเป็นองค์ประกอบของ prime triplet นั่นคือ 29 และ 31 หากพิจารณาถึงแถวที่ 9 จะมีเฉพาะจำนวนเฉพาะหนึ่งตัวซึ่งเป็นองค์ประกอบของกลุ่ม prime triplet คือ 37

กำหนดให้ $S(n)$ เป็นผลรวมของจำนวนเฉพาะในแถว $n$ ซึ่งเป็นองค์ประกอบของ prime triplet ถ้า $S(8) = 60$ และ $S(9) = 37$

กำหนดให้ $S(10000) = 950007619$

ให้หา $S(5678027) + S(7208785)$

# --hints--

`primeTriplets()` ต้องคืนค่าเป็น `322303240771079940`

```js
assert.strictEqual(primeTriplets(), 322303240771079940);
```

# --seed--

## --seed-contents--

```js
function primeTriplets() {

  return true;
}

primeTriplets();
```

# --solutions--

```js
// solution required
```
