---
id: 5ea2815a8640bcc6cb7dab3c
title: Lychrel numbers
challengeType: 5
forumTopicId: 385287
dashedName: lychrel-numbers
---

# --description--

<ol>
  <li>รับค่าจำนวนเต็ม <code>n₀</code> ที่มากกว่า 0</li>
  <li>สร้างจำนวน <code>n</code> ตัวต่อไป โดยกลับค่าของ <code>n₀</code> และนำไปบวกกับ <code>n₀</code></li>
  <li>ให้หยุดเมื่อ <code>n</code> เป็น palindrome - เช่น เมื่อกลับด้าน <code>n</code> แล้วจะมีค่าเท่ากับ <code>n</code> ที่ยังไม่กลับด้าน</li>
</ol>

เช่นถ้า `n₀` = 12 จะได้:

```bash
12
12 + 21 = 33,  palindrome!
```

และถ้า `n₀` = 55 จะได้:

```bash
55
55 + 55 = 110
110 + 011 = 121,  palindrome!
```

เราจะตรวจสอบการเป็น palindrome หลังจากทำการบวกเลขแล้ว

ถ้าใช้เลข 196 จะไม่เกิด palindrome ถึงแม่ว่าจะทำการคำนวณไปเป็นล้านครั้ง โโยเราจะเรียกเลขที่ไม่เกิด palindrome นี้ว่า **Lychrel numbers**

ในแบบทดสอบนี้ให้ถือว่าเลขที่มีการดำเนินการเกิน 500 ครั้งแล้วยังไม่เจอ palindrome เป็น **Lychrel numbers**

**Seed and related Lychrel numbers:**

จำนวนเต็มใดๆ ที่อยู่ในลำดับของ Lychrel number จะเป็น Lychrel number ด้วย

โดยทั่วไป ลำดับใดๆ จาก Lychrel number หนึ่งหมายเลข *อาจ* มาบรรจบกันเพื่อรวมลำดับจากตัวเลือก Lychrel number ก่อนหน้า ตัวอย่างเช่น ลำดับของตัวเลข 196 และ 689 เริ่มต้น:

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

# --instructions--

ให้เขียนฟังก์ชันที่รับตัวเลขเป็นพารามิเตอร์ และตรวจสอบว่าเลขนั้นเป็น Lychrel number หรือไม่

# --hints--

`isLychrel` ต้องเป็นฟังก์ชัน

```js
assert(typeof isLychrel === 'function');
```

`isLychrel(12)` ต้องคืนค่าเป็น boolean

```js
assert(typeof isLychrel(12) === 'boolean');
```

`isLychrel(12)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isLychrel(12), false);
```

`isLychrel(55)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isLychrel(55), false);
```

`isLychrel(196)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isLychrel(196), true);
```

`isLychrel(879)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isLychrel(879), true);
```

`isLychrel(44987)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isLychrel(44987), false);
```

`isLychrel(7059)` ต้องคืนค่าเป็น `true`

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
