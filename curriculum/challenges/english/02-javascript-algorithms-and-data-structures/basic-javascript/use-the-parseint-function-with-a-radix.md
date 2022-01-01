---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
dashedName: use-the-parseint-function-with-a-radix
---

# --description--

ฟังก์ชัน `parseInt()` 0tแปลง string เป็นจำนวนเต็ม และคืนค่าเลขจำนวนเต็มนั้นออกมา โดยฟังก์ชัน `parseInt()` มี argument ตัวที่สองเป็น redix  ซึ่งจะใช้สำหรับการระบุเลขฐานของตัวเลขใน string โดย radix จะเป็นจำนวนเต็มที่มีค่าระหว่าง 2 ถึง 36

การเรียกใช้ฟังก์ชันจะเป็นแบบนี้:

```js
parseInt(string, radix);
```

ตัวอย่างการใช้งาน:

```js
var a = parseInt("11", 2);
```

ตัวแปร radix จะบอกว่า `11` นั้นเป็นข้อมูลแบบ binary หรือเลขฐาน 2 
ตัวอย่างด้านบนนี้จะทำให้ string `11` กลายเป็น integer ซึ่งมีค่าเท่ากับ `3`

# --instructions--

จงใช้ `parseInt()` ในฟังก์ชัน `convertToInteger` เพื่อแปลงเลขฐานสองให้เป็นเลขจำนวนเต็ม แล้วคืนค่าออกไป

# --hints--

ต้องใช้ `parseInt()` ในฟังก์ชัน `convertToInteger`

```js
assert(/parseInt/g.test(code));
```

การเรียกใช้ฟังก์ชัน `convertToInteger("10011")` ต้องคืนค่าออกมาเป็น number

```js
assert(typeof convertToInteger('10011') === 'number');
```

การเรียกใช้ฟังก์ชัน `convertToInteger("10011")` ต้องคืนค่าออกมาเป็น 19

```js
assert(convertToInteger('10011') === 19);
```

การเรียกใช้ฟังก์ชัน `convertToInteger("111001")` ต้องคืนค่าออกมาเป็น 57

```js
assert(convertToInteger('111001') === 57);
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

convertToInteger("10011");
```

# --solutions--

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```
