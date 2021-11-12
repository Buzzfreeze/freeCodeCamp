---
id: 5a23c84252665b21eecc7eca
title: Kaprekar numbers
challengeType: 5
forumTopicId: 302296
dashedName: kaprekar-numbers
---

# --description--

positive integer เป็น [Kaprekar number](<https://en.wikipedia.org/wiki/Kaprekar number>) if:

<ul>
  <li>It is 1, or,</li>
  <li>The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number. </li>
</ul>

โปรดทราบว่าการแยกส่วนซึ่งส่งผลให้ส่วนที่ประกอบด้วย 0 ล้วนไม่ถูกต้อง เนื่องจาก 0 ไม่ถือเป็นค่าบวก

ตัวอย่างตัวเลข Kaprekar:

<ul>
  <li><code>2223</code> is a Kaprekar number, as <code>2223 * 2223 = 4941729</code>, <code>4941729</code> may be split to <code>494</code> and <code>1729</code>, and <code>494 + 1729 = 2223</code></li>
  <li>The series of Kaprekar numbers is known as <a href='https://oeis.org/A006886' target='_blank'>A006886</a>, and begins as <code>1, 9, 45, 55, ...</code></li>
</ul>

# --instructions--

เขียนฟังก์ชันที่ใช้ตัวเลข $n$ ฐาน $bs$ และคืนค่า จริง หากตัวเลขนั้นเป็นตัวเลข Kaprekar สำหรับฐานที่กำหนด มิฉะนั้น ฟังก์ชันจะส่งกลับค่าเท็จ

# --hints--

`isKaprekar` ควรเป็น function.

```js
assert(typeof isKaprekar == 'function');
```

`isKaprekar(1, 10)` ควร return boolean.

```js
assert(typeof isKaprekar(1, 10) == 'boolean');
```

`isKaprekar(1, 10)` ควร return `true`.

```js
assert.equal(isKaprekar(1, 10), true);
```

`isKaprekar(9, 10)` ควร return `true`.

```js
assert.equal(isKaprekar(9, 10), true);
```

`isKaprekar(2223, 10)` ควร return `true`.

```js
assert.equal(isKaprekar(2223, 10), true);
```

`isKaprekar(22823, 10)` ควร return `false`.

```js
assert.equal(isKaprekar(22823, 10), false);
```

`isKaprekar(9, 17)` ควร return `false`.

```js
assert.equal(isKaprekar(9, 17), false);
```

`isKaprekar(225, 17)` ควร return `true`.

```js
assert.equal(isKaprekar(225, 17), true);
```

`isKaprekar(999, 17)` ควร return `false`.

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
