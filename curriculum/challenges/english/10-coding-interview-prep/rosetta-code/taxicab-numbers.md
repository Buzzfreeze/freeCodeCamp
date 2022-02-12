---
id: 594ecc0d9a8cf816e3340187
title: Taxicab numbers
challengeType: 5
forumTopicId: 302337
dashedName: taxicab-numbers
---

# --description--

[taxicab number](<https://en.wikipedia.org/wiki/Hardy–Ramanujan number> "wp: Hardy–Ramanujan number") เป็นจำนวนเต็มบวก ที่สามารถแสดงเป็นผลรวมของเลขยกกำลังสามได้มากกว่าหนึ่งวิธี

โดย taxicab number ตัวแรกคือ `1729` เพราะ:

1<sup>3</sup> + 12<sup>3</sup> และ

9<sup>3</sup> + 10<sup>3</sup>

# --instructions--

ให้เขียนฟังก์ชันเพื่อหา taxicab number `n` ตัวแรก โดยให้คืนค่าเป็น array ของค่านั้น

**See also:**

<ul>
  <li><a href='https://oeis.org/A001235' target='_blank'>A001235 taxicab numbers</a> ที่ The On-Line Encyclopedia of Integer Sequences</li>
  <li><a href='https://en.wikipedia.org/wiki/Taxicab_number' target='_blank'>taxicab number</a> บน Wikipedia</li>
</ul>

# --hints--

`taxicabNumbers` ต้องเป็นฟังก์ชัน

```js
assert(typeof taxicabNumbers === 'function');
```

`taxicabNumbers` ต้องคืนค่าเป็น array

```js
assert(typeof taxicabNumbers(2) === 'object');
```

`taxicabNumbers` ต้องคืนค่าเป็น array ของตัวเลข

```js
assert(typeof taxicabNumbers(100)[0] === 'number');
```

`taxicabNumbers(4)` ต้องคืนค่าเป็น `[1729, 4104, 13832, 20683]`

```js
assert.deepEqual(taxicabNumbers(4), res4);
```

`taxicabNumbers(25)` ต้องคืนค่าเป็น `[1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]`

```js
assert.deepEqual(taxicabNumbers(25), res25);
```

`taxicabNumbers(39)` ของค่าตั้งแต่ 20 ถึง 29 ต้องเป็น `[314496,320264,327763,373464,402597,439101,443889,513000,513856]`

```js
assert.deepEqual(taxicabNumbers(39).slice(20, 29), res39From20To29);
```

# --seed--

## --after-user-code--

```js
const res4 = [1729, 4104, 13832, 20683];
const res25 = [
  1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656,
  110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763,
  373464, 402597
];

const res39From20To29 = [314496, 320264, 327763, 373464, 402597, 439101, 443889, 513000, 513856];
```

## --seed-contents--

```js
function taxicabNumbers(n) {

  return true;
}
```

# --solutions--

```js
function taxicabNumbers(nNumbers) {
  const cubeN = [];
  const s3s = {};

  const e = 100;
  for (let n = 1; n < e; n += 1) {
    cubeN[n] = n * n * n;
  }

  for (let a = 1; a < e - 1; a += 1) {
    const a3 = cubeN[a];
    for (let b = a; b < e; b += 1) {
      const b3 = cubeN[b];
      const s3 = a3 + b3;

      let abs = s3s[s3];
      if (!abs) {
        s3s[s3] = abs = [];
      }
      abs.push([a, b]);
    }
  }

  let i = 0;
  const res = [];
  Object.keys(s3s).forEach(s3 => {
    const abs = s3s[s3];
    if (abs.length >= 2) { // No two cube pairs found
      i += 1;
      if (i <= nNumbers) {
        res.push(s3);
      }
    }
  });
  return res.map(item => parseInt(item, 10));
}
```
