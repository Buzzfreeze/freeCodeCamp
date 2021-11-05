---
id: 5900f46b1000cf542c50ff7d
title: 'Problem 254: Sums of Digit Factorials'
challengeType: 5
forumTopicId: 301902
dashedName: problem-254-sums-of-digit-factorials
---

# --description--

กำหนด $f(n)$ เป็นผลรวมของแฟคทอเรียลของตัวเลขของ $n$ ตัวอย่างเช่น $f(342) = 3! +4! + 2! = 32$.

กำหนด $sf(n)$ เป็นผลรวมของตัวเลขของ $f(n)$ ดังนั้น $sf(342) = 3 + 2 = 5$

กำหนด $g(i)$ ให้เป็นจำนวนเต็มบวกที่เล็กที่สุด $n$ โดยที่ $sf(n) = i$ แม้ว่า $sf(342)$ จะเป็น 5 แต่ $sf(25)$ ก็เท่ากับ 5 เช่นกัน และสามารถตรวจสอบได้ว่า $g(5)$ คือ 25

กำหนด $sg(i)$ เป็นผลรวมของตัวเลขของ $g(i)$ ดังนั้น $sg(5) = 2 + 5 = 7$

นอกจากนี้ สามารถตรวจสอบได้ว่า $g(20)$ คือ 267 และ $\sum sg(i)$ สำหรับ $1 ≤ i ≤ 20$ คือ 156

ค่า $\sum sg(i)$ for $1 ≤ i ≤ 150$ เป็นเท่าไหร่

# --hints--

`sumsOfDigitFactorials()` ควร return `8184523820510`.

```js
assert.strictEqual(sumsOfDigitFactorials(), 8184523820510);
```

# --seed--

## --seed-contents--

```js
function sumsOfDigitFactorials() {

  return true;
}

sumsOfDigitFactorials();
```

# --solutions--

```js
// solution required
```
