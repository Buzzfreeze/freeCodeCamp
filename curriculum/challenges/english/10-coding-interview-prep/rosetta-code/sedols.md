---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 5
forumTopicId: 302305
dashedName: sedols
---

# --description--

สำหรับรายการตัวเลข 6 หลัก [SEDOL](https://en.wikipedia.org/wiki/SEDOL "wp: SEDOL")s 6 หลัก ให้คำนวณและต่อท้ายsum check นั่นคือ กำหนดstring inputทางด้านซ้าย ฟังก์ชันของคุณควรส่งคืนstring ที่เกี่ยวข้องทางด้านขวา:

<pre>
710889 => 7108899
B0YBKJ => B0YBKJ7
406566 => 4065663
B0YBLH => B0YBLH2
228276 => 2282765
B0YBKL => B0YBKL9
557910 => 5579107
B0YBKR => B0YBKR5
585284 => 5852842
B0YBKT => B0YBKT7
B00030 => B000300
</pre>

Check แต่ละ input อยู่ใน form ที่ถูกต้อง 
โดยเฉพาะในส่วนที่เกี่ยวกับอักขระที่ถูกต้องที่อนุญาตใน string SEDOL ฟังก์ชันของคุณควรส่งคืน `null` ใน input ที่ไม่ถูกต้อง

# --hints--

`sedol` ควรเป็น function.

```js
assert(typeof sedol === 'function');
```

`sedol('a')` ควร return null.

```js
assert(sedol('a') === null);
```

`sedol('710889')` ควร return '7108899'.

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` ควร return null.

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` ควร return '2282765'.

```js
assert(sedol('228276') === '2282765');
```

# --seed--

## --seed-contents--

```js
function sedol(input) {

  return true;
}
```

# --solutions--

```js
function sedol(input) {
  const checkDigit = sedolCheckDigit(input);
  if (checkDigit !== null) {
    return input + checkDigit;
  }
  return null;
}

const weight = [1, 3, 1, 7, 3, 9, 1];
function sedolCheckDigit(char6) {
  if (char6.search(/^[0-9BCDFGHJKLMNPQRSTVWXYZ]{6}$/) === -1) {
    return null;
  }

  let sum = 0;
  for (let i = 0; i < char6.length; i++) {
    sum += weight[i] * parseInt(char6.charAt(i), 36);
  }
  const check = (10 - (sum % 10)) % 10;
  return check.toString();
}
```
