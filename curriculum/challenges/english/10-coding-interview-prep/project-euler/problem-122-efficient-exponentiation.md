---
id: 5900f3e61000cf542c50fef9
title: 'Problem 122: Efficient exponentiation'
challengeType: 5
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

วิธีคำนวณที่ไร้เดียงสาที่สุด $n^{15}$ ต้องการการคูณสิบสี่:

$$n × n × \ldots × n = n^{15}$$

แต่โดยใช้วิธี "binary" คุณสามารถคำนวณได้หกคูณ:

$$\begin{align}
  & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\
  & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\
  & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15}
\end{align}$$

อย่างไรก็ตาม ยังสามารถคำนวณได้ด้วยการคูณห้าครั้งเท่านั้น:
$$\begin{align}
  & n × n = n^2\\\\
  & n^2 × n = n^3\\\\
  & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\
  & n^{12} × n^3 = n^{15}
\end{align}$$

เราจะกำหนด $m(k)$ ให้เป็นจำนวนขั้นต่ำของการคูณในการคำนวณ $n^k$; ตัวอย่างเช่น $m(15) = 5$.

สำหรับ $1 ≤ k ≤ 200$ หา $\sum{m(k)}$

# --hints--

`efficientExponentation()` ควร return `1582`.

```js
assert.strictEqual(efficientExponentation(), 1582);
```

# --seed--

## --seed-contents--

```js
function efficientExponentation() {

  return true;
}

efficientExponentation();
```

# --solutions--

```js
// solution required
```
