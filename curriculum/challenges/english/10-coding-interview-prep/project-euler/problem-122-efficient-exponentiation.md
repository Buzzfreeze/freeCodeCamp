---
id: 5900f3e61000cf542c50fef9
title: 'Problem 122: Efficient exponentiation'
challengeType: 5
forumTopicId: 301749
dashedName: problem-122-efficient-exponentiation
---

# --description--

วิธีคำนวณ $n^{15}$ ที่ง่ายที่สุดคือ

$$n × n × \ldots × n = n^{15}$$

ซึ่งจะต้องทำการคูณ 15 ครั้ง
แต่ถ้าใช้วิธี "binary" จะต้องคูณแค่หกครั้ง:

$$\begin{align}
  & n × n = n^2\\\\
  & n^2 × n^2 = n^4\\\\
  & n^4 × n^4 = n^8\\\\
  & n^8 × n^4 = n^{12}\\\\
  & n^{12} × n^2 = n^{14}\\\\
  & n^{14} × n = n^{15}
\end{align}$$

ถ้าจะคูณแค่ห้าครั้งก็ได้:
$$\begin{align}
  & n × n = n^2\\\\
  & n^2 × n = n^3\\\\
  & n^3 × n^3 = n^6\\\\
  & n^6 × n^6 = n^{12}\\\\
  & n^{12} × n^3 = n^{15}
\end{align}$$

เราจะกำหนด $m(k)$ ให้เป็นจำนวนขั้นต่ำของการคูณในการคำนวณ $n^k$ เช่น $m(15) = 5$.

ถ้า $1 ≤ k ≤ 200$   
ให้หา $\sum{m(k)}$

# --hints--

`efficientExponentation()` ต้องคืนค่าเป็น `1582`

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
