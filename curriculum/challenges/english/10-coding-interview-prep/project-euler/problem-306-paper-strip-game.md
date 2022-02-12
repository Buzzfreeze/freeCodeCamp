---
id: 5900f49f1000cf542c50ffb1
title: 'Problem 306: Paper-strip Game'
challengeType: 5
forumTopicId: 301960
dashedName: problem-306-paper-strip-game
---

# --description--

เกมต่อไปนี้เป็นตัวอย่างคลาสสิกของทฤษฎีเกมผสมผสาน (Combinatorial Game Theory):

ผู้เล่นสองคนเริ่มต้นด้วยแถบสี่เหลี่ยมสีขาว $n$ และผลัดกันสลับกัน ในแต่ละเทิร์น ผู้เล่นจะเลือกช่องสี่เหลี่ยมสีขาวสองช่องที่ติดกันและทาให้เป็นสีดำ ผู้เล่นคนแรกที่ไม่สามารถลงสีได้จะแพ้

- $n = 1$: ไม่สามารถลงสีได้ ดังนั้นผู้เล่นคนแรกจะแพ้โดยอัตโนมัติ
- $n = 2$: ลงสีได้หนึ่งแบบ หลังจากนั้นผู้เล่นคนที่สองแพ้
- $n = 3$: ลงสีได้สองแบบ แต่ไม่ว่าจะเป็นแบบไหน ผู้เล่นคนที่สองก็จะแพ้
- $n = 4$: ผู้เล่นคนแรกลงสีได้สามแบบ ซึ่งจะชนะถ้าลงสีสองช่องตรงกลาง
- $n = 5$: ผู้เล่นคนแรกลงสีได้สี่แบบ (แสดงเป็นสีแดงด้านล่าง); แต่ไม่ว่าผู้เล่นจะทำอะไร ผู้เล่นคนที่สอง (สีน้ำเงิน) ก็จะชนะ

<img class="img-responsive center-block" alt="valid starting moves for strip with 5 squares" src="https://cdn.freecodecamp.org/curriculum/project-euler/paper-strip-game.gif" style="background-color: white; padding: 10px;">

ดังนั้น ถ้า $1 ≤ n ≤ 5$ มี $n$ ได้ 3 แบบที่ผู้เล่นคนแรกจะชนะแน่นอน

ถ้า $1 ≤ n ≤ 50$ มี  $n$ ได้ 40 แบบที่ผู้เล่นคนแรกจะชนะแน่นอน

ถ้า $1 ≤ n ≤ 1\\,000\\,000$ มี $n$ ได้กี่แบบที่ผู้เล่นคนแรกจะชนะแน่นอน

# --hints--

`paperStripGame()` ต้องคืนค่าเป็น `852938`

```js
assert.strictEqual(paperStripGame(), 852938);
```

# --seed--

## --seed-contents--

```js
function paperStripGame() {

  return true;
}

paperStripGame();
```

# --solutions--

```js
// solution required
```
