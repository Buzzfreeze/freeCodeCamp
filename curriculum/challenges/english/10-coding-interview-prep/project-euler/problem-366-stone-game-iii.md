---
id: 5900f4da1000cf542c50ffed
title: 'Problem 366: Stone Game III'
challengeType: 5
forumTopicId: 302027
dashedName: problem-366-stone-game-iii
---

# --description--

ผู้เล่นสองคนคือ Anton และ Bernhard กำลังเล่นเกมต่อไปนี้

มีก้อนหิน $n$ ก้อน หนึ่งกอง

ผู้เล่นคนแรกสามารถเอาหินออกได้ แต่ต้องไม่หมดกอง

หลังจากนั้น ผู้เล่นแต่ละคนสามารถเอาหินออกได้ เป็นสองเท่าของจำนวนหินที่คู่ต่อสู้ของเขาทำในครั้งก่อน

ผู้เล่นที่เอาหินก้อนสุดท้ายออกจะเป็นผู้ชนะ

เช่น $n = 5$

หากผู้เล่นคนแรกเอาหินออกมากกว่าหนึ่งก้อน ผู้เล่นคนต่อไปจะสามารถเอาหินที่เหลือทั้งหมดออกได้

ถ้าผู้เล่นคนแรกเอาหินออกหนึ่งก้อน จะเหลือสี่ก้อน แล้วฝ่ายตรงข้ามก็จะหยิบหินออกหนึ่งก้อนด้วย จะเหลือหินสามก้อน

ผู้เล่นคนแรกไม่สามารถหยิบทั้งสามก้อนได้ เพราะเขาอาจหยิบได้มากสุด $2 \times 1 = 2$ ก้อน สมมุติว่าเขาเอาหินไปหนึ่งก้อน เหลือ 2 ก้อน

ผู้เล่นคนที่สองสามารถหยิบหินสองก้อนที่เหลือและชนะได้

ดังนั้น 5 จึงเป็นตำแหน่งที่แพ้สำหรับผู้เล่นคนแรก

สำหรับตำแหน่งที่ชนะบางตำแหน่ง มีการย้ายที่เป็นไปได้มากกว่าหนึ่งครั้งสำหรับผู้เล่นคนแรก

เช่น. เมื่อ $n = 17$ ผู้เล่นคนแรกสามารถถอดหินได้หนึ่งหรือสี่ก้อน

ให้ $M(n)$ เป็นจำนวนหินสูงสุดที่ผู้เล่นคนแรกสามารถรับได้จากตำแหน่งที่ชนะในเทิร์นแรกของเขา และ $M(n) = 0$ สำหรับตำแหน่งอื่น

$\sum M(n)$ ถ้า $n ≤ 100$ คือ 728

ให้หา $\sum M(n)$ ถ้า $n ≤ {10}^{18}$ และให้ตอบโดย mod กับ ${10}^8$

# --hints--

`stoneGameThree()` ต้องคืนค่าเป็น `88351299`

```js
assert.strictEqual(stoneGameThree(), 88351299);
```

# --seed--

## --seed-contents--

```js
function stoneGameThree() {

  return true;
}

stoneGameThree();
```

# --solutions--

```js
// solution required
```
