---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

function `parseInt()`แปลง string เป็น Integer และส่งคืน integer โดย function `parseInt()` มี argument ตัวที่สองเป็น redix   ซึ่งระบุเลขฐานของตัวเลขใน string โดย radix สามารถเป็น integer ระหว่าง 2 และ 36

function call ควรมีหน้าตาดังนี้

```js
parseInt(string, radix);
```

และนี่เป็นตัวอย่าง

```js
var a = parseInt("11", 2);
```

ตัวแปร radix บอกว่า `11` อยู่ในระบบ binary หรือเลขฐาน 2 นี่เป็นตัวอย่างในการแปลง string `11` ให้เป็น integer `3`

# --instructions--

จงใช้ `parseInt()` ใน function `convertToInteger` เพื่อแปลงเลข binary ให้เป็นเลขจำนวนเต็ม แล้วคืนค่าออกไป

# --hints--

`convertToInteger` ควรใช้  `parseInt()` function

```js
assert(/parseInt/g.test(code));
```

`convertToInteger("10011")` ควรคืนค่า number

```js
assert(typeof convertToInteger('10011') === 'number');
```

`convertToInteger("10011")` ควรคืนค่า 19

```js
assert(convertToInteger('10011') === 19);
```

`convertToInteger("111001")` ควรคืนค่า 57

```js
assert(convertToInteger('111001') === 57);
```

`convertToInteger("JamesBond")` ควรคืนค่า `NaN`

```js
assert.isNaN(convertToInteger('JamesBond'));
```

# --seed--

## --seed-contents--

```js
function convertToInteger(str) {

}

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
