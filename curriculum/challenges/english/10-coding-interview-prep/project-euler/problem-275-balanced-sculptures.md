---
id: 5900f4801000cf542c50ff92
title: 'Problem 275: Balanced Sculptures'
challengeType: 5
forumTopicId: 301925
dashedName: problem-275-balanced-sculptures
---

# --description--

กำหนดรูปแบบการจัดเรียงแบบ $n$ ดังนี้:

- Polyomino  ที่ประกอบด้วยแผ่น $n + 1$ แผ่น ที่เรียกว่าบล็อค ($n$ แผ่น) และฐาน (แผ่นที่เหลืออยู่)
- ฐานมีศูนย์กลางอยู่ที่ตำแหน่ง ($x = 0$, $y = 0$);
- บล็อกมีพิกัด $y$ มากกว่าศูนย์ (ดังนั้นฐานจึงเป็นแผ่นต่ำสุดที่ไม่ซ้ำกัน);
- จุดศูนย์กลางมวลของบล็อคทั้งหมดรวมกันมีพิกัด $x$ เท่ากับศูนย์

<img class="img-responsive center-block" alt="18 balanced sculptures of order 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/balanced-sculptures.gif" style="background-color: white; padding: 10px;">

มีการจัดเรียงที่สมดุล 964 ชิ้นในการจัดเรียงแบบ 10 และ 360505 จากการจัดเรียงแบบ 15

มีการจัดเรียงที่สมดุลกี่แบบ ถ้าเป็นการจัดเรียงแบบ 18 

# --hints--

`balancedSculptures()` ต้องคืนค่าเป็น `15030564`

```js
assert.strictEqual(balancedSculptures(), 15030564);
```

# --seed--

## --seed-contents--

```js
function balancedSculptures() {

  return true;
}

balancedSculptures();
```

# --solutions--

```js
// solution required
```
