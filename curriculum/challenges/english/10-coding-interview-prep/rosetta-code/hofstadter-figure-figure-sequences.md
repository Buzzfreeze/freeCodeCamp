---
id: 59622f89e4e137560018a40e
title: Hofstadter Figure-Figure sequences
challengeType: 5
forumTopicId: 302286
dashedName: hofstadter-figure-figure-sequences
---

# --description--

กำหนดให้จำนวนเต็มบวกสองชุดมีสมการเป็น

$R(1)=1\\ ;\\ S(1)=2 \\\\R(n)=R(n-1)+S(n-1), \\quad n>1.$

โดยลำดับ $S(n)$ จะเป็นชุดตัวเลขจำนวนเต็มบวกที่ไม่อยู่ใน $R(n)$

ลำดับ $R$ จะเริ่มต้นด้วยค่า

<pre>1, 3, 7, 12, 18, ...</pre>

ลำดับ $S$ จะเริ่มต้นด้วยค่า

<pre>2, 4, 5, 6, 8, ...</pre>

# --instructions--

ให้สร้างสองฟังก์ชันชื่อ `ffr` และ `ffs` ซึ่งรับค่าเป็น `n` และคืนค่าเป็น `R(n)` หรือ `S(n)` ตามลำดับ (ให้ R(1) = 1 และ S(1) = 2 เพื่อป้องกัน off-by-one error)

**อ้างอิง**

<ul>
  <li>
    Sloane <a href='https://oeis.org/A005228' target='_blank'>A005228</a> และ <a href='https://oeis.org/A030124' target='_blank'>A030124</a>.
  </li>
  <li>
    Wikipedia: <a href='https://en.wikipedia.org/wiki/Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' title='wp: Hofstadter_sequence#Hofstadter_Figure-Figure_sequences' target='_blank'>Hofstadter Figure-Figure sequences</a>.
  </li>
</ul>

# --hints--

`ffr` ต้องเป็นฟังก์ชัน

```js
assert(typeof ffr === 'function');
```

`ffs` ต้องเป็นฟังก์ชัน

```js
assert(typeof ffs === 'function');
```

`ffr` ต้องคืนค่าเป็นจำนวน int

```js
assert(Number.isInteger(ffr(1)));
```

`ffs` ต้องคืนค่าเป็นจำนวน int

```js
assert(Number.isInteger(ffs(1)));
```

`ffr(10)` ต้องคืนค่าเป็น `69`

```js
assert.equal(ffr(ffrParamRes[0][0]), ffrParamRes[0][1]);
```

`ffr(50)` ต้องคืนค่าเป็น `1509`

```js
assert.equal(ffr(ffrParamRes[1][0]), ffrParamRes[1][1]);
```

`ffr(100)` ต้องคืนค่าเป็น `5764`

```js
assert.equal(ffr(ffrParamRes[2][0]), ffrParamRes[2][1]);
```

`ffr(1000)` ต้องคืนค่าเป็น `526334`

```js
assert.equal(ffr(ffrParamRes[3][0]), ffrParamRes[3][1]);
```

`ffs(10)` ต้องคืนค่าเป็น `14`

```js
assert.equal(ffs(ffsParamRes[0][0]), ffsParamRes[0][1]);
```

`ffs(50)` ต้องคืนค่าเป็น `59`

```js
assert.equal(ffs(ffsParamRes[1][0]), ffsParamRes[1][1]);
```

`ffs(100)` ต้องคืนค่าเป็น `112`

```js
assert.equal(ffs(ffsParamRes[2][0]), ffsParamRes[2][1]);
```

`ffs(1000)` ต้องคืนค่าเป็น `1041`

```js
assert.equal(ffs(ffsParamRes[3][0]), ffsParamRes[3][1]);
```

# --seed--

## --after-user-code--

```js
const ffrParamRes = [[10, 69], [50, 1509], [100, 5764], [1000, 526334]];
const ffsParamRes = [[10, 14], [50, 59], [100, 112], [1000, 1041]];
```

## --seed-contents--

```js
function ffr(n) {
  return n;
}

function ffs(n) {
  return n;
}
```

# --solutions--

```js
const R = [null, 1];
const S = [null, 2];

function extendSequences (n) {
  let current = Math.max(R[R.length - 1], S[S.length - 1]);
  let i;
  while (R.length <= n || S.length <= n) {
    i = Math.min(R.length, S.length) - 1;
    current += 1;
    if (current === R[i] + S[i]) {
      R.push(current);
    } else {
      S.push(current);
    }
  }
}

function ffr (n) {
  extendSequences(n);
  return R[n];
}

function ffs (n) {
  extendSequences(n);
  return S[n];
}
```
