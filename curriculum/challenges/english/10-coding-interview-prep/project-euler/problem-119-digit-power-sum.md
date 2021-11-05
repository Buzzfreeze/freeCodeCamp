---
id: 5900f3e41000cf542c50fef6
title: 'Problem 119: Digit power sum'
challengeType: 5
forumTopicId: 301745
dashedName: problem-119-digit-power-sum
---

# --description--

ตัวเลข 512 น่าสนใจเพราะมันเท่ากับผลรวมของหลักที่ยกกำลังได้: $5 + 1 + 2 = 8$ และ $8^3 = 512$ อีกตัวอย่างหนึ่งของตัวเลขที่มีคุณสมบัตินี้คือ $614656 = 28^4$

เราจะกำหนด $a_n$ ให้เป็นค่า $n-th$ ของลำดับนี้ และยืนยันว่าตัวเลขต้องมีอย่างน้อยสองหลักจึงจะมีผลรวม

กำหนดให้ $a_2 = 512$ และ $a_{10} = 614656$.

ให้หา $a_{30}$.

# --hints--

`digitPowerSum()` ควร return `248155780267521`.

```js
assert.strictEqual(digitPowerSum(), 248155780267521);
```

# --seed--

## --seed-contents--

```js
function digitPowerSum() {

  return true;
}

digitPowerSum();
```

# --solutions--

```js
// solution required
```
