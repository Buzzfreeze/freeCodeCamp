---
id: 5900f4fc1000cf542c51000e
title: 'Problem 399: Squarefree Fibonacci Numbers'
challengeType: 5
forumTopicId: 302064
dashedName: problem-399-squarefree-fibonacci-numbers
---

# --description--

fibonacci 15 ตัวแรกคือ:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

จะเห็นได้ว่า 8 และ 144 ไม่เป็นสี่เหลี่ยมจัตุรัส: 8 หารด้วย 4 ลงตัว และ 144 หารด้วย 4 ลงตัวกับ 9 ลงตัว

ดังนั้น ตัวเลขfibonacci 13 ตารางแรกฟรีคือ:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{ and } 610.$$

หมายเลขfibonacciสแควร์ฟรีที่ $200$ คือ: 971183874599339129547649988289594072811608739584170445 ตัวเลขสิบหกหลักสุดท้ายของหมายเลขนี้คือ 1608739584170445 และในสัญกรณ์วิทยาศาสตร์ หมายเลขนี้สามารถเขียนได้เป็น `9.7e53`

หาจำนวน $100\\,000\\,000$th squarefree fibonacci ให้คำตอบเป็นstringโดยมีตัวเลขสิบหกหลักสุดท้ายตามด้วยเครื่องหมายจุลภาคตามด้วยตัวเลขในscientific notation (ปัดเศษเป็นหนึ่งหลักหลังจุดทศนิยม) สำหรับหมายเลขสแควร์ฟรีที่ $200$ คำตอบจะเป็นดังนี้ `1608739584170445,9.7e53`

**Note:** สำหรับปัญหานี้ สมมติว่าสำหรับทุกจำนวนเฉพาะของ $p$ หมายเลขfibonacciแรกที่หารด้วย $p$ จะหารด้วย $p^2$ ไม่ลงตัว (นี่เป็นส่วนหนึ่งของการคาดเดาของวอลล์) สิ่งนี้ได้รับการตรวจสอบสำหรับจำนวนเฉพาะ $≤ 3 \times {10}^{15}$ แต่ยังไม่ได้รับการพิสูจน์โดยทั่วไป

ถ้ามันเกิดขึ้นว่าการคาดเดาเป็นเท็จ คำตอบที่ยอมรับสำหรับปัญหานี้ไม่รับประกันว่าจะเป็นตัวเลขfibonacciที่มีกำลังสอง $100\\,000\\,000$th แต่จะแสดงเพียงขอบเขตล่างสำหรับตัวเลขนั้น

# --hints--

`squarefreeFibonacciNumbers()` ควร return string.

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()` ควร return string `1508395636674243,6.5e27330467`.

```js
assert.strictEqual(squarefreeFibonacciNumbers(), '1508395636674243,6.5e27330467');
```

# --seed--

## --seed-contents--

```js
function squarefreeFibonacciNumbers() {

  return true;
}

squarefreeFibonacciNumbers();
```

# --solutions--

```js
// solution required
```
