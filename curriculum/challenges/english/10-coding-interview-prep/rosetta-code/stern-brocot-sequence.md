---
id: 5a23c84252665b21eecc8028
title: Stern-Brocot sequence
challengeType: 5
forumTopicId: 302324
dashedName: stern-brocot-sequence
---

# --description--

ให้สร้างลำดับ Stern-Brocot โดยใช้อัลกอริทึมที่คล้ายกับที่ใช้ในการสร้าง [ลำดับ Fibonacci](<https://rosettacode.org/wiki/Fibonacci sequence>)

<ol>
  <li>ค่าแรกและค่าที่สองของลำดับเป็น 1 ทั้งคู่:</li>
    <ul><li>1, 1</li></ul>
  <li>เริ่มจากการดูค่าที่สองของลำดับ</li>
  <li>บวกค่านั้นกับค่าก่อนหน้า (1 + 1) = 2 และนำไปต่อท้ายลำดับ:</li>
    <ul><li>1, 1, 2</li></ul>
  <li>นำค่านั้นไปต่อท้ายลำดับ:</li>
    <ul><li>1, 1, 2, 1</li></ul>
  <li>ดูค่าถัดไปในลำดับ (ค่าที่สามในตัวอย่างนี้มีค่าเป็น 2)</li>
  <li>กลับไปทำซ้ำข้อที่ 3 </li>
    <ul>
      <li></li>
      <li> ─── ทำซ้ำ ───</li>
      <li></li>
    </ul>
  <li>บวกค่านั้นกับค่าก่อนหน้า (2 + 1) = 3 และนำไปต่อท้ายลำดับ:</li>
    <ul><li>1, 1, 2, 1, 3</li></ul>
  <li>นำค่านั้นไปต่อท้ายลำดับ:</li>
    <ul><li>1, 1, 2, 1, 3, 2</li></ul>
  <li>ดูค่าถัดไปในลำดับ (ค่าที่สี่ในตัวอย่างนี้มีค่าเป็น 1)</li>
</ol>

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า $n$ และคืนค่า index ของลำดับแบบ Stern-Brocot ที่มีค่าตรงกับ $n$

ลำดับนี้ใช้ index แบบ 1-based (index เริ่มที่ 1)

# --hints--

`sternBrocot` ต้องเป็นฟังก์ชัน

```js
assert(typeof sternBrocot == 'function');
```

`sternBrocot(2)` ต้องคืนค่าเป็นตัวเลข

```js
assert(typeof sternBrocot(2) == 'number');
```

`sternBrocot(2)` ต้องคืนค่าเป็น `3`

```js
assert.equal(sternBrocot(2), 3);
```

`sternBrocot(3)` ต้องคืนค่าเป็น `5`

```js
assert.equal(sternBrocot(3), 5);
```

`sternBrocot(5)` ต้องคืนค่าเป็น `11`

```js
assert.equal(sternBrocot(5), 11);
```

`sternBrocot(7)` ต้องคืนค่าเป็น `19`

```js
assert.equal(sternBrocot(7), 19);
```

`sternBrocot(10)` ต้องคืนค่าเป็น `39`

```js
assert.equal(sternBrocot(10), 39);
```

# --seed--

## --seed-contents--

```js
function sternBrocot(num) {

}
```

# --solutions--

```js
function sternBrocot(num) {
  function f(n) {
    return n < 2
      ? n
      : n & 1
      ? f(Math.floor(n / 2)) + f(Math.floor(n / 2 + 1))
      : f(Math.floor(n / 2));
  }

  function gcd(a, b) {
    return a ? (a < b ? gcd(b % a, a) : gcd(a % b, b)) : b;
  }
  var n;
  for (n = 1; f(n) != num; n++);
  return n;
}
```
