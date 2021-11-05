---
id: 5900f4141000cf542c50ff26
title: 'Problem 167: Investigating Ulam sequences'
challengeType: 5
forumTopicId: 301801
dashedName: problem-167-investigating-ulam-sequences
---

# --description--

สำหรับจำนวนเต็มบวกสองตัว $a$ และ $b$ ลำดับ Ulam $U(a,b)$ ถูกกำหนดโดย ${U{(a,b)}\_1} = a$, ${U{(a, b)}\_2} = b$ และสำหรับ $k > 2$ ${U{(a,b)}\_k}$ เป็นจำนวนเต็มที่น้อยที่สุดที่มากกว่า ${U{(a,b)}\_{ (k-1)}}$ ซึ่งสามารถเขียนในลักษณะเดียวกับผลรวมของสองสมาชิกก่อนหน้าที่แตกต่างกันของ $U(a,b)$

ตัวอย่างเช่น ลำดับ $U(1,2)$ เริ่มต้นด้วย

$$1, 2, 3 = 1 + 2, 4 = 1 + 3, 6 = 2 + 4, 8 = 2 + 6, 11 = 3 + 8$$

5 ไม่ได้เป็นของมันเพราะ $5 = 1 + 4 = 2 + 3$ มีสองการแสดงเป็นผลรวมของสมาชิกก่อนหน้านี้สองคน เช่นเดียวกัน $7 = 1 + 6 = 3 + 4$

หา $\sum {U(2, 2n + 1)_k}$ สำหรับ $2 ≤ n ≤ 10$ โดยที่ $k = {10}^{11}$

# --hints--

`ulamSequences()` ควร return `3916160068885`.

```js
assert.strictEqual(ulamSequences(), 3916160068885);
```

# --seed--

## --seed-contents--

```js
function ulamSequences() {

  return true;
}

ulamSequences();
```

# --solutions--

```js
// solution required
```
