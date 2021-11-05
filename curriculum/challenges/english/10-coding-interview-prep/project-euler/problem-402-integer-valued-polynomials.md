---
id: 5900f4ff1000cf542c510011
title: 'Problem 402: Integer-valued polynomials'
challengeType: 5
forumTopicId: 302070
dashedName: problem-402-integer-valued-polynomials
---

# --description--

สามารถแสดงว่าพหุนาม $n^4 + 4n^3 + 2n^2 + 5n$ เป็นผลคูณของ 6 สำหรับทุกจำนวนเต็ม $n$ นอกจากนี้ยังสามารถแสดงให้เห็นว่า 6 เป็นจำนวนเต็มที่มากที่สุดที่ตรงตามคุณสมบัตินี้

กำหนด $M(a, b, c)$ เป็นค่าสูงสุด $m$ โดยที่ $n^4 + an^3 + bn^2 + cn$ เป็นผลคูณของ $m$ สำหรับจำนวนเต็มทั้งหมด $n$ ตัวอย่างเช่น $M(4, 2, 5) = 6$

นอกจากนี้ ให้กำหนด $S(N)$ เป็นผลรวมของ $M(a, b, c)$ สำหรับ $0 ทั้งหมด &lt; a, b, c ≤ N$

เราสามารถยืนยันได้ว่า $S(10) = 1\\,972$ และ $S(10\\,000) = 2\\,024\\,258\\,331\\,114$

ให้ $F_k$ เป็นลำดับFibonacci:

- $F_0 = 0$, $F_1 = 1$ and
- $F_k = F_{k - 1} + F_{k - 2}$ for $k ≥ 2$.

ค้นหา 9 หลักสุดท้ายของ $\sum S(F_k)$ สำหรับ $2 ≤ k ≤ 1\\,234\\,567\\,890\\,123$

# --hints--

`integerValuedPolynomials()` ควร return `356019862`.

```js
assert.strictEqual(integerValuedPolynomials(), 356019862);
```

# --seed--

## --seed-contents--

```js
function integerValuedPolynomials() {

  return true;
}

integerValuedPolynomials();
```

# --solutions--

```js
// solution required
```
