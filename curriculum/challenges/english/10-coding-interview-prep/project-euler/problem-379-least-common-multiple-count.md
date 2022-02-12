---
id: 5900f4e81000cf542c50fffa
title: 'Problem 379: Least common multiple count'
challengeType: 5
forumTopicId: 302041
dashedName: problem-379-least-common-multiple-count
---

# --description--

ให้ $f(n)$ เป็นจำนวนคู่ ($x$, $y$) โดยมี $x$ และ $y$ เป็นจำนวนเต็มบวก $x ≤ y$ และตัวคูณร่วมน้อยของ $x$ และ $y$ เท่ากับ $n$

ให้ $g$ เป็นฟังก์ชันสรุปของ $f$ เช่น $g(n) = \sum f(i)$ ถ้า $1 ≤ i ≤ n$

จะได้ $g({10}^6) = 37\\,429\\,395$

ให้หา $g({10}^{12})$

# --hints--

`leastCommonMultipleCount()` ต้องคืนค่าเป็น `132314136838185`

```js
assert.strictEqual(leastCommonMultipleCount(), 132314136838185);
```

# --seed--

## --seed-contents--

```js
function leastCommonMultipleCount() {

  return true;
}

leastCommonMultipleCount();
```

# --solutions--

```js
// solution required
```
