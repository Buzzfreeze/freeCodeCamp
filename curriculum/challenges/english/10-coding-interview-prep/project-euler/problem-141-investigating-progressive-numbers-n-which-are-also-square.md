---
id: 5900f3f91000cf542c50ff0b
title: 'Problem 141: Investigating progressive numbers, n, which are also square'
challengeType: 5
forumTopicId: 301770
dashedName: problem-141-investigating-progressive-numbers-n-which-are-also-square
---

# --description--

จำนวนเต็มบวก $n$ หารด้วย $d$ และผลหารและเศษที่เหลือคือ $q$ และ $r$ ตามลำดับ นอกจากนี้ $d$, $q$ และ $r$ เป็นพจน์จำนวนเต็มบวกต่อเนื่องกันในลำดับเรขาคณิต แต่ไม่จำเป็นต้องอยู่ในลำดับนั้น

ตัวอย่างเช่น 58 หารด้วย 6 มีผลหาร 9 และเศษ 4 จะเห็นได้ว่า 4, 6, 9 เป็นพจน์ที่ต่อเนื่องกันในลำดับเรขาคณิต (อัตราส่วนร่วม $\frac{3}{2}$) 

เราจะเรียกตัวเลขดังกล่าวว่า $n$ ก้าวหน้า

จำนวนก้าวหน้าบางจำนวน เช่น 9 และ 10404 = ${102}^2$ ก็เป็นกำลังสองสมบูรณ์เช่นกัน ผลรวมของกำลังสองสมบูรณ์ก้าวหน้าทั้งหมดที่ต่ำกว่าหนึ่งแสนคือ 124657

หาผลรวมของกำลังสองสมบูรณ์แบบก้าวหน้าทั้งหมดที่ต่ำกว่าหนึ่งล้านล้าน (${10}^{12}$)

# --hints--

`progressivePerfectSquares()` ควร return `878454337159`.

```js
assert.strictEqual(progressivePerfectSquares(), 878454337159);
```

# --seed--

## --seed-contents--

```js
function progressivePerfectSquares() {

  return true;
}

progressivePerfectSquares();
```

# --solutions--

```js
// solution required
```
