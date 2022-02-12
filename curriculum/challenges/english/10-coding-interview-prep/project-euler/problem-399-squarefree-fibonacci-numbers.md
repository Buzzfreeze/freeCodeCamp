---
id: 5900f4fc1000cf542c51000e
title: 'Problem 399: Squarefree Fibonacci Numbers'
challengeType: 5
forumTopicId: 302064
dashedName: problem-399-squarefree-fibonacci-numbers
---

# --description--

เลข fibonacci 15 ตัวแรกคือ:

$$1,1,2,3,5,8,13,21,34,55,89,144,233,377,610.$$

จะเห็นได้ว่า 8 และ 144 ไม่เป็น squarefree เพราะ 8 หารด้วย 4 ลงตัว และ 144 หารด้วย 4 ลงตัวกับ 9 ลงตัว

ดังนั้นเลข fibonacci 13 ตัวแรกที่เป็น squarefree คือ:

$$1,1,2,3,5,13,21,34,55,89,233,377 \text{และ} 610.$$

เลข fibonacci ที่เป็น squarefree ตัวที่ $200$ คือ: 971183874599339129547649988289594072811608739584170445 ตัวเลขสิบหกหลักสุดท้ายของเลขนี้คือ 1608739584170445 และในสัญกรณ์วิทยาศาสตร์ เลขนี้สามารถเขียนได้เป็น `9.7e53`

ให้หาเลข fibonacci ที่ squarefree ตัวที่ $100\\,000\\,000$ 

ให้ตอบเป็นสตริง โดยเป็นตัวเลขสิบหกหลักสุดท้าย ตามด้วยเครื่องหมายคอมม่า ตามด้วยเลขแบบสัญกรณ์วิทยาศาสตร์ 

เช่น squarefree ตัวที่ $200$ คำตอบจะเป็นดังนี้ `1608739584170445,9.7e53`

**Note:** สำหรับปัญหานี้ สมมติว่าทุกจำนวนเฉพาะของ $p$ เลข fibonacci แรกที่หารด้วย $p$ จะหารด้วย $p^2$ ไม่ลงตัว (นี่เป็นส่วนหนึ่งของการคาดเดาของวอลล์) สิ่งนี้ได้รับการตรวจสอบสำหรับจำนวนเฉพาะ $≤ 3 \times {10}^{15}$ แต่ยังไม่ได้รับการพิสูจน์โดยทั่วไป

ถ้าการคาดเดาเป็นเท็จ คำตอบที่ยอมรับสำหรับปัญหานี้ไม่รับประกันว่าจะเป็นเลข fibonacci ที่เป็น squarefree ตัวที่ $100\\,000\\,000$ จริงๆ แต่จะแสดงเพียงขอบเขตล่างสำหรับตัวเลขนั้น

# --hints--

`squarefreeFibonacciNumbers()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof squarefreeFibonacciNumbers() === 'string');
```

`squarefreeFibonacciNumbers()` ต้องคืนค่าเป็นสตริง `1508395636674243,6.5e27330467`

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
