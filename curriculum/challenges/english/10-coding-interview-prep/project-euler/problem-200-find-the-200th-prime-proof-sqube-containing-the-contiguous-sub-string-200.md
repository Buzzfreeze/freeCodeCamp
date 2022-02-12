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

เราจะกำหนด sqube ให้เป็นตัวเลขแบบ ${p^2}{q^3}$ โดยที่ $p$ และ $q$ เป็นจำนวนเฉพาะคนละตัวกัน

เช่น $200 = {5^2}{2^3}$ หรือ $1120072949 = {{23}^2}{{61}^3}$

sqube ห้าตัวแรกคือ 72, 108, 200, 392 และ 500

ที่น่าสนใจคือ 200 เป็นตัวเลขแรกที่คุณไม่สามารถเปลี่ยนตัวเลขหลักเดียวให้เป็นจำนวนเฉพาะได้ เราจะเรียกตัวเลขดังกล่าวว่า prime-proof sqube  
โดย prime-proof sqube ตัวถัดไปที่มีเลข `200` คือ 1992008

หา prime-proof sqube ตัวที่ 200 ที่มีสตริงย่อยเป็น "200"

# --hints--

`primeProofSqubeWithSubString()` ต้องคืนค่าเป็น `229161792008`

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
