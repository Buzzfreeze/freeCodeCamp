---
id: 5900f50a1000cf542c51001c
title: 'Problem 413: One-child Numbers'
challengeType: 5
forumTopicId: 302082
dashedName: problem-413-one-child-numbers
---

# --description--

ตัวเลขบวก $d$-digit (ไม่มีเลขศูนย์นำหน้า) เป็นตัวเลขลูกเดียว ถ้าหนึ่งในสตริงย่อยของมันถูกหารด้วย $d$ ลงตัว

ตัวอย่างเช่น 5671 เป็นตัวเลขลูกเดียว 4 หลัก ในบรรดาสตริงย่อยทั้งหมด 5, 6, 7, 1, 56, 67, 71, 567, 671 และ 5671 มีเพียง 56 เท่านั้นที่หารด้วย 4

ในทำนองเดียวกัน 104 เป็นตัวเลขลูกเดียว 3 หลักเพราะมีเพียง 0 เท่านั้นที่หารด้วย 3 ได้ 1132451 เป็นตัวเลขลูกเดียว 7 หลักเพราะมีเพียง 245 ที่หารด้วย 7 ลงตัว

ให้ $F(N)$ เป็นจำนวนลูกคนเดียวที่น้อยกว่า $N$ เราสามารถยืนยันได้ว่า $F(10) = 9$, $F({10}^3) = 389$ and $F({10}^7) = 277\\,674$

หา $F({10}^{19})$.

# --hints--

`oneChildNumbers()` ควร return `3079418648040719`.

```js
assert.strictEqual(oneChildNumbers(), 3079418648040719);
```

# --seed--

## --seed-contents--

```js
function oneChildNumbers() {

  return true;
}

oneChildNumbers();
```

# --solutions--

```js
// solution required
```
