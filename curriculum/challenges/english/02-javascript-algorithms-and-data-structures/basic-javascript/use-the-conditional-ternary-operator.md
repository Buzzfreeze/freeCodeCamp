---
id: 587d7b7e367417b2b2512b24
title: Use the Conditional (Ternary) Operator
challengeType: 1
forumTopicId: 301181
dashedName: use-the-conditional-ternary-operator
---

# --description--

<dfn>conditional operator</dfn> เรียกได้อีกอย่างว่า <dfn>ternary operator</dfn> สามารถใช้เป็น if-else expression บรรทัดเดียว

syntax คือ `a ? b : c`, ซึ่ง `a` คือเงื่อนไข, `b` คือโค้ดที่รันเมื่อเงื่อนไขคืนค่า `true` และ `c` คือโค้ดที่รันเมื่อเงื่อนไขคืนค่า `false`.

function ต่อไปนี้ใช้ `if/else` statement เพื่อเช็คเงื่อนไข

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

โค้ดข้างต้นสามารถเขียนใหม่ โดยใช้ conditional operator ดังนี้

```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater or equal";
}
```

# --instructions--

จงใช้ conditional operator ภายในฟังก์ชัน `checkEqual` เพื่อตรวจสอบว่า ตัวเลข 2 ตัวมีค่าเท่ากันหรือไม่ โดยฟังก์ชันจะคืนค่าเป็น string `Equal` หรือ string `Not Equal`

# --hints--

`checkEqual` ควรใช้ conditional operator

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?/.test(code));
```

`checkEqual(1, 2)` ควรคืนค่าเป็น string `Not Equal`

```js
assert(checkEqual(1, 2) === 'Not Equal');
```

`checkEqual(1, 1)` ควรคืนค่าเป็น string `Equal`

```js
assert(checkEqual(1, 1) === 'Equal');
```

`checkEqual(1, -1)` ควรคืนค่าเป็น string `Not Equal`

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
