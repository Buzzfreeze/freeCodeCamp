---
id: 598ee8b91b410510ae82efef
title: Extensible prime generator
challengeType: 5
forumTopicId: 302262
dashedName: extensible-prime-generator
---

# --description--

ให้เขียนฟังก์ชันสำหรับสร้างจำนวนเฉพาะตามลำดับที่จะปรับโดยอัตโนมัติเพื่อรองรับการสร้างจำนวนเฉพาะที่มีค่ามากพอสมควร

โดยฟังก์ชันจะต้อง:

<ul>
  <li>แสดงจำนวนเฉพาะ <code>n</code> ตัวแรก</li>
  <li>แสดงจำนวนเฉพาะในช่วงที่ระบุ</li>
  <li>แสดงจำนวนของจำนวนเฉพาะในช่วงที่ระบุ</li>
  <li>แสดงจำนวนเฉพาะตัวที่ <code>n</code></li>
</ul>


ฟังก์ชันจะรับ parameter สองตัว ตัวแรกจะเป็น `n` หรือช่วงของตัวเลขเฉพาะที่ต้องการ โดยรับเป็น array ตัวที่สองจะรับเป็น boolean ที่จะใช้บอกว่าให้คืนค่าเป็นจำนวนเฉพาะในช่วงที่ระบุ หรือคืนค่าเป็นจำนวนเฉพาะตัวที่ <code>n</code> ฟังก์ชันนี้ต้องคืนค่าเป็น array

# --hints--

`primeGenerator` ต้องเป็นฟังก์ชัน

```js
assert(typeof primeGenerator === 'function');
```

`primeGenerator(20, true)` ต้องคืนค่าเป็น `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]`

```js
assert.deepEqual(primeGenerator(20, true), [
  2,
  3,
  5,
  7,
  11,
  13,
  17,
  19,
  23,
  29,
  31,
  37,
  41,
  43,
  47,
  53,
  59,
  61,
  67,
  71
]);
```

`primeGenerator([100, 150], true)` ต้องคืนค่าเป็น `[101, 103, 107, 109, 113, 127, 131, 137, 139, 149]`

```js
assert.deepEqual(primeGenerator([100, 150], true), [
  101,
  103,
  107,
  109,
  113,
  127,
  131,
  137,
  139,
  149
]);
```

`primeGenerator([7700, 8000], false)` ต้องคืนค่าเป็น `30`

```js
assert.equal(primeGenerator([7700, 8000], false), 30);
```

`primeGenerator(10000, false)` ต้องคืนค่าเป็น `104729`

```js
assert.equal(primeGenerator(10000, false), 104729);
```

# --seed--

## --seed-contents--

```js
function primeGenerator(num, showPrimes) {

}
```

# --solutions--

```js
function primeGenerator(num, showPrimes) {
  let i,
    arr = [];

  function isPrime(num) {
    // try primes <= 16
    if (num <= 16) { return (
      num == 2 || num == 3 || num == 5 || num == 7 || num == 11 || num == 13
    ); }
    // cull multiples of 2, 3, 5 or 7
    if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0)
      { return false; }
    // cull square numbers ending in 1, 3, 7 or 9
    for (let i = 10; i * i <= num; i += 10) {
      if (num % (i + 1) == 0) return false;
      if (num % (i + 3) == 0) return false;
      if (num % (i + 7) == 0) return false;
      if (num % (i + 9) == 0) return false;
    }
    return true;
  }

  if (typeof num === 'number') {
    for (i = 0; arr.length < num; i++) if (isPrime(i)) arr.push(i);
    // first x primes
    if (showPrimes) return arr;
    // xth prime
    return arr.pop();
  }

  if (Array.isArray(num)) {
    for (i = num[0]; i <= num[1]; i++) if (isPrime(i)) arr.push(i);
    // primes between x .. y
    if (showPrimes) return arr;
    // number of primes between x .. y
    return arr.length;
  }
}
```
