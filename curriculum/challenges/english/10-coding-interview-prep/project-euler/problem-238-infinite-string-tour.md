---
id: 5900f45b1000cf542c50ff6d
title: 'Problem 238: Infinite string tour'
challengeType: 5
forumTopicId: 301883
dashedName: problem-238-infinite-string-tour
---

# --description--

สร้างลำดับของตัวเลขโดยใช้ตัวสร้างตัวเลขสุ่มหลอก "Blum Blum Shub":

$$
s_0 = 14025256 \\\\
s_{n + 1} = {s_n}^2 \\; mod \\; 20\\,300\\,713
$$

เชื่อมตัวเลขเหล่านี้ $s_0s_1s_2\ldots$ เพื่อสร้างstring $w$ ที่มีความยาวไม่จำกัด จากนั้น $w = 14025256741014958470038053646\ldots$

สำหรับจำนวนเต็มบวก $k$ หากไม่มีsubstringของ $w$ โดยมีผลรวมของตัวเลขเท่ากับ $k$ $p(k)$ ถูกกำหนดให้เป็นศูนย์ หากมีอย่างน้อยหนึ่งsubstringของ $w$ โดยมีผลรวมของตัวเลขเท่ากับ $k$ เราจะกำหนด $p(k) = z$ โดยที่ $z$ เป็นตำแหน่งเริ่มต้นของsubstringแรกสุดดังกล่าว

ตัวอย่างเช่น:
substring 1, 14, 1402, … โดยมีผลรวมของตัวเลขตามลำดับเท่ากับ 1, 5, 7, ... เริ่มต้นที่ตำแหน่ง 1 ดังนั้น $p(1) = p(5) = p(7) = \ldots = 1$ .

substring 4, 402, 4025, … โดยมีผลรวมของตัวเลขตามลำดับเท่ากับ 4, 6, 11, ... เริ่มต้นที่ตำแหน่ง 2 ดังนั้น $p(4) = p(6) = p(11) = \ldots = 2$ .

substring 02, 0252, … โดยมีผลรวมของตัวเลขตามลำดับเท่ากับ 2, 9, … เริ่มต้นที่ตำแหน่ง 3 ดังนั้น $p(2) = p(9) = \ldots = 3$

โปรดทราบว่าsubstring 025 เริ่มต้นที่ตำแหน่ง 3 มีผลรวมของตัวเลขเท่ากับ 7 แต่มีsubstringก่อนหน้า (เริ่มต้นที่ตำแหน่ง 1) โดยมีผลรวมของตัวเลขเท่ากับ 7 ดังนั้น $p(7) = 1$ ไม่ใช่ 3.

เราตรวจสอบได้ในราคา $0 &lt; k ≤ {10}^3$, $\sum p(k) = 4742$
Find $\sum p(k)$, for $0 &lt; k ≤ 2 \times {10}^{15}$.

# --hints--

`infiniteStringTour()` ควร return `9922545104535660`.

```js
assert.strictEqual(infiniteStringTour(), 9922545104535660);
```

# --seed--

## --seed-contents--

```js
function infiniteStringTour() {

  return true;
}

infiniteStringTour();
```

# --solutions--

```js
// solution required
```
