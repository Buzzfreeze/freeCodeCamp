---
id: 595b98f8b5a2245e243aa831
title: Heronian triangles
challengeType: 5
forumTopicId: 302285
dashedName: heronian-triangles
---

# --description--

[Hero's formula](<https://en.wikipedia.org/wiki/Heron's formula> "wp: Heron's formula") ของพื้นที่ของรูปสามเหลี่ยมที่จะรับความยาวของด้านทั้งสาม `a`, `b` และ `c` ซึ่งจะเขียนเป็นสมการได้ดังนี้:

$A = \\sqrt{s(s-a)(s-b)(s-c)},$

โดย `s` เป็นความยอมรอบรูปของสามเหลี่ยม

$s=\\frac{a+b+c}{2}.$

Heronian triangles คือสามเหลี่ยมที่มีทั้งด้าน และพื้นที่เป็นจำนวนเต็ม

ตัวอย่างคือสามเหลี่ยมที่มีด้านเป็น `3, 4, 5` ซึ่งมีพื้นที่ `6` (และเส้นรอบรูปคือ `12`)
ให้สังเกตว่าสามเหลี่ยมใดๆ ที่มีด้านเป็นจำนวนเต็มที่เป็นตัวคูณของ `3, 4, 5`; เช่น `6, 8, 10` จะเป็นสามเหลี่ยม Heronian ด้วย


# --instructions--

ให้เขียนฟังก์ชันโดยใช้สูตรของ Heronian เพื่อคืนค่าเป็นสามเหลี่ยมที่ 1 จนถึงสามเหลี่ยมที่ <code>n</code> โดยคืนค่าเป็น array ของความยาวด้านทั้งสามของสามเหลี่ยม

# --hints--

`heronianTriangle` ต้องเป็นฟังก์ชัน

```js
assert(typeof heronianTriangle === 'function');
```

`heronianTriangle(10)` ต้องคืนค่าเป็น `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]]`

```js
assert.deepEqual(heronianTriangle(testCases[0]), res[0]);
```

`heronianTriangle(15)` ต้องคืนค่าเป็น `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],`

```js
assert.deepEqual(heronianTriangle(testCases[1]), res[1]);
```

`heronianTriangle(20)` ต้องคืนค่าเป็น `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],`

```js
assert.deepEqual(heronianTriangle(testCases[2]), res[2]);
```

`heronianTriangle(25)` ต้องคืนค่าเป็น `[[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37],[16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]`

```js
assert.deepEqual(heronianTriangle(testCases[3]), res[3]);
```

# --seed--

## --after-user-code--

```js
const testCases = [10, 15, 20, 25];

const res = [
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53]],
  [[3, 4, 5], [5, 5, 6], [5, 5, 8], [4, 13, 15], [5, 12, 13], [9, 10, 17], [3, 25, 26], [7, 15, 20], [10, 13, 13], [8, 15, 17], [13, 13, 24], [6, 25, 29], [11, 13, 20], [5, 29, 30], [13, 14, 15], [10, 17, 21], [7, 24, 25], [8, 29, 35], [12, 17, 25], [4, 51, 53], [19, 20, 37], [16, 17, 17], [17, 17, 30], [16, 25, 39], [13, 20, 21]]
];
```

## --seed-contents--

```js
function heronianTriangle(n) {


  return [];
}
```

# --solutions--

```js
function heronianTriangle(n) {
  const list = [];
  const result = [];

  let j = 0;
  for (let c = 1; c <= 200; c++) {
    for (let b = 1; b <= c; b++) {
      for (let a = 1; a <= b; a++) {
        if (gcd(gcd(a, b), c) === 1 && isHeron(heronArea(a, b, c))) {
          list[j++] = new Array(a, b, c, heronArea(a, b, c));
        }
      }
    }
  }

  sort(list);

  for (let i = 0; i < n; i++) {
    result[i] = [list[i][0], list[i][1], list[i][2]];
  }

  return result;

  function heronArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
  }

  function isHeron(h) { return h % 1 === 0 && h > 0; }

  function gcd(a, b) {
    let leftover = 1;
    let dividend = a > b ? a : b;
    let divisor = a > b ? b : a;
    while (leftover !== 0) {
      leftover = dividend % divisor;
      if (leftover > 0) {
        dividend = divisor;
        divisor = leftover;
      }
    }
    return divisor;
  }

  function sort(arg) {
    let swapped = true;
    let temp = [];
    while (swapped) {
      swapped = false;
      for (let i = 1; i < arg.length; i++) {
        if (arg[i][4] < arg[i - 1][4] || arg[i][4] === arg[i - 1][4] && arg[i][3] < arg[i - 1][3]) {
          temp = arg[i];
          arg[i] = arg[i - 1];
          arg[i - 1] = temp;
          swapped = true;
        }
      }
    }
  }
}
```
