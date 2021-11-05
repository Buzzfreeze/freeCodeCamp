---
id: 5900f4f71000cf542c510009
title: 'Problem 394: Eating pie'
challengeType: 5
forumTopicId: 302059
dashedName: problem-394-eating-pie
---

# --description--

เจฟฟ์กินพายแบบแปลกๆ

พายเป็นวงกลม เขาเริ่มต้นด้วยการหั่นชิ้นแรกในพายตามรัศมี

แม้ว่าจะมีเศษเศษ $F$ เหลืออยู่อย่างน้อยหนึ่งส่วน เขาดำเนินการตามขั้นตอนต่อไปนี้:

- เขาทำสองชิ้นจากจุดศูนย์กลางของวงกลมไปยังจุดใด ๆ ของขอบวงกลมที่เหลืออยู่ จุดใดก็ได้บนเส้นขอบของวงกลมที่เหลือมีโอกาสเท่ากัน นี่จะแบ่งพายที่เหลือออกเป็นสามชิ้น
- ทวนเข็มนาฬิกาจากการตัดครั้งแรก เขาหยิบพายสองชิ้นแรกแล้วกิน

เมื่อเหลือเศษพายน้อยกว่า $F$ เขาไม่ทำตามขั้นตอนนี้ซ้ำ เขากินพายที่เหลือทั้งหมดแทน

<img class="img-responsive center-block" alt="animation of pie slicing procedure" src="https://cdn.freecodecamp.org/curriculum/project-euler/eating-pie.gif" style="background-color: white; padding: 10px;">

สำหรับ $x ≥ 1$ ให้ $E(x)$ เป็นจำนวนครั้งที่คาดหวังที่ Jeff ทำซ้ำขั้นตอนข้างต้นด้วย $F = \frac{1}{x}$ สามารถตรวจสอบได้ว่า $E(1) = 1$, $E(2) ≈ 1.2676536759$ และ $E(7.5) ≈ 2.1215732071$

หา $E(40)$ ที่ปัดเศษทศนิยม 10 ตำแหน่งหลังจุดทศนิยม

# --hints--

`eatingPie()` ควร return `3.2370342194`.

```js
assert.strictEqual(eatingPie(), 3.2370342194);
```

# --seed--

## --seed-contents--

```js
function eatingPie() {

  return true;
}

eatingPie();
```

# --solutions--

```js
// solution required
```
