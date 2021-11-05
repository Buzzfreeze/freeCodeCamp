---
id: 5900f4351000cf542c50ff47
title: >-
  Problem 200: Find the 200th prime-proof sqube containing the contiguous
  sub-string "200"
challengeType: 5
forumTopicId: 301840
dashedName: >-
  problem-200-find-the-200th-prime-proof-sqube-containing-the-contiguous-sub-string-200
---

# --description--

เราจะกำหนด sqube ให้เป็นตัวเลขของรูปแบบ ${p^2}{q^3}$ โดยที่ $p$ และ $q$ เป็นจำนวนเฉพาะที่แตกต่างกัน

ตัวอย่างเช่น $200 = {5^2}{2^3}$ หรือ $1120072949 = {{23}^2}{{61}^3}$

ห้าsqubeแรกคือ 72, 108, 200, 392 และ 500

ที่น่าสนใจคือ 200 เป็นตัวเลขแรกที่คุณไม่สามารถเปลี่ยนตัวเลขหลักเดียวให้เป็นจำนวนเฉพาะได้ เราจะเรียกตัวเลขดังกล่าวว่า sqube ที่พิสูจน์ได้เฉพาะตัวถัดไปซึ่งมีสตริงย่อยที่ต่อเนื่องกัน `200` คือ 1992008

หา prime-proof sqube ตัวที่ 200 ที่มีสตริงย่อย "200" ที่ต่อเนื่องกัน

# --hints--

`primeProofSqubeWithSubString()` should return `229161792008`.

```js
assert.strictEqual(primeProofSqubeWithSubString(), 229161792008);
```

# --seed--

## --seed-contents--

```js
function primeProofSqubeWithSubString() {

  return true;
}

primeProofSqubeWithSubString();
```

# --solutions--

```js
// solution required
```
