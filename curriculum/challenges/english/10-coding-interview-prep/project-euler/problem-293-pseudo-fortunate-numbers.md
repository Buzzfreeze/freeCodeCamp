---
id: 5900f4931000cf542c50ffa4
title: 'Problem 293: Pseudo-Fortunate Numbers'
challengeType: 5
forumTopicId: 301945
dashedName: problem-293-pseudo-fortunate-numbers
---

# --description--

จำนวนเต็มบวกที่เป็นค่าคู่ $N$ จะถูกเรียกว่า admissible ถ้ามันเป็นเลขยกกำลัง 2 หรือตัวประกอบเฉพาะที่แตกต่างกันนั้นเป็นจำนวนเฉพาะที่ต่อเนื่องกัน

ตัวเลขที่อนุญาตสิบสองตัวแรกคือ 2, 4, 6, 8, 12, 16, 18, 24, 30, 32, 36, 48

ถ้ายอมรับ $N$ จำนวนเต็มที่น้อยที่สุด $M > 1$ ที่ $N + M$ เป็นจำนวนเฉพาะ จะถูกเรียกว่าpseudo-Fortunate สำหรับ $N$

ตัวอย่างเช่น $N = 630$ เป็นที่ยอมรับได้เนื่องจากเป็นจำนวนคู่และปัจจัยเฉพาะที่แตกต่างกันคือจำนวนเฉพาะที่ต่อเนื่องกัน 2, 3, 5 และ 7 จำนวนเฉพาะตัวถัดไปหลังจาก 631 คือ 641; ดังนั้นเpseudo-Fortunate สำหรับ 630 คือ $M = 11$ จะเห็นได้ว่าpseudo-Fortunate สำหรับ 16 คือ 3

หาผลรวมของตัวเลขpseudo-Fortunateที่แตกต่างกันทั้งหมดสำหรับadmissible numbers $N$ น้อยกว่า ${10}^9$

# --hints--

`pseudoFortunateNumbers()` ควร return `2209`.

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
