---
id: 5900f4e81000cf542c50fffb
title: 'Problem 380: Amazing Mazes!'
challengeType: 5
forumTopicId: 302044
dashedName: problem-380-amazing-mazes
---

# --description--

เขาวงกต $m×n$ เป็นตารางสี่เหลี่ยม $m×n$ ที่มีผนังวางอยู่ระหว่างเซลล์กริด เพื่อให้มีเส้นทางเดียวจากสี่เหลี่ยมด้านบนซ้ายไปยังสี่เหลี่ยมอื่น ต่อไปนี้คือตัวอย่างของเขาวงกต 9×12 และเขาวงกต 15×20

<img class="img-responsive center-block" alt="9x12 maze and 15x20 maze" src="https://cdn.freecodecamp.org/curriculum/project-euler/amazing-mazes.gif" style="background-color: white; padding: 10px;">

ให้ $C(m, n)$ เป็นจำนวน $m×n$ เขาวงกตที่ชัดเจน เขาวงกตที่สามารถเกิดขึ้นได้จากการหมุนและการสะท้อนจากเขาวงกตอื่นถือว่าแตกต่างกัน

สามารถตรวจสอบได้ว่า $C(1, 1) = 1$, $C(2, 2) = 4$, $C(3, 4) = 2415$, and $C(9, 12) = 2.5720\mathrm {e}\\,46$ (ในสัญกรณ์วิทยาศาสตร์ปัดเศษเป็น 5 หลักนัยสำคัญ)

ค้นหา $C(100, 500)$ และเขียนคำตอบของคุณเป็นสตริงในสัญกรณ์วิทยาศาสตร์ที่ปัดเศษเป็น 5 หลักที่สำคัญ

เมื่อให้คำตอบ ให้ใช้ e ตัวพิมพ์เล็ก แยก mantissa และเลขชี้กำลังออก เช่น. หากคำตอบคือ 1234567891011 รูปแบบคำตอบจะเป็นสตริง `1.2346e12`

# --hints--

`amazingMazes()` ควร return string.

```js
assert(typeof amazingMazes() === 'string');
```

`amazingMazes()` ควร return string `6.3202e25093`.

```js
assert.strictEqual(amazingMazes(), '6.3202e25093');
```

# --seed--

## --seed-contents--

```js
function amazingMazes() {

  return true;
}

amazingMazes();
```

# --solutions--

```js
// solution required
```
