---
id: a7f4d8f2483413a6ce226cac
title: Roman Numeral Converter
challengeType: 5
forumTopicId: 16044
dashedName: roman-numeral-converter
---

# --description--

จงแปลงตัวเลขที่กำหนดให้เป็นเลขโรมัน

[roman numerals](http://www.mathsisfun.com/roman-numerals.html) ผลลัพธ์ควรแสดงเป็นตัวพิมพ์ใหญ่ (upper-case) ทั้งหมด

# --hints--

`convertToRoman(2)` ควรคืนค่าเป็น string `II`

```js
assert.deepEqual(convertToRoman(2), 'II');
```

`convertToRoman(3)` ควรคืนค่าเป็น string `III`

```js
assert.deepEqual(convertToRoman(3), 'III');
```

`convertToRoman(4)` ควรคืนค่าเป็น string `IV`

```js
assert.deepEqual(convertToRoman(4), 'IV');
```

`convertToRoman(5)` ควรคืนค่าเป็น string `V`

```js
assert.deepEqual(convertToRoman(5), 'V');
```

`convertToRoman(9)` ควรคืนค่าเป็น string `IX`

```js
assert.deepEqual(convertToRoman(9), 'IX');
```

`convertToRoman(12)` ควรคืนค่าเป็น string `XII`

```js
assert.deepEqual(convertToRoman(12), 'XII');
```

`convertToRoman(16)` ควรคืนค่าเป็น string `XVI`

```js
assert.deepEqual(convertToRoman(16), 'XVI');
```

`convertToRoman(29)` ควรคืนค่าเป็น string `XXIX`

```js
assert.deepEqual(convertToRoman(29), 'XXIX');
```

`convertToRoman(44)` ควรคืนค่าเป็น string `XLIV`

```js
assert.deepEqual(convertToRoman(44), 'XLIV');
```

`convertToRoman(45)` ควรคืนค่าเป็น string `XLV`

```js
assert.deepEqual(convertToRoman(45), 'XLV');
```

`convertToRoman(68)` ควรคืนค่าเป็น string `LXVIII`

```js
assert.deepEqual(convertToRoman(68), 'LXVIII');
```

`convertToRoman(83)` ควรคืนค่าเป็น string `LXXXIII`

```js
assert.deepEqual(convertToRoman(83), 'LXXXIII');
```

`convertToRoman(97)` ควรคืนค่าเป็น string `XCVII`

```js
assert.deepEqual(convertToRoman(97), 'XCVII');
```

`convertToRoman(99)` ควรคืนค่าเป็น string `XCIX`

```js
assert.deepEqual(convertToRoman(99), 'XCIX');
```

`convertToRoman(400)` ควรคืนค่าเป็น string `CD`

```js
assert.deepEqual(convertToRoman(400), 'CD');
```

`convertToRoman(500)` ควรคืนค่าเป็น string `D`

```js
assert.deepEqual(convertToRoman(500), 'D');
```

`convertToRoman(501)` ควรคืนค่าเป็น string `DI`

```js
assert.deepEqual(convertToRoman(501), 'DI');
```

`convertToRoman(649)` ควรคืนค่าเป็น string `DCXLIX`

```js
assert.deepEqual(convertToRoman(649), 'DCXLIX');
```

`convertToRoman(798)` ควรคืนค่าเป็น string `DCCXCVIII`

```js
assert.deepEqual(convertToRoman(798), 'DCCXCVIII');
```

`convertToRoman(891)` ควรคืนค่าเป็น string `DCCCXCI`

```js
assert.deepEqual(convertToRoman(891), 'DCCCXCI');
```

`convertToRoman(1000)` ควรคืนค่าเป็น string `M`

```js
assert.deepEqual(convertToRoman(1000), 'M');
```

`convertToRoman(1004)` ควรคืนค่าเป็น string `MIV`

```js
assert.deepEqual(convertToRoman(1004), 'MIV');
```

`convertToRoman(1006)` ควรคืนค่าเป็น string `MVI`

```js
assert.deepEqual(convertToRoman(1006), 'MVI');
```

`convertToRoman(1023)` ควรคืนค่าเป็น string `MXXIII`

```js
assert.deepEqual(convertToRoman(1023), 'MXXIII');
```

`convertToRoman(2014)` ควรคืนค่าเป็น string `MMXIV`

```js
assert.deepEqual(convertToRoman(2014), 'MMXIV');
```

`convertToRoman(3999)` ควรคืนค่าเป็น string `MMMCMXCIX`

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
