---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
dashedName: use-the-parseint-function
---

# --description--

`parseInt()` function แปลง string เป็น Integer และคืนค่า integer ดังตัวอย่าง

```js
var a = parseInt("007");
```

function ด้านบนจะแปลง string `007` เป็น integer `7` ถ้าตัวอักษรแรกใน string ไม่สามารถแปลงเป็น number ได้ จะคืนค่า `NaN`

# --instructions--

จงใช้ `parseInt()` ใน funcion `convertToInteger` เพื่อแปลง string `str` ที่ป้อนเข้าไป เป็น integer และคืนค่า

# --hints--

`convertToInteger` ควรใช้ `parseInt()` function

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("56")` ควรส่งคืนค่า a number

```js
assert(typeof convertToInteger('56') === 'number');
```

`convertToInteger("56")` ควรส่งคืนค่า 56

```js
assert(convertToInteger('56') === 56);
```

`convertToInteger("77")` ควรส่งคืนค่า 77

```js
assert(convertToInteger('77') === 77);
```

`convertToInteger("JamesBond")` ควรส่งคืนค่า `NaN`

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
