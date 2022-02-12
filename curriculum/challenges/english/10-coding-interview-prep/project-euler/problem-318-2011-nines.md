---
id: 5900f4ab1000cf542c50ffbd
title: 'Problem 318: 2011 nines'
challengeType: 5
forumTopicId: 301974
dashedName: problem-318-2011-nines
---

# --description--

พิจารณาจำนวนจริง $\sqrt{2} + \sqrt{3}$

เมื่อเราคำนวณกำลังคู่ของ $\sqrt{2} + \sqrt{3}$ เราจะได้:

$$\begin{align}
  & {(\sqrt{2} + \sqrt{3})}^2 = 9.898979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^4 = 97.98979485566356\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^6 = 969.998969071069263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^8 = 9601.99989585502907\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{10} = 95049.999989479221\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{12} = 940897.9999989371855\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{14} = 9313929.99999989263\ldots \\\\
  & {(\sqrt{2} + \sqrt{3})}^{16} = 92198401.99999998915\ldots \\\\
\end{align}$$

ดูเหมือนว่าจำนวนที่ต่อเนื่องกันที่จุดเริ่มต้น ของส่วนที่เป็นเศษส่วนของกำลังเหล่านี้จะไม่ลดลง  
เราสามารถพิสูจน์ได้ว่าเศษส่วนของ ${(\sqrt{2} + \sqrt{3})}^{2n}$ เข้าใกล้ 1 เมื่อ $n$ ที่มีค่ามาก

พิจารณาจำนวนจริงทั้งหมดของรูปแบบ $\sqrt{p} + \sqrt{q}$ ด้วยจำนวนเต็มบวก $p$ และ $q$ และ $p &lt; q$ เพื่อให้เศษส่วนของ ${(\sqrt{p} + \sqrt{q})}^{2n}$ เข้าใกล้ 1 เมื่อ $n$ ที่มีค่ามาก

ให้ $C(p,q,n)$ เป็นจำนวนที่ต่อเนื่องกันที่จุดเริ่มต้นของส่วนที่เป็นเศษส่วนของ ${(\sqrt{p} + \sqrt{q})}^{2n}$

ให้ $N(p,q)$ เป็นค่าต่ำสุดของ $n$ เพื่อให้ $C(p,q,n) ≥ 2011$

ให้หา $\sum N(p,q)$ ถ้า $p + q ≤ 2011$

# --hints--

`twoThousandElevenNines()` ต้องคืนค่าเป็น `709313889`

```js
assert.strictEqual(twoThousandElevenNines(), 709313889);
```

# --seed--

## --seed-contents--

```js
function twoThousandElevenNines() {

  return true;
}

twoThousandElevenNines();
```

# --solutions--

```js
// solution required
```
