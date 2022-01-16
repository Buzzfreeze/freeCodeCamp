---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

จงแปลงตัวเลขที่กำหนดให้เป็นเลขโรมัน

ผลลัพธ์ที่เป็น [เลขโรมัน](http://www.mathsisfun.com/roman-numerals.html) ต้องเป็นเป็นตัวพิมพ์ใหญ่ทั้งหมด

# --hints--

`convertToRoman(2)` ต้องคืนค่าเป็น string `II`

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` ต้องคืนค่าเป็น string `III`

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` ต้องคืนค่าเป็น string `IV`

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` ต้องคืนค่าเป็น string `V`

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` ต้องคืนค่าเป็น string `IX`

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` ต้องคืนค่าเป็น string `XII`

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` ต้องคืนค่าเป็น string `XVI`

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` ต้องคืนค่าเป็น string `XXIX`

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` ต้องคืนค่าเป็น string `XLIV`

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` ต้องคืนค่าเป็น string `XLV`

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` ต้องคืนค่าเป็น string `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` ต้องคืนค่าเป็น string `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` ต้องคืนค่าเป็น string `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` ต้องคืนค่าเป็น string `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` ต้องคืนค่าเป็น string `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` ต้องคืนค่าเป็น string `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` ต้องคืนค่าเป็น string `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` ต้องคืนค่าเป็น string `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` ต้องคืนค่าเป็น string `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` ต้องคืนค่าเป็น string `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` ต้องคืนค่าเป็น string `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` ต้องคืนค่าเป็น string `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` ต้องคืนค่าเป็น string `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` ต้องคืนค่าเป็น string `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` ต้องคืนค่าเป็น string `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` ต้องคืนค่าเป็น string `MMMCMXCIX`

```js
assert.deepEqual(convertToRoman(3999), 'MMMCMXCIX');
```

# --seed--

## --seed-contents--

```js
function convertToRoman(num) {
 return num;
}

convertToRoman(36);
```

# --solutions--

```js
function convertToRoman(num) {
  var ref = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var res = [];
  ref.forEach(function(p) {
    while (num >= p[1]) {
      res.push(p[0]);
      num -= p[1];
    }
  });
  return res.join('');
}
```
