---
id: 5900f4f61000cf542c510008
title: 'Problem 393: Migrating ants'
challengeType: 5
forumTopicId: 302058
dashedName: problem-393-migrating-ants
---

# --description--

ตาราง $n × n$ ของสี่เหลี่ยมประกอบด้วยมด $n^2$ มดหนึ่งตัวต่อตาราง

มดทั้งหมดตัดสินใจย้ายพร้อมกันไปยังสี่เหลี่ยมที่อยู่ติดกัน (โดยปกติเป็นไปได้ 4 อย่าง ยกเว้นมดที่ขอบตารางหรือที่มุม)

เรากำหนดให้ $f(n)$ เป็นจำนวนวิธีที่สามารถเกิดขึ้นได้โดยไม่มีมดที่ลงท้ายด้วยช่องสี่เหลี่ยมเดียวกัน และไม่มีมดสองตัวข้ามขอบเดียวกันระหว่างสองช่องสี่เหลี่ยม

จะได้ $f(4) = 88$

หา $f(10)$

# --hints--

`migratingAnts()` ควร return `112398351350823100`.

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
