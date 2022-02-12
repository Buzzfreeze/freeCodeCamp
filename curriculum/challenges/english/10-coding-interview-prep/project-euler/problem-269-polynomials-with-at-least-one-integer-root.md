---
id: 5900f4791000cf542c50ff8c
title: 'Problem 269: Polynomials with at least one integer root'
challengeType: 5
forumTopicId: 301918
dashedName: problem-269-polynomials-with-at-least-one-integer-root
---

# --description--

รากหรือศูนย์ของพหุนาม $P(x)$ คือคำตอบของสมการ $P(x) = 0$

กำหนด $P_n$ เป็นพหุนามที่มีค่าสัมประสิทธิ์เป็นตัวเลขของ $n$

ตัวอย่างเช่น $P_{5703}(x) = 5x^3 + 7x^2 + 3$

เราจะเห็นได้ว่า:

- $P_n(0)$ เป็นตัวเลขสุดท้ายของ $n$
- $P_n(1)$ คือผลรวมของตัวเลขของ $n$
- $Pn(10)$ คือ $n$ เอง

กำหนด $Z(k)$ เป็นจำนวนเต็มบวก $n$ ไม่เกิน $k$ ซึ่งพหุนาม $P_n$ มีรากจำนวนเต็มอย่างน้อยหนึ่งราก

สามารถตรวจสอบได้ว่า $Z(100\\,000)$ คือ 14696

ให้หาค่าของ $Z({10}^{16})$

# --hints--

`polynomialsWithOneIntegerRoot()` ต้องคืนค่าเป็น `1311109198529286`

```js
assert.strictEqual(polynomialsWithOneIntegerRoot(), 1311109198529286);
```

# --seed--

## --seed-contents--

```js
function polynomialsWithOneIntegerRoot() {

  return true;
}

polynomialsWithOneIntegerRoot();
```

# --solutions--

```js
// solution required
```
