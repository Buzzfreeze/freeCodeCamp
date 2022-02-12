---
id: 5900f4fe1000cf542c510010
title: 'Problem 400: Fibonacci tree game'
challengeType: 5
forumTopicId: 302067
dashedName: problem-400-fibonacci-tree-game
---

# --description--

Fibonacci tree เป็น

- $T(0)$ เป็น Fibonacci tree ที่ว่างเปล่า
- $T(1)$ เป็นไบนารีทรีที่มีโหนดเดียวเท่านั้น
- $T(k)$ ประกอบด้วยรูทโหนดที่มี $T(k - 1)$ และ $T(k - 2)$ เป็นเด็ก

บน Fibonacci tree ดังกล่าว ผู้เล่นสองคนเล่นเกมซื้อกลับบ้าน ในแต่ละเทิร์น ผู้เล่นจะเลือกโหนดและลบโหนดนั้นพร้อมกับทรีย่อยที่รูทที่โหนดนั้น ผู้เล่นที่ถูกบังคับให้ใช้รูทโหนดของ Fibonacci tree ทั้งหมดจะแพ้

นี่คือเล่นที่ชนะของผู้เล่นคนแรกในเทิร์นแรกสำหรับ $T(k)$ จาก $k = 1$ ถึง $k = 6$

<img class="img-responsive center-block" alt="winning moves of first player, on the first turn for k = 1 to k = 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/fibonacci-tree-game.png" style="background-color: white; padding: 10px;">

ให้ $f(k)$ เป็นจำนวนท่าที่ชนะของผู้เล่นคนแรก (เช่น ท่าที่ผู้เล่นคนที่สองไม่มีกลยุทธ์ในการชนะ) ในเทิร์นแรกของเกมเมื่อเกมนี้เล่นบน $T(k)$

เช่น $f(5) = 1$ และ $f(10) = 17$

ให้หา $f(10000)$ โดยตอบเป็นเลข 16 หลักสุดท้าย

# --hints--

`fibonacciTreeGame()` ต้องคืนค่าเป็น `438505383468410600`

```js
assert.strictEqual(fibonacciTreeGame(), 438505383468410600);
```

# --seed--

## --seed-contents--

```js
function fibonacciTreeGame() {

  return true;
}

fibonacciTreeGame();
```

# --solutions--

```js
// solution required
```
