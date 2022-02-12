---
id: 5900f49b1000cf542c50ffae
title: 'Problem 303: Multiples with small digits'
challengeType: 5
forumTopicId: 301957
dashedName: problem-303-multiples-with-small-digits
---

# --description--

ถ้า $n$ เป็นจำนวนเต็มบวก กำหนดให้ $f(n)$ เป็นจำนวนเต็มบวกน้อยที่สุดของ $n$ ซึ่งเขียนด้วยเลขฐาน 10 ใช้เฉพาะตัวเลข $≤ 2$

ดังนั้น $f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1\\,121\\ ,222$

นอกจากนี้ $\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11\\,363\\,107$

ให้หา $\displaystyle\sum_{n = 1}^{10\\,000} \frac{f(n)}{n}$

# --hints--

`multiplesWithSmallDigits()` ต้องคืนค่าเป็น `1111981904675169`

```js
assert.strictEqual(multiplesWithSmallDigits(), 1111981904675169);
```

# --seed--

## --seed-contents--

```js
function multiplesWithSmallDigits() {

  return true;
}

multiplesWithSmallDigits();
```

# --solutions--

```js
// solution required
```
