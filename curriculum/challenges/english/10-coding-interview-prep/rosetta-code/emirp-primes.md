---
id: 599d0ba974141b0f508b37d5
title: Emirp primes
challengeType: 5
forumTopicId: 302253
dashedName: emirp-primes
---

# --description--

emirp (สะกดกลับหลังเป็น **prime**) เป็นจำนวนเฉพาะที่เมื่อกลับด้าน เป็นจำนวนเฉพาะอีกตัวหนึ่ง

# --instructions--

ให้ฟังก์ชันของคุณทำงานดังนี้:

<ul>
  <li>แสดงเลข emirp <code>n</code> ตัวแรก</li>
  <li>แสดงเลข emirp ในช่วงที่ระบุ</li>
  <li>แสดงจำนวนของเลข emirp ในช่วงที่ระบุ</li>
  <li>แสดงเลข emirp ที่ <code>n</code></li>
</ul>

ให้ฟังก์ชันรับพารามีเตอร์สองตัว ตัวแรกคือ `n` หรือช่วงของตัวเลขเป็น array ตัวที่สองจะเป็นบูลีนที่ระบุว่าฟังก์ชันส่งกลับค่า emirps เป็น array หรือตัวเลขเดียว ฟังก์ชันต้องคืนค่าเป็น array หรือตัวเลข

# --hints--

`emirps` ต้องเป็นฟังก์ชัน

```js
assert(typeof emirps === 'function');
```

`emirps(20,true)` ต้องคืนค่าเป็น `[13,17,31,37,71,73,79,97,107,113,149,157,167,179,199,311,337,347,359,389]`

```js
assert.deepEqual(emirps(20, true), [
  13,
  17,
  31,
  37,
  71,
  73,
  79,
  97,
  107,
  113,
  149,
  157,
  167,
  179,
  199,
  311,
  337,
  347,
  359,
  389
]);
```

`emirps(1000)` ต้องคืนค่าเป็น `70529`

```js
assert.deepEqual(emirps(1000), 70529);
```

`emirps([7700,8000],true)` ต้องคืนค่าเป็น `[7717,7757,7817,7841,7867,7879,7901,7927,7949,7951,7963]`

```js
assert.deepEqual(emirps([7700, 8000], true), [
  7717,
  7757,
  7817,
  7841,
  7867,
  7879,
  7901,
  7927,
  7949,
  7951,
  7963
]);
```

`emirps([7700,8000],false)` ต้องคืนค่าเป็น `11`

```js
assert.deepEqual(emirps([7700, 8000], false), 11);
```

# --seed--

## --seed-contents--

```js
function emirps(n) {

}
```

# --solutions--

```js
function emirps(num, showEmirps)
{
  const is_prime = function(n)
    {
    if (!(n % 2) || !(n % 3)) return false;
    let p = 1;
    while (p * p < n)
                    { if (n % (p += 4) == 0 || n % (p += 2) == 0)
                            { return false; } }
    return true;
  };
  const is_emirp = function(n) {
    const r = parseInt(n.toString().split('').reverse().join(''));
    return r != n && is_prime(n) && is_prime(r);
  };

  let i,
    arr = [];
  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (is_emirp(i)) arr.push(i);
    // first x emirps
    if (showEmirps) return arr;
    // xth emirp
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (is_emirp(i)) arr.push(i);
    // emirps between x .. y
    if (showEmirps) return arr;
    // number of emirps between x .. y
    return arr.length;
  }
}
```
