---
id: 5900f3ca1000cf542c50fedc
title: 'Problem 93: Arithmetic expressions'
challengeType: 5
forumTopicId: 302210
dashedName: problem-93-arithmetic-expressions
---

# --description--

การใช้ตัวเลขแต่ละหลักจากเซต {1, 2, 3, 4} เพียงครั้งเดียว และใช้การดำเนินการเลขคณิตทั้งสี่ (+, −, \*, /) และ `[]` / `()` สร้างจำนวนเต็มบวกที่แตกต่างกัน

เช่น

<div style='margin-left: 4em;'>
  8 = (4 * (1 + 3)) / 2<br>
  14 = 4 * (3 + 1 / 2)<br>
  19 = 4 * (2 + 3) − 1<br>
  36 = 3 * 4 * (2 + 1)
</div>

ไม่อนุญาตให้ใช้การเรียงต่อกันของตัวเลข เช่น 12 + 34.

การใช้เซต {1, 2, 3, 4} จะทำให้ได้จำนวนเต็ม 31 ตัวซึ่ง 36 เป็นจำนวนสูงสุดและแต่ละหมายเลขตั้งแต่ 1 ถึง 28 จะใช้ได้ก่อนที่จะพบกับตัวแรกที่แสดงค่าไม่ได้

ค้นหาชุดตัวเลขที่แตกต่างกันสี่หลัก `a` &lt; `b` &lt; `ค` &lt; `d` ซึ่งสามารถหาชุดของจำนวนเต็มบวกต่อเนื่องที่ยาวที่สุดได้ตั้งแต่ 1 ถึง `n` โดยให้คำตอบเป็น string: `abcd`

# --hints--

`arithmeticExpressions()` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof arithmeticExpressions() === 'number');
```

`arithmeticExpressions()` ต้องคืนค่าเป็น 1258

```js
assert.strictEqual(arithmeticExpressions(), 1258);
```

# --seed--

## --seed-contents--

```js
function arithmeticExpressions() {

  return true;
}

arithmeticExpressions();
```

# --solutions--

```js
// solution required
```
