---
id: 587d7b7e367417b2b2512b21
title: Use Multiple Conditional (Ternary) Operators
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

ในบทเรียนที่แล้ว คุณใช้เงื่อนไขเดียว (single conditional operator) อย่างไรก็ตาม คุณสามารถนำ conditional operator ต่างๆ มารวมกันเพื่อตรวจสอบเงื่อนไขหลายๆ เงื่อนไขได้

function ต่อไปนี้ใช้คำสั่ง `if`, `else if`, และ `else` เพื่อเช็คหลายเงื่อนไข

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

function ด้านบนสามารถเขียนใหม่ได้ โดยใช้ multiple conditional operator

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

ด้านบนนี้ถือเป็นแนวทางปฏิบัติที่ดีที่สุดในการจัดรูปแบบ multiple conditional operators โดยให้แต่ละเงื่อนไขอยู่ในบรรทัดที่แยกจากกัน ดังที่แสดงไว้ด้านบน การใช้ multiple conditional operators โดยไม่มีการเยื้องที่ถูกต้องอาจทำให้โค้ดของคุณอ่านยาก ตัวอย่างเช่น:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

ในฟังก์ชัน `checkSign` ให้ใช้ multiple conditional operators - ตามรูปแบบที่แนะนำ ซึ่งใช้ใน `findGreaterOrEqual` เพื่อตรวจสอบว่าตัวเลขเป็นค่าบวก, ค่าลบ หรือศูนย์ ฟังก์ชันควรคืนค่า `positive`, `negative` หรือ `zero`


# --hints--

`checkSign` ควรใช้ multiple conditional operators

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` ควรคืนค่า string `positive` 
หมายเหตุ การใช้อักษรตัวพิมพ์ใหญ่เล็กมีความสำคัญ

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` ควรคืนค่า string `negative`. 
หมายเหตุ การใช้อักษรตัวพิมพ์ใหญ่เล็กมีความสำคัญ

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` ควรคืนค่า string `zero`. 
หมายเหตุ การใช้อักษรตัวพิมพ์ใหญ่เล็กมีความสำคัญ

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
