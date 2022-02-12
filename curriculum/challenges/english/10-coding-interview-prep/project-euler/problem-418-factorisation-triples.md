---
id: 5900f50f1000cf542c510021
title: 'Problem 418: Factorisation triples'
challengeType: 5
forumTopicId: 302087
dashedName: problem-418-factorisation-triples
---

# --description--

ให้ $n$ เป็นจำนวนเต็มบวก  
triplet ของจำนวนเต็ม ($a$, $b$, $c$) เรียกว่า triplet ตัวประกอบของ $n$ ถ้า:

- $1 ≤ a ≤ b ≤ c$
- $a \times b \times c = n$.

กำหนด $f(n)$ ให้เป็น $a + b + c$ ของ triplet ตัวประกอบ ($a$, $b$, $c$) ของ $n$ ซึ่งย่อสมการได้เป็น $\frac{c}{a}$ 


เช่น $f(165) = 19$, $f(100\\,100) = 142$ และ $f(20!) = 4\\,034\\,872$

ให้หา $f(43!)$

# --hints--

`factorisationTriples()` ต้องคืนค่าเป็น `1177163565297340400`

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
