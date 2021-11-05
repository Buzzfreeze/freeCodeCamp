---
id: 5900f5461000cf542c510058
title: 'Problem 473: Phigital number base'
challengeType: 5
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

ให้ $\varphi$ เป็น golden ratio $\varphi = \frac{1+\sqrt{5}}{2}.$

เป็นไปได้อย่างน่าทึ่งที่จะเขียนจำนวนเต็มบวกทั้งหมดเป็นผลรวมของกำลังของ $\varphi$ แม้ว่าเราต้องการให้ทุก ๆ ยกกำลังของ $\varphi$ ถูกใช้อย่างมากที่สุดครั้งเดียวในผลรวมนี้

ถึงอย่างนั้นการแสดงนี้ก็ไม่ซ้ำกัน

เราสามารถทำให้เป็นเอกลักษณ์ได้โดยกำหนดให้ไม่ใช้กำลังที่มีเลขชี้กำลังต่อเนื่องกัน และการแสดงมีขอบเขตจำกัด

เช่น

$2 = \varphi + \varphi^{-2}$ and $3 = \varphi^{2} + \varphi^{-2}$

เพื่อแสดงผลรวมของกำลังของ $\varphi$ เราใช้สตริงของ 0 และ 1 โดยมีจุดเพื่อระบุว่าเลขชี้กำลังลบเริ่มต้นที่ใด เราเรียกสิ่งนี้ว่าการแทนค่าในฐานตัวเลขตัวเลข

ดังนั้น $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ และ $14 = 100100.001001_{\varphi}$ สตริงที่แทน 1, 2 และ 14 ในฐานตัวเลข phigital เป็น palindromic ในขณะที่สตริงแทน 3 ไม่ใช่ (จุดฟิจิทัลไม่ใช่อักขระกลาง)

ผลรวมของจำนวนเต็มบวกไม่เกิน 1,000 ซึ่งแทนค่า phigital คือ palindromic คือ 4345

หาผลรวมของจำนวนเต็มบวกไม่เกิน $10^{10}$ ซึ่งการแทนค่าเลขฐานสิบหกคือpalindromic

# --hints--

`phigitalNumberBase()` ควร return `35856681704365`.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
