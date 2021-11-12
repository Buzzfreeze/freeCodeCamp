---
id: 5ea2815a8640bcc6cb7dab3c
title: Lychrel numbers
challengeType: 5
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>Take an integer <code>n₀</code>, greater than zero.</li>
  <li>Form the next number <code>n</code> of the series by reversing <code>n₀</code> and adding it to <code>n₀</code></li>
  <li>Stop when <code>n</code> becomes palindromic - i.e. the digits of <code>n</code> in reverse order == <code>n</code>.</li>
</ol>

ความสัมพันธ์ที่เกิดซ้ำข้างต้นเมื่อนำไปใช้กับตัวเลขเริ่มต้นส่วนใหญ่ `n` = 1, 2, ... สิ้นสุดลงใน palindrome ค่อนข้างเร็ว

เช่น `n₀` = 12 จะได้:

```bash
12
12 + 21 = 33,  a palindrome!
```

And if `n₀` = 55 we get:

```bash
55
55 + 55 = 110
110 + 011 = 121,  a palindrome!
```

ขอให้สังเกตว่าการตรวจสอบพาลินโดรมเกิดขึ้น *after* เพิ่มเติม

ตัวเลขเริ่มต้นบางตัวดูเหมือนจะดำเนินต่อไปตลอดกาล ความสัมพันธ์ที่เกิดซ้ำสำหรับ 196 คำนวณจากการทำซ้ำหลายล้านครั้งโดยสร้างตัวเลขที่มีหลักล้าน โดยไม่สร้างพาลินโดรม ตัวเลขเหล่านี้ที่ไม่ได้ลงท้ายด้วยพาลินโดรมเรียกว่า **Lychrel numbers**

สำหรับวัตถุประสงค์ของงานนี้ หมายเลข Lychrel คือหมายเลขเริ่มต้นใดๆ ที่ไม่อยู่ใน palindrome ภายใน 500 (หรือมากกว่า) การวนซ้ำ

**Seed and related Lychrel numbers:**

จำนวนเต็มใดๆ ที่ผลิตในลำดับของหมายเลข Lychrel จะเป็นเลข Lychrel ด้วย

โดยทั่วไป ลำดับใดๆ จากหมายเลข Lychrel หนึ่งหมายเลข *might* มาบรรจบกันเพื่อรวมลำดับจากตัวเลือกหมายเลข Lychrel ก่อนหน้า ตัวอย่างเช่น ลำดับของตัวเลข 196 และ 689 เริ่มต้น:

```bash
    196
    196 + 691 = 887
    887 + 788 = 1675
    1675 + 5761 = 7436
    7436 + 6347 = 13783
    13783 + 38731 = 52514
    52514 + 41525 = 94039
    ...
    689
    689 + 986 = 1675
    1675 + 5761 = 7436
    ...
```

ดังนั้นเราจะเห็นว่าลำดับที่ขึ้นต้นด้วย 689 มาบรรจบกัน และดำเนินต่อไปด้วยตัวเลขเดียวกันกับลำดับที่สำหรับ 196

ด้วยเหตุนี้ เราจึงสามารถแบ่งหมายเลข Lychrel ให้เป็นจริงได้ **Seed** ผู้สมัครหมายเลข Lychrel และ **Related** ตัวเลขที่ไม่สร้าง palindromes แต่มีจำนวนเต็มในลำดับที่มองว่าเป็นส่วนหนึ่งของลำดับที่สร้างจากหมายเลข Lychrel ที่ต่ำกว่า .
# --instructions--

เขียนฟังก์ชันที่ใช้ตัวเลขเป็นพารามิเตอร์ คืนค่า จริง หากตัวเลขนั้นเป็นหมายเลข Lynchrel มิฉะนั้นให้return false จำไว้ว่าขีดจำกัดการวนซ้ำคือ 500

# --hints--

`isLychrel` ควรเป็น function.

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` ควร return boolean.

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` ควร return `false`.

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` ควร return `false`.

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` ควร return `true`.

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` ควร return `true`.

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` ควร return `false`.

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` ควร return `true`.

```js
assert.equal(isLychrel(7059), true);
```

# --seed--

## --seed-contents--

```js
function isLychrel(n) {

}
```

# --solutions--

```js
function isLychrel(n) {
  function reverse(num) {
    return parseInt(
      num
        .toString()
        .split('')
        .reverse()
        .join('')
    );
  }

  var i;
  for (i = 0; i < 500; i++) {
    n = n + reverse(n);
    if (n == reverse(n)) break;
  }

  return i == 500;
}
```
