---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

ในบทเรียนที่แล้ว เราได้ลองใช้ conditional operator ตัวเดียวไปแล้ว คราวนี้เรามาลองนำ conditional operator หลายๆ ตัวมารวมกันเพื่อตรวจสอบเงื่อนไขหลายๆ เงื่อนไขได้

ฟังก์ชันด้านล่างนี้ใช้คำสั่ง `if`, `else if`, และ `else` เพื่อเช็คเงื่อนไขหลายๆ เงื่อนไข

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

เราจะเขียนฟังก์ชันด้านบนใหม่โดยใช้ conditional operator หลายๆ ตัว ได้ตามนี้:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

โค้ดตัวอย่างด้านบนนี้ถือเป็นมาตรฐานในการจัดรูปแบบ conditional operator หลายๆ ตัว โดยให้แต่ละเงื่อนไขอยู่คนละบรรทัดกัน 
การใช้ conditional operator หลายๆ ตัวโดยย่อหน้าเข้ามาไม่ถูกต้องจะทำให้โค้ดของคุณอ่านยาก เช่น:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

ในฟังก์ชัน `checkSign` ให้ใช้ conditional operator หลายๆ ตัว (โดยเขียนตามรูปแบบในฟังก์ชัน `findGreaterOrEqual` ด้านบน) เพื่อฟังก์ชันนี้ตรวจสอบว่าตัวเลขเป็นบวก เป็นลบ หรือเป็นศูนย์ โดยให้คืนค่าเป็น `positive`, `negative` หรือ `zero`


# --hints--

ต้องใช้ conditional operator หลายๆ ตัวในฟังก์ชัน `checkSign`

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` ต้องคืนค่าออกมาเป็น string `positive` 
หมายเหตุ ต้องใช้ตัวอักษรพิมพ์เล็ก-พิมพ์ใหญ่ตามที่โจทย์ระบุ

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` ต้องคืนค่าออกมาเป็น string `negative`
หมายเหตุ ต้องใช้ตัวอักษรพิมพ์เล็ก-พิมพ์ใหญ่ตามที่โจทย์ระบุ

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` ต้องคืนค่าออกมาเป็น string `zero`
หมายเหตุ ต้องใช้ตัวอักษรพิมพ์เล็ก-พิมพ์ใหญ่ตามที่โจทย์ระบุ

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
