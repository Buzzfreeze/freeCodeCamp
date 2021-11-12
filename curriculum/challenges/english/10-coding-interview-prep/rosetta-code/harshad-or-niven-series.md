---
id: 595668ca4cfe1af2fb9818d4
title: Harshad or Niven series
challengeType: 5
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

Harshad หรือ Niven numbers 
เป็นจำนวนเต็มบวก ≥ 1 ที่หารด้วยผลรวมของตัวเลขลงตัว

เช่น `42` เป็น Harshad number เพราะ `42` หารได้โดย `(4 + 2)` ไม่มีเศษ.

สมมติว่าชุดถูกกำหนดเป็นตัวเลขในลำดับที่เพิ่มขึ้น.

# --instructions--


ใช้ฟังก์ชันเพื่อสร้างสมาชิกที่ต่อเนื่องกันของลำดับ Harshad

ใช้เพื่อreturn arrayที่มีสมาชิกสิบคนของลำดับ โดยเริ่มจากตัวเลข Harshad ตัวแรกที่มากกว่า`n`.

# --hints--

`isHarshadOrNiven` ควรเป็น function.

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` ควร return `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` ควร return `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` ควร return `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

```js
assert.deepEqual(isHarshadOrNiven(1000), [1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]);
```

# --seed--

## --seed-contents--

```js
function isHarshadOrNiven(n) {
  const res = [];

  return res;
}
```

# --solutions--

```js
function isHarshadOrNiven(n) {
  function isHarshad(num) {
    let s = 0;
    const nStr = num.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  const res = [];
  let count = 0;

  while (count < 10) {
    n++;
    if (isHarshad(n)) {
      count++;
      res.push(n);
    }
  }

  return res;
}
```
