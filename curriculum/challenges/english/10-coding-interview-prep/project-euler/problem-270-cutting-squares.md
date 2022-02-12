---
id: 5900f47c1000cf542c50ff8e
title: 'Problem 270: Cutting Squares'
challengeType: 5
forumTopicId: 301920
dashedName: problem-270-cutting-squares
---

# --description--

กระดาษสี่เหลี่ยมจัตุรัสที่มีขนาดเป็นจำนวนเต็ม $N×N$  
วางอยู่บนมุมที่จุดเริ่มต้นและด้านสองด้านตามแนวแกน $x$ และ $y$ จากนั้นเราตัดกระกาษตามกฎต่อไปนี้:

- เราตัดตรงระหว่างจุดสองจุดที่อยู่บนด้านต่างๆ ของสี่เหลี่ยมจัตุรัสและมีพิกัดเป็นจำนวนเต็มเท่านั้น
- การตัดไม่สามารถทับกันได้ แต่อาจมีการตัดหลายครั้งที่จุดเชื่อมเดียวกันได้
- ดำเนินการต่อไปจนกว่าจะไม่มีการตัดตามกฏได้อีกต่อไป

การนับการสะท้อนหรือการหมุนใดๆ ให้ชัดเจน เราเรียก $C(N)$ ว่าจำนวนวิธีในการตัด $N×N$ สี่เหลี่ยมจัตุรัส 

เช่น $C(1) = 2$ และ $C(2) = 30$ (แสดงด้านล่าง)

<img class="img-responsive center-block" alt="ways to cut 2x2 square, counting reflections and rotations as distinct" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-squares.gif" style="background-color: white; padding: 10px;">

ให้หาค่าของ $C(30)\bmod {10}^8$

# --hints--

`cuttingSquares()` ต้องคืนค่าเป็น `82282080`

```js
assert.strictEqual(cuttingSquares(), 82282080);
```

# --seed--

## --seed-contents--

```js
function cuttingSquares() {

  return true;
}

cuttingSquares();
```

# --solutions--

```js
// solution required
```
