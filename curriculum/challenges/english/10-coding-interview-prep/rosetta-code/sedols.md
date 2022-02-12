---
id: 59d9c6bc214c613ba73ff012
title: SEDOLs
challengeType: 5
forumTopicId: 302305
dashedName: sedols
---

# --description--

กำหนดให้ [SEDOL](https://en.wikipedia.org/wiki/SEDOL "wp: SEDOL") เป็นข้อมูล 6 หลัก 

ให้คำนวน check sum โดยต้องได้ค่าตามนี้:

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

ต้องตรวจสอบว่า input ถูกต้องด้วย ถ้า input ไม่ถูกต้องให้คืนค่าเป็น `null` 

# --hints--

`sedol` ต้องเป็นฟังก์ชัน

```js
assert(typeof sedol === 'function');
```

`sedol('a')` ต้องคืนค่าเป็น null

```js
assert(sedol('a') === null);
```

`sedol('710889')` ต้องคืนค่าเป็น '7108899'

```js
assert(sedol('710889') === '7108899');
```

`sedol('BOATER')` ต้องคืนค่าเป็น null

```js
assert(sedol('BOATER') === null);
```

`sedol('228276')` ต้องคืนค่าเป็น '2282765'

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
