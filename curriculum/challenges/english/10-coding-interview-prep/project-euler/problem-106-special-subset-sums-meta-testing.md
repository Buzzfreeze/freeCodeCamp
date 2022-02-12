---
id: 5900f3d71000cf542c50fee9
title: 'Problem 106: Special subset sums: meta-testing'
challengeType: 5
forumTopicId: 301730
dashedName: problem-106-special-subset-sums-meta-testing
---

# --description--

ให้ $S(A)$ แทนผลรวมของ element ในเซ็ท A ขนาด n เราจะเรียกมันว่าเซตผลรวมพิเศษ ถ้าสำหรับเซตย่อยที่ไม่เป็นค่าว่างสองเซ็ทใด ๆ คือ B และ C คุณสมบัติต่อไปนี้เป็นจริง:

1. $S(B) ≠ S(C)$; นั่นคือผลรวมของเซตย่อยต้องไม่เท่ากัน
2. ถ้า B มี element มากกว่า C แล้ว $S(B) > S(C)$

สำหรับปัญหานี้ เราจะถือว่าเซ็ทที่กำหนดมี element ที่เพิ่มขึ้นอย่างเคร่งครัด n รายการ และเป็นไปตามกฎข้อที่สองแล้ว

น่าแปลกที่จากคู่ย่อยที่เป็นไปได้ 25 คู่ที่สามารถรับได้จากเซ็ทที่ n = 4 มีเพียง 1 คู่ในเซตที่จำเป็นต้องได้รับการทดสอบเพื่อความเท่าเทียมกัน (กฎข้อแรก) ในทำนองเดียวกัน เมื่อ n = 7 ต้องทดสอบเพียง 70 คู่จาก 966 คู่ย่อยเท่านั้น

สำหรับ n = 12 คู่เซตย่อย 261625 ที่สามารถรับได้นั้นต้องได้รับการทดสอบเพื่อความเท่าเทียมกันกี่คู่

**Note:** โจทย์ข้อนี้เกี่ยวข้องกับโจทย์ข้อที่ 103 และ 106

# --hints--

`subsetSumsMetaTesting()` ต้องคืนค่าเป็น `21384`

```js
assert.strictEqual(subsetSumsMetaTesting(), 21384);
```

# --seed--

## --seed-contents--

```js
function subsetSumsMetaTesting() {

  return true;
}

subsetSumsMetaTesting();
```

# --solutions--

```js
// solution required
```
