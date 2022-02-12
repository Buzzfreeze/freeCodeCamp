---
id: 5a23c84252665b21eecc7eca
title: Kaprekar numbers
challengeType: 5
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

จำนวนเต็มบวกจะเป็น [Kaprekar number](<https://en.wikipedia.org/wiki/Kaprekar number>) เมื่อ:

<ul>
  <li>เป็น 1 หรือ</li>
  <li>ค่ากำลังสองของเลขนั้นในฐาน 10 จะสามารถแบ่งเป็นสองส่วนและนำมาบวกกันได้เลขนั้น </li>
</ul>

ตัวอย่าง:

<ul>
  <li><code>2223</code> เป็น Kaprekar number เพราะ <code>2223 * 2223 = 4941729</code> แล้ว <code>4941729</code> จะแยกได้เป็น <code>494</code> และ <code>1729</code> จากนั้น <code>494 + 1729 = 2223</code></li>
  <li>ชุดตัวเลขของ Kaprekar number จะเรียกว่าเป็น <a href='https://oeis.org/A006886' target='_blank'>A006886</a> ซึ่งจะมีข้อมูลตัวแรกๆเป็น <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า $n$ ฐาน $bs$ และคืนค่าเป็น true หากตัวเลขนั้นเป็นตัวเลข Kaprekar สำหรับฐานที่กำหนด

# --hints--

`isKaprekar` ต้องเป็นฟังก์ชัน

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` ต้องคืนค่าเป็น boolean

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` ต้องคืนค่าเป็น `true`

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` ต้องคืนค่าเป็น `false`

```js
assert.equal(isKaprekar(999, 17), false);
```

# --seed--

## --seed-contents--

```js
function isKaprekar(n, bs) {

}
```

# --solutions--

```js
function isKaprekar(n, bs) {
  if (n < 1) return false;
  if (n == 1) return true;
  for (var a = n * n, b = 0, s = 1; a; s *= bs) {
    b += (a % bs) * s;
    a = Math.floor(a / bs);
    if (b && a + b == n) return true;
  }
  return false;
}
```
