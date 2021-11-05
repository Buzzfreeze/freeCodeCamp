---
id: 5900f49b1000cf542c50ffad
title: 'Problem 302: Strong Achilles Numbers'
challengeType: 5
forumTopicId: 301956
dashedName: problem-302-strong-achilles-numbers
---

# --description--

จำนวนเต็มบวก $n$ จะมีประสิทธิภาพถ้า $p^2$ เป็นตัวหารของ $n$ สำหรับทุกปัจจัยเฉพาะ $p$ ใน $n$

จำนวนเต็มบวก $n$ เป็นกำลังสมบูรณ์ ถ้า $n$ สามารถแสดงเป็นกำลังของจำนวนเต็มบวกอื่นได้

จำนวนเต็มบวก $n$ คือจำนวน Achilles ถ้า $n$ ทรงพลังแต่ไม่ใช่กำลังสมบูรณ์ ตัวอย่างเช่น 864 และ 1800 เป็นตัวเลขจุดอ่อน: $864 = 2^5 \times 3^3$ และ $1800 = 2^3 \times 3^2 \times 5^2$

เราจะเรียกจำนวนเต็มบวก $S$ เป็นจำนวนStrong Achilles numbers ถ้าทั้ง $S$ และ $φ(S)$ เป็นจำนวนจุดอ่อน $φ$ หมายถึง ฟังก์ชันtotientของออยเลอร์

ตัวอย่างเช่น 864 เป็นตัวเลขStrong Achilles numbers: $φ(864) = 288 = 2^5 \times 3^2$ อย่างไรก็ตาม 1800 ไม่ใช่ตัวเลขStrong Achilles numbersเพราะ: $φ(1800) = 480 = 2^5 \times 3^1 \times 5^1$

มีตัวเลขStrong Achilles numbers 7 ตัวที่ต่ำกว่า ${10}^4$ และ 656 ต่ำกว่า ${10}^8$

จำนวนStrong Achilles numbersมีจำนวนเท่าใดที่ต่ำกว่า ${10}^{18}$

# --hints--

`strongAchillesNumbers()` ควร return `1170060`.

```js
assert.strictEqual(strongAchillesNumbers(), 1170060);
```

# --seed--

## --seed-contents--

```js
function strongAchillesNumbers() {

  return true;
}

strongAchillesNumbers();
```

# --solutions--

```js
// solution required
```
