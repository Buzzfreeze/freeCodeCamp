---
id: 5900f4b01000cf542c50ffc2
title: 'Problem 323: Bitwise-OR operations on random integers'
challengeType: 5
forumTopicId: 301980
dashedName: problem-323-bitwise-or-operations-on-random-integers
---

# --description--

ให้ $y_0, y_1, y_2, \ldots$ เป็นลำดับของจำนวนเต็ม 32 บิตที่ไม่ได้ลงนามแบบสุ่ม

(เช่น $0 ≤ y_i &lt; 2^{32}$ ทุกค่ามีโอกาสเท่าเทียมกัน)

สำหรับลำดับ $x_i$ มีการเรียกซ้ำดังต่อไปนี้:

- $x_0 = 0$ และ
- $x_i = x_{i - 1} \mathbf{|} y_{i - 1}$ สำหรับ $i > 0$ ($\mathbf{|}$ เป็นตัวดำเนินการระดับบิต-OR)

จะเห็นได้ว่าในที่สุดจะมีดัชนี $N$ ซึ่ง $x_i = 2^{32} - 1$ (รูปแบบบิตของทั้งหมด) สำหรับ $i ≥ N$ ทั้งหมด

หาค่าที่คาดหวังของ $N$ ให้คำตอบของคุณปัดเศษเป็น 10 หลักหลังจุดทศนิยม

# --hints--

`bitwiseOrOnRandomIntegers()` ควร return `6.3551758451`.

```js
assert.strictEqual(bitwiseOrOnRandomIntegers(), 6.3551758451);
```

# --seed--

## --seed-contents--

```js
function bitwiseOrOnRandomIntegers() {

  return true;
}

bitwiseOrOnRandomIntegers();
```

# --solutions--

```js
// solution required
```
