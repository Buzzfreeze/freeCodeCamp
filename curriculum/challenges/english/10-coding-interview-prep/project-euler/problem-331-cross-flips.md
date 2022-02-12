---
id: 5900f4b71000cf542c50ffca
title: 'Problem 331: Cross flips'
challengeType: 5
forumTopicId: 301989
dashedName: problem-331-cross-flips
---

# --description--

แผ่นดิสก์ขนาด N×N วางบนกระดานเกมสี่เหลี่ยม แต่ละดิสก์มีด้านดำและด้านขาว

ในแต่ละเทิร์น คุณสามารถเลือกดิสก์และพลิกดิสก์ทั้งหมดในแถวเดียวกันและคอลัมน์เดียวกับดิสก์นี้: ดังนั้นดิสก์ $2 × N - 1$ จะถูกพลิก เกมจะจบลงเมื่อดิสก์ทั้งหมดแสดงด้านสีขาว ตัวอย่างต่อไปนี้แสดงเกมบนกระดาน 5×5

<img class="img-responsive center-block" alt="animation showing game on 5x5 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/cross-flips.gif" style="background-color: white; padding: 10px;">

สามารถพิสูจน์ได้ว่า 3 เป็นจำนวนเทิร์นที่น้อยที่สุดในการจบเกมนี้

ดิสก์ด้านล่างซ้ายบนกระดาน $N×N$ มีพิกัด (0, 0); ดิสก์ด้านล่างขวามีพิกัด ($N - 1$,$0$) และดิสก์บนซ้ายมีพิกัด ($0$,$N - 1$)

ให้ $C_N$ เป็นการเตรียมตารางต่อไปนี้ ของบอร์ดที่มีดิสก์ $N × N$ :  
ดิสก์ที่ ($x$, $y$) จะเป็นสีดำถ้า $N - 1 \le \sqrt{x^2 + y^2} \ lt N$ ไม่อย่าองนั้นจะแสดงด้านสีขาว

$C_5$ แสดงไว้ด้านบน

ให้ $T(N)$ เป็นจำนวนรอบขั้นต่ำในการจบเกมโดยเริ่มจากการเตรียมตาราง $C_N$ หรือ 0 ถ้า $C_N$ ไม่สามารถหาคำตอบได้ 

เราได้แสดงให้เห็นว่า $T(5) = 3$ คุณยังได้รับว่า $T(10) = 29$ และ $T(1\\,000) = 395\\,253$

หา $\displaystyle \sum_{i = 3}^{31} T(2^i - i)$

# --hints--

`crossFlips()` ต้องคืนค่าเป็น `467178235146843500`

```js
assert.strictEqual(crossFlips(), 467178235146843500);
```

# --seed--

## --seed-contents--

```js
function crossFlips() {

  return true;
}

crossFlips();
```

# --solutions--

```js
// solution required
```
