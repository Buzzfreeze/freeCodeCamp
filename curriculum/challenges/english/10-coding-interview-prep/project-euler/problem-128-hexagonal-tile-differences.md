---
id: 5900f3ec1000cf542c50feff
title: 'Problem 128: Hexagonal tile differences'
challengeType: 5
forumTopicId: 301755
dashedName: problem-128-hexagonal-tile-differences
---

# --description--

กระเบื้องหกเหลี่ยมที่มีหมายเลข 1 ล้อมรอบด้วยวงแหวนหกเหลี่ยมหกแผ่น เริ่มที่ "12 นาฬิกา" และนับแผ่นกระเบื้อง 2 ถึง 7 ในทิศทางทวนเข็มนาฬิกา

มีการเพิ่มวงแหวนใหม่ในลักษณะเดียวกัน โดยวงแหวนถัดไปจะมีหมายเลข 8 ถึง 19, 20 ถึง 37, 38 ถึง 61 เป็นต้น แผนภาพด้านล่างแสดงวงแหวนสามวงแรก

<img class="img-responsive center-block" alt="three first rings of arranged hexagonal tiles with numbers 1 to 37, and with highlighted tiles 8 and 17" src="https://cdn.freecodecamp.org/curriculum/project-euler/hexagonal-tile-differences.png" style="background-color: white; padding: 10px;">

โดยการค้นหาความแตกต่างระหว่างไทล์ $n$ และเพื่อนบ้านทั้งหกราย เราจะกำหนด $PD(n)$ เป็นจำนวนของความแตกต่างเหล่านั้นซึ่งเป็นจำนวนเฉพาะ

ตัวอย่างเช่น การทำงานตามเข็มนาฬิการอบๆ ไทล์ 8 ความแตกต่างคือ 12, 29, 11, 6, 1 และ 13 ดังนั้น $PD(8) = 3$

ในทำนองเดียวกัน ความแตกต่างรอบไทล์ 17 คือ 1, 17, 16, 1, 11 และ 10 ดังนั้น $PD(17) = 2$

สามารถแสดงให้เห็นได้ว่าค่าสูงสุดของ $PD(n)$ คือ $3$

หากไทล์ทั้งหมดที่ $PD(n) = 3$ เรียงตามลำดับจากน้อยไปมาก ไทล์ที่ 10 จะเป็น 271
หาไทล์ที่ 2000 ในลำดับนี้

# --hints--

`hexagonalTile()` ควร return `14516824220`.

```js
assert.strictEqual(hexagonalTile(), 14516824220);
```

# --seed--

## --seed-contents--

```js
function hexagonalTile() {

  return true;
}

hexagonalTile();
```

# --solutions--

```js
// solution required
```
