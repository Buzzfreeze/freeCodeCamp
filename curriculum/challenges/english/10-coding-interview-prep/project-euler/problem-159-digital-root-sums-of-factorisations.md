---
id: 5900f40c1000cf542c50ff1e
title: 'Problem 159: Digital root sums of factorisations'
challengeType: 5
forumTopicId: 301790
dashedName: problem-159-digital-root-sums-of-factorisations
---

# --description--

จำนวนประกอบสามารถแยกตัวประกอบได้หลายวิธี

ตัวอย่างเช่น ไม่รวมการคูณด้วยหนึ่ง 24 สามารถแยกตัวประกอบใน 7 วิธีที่แตกต่างกัน:

$$\begin{align}
  & 24 = 2 \times 2 \times 2 \times 3\\\\
  & 24 = 2 \times 3 \times 4  \\\\
  & 24 = 2 \times 2 \times 6  \\\\
  & 24 = 4 \times 6    \\\\
  & 24 = 3 \times 8    \\\\
  & 24 = 2 \times 12   \\\\
  & 24 = 24
\end{align}$$

รากดิจิทัลของตัวเลขในฐาน 10 นั้นหาได้จากการบวกตัวเลขของตัวเลขนั้นเข้าด้วยกัน และทำซ้ำกระบวนการนั้นจนกระทั่งตัวเลขนั้นน้อยกว่า 10 ดังนั้นรากดิจิทัลของ 467 จึงเป็น 8

เราจะเรียกผลรวมรากดิจิทัล (DRS) ว่าผลรวมของรากดิจิทัลของปัจจัยแต่ละส่วนในจำนวนของเรา แผนภูมิด้านล่างแสดงค่า DRS ทั้งหมดสำหรับ 24

| Factorisation | Digital Root Sum |
|---------------|------------------|
|    2x2x2x3    |        9         |
|     2x3x4     |        9         |
|     2x2x6     |        10        |
|      4x6      |        10        |
|      3x8      |        11        |
|      2x12     |        5         |
|      24       |        6         |


ผลรวมรากดิจิทัลสูงสุดของ 24 คือ 11 ฟังก์ชัน $mdrs(n)$ ให้ผลรวมรากดิจิทัลสูงสุดของ $n$ ดังนั้น $mdrs(24) = 11$

หา $\sum{mdrs(n)}$ สำหรับ $1 &lt; น &lt; 1,000,000$.

# --hints--

`euler159()` ควร return `14489159`.

```js
assert.strictEqual(euler159(), 14489159);
```

# --seed--

## --seed-contents--

```js
function euler159() {

  return true;
}

euler159();
```

# --solutions--

```js
// solution required
```
