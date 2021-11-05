---
id: 5900f4a11000cf542c50ffb4
title: 'Problem 309: Integer Ladders'
challengeType: 5
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--


ในปัญหา "บันไดเลื่อน" แบบคลาสสิก เราได้รับความยาว $x$ และ $y$ ของบันไดสองขั้นที่วางอยู่บนผนังฝั่งตรงข้ามของถนนที่มีระดับแคบและแคบ นอกจากนี้เรายังได้รับความสูง $h$ เหนือถนนที่มีบันไดสองขั้นข้ามและเราถูกขอให้ค้นหาความกว้างของถนน ($w$)

<img class="img-responsive center-block" alt="ladders x and y, crossing at the height h, and resting on opposite walls of the street of width w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;">

Hก่อนหน้านี้ เราสนใจเฉพาะกรณีที่ตัวแปรทั้งสี่เป็นจำนวนเต็มบวก ตัวอย่างเช่น ถ้า $x = 70$, $y = 119$ และ $h = 30$ เราสามารถคำนวณได้ว่า $w = 56$

อันที่จริง สำหรับค่าจำนวนเต็ม $x$, $y$, $h$ and $0 &lt; x &lt; ใช่ &lt; 200$ มีเพียงห้าแฝดเท่านั้น ($x$, $y$, $h$) ที่สร้างคำตอบจำนวนเต็มสำหรับ $w$: (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) และ (119, 175, 40)

สำหรับค่าจำนวนเต็ม $x$, $y$, $h$ and $0 &lt; x &lt; ใช่ &lt; 1\\,000\\,000$, มีแฝดสามกี่ตัว ($x$, $y$, $h$) สร้างคำตอบจำนวนเต็มสำหรับ $w$?

# --hints--

`integerLadders()` ควร return `210139`.

```js
assert.strictEqual(integerLadders(), 210139);
```

# --seed--

## --seed-contents--

```js
function integerLadders() {

  return true;
}

integerLadders();
```

# --solutions--

```js
// solution required
```
