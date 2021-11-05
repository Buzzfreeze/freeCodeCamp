---
id: 5900f4451000cf542c50ff57
title: 'Problem 216: Investigating the primality of numbers of the form 2n2-1'
challengeType: 5
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

พิจารณาตัวเลข $t(n)$ ของรูปแบบ $t(n) = 2n^2 - 1$ โดยที่ $n > 1$

ตัวเลขตัวแรกคือ 7, 17, 31, 49, 71, 97, 127 และ 161

ปรากฎว่าเพียง $49 = 7 \times 7$ และ $161 = 7 \times 23$ เท่านั้นที่ไม่เป็นจำนวนเฉพาะ

สำหรับ $n ≤ 10000$ จะมีตัวเลข 2202 $t(n)$ ที่เป็นจำนวนเฉพาะ

จำนวน $t(n)$ จำนวนเท่าใดที่เป็นจำนวนเฉพาะสำหรับ $n ≤ 50\\,000\\,000$?

# --hints--

`primalityOfNumbers()`ควร return `5437849`.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```
