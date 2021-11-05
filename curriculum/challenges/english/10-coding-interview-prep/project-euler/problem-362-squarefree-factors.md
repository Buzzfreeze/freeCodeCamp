---
id: 5900f4d61000cf542c50ffe9
title: 'Problem 362: Squarefree factors'
challengeType: 5
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

พิจารณาหมายเลข 54

54 สามารถแยกตัวประกอบใน 7 วิธีที่แตกต่างกันออกเป็นปัจจัยหนึ่งตัวหรือมากกว่าที่มากกว่า 1:

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ and } 2 × 3 × 3 × 3$$

หากเราต้องการให้ตัวประกอบเป็นสี่เหลี่ยมจัตุรัสทั้งหมด จะเหลือเพียงสองวิธีเท่านั้น: $3 × 3 × 6$ และ $2 × 3 × 3 × 3$

เรียก $Fsf(n)$ ว่าจำนวนวิธีที่ $n$ สามารถแยกตัวประกอบเป็นปัจจัยสี่เหลี่ยมจัตุรัสที่มากกว่า 1 ได้หนึ่งตัวหรือมากกว่า ดังนั้น $Fsf(54) = 2$

ให้ $S(n)$ เป็น $\sum Fsf(k)$ สำหรับ $k = 2$ ถึง $n$

$S(100) = 193$.

หา $S(10\\,000\\,000\\,000)$.

# --hints--

`squarefreeFactors()` ควร return `457895958010`.

```js
assert.strictEqual(squarefreeFactors(), 457895958010);
```

# --seed--

## --seed-contents--

```js
function squarefreeFactors() {

  return true;
}

squarefreeFactors();
```

# --solutions--

```js
// solution required
```
