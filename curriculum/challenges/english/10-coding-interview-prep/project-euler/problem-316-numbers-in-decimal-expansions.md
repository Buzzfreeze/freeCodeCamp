---
id: 5900f4a81000cf542c50ffbb
title: 'Problem 316: Numbers in decimal expansions'
challengeType: 5
forumTopicId: 301972
dashedName: problem-316-numbers-in-decimal-expansions
---

# --description--

ให้ $p = p_1 p_2 p_3 \ldots$ เป็นลำดับอนันต์ของตัวเลขสุ่ม เลือกจาก {0,1,2,3,4,5,6,7,8,9} ที่มีความน่าจะเป็นเท่ากัน

จะเห็นได้ว่า $p$ สอดคล้องกับจำนวนจริง $0.p_1 p_2 p_3 \ldots$

จะเห็นได้ว่าการเลือกจำนวนจริงแบบสุ่มจากช่วง [0,1) นั้นเทียบเท่ากับการเลือกลำดับอนันต์ของตัวเลขสุ่มที่เลือกจาก {0,1,2,3,4,5,6,7,8, 9} ที่มีความน่าจะเป็นเท่ากัน

สำหรับจำนวนเต็มบวกใดๆ $n$ ที่มีเลขทศนิยม $d$ ให้ $k$ เป็นดัชนีที่เล็กที่สุดโดยที่ $p_k, p_{k + 1}, \ldots p_{k + d - 1}$ เป็นเลขฐานสิบของ $n$ ในลำดับเดียวกัน

นอกจากนี้ ให้ $g(n)$ เป็นค่าที่คาดไว้ของ $k$; สามารถพิสูจน์ได้ว่า $g(n)$ เป็นจำนวนจำกัดเสมอ และที่น่าสนใจคือ เป็นจำนวนเต็มเสมอ

ตัวอย่างเช่น ถ้า $n = 535$ แล้ว

สำหรับ $p = 31415926\mathbf{535}897\ldots$ เราจะได้ $k = 9$

สำหรับ $p = 35528714365004956000049084876408468\mathbf{535}4\ldots$ เราจะได้ $k = 36$

และเราพบว่า $g(535) = 1008$

ระบุว่า $\displaystyle\sum_{n = 2}^{999} g\left(\left\lfloor\frac{{10}^6}{n}\right\rfloor\right) = 27280188$ ค้นหา $\ displaystyle\sum_{n = 2}^{999\\,999} g\left(\left\lfloor\frac{{10}^{16}}{n}\right\rfloor\right)$.

**Note:** $\lfloor x\rfloor$ แสดงถึง floor function

# --hints--

`numbersInDecimalExpansion()` ควร return `542934735751917760`.

```js
assert.strictEqual(numbersInDecimalExpansion(), 542934735751917760);
```

# --seed--

## --seed-contents--

```js
function numbersInDecimalExpansion() {

  return true;
}

numbersInDecimalExpansion();
```

# --solutions--

```js
// solution required
```
