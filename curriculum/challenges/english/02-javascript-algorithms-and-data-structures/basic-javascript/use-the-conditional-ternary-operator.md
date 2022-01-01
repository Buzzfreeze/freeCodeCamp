---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

<dfn>conditional operator</dfn> หรือเรียกว่า <dfn>ternary operator</dfn> สามารถย่อคำสั่ง `if-else` ให้เหลือแค่บรรทัดเดียวได้

คำสั่งนี้จะมี syntax ในรูปแบบนี้ `a ? b : c`, ซึ่ง `a` คือเงื่อนไข, `b` คือโค้ดที่รันเมื่อเงื่อนไขเป็น `true` และ `c` คือโค้ดที่รันเมื่อเงื่อนไขเป็น `false`

ฟังก์ชันด้านล่างใช้คำสั่ง `if/else` เพื่อเช็คเงื่อนไข:

```js
function findGreater(a, b) {
  if(a > b) {
    return "a is greater";
  }
  else {
    return "b is greater or equal";
  }
}
```

ตัวอย่างข้างบนจะเขียนโดยใช้ conditional operator ได้แบบนี้:

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

จงใช้ conditional operator ในฟังก์ชัน `checkEqual` เพื่อตรวจสอบว่า ตัวเลข 2 ตัวมีค่าเท่ากันหรือไม่ โดยฟังก์ชันนี้จะต้องคืนค่าเป็น string `Equal` หรือ string `Not Equal`

# --hints--

ฟังก์ชัน `checkEqual` ต้องใช้ conditional operator

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

การเรียกใช้ฟังก์ชัน `checkEqual(1, 2)` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

การเรียกใช้ฟังก์ชัน `checkEqual(1, 1)` ต้องคืนค่าออกมาเป็น string `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

การเรียกใช้ฟังก์ชัน `checkEqual(1, -1)` ต้องคืนค่าออกมาเป็น string `Not Equal`

```js
assert(checkEqual(1, -1) === 'Not Equal');
```

# --seed--

## --seed-contents--

```js
function checkEqual(a, b) {

}

checkEqual(1, 2);
```

# --solutions--

```js
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}
```
