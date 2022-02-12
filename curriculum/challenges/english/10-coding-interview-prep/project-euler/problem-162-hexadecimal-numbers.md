---
id: 5900f40e1000cf542c50ff21
title: 'Problem 162: Hexadecimal numbers'
challengeType: 5
forumTopicId: 301796
dashedName: problem-162-hexadecimal-numbers
---

# --description--

ในระบบเลขฐานสิบหก ตัวเลขจะแสดงโดยใช้ตัวเลขที่แตกต่างกัน 16 หลัก:

$$0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F$$

AF เลขฐานสิบหกเมื่อเขียนในระบบเลขฐานสิบเท่ากับ $10 \times 16 + 15 = 175$

ในเลขฐานสิบหก 3 หลัก จะมี 10A, 1A0, A10 และ A01 ที่ใช้ 0,1 และ A ครบทุกแบบ

เช่นเดียวกับตัวเลขที่เขียนด้วยเลขฐานสิบ เราเขียนเลขฐานสิบหกโดยไม่มีเลขศูนย์นำหน้า

จำนวนเลขฐานสิบหกที่มีตัวเลขฐานสิบหกไม่เกินสิบหกตัวที่มีตัวเลขทั้งหมด 0,1 และ A อย่างน้อยหนึ่งครั้งมีกี่ตัว

ให้คำตอบของคุณเป็นเลขฐานสิบหกเป็นสตริง

**Note:** (A,B,C,D,E และ F เป็นตัวพิมพ์ใหญ่ โดยไม่มีรหัสนำหน้าหรือต่อท้ายที่ทำเครื่องหมายตัวเลขเป็นเลขฐานสิบหกและไม่มีศูนย์นำหน้า เช่น 1A3F และไม่ใช่: 1a3f และไม่ใช่ 0x1a3f และไม่ใช่ $1A3F และไม่ใช่ #1A3F และไม่ใช่ 0000001A3F)

# --hints--

`hexadecimalNumbers()` ต้องคืนค่าเป็นสตริง

```js
assert(typeof hexadecimalNumbers() === 'string');
```

`hexadecimalNumbers()` ต้องคืนค่าเป็นสตริง `3D58725572C62302`

```js
assert.strictEqual(hexadecimalNumbers(), '3D58725572C62302');
```

# --seed--

## --seed-contents--

```js
function hexadecimalNumbers() {

  return true;
}

hexadecimalNumbers();
```

# --solutions--

```js
// solution required
```
