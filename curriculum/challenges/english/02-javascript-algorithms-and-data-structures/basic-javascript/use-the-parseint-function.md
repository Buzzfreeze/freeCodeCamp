---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

ฟังก์ชัน `parseInt()` จะแปลง string เป็น integer (จำนวนเต็ม) และคืนค่ามาเป็น integer ดังตัวอย่าง

```js
var a = parseInt("007");
```

ฟังก์ชันด้านบนจะแปลง string `007` เป็นเลข `7` ถ้าตัวอักษรแรกใน string ไม่สามารถแปลงเป็นตัวเลขได้ จะคืนค่า `NaN` (`Not a Number`)

# --instructions--

จงใช้ `parseInt()` ในฟังก์ชัน `convertToInteger` เพื่อแปลง string `str` ที่ป้อนเข้าไป เป็น integer และคืนค่าออกมา

# --hints--

ต้องใช้ `parseInt()` ในฟังก์ชัน `convertToInteger`

```js
assert(/parseInt/g.test(code));
```

การเรียกใช้ฟังก์ชัน `convertToInteger("56")` ต้องคืนค่าออกมาเป็นตัวเลข

```js
assert(typeof convertToInteger('56') === 'number');
```

การเรียกใช้ฟังก์ชัน `convertToInteger("56")` ต้องคืนค่าออกมาเป็น 56

```js
assert(convertToInteger('56') === 56);
```

การเรียกใช้ฟังก์ชัน `convertToInteger("77")` ต้องคืนค่าออกมาเป็น 77

```js
assert(convertToInteger('77') === 77);
```

การเรียกใช้ฟังก์ชัน `convertToInteger("JamesBond")` ต้องคืนค่าออกมาเป็น `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str);
}
```
