---
id: 594810f028c0303b75339ad6
title: Zeckendorf number representation
challengeType: 5
forumTopicId: 302346
dashedName: zeckendorf-number-representation
---

# --description--

ถ้ายังจำได้ เลข Fibonacci หกตัวแรกคือ `1, 2, 3, 5, 8, 13`

เลขสิบเอ็ดฐานสิบสามารถเขียนได้เป็น `0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1` หรือ `010100`  
โดยเราสามารถตัดเลข 0 ด้านหน้าออกได้ซึ่งทำให้ 11 เป็น `10100` ในฐานสอง
แต่เราสามารถสร้างเลข 11 จาก Fibonacci ได้ด้วย โดยใช้เป็น `0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1` หรือ 010011 ซึ่งเป็นค่าของ 11 ฐานสิบด้วย

โดยเลข Zeckendorf มีข้อจำกัดเพิ่มเติมว่า *ไม่สามารถใช้เลข Fibonacci สองเลขติดต่อกันได้* 

# --instructions--

ให้เขียนฟังก์ชันที่รับค่า `n` แล้วนำไปแสดงแบบ Zeckendorf

# --hints--

`zeckendorf` ต้องเป็นฟังก์ชัน

```js
assert.equal(typeof zeckendorf, 'function');
```

`zeckendorf(0)` ต้องคืนค่าเป็น `0`

```js
assert.equal(zeckendorf(0), 0);

```

`zeckendorf(1)` ต้องคืนค่าเป็น `1`

```js
assert.equal(zeckendorf(1), 1);
```

`zeckendorf(2)` ต้องคืนค่าเป็น `10`

```js
assert.equal(zeckendorf(2), 10);
```

`zeckendorf(3)` ต้องคืนค่าเป็น `100`

```js
assert.equal(zeckendorf(3), 100);
```

`zeckendorf(4)` ต้องคืนค่าเป็น `101`

```js
assert.equal(zeckendorf(4), 101);
```

`zeckendorf(5)` ต้องคืนค่าเป็น `1000`

```js
assert.equal(zeckendorf(5), 1000);
```

`zeckendorf(6)` ต้องคืนค่าเป็น `1001`

```js
assert.equal(zeckendorf(6), 1001);
```

`zeckendorf(7)` ต้องคืนค่าเป็น `1010`

```js
assert.equal(zeckendorf(7), 1010);
```

`zeckendorf(8)` ต้องคืนค่าเป็น `10000`

```js
assert.equal(zeckendorf(8), 10000);
```

`zeckendorf(9)` ต้องคืนค่าเป็น `10001`

```js
assert.equal(zeckendorf(9), 10001);
```

`zeckendorf(10)` ต้องคืนค่าเป็น `10010`

```js
assert.equal(zeckendorf(10), 10010);
```

`zeckendorf(11)` ต้องคืนค่าเป็น `10100`

```js
assert.equal(zeckendorf(11), 10100);
```

`zeckendorf(12)` ต้องคืนค่าเป็น `10101`

```js
assert.equal(zeckendorf(12), 10101);
```

`zeckendorf(13)` ต้องคืนค่าเป็น `100000`

```js
assert.equal(zeckendorf(13), 100000);
```

`zeckendorf(14)` ต้องคืนค่าเป็น `100001`

```js
assert.equal(zeckendorf(14), 100001);
```

`zeckendorf(15)` ต้องคืนค่าเป็น `100010`

```js
assert.equal(zeckendorf(15), 100010);
```

`zeckendorf(16)` ต้องคืนค่าเป็น `100100`

```js
assert.equal(zeckendorf(16), 100100);
```

`zeckendorf(17)` ต้องคืนค่าเป็น `100101`

```js
assert.equal(zeckendorf(17), 100101);
```

`zeckendorf(18)` ต้องคืนค่าเป็น `101000`

```js
assert.equal(zeckendorf(18), 101000);
```

`zeckendorf(19)` ต้องคืนค่าเป็น `101001`

```js
assert.equal(zeckendorf(19), 101001);
```

`zeckendorf(20)` ต้องคืนค่าเป็น `101010`

```js
assert.equal(zeckendorf(20), 101010);
```

# --seed--

## --seed-contents--

```js
function zeckendorf(n) {

}
```

# --solutions--

```js
// zeckendorf :: Int -> Int
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return parseInt((n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join(''));
}

// fibUntil :: Int -> [Int]
let fibUntil = n => {
  const xs = [];
  until(
      ([a]) => a > n,
      ([a, b]) => (xs.push(a), [b, a + b]), [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) => (
  xs.reduce((a, x) => {
    const pair = f(a[0], x);

    return [pair[0], a[1].concat(pair[1])];
  }, [acc, []])
);

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = xs => (
   xs.length ? xs.slice(1) : undefined
);

const reverse = xs => xs.slice(0).reverse();
```
