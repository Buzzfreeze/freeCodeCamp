---
id: 5900f5151000cf542c510028
title: 'Problem 425: Prime connection'
challengeType: 5
forumTopicId: 302095
dashedName: problem-425-prime-connection
---

# --description--

$A$ และ $B$ เป็นตัวเลขบวกสองตัวที่ Connected (แสดงโดย "$A ↔ B$") หากเป็นไปตามเงื่อนไขข้อใดข้อหนึ่งต่อไปนี้:

1. $A$ และ $B$ มีความยาวเท่ากันและแตกต่างกันหลักเดียว เช่น $123 ↔ 173$
2. การเพิ่มหนึ่งหลักทางด้านซ้ายของ $A$ (หรือ $B$) ทำให้กลายเป็น $B$ (หรือ $A$) เช่น $23 ↔ 223$ และ $123 ↔ 23$

เราจะเรียกจำนวนเฉพาะ $P$ ว่าเป็น 2's relative ถ้ามีการ Connected จำนวนเฉพาะนี้กับเลข 2 ได้ในห่วงโซ่การ Connected โดยที่ไม่มีจำนวนเฉพาะไหนที่มากกว่าตัวนี้

เช่น 127 เป็น 2's relative โดยหนึ่งห่วงโซ่ที่เป็นไปได้แสดงไว้ด้านล่าง:
$$2 ↔ 3 ↔ 13 ↔ 113 ↔ 103 ↔ 107 ↔ 127$$

อย่างไรก็ตาม 11 และ 103 นั้นไม่เป็น 2's relative

ให้ $F(N)$ เป็นผลรวมของจำนวนเฉพาะ $≤ N$ ซึ่งไม่เป็น 2's relative 

โดย $F({10}^3) = 431$ และ $F({10}^4) = 78\\,728$

ให้หา $F({10}^7)$

# --hints--

`primeConnection()` ต้องคืนค่าเป็น `46479497324`

```js
assert.strictEqual(primeConnection(), 46479497324);
```

# --seed--

## --seed-contents--

```js
function primeConnection() {

  return true;
}

primeConnection();
```

# --solutions--

```js
// solution required
```
