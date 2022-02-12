---
id: 5900f4a11000cf542c50ffb4
title: 'Problem 309: Integer Ladders'
challengeType: 5
forumTopicId: 301963
dashedName: problem-309-integer-ladders
---

# --description--


ในปัญหา "บันไดเลื่อน" แบบคลาสสิก เราได้รับความยาว $x$ และ $y$ ของบันไดสองขั้นที่วางอยู่บนผนังฝั่งตรงข้ามของถนนที่มีระดับแคบและแคบ นอกจากนี้เรายังได้รับความสูง $h$ เหนือถนนที่มีบันไดสองอันตัดกัน ให้หาหาความกว้างของถนน ($w$)

<img class="img-responsive center-block" alt="ladders x and y, crossing at the height h, and resting on opposite walls of the street of width w" src="https://cdn.freecodecamp.org/curriculum/project-euler/integer-ladders.gif" style="background-color: white; padding: 10px;">

ก่อนหน้านี้ เราสนใจเฉพาะกรณีที่ตัวแปรทั้งสี่เป็นจำนวนเต็มบวก เช่น ถ้า $x = 70$, $y = 119$ และ $h = 30$ เราสามารถคำนวณได้ว่า $w = 56$

แต่ถ้า $x$, $y$, $h$ เป็นจำนวนเต็ม และ $0 &lt; x &lt; y &lt; 200$ มี $x$, $y$, $h$ แค่ห้าแบบเท่านั้น ที่ทำให้ $w$ เป็นจำนวนเต็ม คือ (70, 119, 30), (74, 182, 21), (87, 105, 35), (100, 116, 35) และ (119, 175, 40)

ให้ $x$, $y$, $h$ เป็นจำนวนเต็ม และ $0 &lt; x &lt; y &lt; 1\\,000\\,000$  
จะมี $x$, $y$, $h$ กี่รูปแบบที่ทำให้ $w$ เป็นจำนวนเต็ม?

# --hints--

`integerLadders()` ต้องคืนค่าเป็น `210139`

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
