---
id: 594ecc0d9a8cf816e3340187
title: Taxicab numbers
challengeType: 5
forumTopicId: 302337
dashedName: taxicab-numbers
---

# --description--

[taxicab number](<https://en.wikipedia.org/wiki/Hardy–Ramanujan number> "wp: Hardy–Ramanujan number") (the definition that is being used here) เป็นจำนวนเต็มบวกที่สามารถแสดงเป็นผลรวมของลูกบาศก์บวกสองก้อนได้มากกว่าหนึ่งวิธี

วิธีแรห taxicab number คือ `1729` ดังเช่น:

1<sup>3</sup> + 12<sup>3</sup> and

9<sup>3</sup> + 10<sup>3</sup>.

Taxicab numbers จะอยู่ในรูปแบบ:

<ul>
  <li>taxi numbers</li>
  <li>taxi-cab numbers</li>
  <li>taxi cab numbers</li>
  <li>Hardy-Ramanujan numbers</li>
</ul>

# --instructions--

เขียนฟังก์ชันที่ส่งคืนหมายเลขรถแท็กซี่ `n` ต่ำสุด สำหรับหมายเลขรถแท็กซี่แต่ละหมายเลข ให้แสดงหมายเลขและลูกบาศก์ที่เป็นส่วนประกอบ

**See also:**

<ul>
  <li><a href='https://oeis.org/A001235' target='_blank'>A001235 taxicab numbers</a> on The On-Line Encyclopedia of Integer Sequences.</li>
  <li><a href='https://en.wikipedia.org/wiki/Taxicab_number' target='_blank'>taxicab number</a> on Wikipedia.</li>
</ul>

# --hints--

`taxicabNumbers` ควรเป็น function.

```js
assert(typeof taxicabNumbers === 'function');
```

`taxicabNumbers` ควร return array.

```js
assert(typeof taxicabNumbers(2) === 'object');
```

`taxicabNumbers` ควร return array ของ numbers.

```js
assert(typeof taxicabNumbers(100)[0] === 'number');
```

`taxicabNumbers(4)` ควร return [1729, 4104, 13832, 20683].

```js
assert.deepEqual(taxicabNumbers(4), res4);
```

`taxicabNumbers(25)` ควร return [1729, 4104, 13832, 20683, 32832, 39312, 40033, 46683, 64232, 65728, 110656, 110808, 134379, 149389, 165464, 171288, 195841, 216027, 216125, 262656, 314496, 320264, 327763, 373464, 402597]

```js
assert.deepEqual(taxicabNumbers(25), res25);
```

`taxicabNumbers(39)` resulting numbers from 20 - 29 ควร be [314496,320264,327763,373464,402597,439101,443889,513000,513856].

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
