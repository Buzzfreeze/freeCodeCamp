---
id: 5900f5331000cf542c510046
title: 'Problem 455: Powers With Trailing Digits'
challengeType: 5
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

ให้ $f(n)$ เป็นจำนวนเต็มบวกที่ใหญ่ที่สุด $x$ น้อยกว่า ${10}^9$ เพื่อให้ 9 หลักสุดท้ายของ $n^x$ เป็นตัวเลข $x$ (รวมศูนย์นำหน้า) หรือศูนย์ หากไม่มีจำนวนเต็มดังกล่าว

เช่น

$$\begin{align}
  & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\
  & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399
\end{align}$$

หา $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

# --hints--

`powersWithTrailingDigits()` ควร return `450186511399999`.

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

# --seed--

## --seed-contents--

```js
function powersWithTrailingDigits() {

  return true;
}

powersWithTrailingDigits();
```

# --solutions--

```js
// solution required
```
