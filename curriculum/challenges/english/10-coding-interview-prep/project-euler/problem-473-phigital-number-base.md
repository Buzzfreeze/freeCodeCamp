---
id: 5900f5461000cf542c510058
title: 'Problem 473: Phigital number base'
challengeType: 5
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

ให้ $\varphi$ เป็น golden ratio $\varphi = \frac{1+\sqrt{5}}{2}.$

เราสามารถเขียนจำนวนเต็มบวกทั้งหมด เป็นผลรวมของกำลังของ $\varphi$ ได้ ถึงแม้ว่าเราจะใช้เลขใน $\varphi$ แค่ตัวละครั้ง

เราสามารถทำให้ไม่ใช้กำลังที่มีเลขชี้กำลังต่อเนื่องกัน และการแสดงมีขอบเขตจำกัดได้ด้วย

เช่น

$2 = \varphi + \varphi^{-2}$ and $3 = \varphi^{2} + \varphi^{-2}$

เพื่อแสดงผลรวมของกำลังของ $\varphi$ เราใช้สตริงของ 0 และ 1 โดยมีจุดเพื่อระบุว่าเลขชี้กำลังลบเริ่มต้นที่ใด เราเรียกสิ่งนี้ว่าตัวเลขฐาน phigital

ดังนั้น $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ และ $14 = 100100.001001_{\varphi}$  
สตริงที่แสดงค่า 1, 2 และ 14 ในตัวเลขฐาน phigital เป็น palindrome ในขณะที่สตริงที่แสดงค่า 3 ไม่ใช่ 

ผลรวมของจำนวนเต็มบวกไม่เกิน 1,000 ซึ่งค่า phigital เป็น palindrome คือ 4345

หาผลรวมของจำนวนเต็มบวกไม่เกิน $10^{10}$ ซึ่งค่า phigital เป็น palindrome

# --hints--

`phigitalNumberBase()` ต้องคืนค่าเป็น `35856681704365`

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
