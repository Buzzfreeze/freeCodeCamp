---
id: 5900f4f61000cf542c510008
title: 'Problem 393: Migrating ants'
challengeType: 5
forumTopicId: 302058
dashedName: problem-393-migrating-ants
---

# --description--

ตารางสี่เหลี่ยมขนาด $n × n$ ช่อง มีมดทั้งหมด $n^2$ ตัว โดยมีมดช่องละตัว

มดทั้งหมดตัดสินใจย้ายพร้อมกันไปยังสี่เหลี่ยมที่อยู่ติดกัน (ย้ายได้ 4 ทิศ ยกเว้นมดที่ขอบหรือมุม)

กำหนดให้ $f(n)$ เป็นจำนวนวิธีที่สามารถเกิดขึ้นได้ โดยไม่มีมดที่ไปจบที่ช่องเดียวกัน และไม่มีมดสองตัวข้ามขอบเดียวกันระหว่างสองช่อง

จะได้ $f(4) = 88$

ให้หา $f(10)$

# --hints--

`migratingAnts()` ต้องคืนค่าเป็น `112398351350823100`

```js
assert.strictEqual(migratingAnts(), 112398351350823100);
```

# --seed--

## --seed-contents--

```js
function migratingAnts() {

  return true;
}

migratingAnts();
```

# --solutions--

```js
// solution required
```
