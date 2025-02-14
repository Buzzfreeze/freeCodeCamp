---
id: 5900f5371000cf542c51004a
title: 'Problem 459: Flipping game'
challengeType: 5
forumTopicId: 302133
dashedName: problem-459-flipping-game
---

# --description--

เกมพลิกเป็นเกมผู้เล่นสองคนที่เล่นบนกระดานสี่เหลี่ยม $N$ โดย $N$

แต่ละตารางมีดิสก์ที่มีด้านหนึ่งเป็นสีขาวและด้านหนึ่งเป็นสีดำ

เกมเริ่มต้นด้วยดิสก์ทั้งหมดที่แสดงด้านสีขาว

ในแต่ละเทิร์น จะทำการการพลิกดิสก์ทั้งหมด ในรูปสี่เหลี่ยมผืนผ้าที่มีคุณสมบัติดังต่อไปนี้:

- มุมขวาบนของสี่เหลี่ยมผืนผ้ามีดิสก์สีขาว
- ความกว้างของสี่เหลี่ยมผืนผ้าเป็นสี่เหลี่ยมจัตุรัสที่สมบูรณ์แบบ (1, 4, 9, 16, ...)
- ความสูงของสี่เหลี่ยมผืนผ้าคือตัวเลขสามเหลี่ยม (1, 3, 6, 10, ...)

<img class="img-responsive center-block" alt="flipping all disks in a 4x3 rectangle on a 5x5 board" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-1.png" style="background-color: white; padding: 10px;">

ผู้เล่นสลับกัน ผู้เล่นที่ชนะคือคนที่เปลี่ยนตารางเป็นสีดำทั้งหมด

ให้ $W(N)$ เป็นจำนวนการเล่นที่ชนะสำหรับผู้เล่นคนแรกบนกระดานขนาด $N$ x $N$ โดยที่ดิสก์ทั้งหมดเป็นสีขาว ถือว่าเล่นได้สมบูรณ์แบบ

$W(1) = 1$, $W(2) = 0$, $W(5) = 8$ และ $W({10}^2) = 31\\,395$.

ถ้า $N = 5$ การเล่นแปดแบบแรกของผู้เล่นคนแรกที่ชนะคือ:

<img class="img-responsive center-block" alt="eight winning first moves for N = 5" src="https://cdn.freecodecamp.org/curriculum/project-euler/flipping-game-2.png" style="background-color: white; padding: 10px;">

ให้หา $W({10}^6)$

# --hints--

`flippingGame()` ต้องคืนค่าเป็น `3996390106631`

```js
assert.strictEqual(flippingGame(), 3996390106631);
```

# --seed--

## --seed-contents--

```js
function flippingGame() {

  return true;
}

flippingGame();
```

# --solutions--

```js
// solution required
```
