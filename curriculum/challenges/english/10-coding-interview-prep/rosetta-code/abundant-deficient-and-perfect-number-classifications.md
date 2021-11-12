---
id: 594810f028c0303b75339acd
title: 'Abundant, deficient and perfect number classถ้าications'
challengeType: 5
forumTopicId: 302221
dashedName: abundant-deficient-and-perfect-number-classถ้าications
---

# --description--

สิ่งเหล่านี้กำหนดการแบ่งประเภทจำนวนเต็มบวกสามประเภทตามตัวหารที่เหมาะสม

ให้ $P(n)$ เป็นผลรวมของตัวหารที่เหมาะสมของ `n' โดยที่ตัวหารที่เหมาะสมเป็นจำนวนเต็มบวก `n` ทั้งหมดที่ไม่ใช่ `n` เอง

ถ้า `P(n) < n` ดังนั้น `n` เป็น class ของ `deficient`

ถ้า `P(n) === n` ดังนั้น `n` เป็น class ของ `perfect`

ถ้า `P(n) > n` ดังนั้น `n` เป็น class ของ `abundant`

**Example**: `6` มีตัวหารที่เหมาะสมของ `1`, `2`, และ `3`. `1 + 2 + 3 = 6`, ดังนั้น `6` เป็น class ของ perfect number

# --instructions--

ใช้ฟังก์ชันที่คำนวณจำนวนเต็มจำนวนตั้งแต่ `1` ถึง `num` (รวม) ในแต่ละคลาสทั้งสาม ส่งออกผลลัพธ์เป็นอาร์เรย์ในรูปแบบต่อไปนี้ `[deficient, perfect, abundant]`.

# --hints--

`getDPA` ควรเป็น function.

```js
assert(typeof getDPA === 'function');
```

`getDPA(5000)` ควร return array.

```js
assert(Array.isArray(getDPA(5000)));
```

`getDPA(5000)` return array ควรมีความยาว `3`.

```js
assert(getDPA(5000).length === 3);
```

`getDPA(5000)` ควร return `[3758, 3, 1239]`.

```js
assert.deepEqual(getDPA(5000), [3758, 3, 1239]);
```

`getDPA(10000)` ควร return `[7508, 4, 2488]`.

```js
assert.deepEqual(getDPA(10000), [7508, 4, 2488]);
```

`getDPA(20000)` ควร return `[15043, 4, 4953]`.

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
      ถ้า (n % d === 0) {
        ds += d + (n / d);
      }
    }
    ถ้า (n % e === 0) {
      ds += e;
    }
    dpa[ds < n ? 0 : ds === n ? 1 : 2] += 1;
  }
  return dpa;
}
```
