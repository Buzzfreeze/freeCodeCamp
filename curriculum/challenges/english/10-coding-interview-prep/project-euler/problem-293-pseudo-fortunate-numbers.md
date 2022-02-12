---
id: 5900f4931000cf542c50ffa4
title: 'Problem 293: Pseudo-Fortunate Numbers'
challengeType: 5
forumTopicId: 301945
dashedName: problem-293-pseudo-fortunate-numbers
---

# --description--

ให้ $N$ เป็นจำนวนเต็มบวกที่เป็นค่าคู่ โดยจะถูกเรียกว่า admissible ถ้าเป็นเลขยกกำลัง 2 หรือตัวประกอบเฉพาะที่แตกต่างกันนั้น เป็นจำนวนเฉพาะที่ต่อเนื่องกัน

admissible number 12 ตัวแรกคือ 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36, 48

ถ้า $N$ เป็น admissible number แล้ว $M > 1$ เป็นจำนวนเต็มที่น้อยที่สุด โดย $N + M$ เป็นจำนวนเฉพาะ จะถูกเรียกว่า pseudo-Fortunate สำหรับ $N$

เช่น $N = 630$ เป็น admissible number เนื่องจากเป็นจำนวนคู่ และตัวประกอบจำนวนเฉพาะที่แตกต่างกัน คือจำนวนเฉพาะที่ต่อเนื่องกัน (2, 3, 5 และ 7) จำนวนเฉพาะตัวถัดไปหลังจาก 631 คือ 641  
ดังนั้น pseudo-Fortunate สำหรับ 630 คือ $M = 11$ จะเห็นได้ว่า pseudo-Fortunate สำหรับ 16 คือ 3

หาผลรวมของตัวเลข pseudo-Fortunate ที่มี admissible numbers $N$ น้อยกว่า ${10}^9$

# --hints--

`pseudoFortunateNumbers()` ต้องคืนค่าเป็น `2209`

```js
assert.strictEqual(pseudoFortunateNumbers(), 2209);
```

# --seed--

## --seed-contents--

```js
function pseudoFortunateNumbers() {

  return true;
}

pseudoFortunateNumbers();
```

# --solutions--

```js
// solution required
```
