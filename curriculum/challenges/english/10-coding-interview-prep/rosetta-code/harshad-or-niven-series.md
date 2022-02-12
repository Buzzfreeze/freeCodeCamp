---
id: 595668ca4cfe1af2fb9818d4
title: Harshad or Niven series
challengeType: 5
forumTopicId: 302281
dashedName: harshad-or-niven-series
---

# --description--

Harshad หรือ Niven number 
เป็นจำนวนเต็มบวก ≥ 1 ที่หารด้วยผลรวมของตัวเลขลงตัว

เช่น `42` เป็น Harshad number เพราะ `42` หารด้วย `(4 + 2)` ลงตัว


# --instructions--


ให้เขียนฟังก์ชันที่คืนค่าเป็นตัวเลข 10 ตัวแรกที่เป็น Harshad number โดยเริ่มจากตัวเลขที่มากกว่า `n`

# --hints--

`isHarshadOrNiven` ต้องเป็นฟังก์ชัน

```js
assert(typeof isHarshadOrNiven === 'function');
```

`isHarshadOrNiven(10)` ต้องคืนค่าเป็น `[12, 18, 20, 21, 24, 27, 30, 36, 40, 42]`

```js
assert.deepEqual(isHarshadOrNiven(10), [12, 18, 20, 21, 24, 27, 30, 36, 40, 42]);
```

`isHarshadOrNiven(400)` ต้องคืนค่าเป็น `[402, 405, 407, 408, 410, 414, 420, 423, 432, 440]`

```js
assert.deepEqual(isHarshadOrNiven(400), [402, 405, 407, 408, 410, 414, 420, 423, 432, 440]);
```

`isHarshadOrNiven(1000)` ต้องคืนค่าเป็น `[1002, 1008, 1010, 1011, 1012, 1014, 1015, 1016, 1017, 1020]`

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
