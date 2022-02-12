---
id: 5900f5181000cf542c51002a
title: 'Problem 427: n-sequences'
challengeType: 5
forumTopicId: 302097
dashedName: problem-427-n-sequences
---

# --description--

ลำดับของจำนวนเต็ม $S = \\{s_i\\}$ เรียกว่า $n$-sequence หากมีองค์ประกอบ $n$ และแต่ละองค์ประกอบ $s_i$ เป็นไปตาม $1 ≤ s_i ≤ n$  
ดังนั้นจึงมี $n$-sequence ที่แตกต่างกันทั้งหมด $n^n$ ตัว

เช่น ลำดับ $S = \\{1, 5, 5, 10, 7, 7, 7, 2, 3, 7\\}$ คือ 10-sequence

สำหรับลำดับ $S$ ใดๆ ให้ $L(S)$ เป็นความยาวของลำดับย่อยที่ต่อเนื่องกันที่ยาวที่สุดของ $S$ ด้วยค่าเดียวกัน  
เช่น กำหนดให้ลำดับ $S$ ด้านบน จะมี $L(S) = 3$ เนื่องจาก 7 ตัวติดต่อกันสามตัว

ให้ $f(n) = \sum L(S)$ สำหรับ $n$-sequence ทั้งหมด $S$

เช่น $f(3) = 45$, $f(7) = 1\\,403\\,689$ และ $f(11) = 481\\,496\\,895\\,121$

ให้หา $f(7\\,500\\,000)\bmod 1\\,000\\,000\\,009$

# --hints--

`nSequences()` ต้องคืนค่าเป็น `97138867`

```js
assert.strictEqual(nSequences(), 97138867);
```

# --seed--

## --seed-contents--

```js
function nSequences() {

  return true;
}

nSequences();
```

# --solutions--

```js
// solution required
```
