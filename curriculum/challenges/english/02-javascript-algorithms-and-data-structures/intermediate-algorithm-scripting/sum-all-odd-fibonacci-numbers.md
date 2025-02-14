---
id: a5229172f011153519423690
title: Sum All Odd Fibonacci Numbers
challengeType: 5
forumTopicId: 16084
dashedName: sum-all-odd-fibonacci-numbers
---

# --description--

กำหนดให้ `num` เป็นเลขจำนวนเต็มบวก จงหาผลรวมของเลขฟีโบนัชชี (Fibonacci) ที่เป็นเลขคี่ที่มีค่าน้อยกว่าหรือเท่ากับ `num`

เลข 2 ตัวแรกของลำดับฟีโบนัชชี คือ 1 กับ 1 ส่วนลำดับถัดๆ ไปคือผลรวมของเลข 2 ตัวที่อยู่ลำดับก่อนหน้า 
เลข 6 ตัวแรกของลำดับฟีโบนัชชี คือ 1, 1, 2, 3, 5 และ 8

ตัวอย่างเช่น `sumFibs(10)` ต้องคืนค่าเป็น `10` เพราะเลข Fibonacci ที่เป็นเลขคี่ที่น้อยกว่าหรือเท่ากับ `10` คือ 1, 1, 3 และ 5

# --hints--

`sumFibs(1)` ต้องคืนค่าเป็น number

```js
assert(typeof sumFibs(1) === 'number');
```

`sumFibs(1000)` ต้องคืนค่าเป็น 1785

```js
assert(sumFibs(1000) === 1785);
```

`sumFibs(4000000)` ต้องคืนค่าเป็น 4613732

```js
assert(sumFibs(4000000) === 4613732);
```

`sumFibs(4)` ต้องคืนค่าเป็น 5

```js
assert(sumFibs(4) === 5);
```

`sumFibs(75024)` ต้องคืนค่าเป็น 60696

```js
assert(sumFibs(75024) === 60696);
```

`sumFibs(75025)` ต้องคืนค่าเป็น 135721

```js
assert(sumFibs(75025) === 135721);
```

# --seed--

## --seed-contents--

```js
function sumFibs(num) {
  return num;
}

sumFibs(4);
```

# --solutions--

```js
function sumFibs(num) {
  var a = 1;
  var b = 1;
  var s = 0;
  while (a <= num) {
    if (a % 2 !== 0) {
      s += a;
    }
    a = [b, b=b+a][0];
  }
  return s;
}
```
