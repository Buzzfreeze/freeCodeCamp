---
id: 5900f53b1000cf542c51004d
title: 'Problem 462: Permutation of 3-smooth numbers'
challengeType: 5
forumTopicId: 302137
dashedName: problem-462-permutation-of-3-smooth-numbers
---

# --description--

จำนวน 3-smooth เป็นจำนวนเต็มที่ไม่มีตัวประกอบเฉพาะที่มากกว่า 3 สำหรับจำนวนเต็ม $N$ กำหนดให้ $S(N)$ เป็นเซตของตัวเลข 3-smooth ตัวที่น้อยกว่าหรือเท่ากับ $N$ 

เช่น $S(20) = \\{1, 2, 3, 4, 6, 8, 9, 12, 16, 18\\}$

กำหนดให้ $F(N)$ เป็นจำนวนการ permutation ของ $S(N)$ ซึ่งแต่ละองค์ประกอบมาหลังจากตัวหารที่เหมาะสมทั้งหมด

นี่เป็นหนึ่งในการเรียง permutation ที่เป็นไปได้สำหรับ $N = 20$.

-   1, 2, 4, 3, 9, 8, 16, 6, 18, 12.

นี่ไม่ใช่การเรียง permutation ที่ถูกต้องเพราะ 12 มาก่อนตัวหาร 6.

-   1, 2, 4, 3, 9, 8, 12, 16, 6, 18.

ทำให้ได้ $F(6) = 5$, $F(8) = 9$, $F(20) = 450$ และ $F(1000) ≈ 8.8521816557e\\,21$.

หา $F({10}^{18})$ ให้คำตอบเป็นโดยตอบเป็นสตริงในรูปแบบสัญกรณ์วิทยาศาสตร์ โดยปัดเศษเป็นสิบหลักหลังจุดทศนิยม 

ใหนการตอบให้ใช้ตัวพิมพ์เล็ก `e` เพื่อแยก mantissa และเลขชี้กำลังออก 

เช่น ถ้าคำตอบคือ $112\\,233\\,445\\,566\\,778\\,899$ รูปแบบคำตอบจะเป็น `1.1223344557e17`

# --hints--

`permutationOf3SmoothNumbers()` ต้องคืนค่าเป็นสตริง

```js
assert.strictEqual(typeof permutationOf3SmoothNumbers() === 'string');
```

`permutationOf3SmoothNumbers()` ต้องคืนค่าเป็นสตริง `5.5350769703e1512`

```js
assert.strictEqual(permutationOf3SmoothNumbers(), '5.5350769703e1512');
```

# --seed--

## --seed-contents--

```js
function permutationOf3SmoothNumbers() {

  return true;
}

permutationOf3SmoothNumbers();
```

# --solutions--

```js
// solution required
```
