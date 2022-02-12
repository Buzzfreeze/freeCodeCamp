---
id: 5900f4291000cf542c50ff3b
title: 'Problem 188: The hyperexponentiation of a number'
challengeType: 5
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

hyperexponentiation หรือ tetration ของตัวเลข $a$ ที่จำนวนเต็มบวก $b$ แทนด้วย $a↑↑b$ หรือ ${}^ba$ จะเขียนแบบ recursive ได้เป็น:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

ดังนั้นgik0t,u เช่น $3↑↑2 = 3^3 = 27$ :7ซง $3↑↑3 = 3^{27} = 7625597484987$ และ $3↑↑4$ คือประมาณ ${10}^{3.6383346400240996 \times {10}^{12} }$

ให้หา 8 หลักสุดท้ายของ $1777↑↑1855$

# --hints--

`hyperexponentation()` ต้องคืนค่าเป็น `95962097`

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```
