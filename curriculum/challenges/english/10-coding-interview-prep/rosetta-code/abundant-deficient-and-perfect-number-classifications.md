---
id: 594810f028c0303b75339acd
title: 'Abundant, deficient and perfect number classถ้าications'
challengeType: 5
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classถ้าications
---

# --description--

ให้จัดประเภทของจำนวนเต็มบวก ตามจำนวนเลขที่หารลงตัว

ให้ $P(n)$ เป็นผลรวมของเลขที่หาร `n` ลงตัว โยที่เลขที่หาร `n` ลงตัวจะไม่รวมตัว `n` ด้วย
เช่น:

ถ้า `P(n) < n` ดังนั้น `n` จะถือเป็น `deficient`

ถ้า `P(n) === n` ดังนั้น `n` จะถือเป็น `perfect`

ถ้า `P(n) > n` ดังนั้น `n` จะถือเป็น `abundant`

**ตัวอย่าง**: ถ้า `6` มีเลขที่หารตัวเองลงตัวคือ `1`, `2`, และ `3` จะทำให้ $P(n)$ เป็น `1 + 2 + 3 = 6` ดังนั้น `6` จะถือเป็น `perfect` number

# --instructions--

ให้สร้างฟังก์ชันที่คำนวณว่าในตัวเลขตั้งแต่ `1` ถึง `num` มีตัวเลขที่ถูกจัดอยู่ในแต่ละประเภทกี่ตัว และให้คืนค่าเป็น array ในรูปแบบนี้ `[deficient, perfect, abundant]`

# --hints--

`getDPA` ต้องเป็นฟังก์ชัน

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` ต้องคืนค่าเป็น array

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` ต้องคืนค่าเป็น array ที่มีตัวเลขข้างใน `3` ตัว

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` ต้องคืนค่าเป็น `[3758, 3, 1239]`

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` ต้องคืนค่าเป็น `[7508, 4, 2488]`

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` ต้องคืนค่าเป็น `[15043, 4, 4953]`

```js
assert.deepEqual(getDPA(20000), [15043, 4, 4953]);
```

# --seed--

## --seed-contents--

```js
function getDPA(num) {

}
```

# --solutions--

```js
function getDPA(num) {
  const dpa = [1, 0, 0];
  for (let n = 2; n <= num; n += 1) {
    let ds = 1;
    const e = Math.sqrt(n);
    for (let d = 2; d < e; d += 1) {
      if (n % d === 0) {
        ds += d + (n / d);
      }
    }
    if (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
