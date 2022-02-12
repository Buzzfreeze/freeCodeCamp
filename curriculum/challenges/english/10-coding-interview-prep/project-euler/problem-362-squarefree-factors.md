---
id: 5900f4d61000cf542c50ffe9
title: 'Problem 362: Squarefree factors'
challengeType: 5
forumTopicId: 302023
dashedName: problem-362-squarefree-factors
---

# --description--

พิจารณาหมายเลข 54

54 สามารถแยกตัวประกอบโดยมีตัวประกอบมากกว่า 1 ตัวได้ 7 แบบ :

$$54, 2 × 27, 3 × 18, 6 × 9, 3 × 3 × 6, 2 × 3 × 9 \text{ and } 2 × 3 × 3 × 3$$

หากเราต้องการให้ตัวประกอบเป็นกำลังสองทั้งหมด จะเหลือเพียงสองวิธีเท่านั้น: $3 × 3 × 6$ และ $2 × 3 × 3 × 3$

เรียก $Fsf(n)$ ว่าจำนวนวิธีที่ $n$ สามารถแยกตัวประกอบเป็นปัจจัยกำลังสองได้ ดังนั้น $Fsf(54) = 2$

ให้ $S(n)$ เป็น $\sum Fsf(k)$ ถ้า $k = 2$ ถึง $n$

$S(100) = 193$

ให้หา $S(10\\,000\\,000\\,000)$

# --hints--

`squarefreeFactors()` ต้องคืนค่าเป็น `457895958010`

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
