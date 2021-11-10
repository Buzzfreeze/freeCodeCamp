---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

ที่ผ่านมา คุณสร้างชุดตัวอักษรที่คุณต้องการ match แต่อย่างไรก็ตาม คุณสามารถสร้างชุดตัวอักษรที่คุณไม่ต้องการ match ได้ ซึ่งประเภทชุดตัวอักษรที่ว่านี้ เรียกว่า <dfn>negated character sets</dfn>

การสร้าง negated character set ทำได้โดยการนำ caret character (`^`) วางหลังวงเล็บเปิด (opening bracket) และอยู่ก่อนตัวอักษรที่คุณไม่ต้องการ match

ตัวอย่างเช่น `/[^aeiou]/gi` matche ทุกตัวอักษรที่ไม่ใช่สระ โดยตัวอักษร เช่น `.`, `!`, `[`, `@`, `/` และ white space จะถูก match เพราะ negated vowel character set จะไม่รวมตัวอักษรที่เป็นสระเท่านั้น

# --instructions--

จงสร้าง regex ค่าหนึ่งที่ match กับทุกตัวอักษรที่ไม่ใช่ตัวเลขหรือสระ โดยสามารถเพิ่ม flag ที่เหมาะสมใน regex ได้

# --hints--

regex `myRegex` ควร match 9 items

```js
assert(result.length == 9);
```

regex `myRegex` ควรใช้ global flag

```js
assert(myRegex.flags.match(/g/).length == 1);
```

regex `myRegex` ควรใช้ case insensitive flag

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
