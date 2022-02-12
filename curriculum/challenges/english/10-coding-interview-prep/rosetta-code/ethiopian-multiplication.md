---
id: 599d1566a02b571412643b84
title: Ethiopian multiplication
challengeType: 5
forumTopicId: 302257
dashedName: ethiopian-multiplication
---

# --description--

Ethiopian multiplication 
เป็นวิธีการคูณจำนวนเต็มโดยใช้การบวก การเพิ่มขึ้นเท่าตัว และการลดครึ่งหนึ่งเท่านั้น

**Method:**

<ol>
  <li>เขียนเลขสองตัวที่จะคูณไว้ที่บนคอลัมน์</li>
  <li>ให้นำเลขในคอลัมน์ซ้ายไปหาร 2 และปัดเศษทิ้ง จากนั้นเขียนเลขลงในคอลัมน์ซ้าย และทำไปเรื่อยๆจนได้เลข <code>1</code></li>
  <li>ให้นำเลขในคอลัมน์ขวาไปคูณสองเรื่อยๆ จากนั้นเขียนเลขลงในคอลัมน์ขวา ไปจนกว่าจะอยู่ในบรรทัดเดียวกับเลข <code>1</code> ของคอลัมน์ซ้าย</li>
  <li>ให้ดูตาราง และลบบรรทัดที่มีเลขในคอลัมน์ซ้ายเป็นเลขคู่</li>
  <li>บวกเลขทั้งหมดในคอลัมน์ขวา จะได้ผลลัพธ์ของการคูณ</li>
</ol>

**ตัวอย่าง:** `17 × 34`

<pre>17   34
</pre>

หารครึ่ง column ซ้าย:

<pre>17   34
8
4
2
1
</pre>

นำ column ขวาไปคูณสอง:

<pre>17   34
8    68
4   136
2   272
1   544
</pre>

ขีดฆ่าข้อมูลที่คอลัมน์ซ้ายเป็นเลขคู่:

<pre>17   34
8    <strike>68</strike>
4   <strike>136</strike>
2   <strike>272</strike>
1   544
</pre>

รวมตัวเลขที่เหลือในคอลัมน์ขวา:

<!-- markdownlint-disable MD003 -->

<pre>17   34
8    --
4   ---
2   ---
1   544
   ====
    578
</pre>

<!-- markdownlint-enable MD003 -->

ดังนั้น `17` คูณโดย `34` โดย Ethiopian method จะได้ค่าเป็น `578`

# --instructions--

ให้ประกาศฟังก์ชันสามตัว:

<ol>
  <li>ตัวแรกใช้หารเลขลงครึ่งหนึ่ง</li>
  <li>ตัวที่สองใช้คูณสอง</li>
  <li>ตัวที่สามใช้ตรวจสอบว่าเลขเป็นเลขคู่หรือไม่</li>
</ol>

ใช้ฟังก์ชันเหล่านี้เพื่อสร้างฟังก์ชันที่ทำการคูณแบบ Ethiopian multiplication

<!-- markdownlint-disable MD046-->

# --hints--

`eth_mult` ต้องเป็นฟังก์ชัน

```js
assert(typeof eth_mult === 'function');
```

`eth_mult(17,34)` ต้องคืนค่าเป็น `578`

```js
assert.equal(eth_mult(17, 34), 578);
```

`eth_mult(23,46)` ต้องคืนค่าเป็น `1058`

```js
assert.equal(eth_mult(23, 46), 1058);
```

`eth_mult(12,27)` ต้องคืนค่าเป็น `324`

```js
assert.equal(eth_mult(12, 27), 324);
```

`eth_mult(56,98)` ต้องคืนค่าเป็น `5488`

```js
assert.equal(eth_mult(56, 98), 5488);
```

`eth_mult(63,74)` ต้องคืนค่าเป็น `4662`

```js
assert.equal(eth_mult(63, 74), 4662);
```

# --seed--

## --seed-contents--

```js
function eth_mult(a, b) {

}
```

# --solutions--

```js
function eth_mult(a, b) {
  let sum = 0; a = [a]; b = [b];

  let half = a => a / 2,
    double = a => a * 2,
    is_even = a => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
```
