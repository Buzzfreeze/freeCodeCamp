---
id: 5900f50f1000cf542c510021
title: 'Problem 418: Factorisation triples'
challengeType: 5
forumTopicId: 302087
dashedName: problem-418-factorisation-triples
---

# --description--

ให้ $n$ เป็นจำนวนเต็มบวก จำนวนเต็มสามเท่า ($a$, $b$, $c$) เรียกว่าตัวประกอบสามเท่าของ $n$ ถ้า:

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$.

กำหนด $f(n)$ ให้เป็น $a + b + c$ สำหรับการแยกตัวประกอบสามเท่า ($a$, $b$, $c$) ของ $n$ ซึ่งย่อให้เล็กสุด $\frac{c}{a}$ หนึ่งสามารถแสดงให้เห็นว่าสามนี้มีเอกลักษณ์เฉพาะ

ตัวอย่างเช่น $f(165) = 19$, $f(100\\,100) = 142$ และ $f(20!) = 4\\,034\\,872$

หา $f(43!)$

# --hints--

`factorisationTriples()` ควร return `1177163565297340400`.

```js
assert.strictEqual(factorisationTriples(), 1177163565297340400);
```

# --seed--

## --seed-contents--

```js
function factorisationTriples() {

  return true;
}

factorisationTriples();
```

# --solutions--

```js
// solution required
```
