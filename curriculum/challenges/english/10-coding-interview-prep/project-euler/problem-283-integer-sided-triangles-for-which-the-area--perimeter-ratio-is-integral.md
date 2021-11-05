---
id: 5900f4881000cf542c50ff9a
title: >-
  Problem 283: Integer sided triangles for which the area * perimeter ratio is
  integral
challengeType: 5
forumTopicId: 301934
dashedName: >-
  problem-283-integer-sided-triangles-for-which-the-area--perimeter-ratio-is-integral
---

# --description--

พิจารณาสามเหลี่ยมที่มีด้าน 6, 8 และ 10 จะเห็นได้ว่าเส้นรอบรูปและพื้นที่ทั้งสองมีค่าเท่ากับ 24

ดังนั้นอัตราส่วน $\frac{\text{area}}{\text{perimeter}}$ เท่ากับ 1

พิจารณาสามเหลี่ยมที่มีด้าน 13, 14 และ 15 ด้วย ปริมณฑลเท่ากับ 42 ในขณะที่พื้นที่เท่ากับ 84

ดังนั้นสำหรับสามเหลี่ยมนี้ อัตราส่วน $\frac{\text{area}}{\text{perimeter}}$ เท่ากับ 2

จงหาผลรวมของเส้นรอบรูปของสามเหลี่ยมด้านเท่าจำนวนเต็มที่มีอัตราส่วนพื้นที่/ปริมณฑลเท่ากับจำนวนเต็มบวกที่ไม่เกิน 1,000

# --hints--

`integralAreaPerimeterRatio()` ควร return `28038042525570324`.

```js
assert.strictEqual(integralAreaPerimeterRatio(), 28038042525570324);
```

# --seed--

## --seed-contents--

```js
function integralAreaPerimeterRatio() {

  return true;
}

integralAreaPerimeterRatio();
```

# --solutions--

```js
// solution required
```
