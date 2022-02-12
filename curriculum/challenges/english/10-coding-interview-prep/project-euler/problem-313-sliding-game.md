---
id: 5900f4a61000cf542c50ffb8
title: 'Problem 313: Sliding game'
challengeType: 5
forumTopicId: 301969
dashedName: problem-313-sliding-game
---

# --description--

ในเกมเลื่อน ตัวนับอาจเลื่อนในแนวนอนหรือแนวตั้งเข้าไปในพื้นที่ว่าง วัตถุประสงค์ของเกมคือการย้ายตัวนับสีแดงจากมุมซ้ายบนของตารางไปที่มุมล่างขวา ช่องว่างเริ่มต้นที่มุมล่างขวาเสมอ  
เช่น ลำดับภาพต่อไปนี้ แสดงให้เห็นว่าเกมสามารถเล่นให้จบได้อย่างไรในการขยับห้าครั้งบนตาราง 2 คูณ 2

<img class="img-responsive center-block" alt="completing game in five moves on grid 2x2" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-1.gif" style="background-color: white; padding: 10px;">

ให้ $S(m, n)$ แทนจำนวนการขยับขั้นต่ำเพื่อจบเกมในตาราง $m$ คูณ $n$  
เช่น สามารถยืนยันได้ว่า $S(5, 4) = 25$

<img class="img-responsive center-block" alt="initial grid state and final grid state for game on grid 5x4" src="https://cdn.freecodecamp.org/curriculum/project-euler/sliding-game-2.gif" style="background-color: white; padding: 10px;">

มีกริด 5482 แบบที่ $S(m, n) = p^2$ โดยที่ $p &lt; 100$ เป็นจำนวนเฉพาะ

$S(m, n) = p^2$ มีกริดกี่กริด โดยที่ $p &lt; {10}^6$ เป็นจำนวนเฉพาะ

# --hints--

`slidingGame()` ต้องคืนค่าเป็น `2057774861813004`

```js
assert.strictEqual(slidingGame(), 2057774861813004);
```

# --seed--

## --seed-contents--

```js
function slidingGame() {

  return true;
}

slidingGame();
```

# --solutions--

```js
// solution required
```
