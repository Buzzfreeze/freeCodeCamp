---
id: 5900f4831000cf542c50ff95
title: 'Problem 278: Linear Combinations of Semiprimes'
challengeType: 5
forumTopicId: 301928
dashedName: problem-278-linear-combinations-of-semiprimes
---

# --description--

ห้ค่าของจำนวนเต็ม $1 &lt; a_1 &lt; a_2 &lt; \ldots &lt; a_n$ พิจารณาผลรวมเชิงเส้น $q_1a_1 + q_2a_2 + \ldots + q_na_n = b$ โดยใช้เฉพาะค่าจำนวนเต็ม $q_k ≥ 0$

โปรดทราบว่าสำหรับชุดของ $a_k$ ที่กำหนด อาจเป็นไปได้ว่าค่า $b$ อาจไม่ครบทุกค่า ตัวอย่างเช่น ถ้า $a_1 = 5$ และ $a_2 = 7$ ไม่มี $q_1 ≥ 0$ และ $q_2 ≥ 0$ ที่ $b$ อาจเป็น 1, 2, 3, 4, 6, 8, 9 , 11, 13, 16, 18 หรือ 23.

อันที่จริง 23 เป็นค่าที่เป็นไปไม่ได้มากที่สุดของ $b$ สำหรับ $a_1 = 5$ และ $a_2 = 7$ ดังนั้นเราจึงเรียก $f(5, 7) = 23$ ในทำนองเดียวกัน สามารถแสดงได้ว่า $f(6, 10, 15)=29$ และ $f(14, 22, 77) = 195$

หา $\sum f(pq,pr,qr)$ โดยที่ $p$, $q$ และ $r$ เป็นจำนวนเฉพาะและ $p &lt; ถาม &lt; ร &lt; 5000$.

# --hints--

`linearCombinationOfSemiprimes()` ควร return `1228215747273908500`.

```js
assert.strictEqual(linearCombinationOfSemiprimes(), 1228215747273908500);
```

# --seed--

## --seed-contents--

```js
function linearCombinationOfSemiprimes() {

  return true;
}

linearCombinationOfSemiprimes();
```

# --solutions--

```js
// solution required
```
