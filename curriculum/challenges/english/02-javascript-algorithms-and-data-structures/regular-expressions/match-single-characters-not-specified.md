---
id: 587d7db6367417b2b2512b98
title: Match Single Characters Not Specified
challengeType: 1
forumTopicId: 301358
dashedName: match-single-characters-not-specified
---

# --description--

เราได้เรียนเรื่องการสร้างชุดตัวอักษรที่เราต้องการ match ไปแล้ว
คราวนี้เรามาสร้างชุดตัวอักษรที่เราไม่ต้องการ match กัน ชุดตัวอักษรนี้ เรียกว่า <dfn>negated character set</dfn>

การสร้าง negated character set ทำได้โดยการนำ caret character (`^`) (`^` จะอยู่บริเวณเลข `6` หรือ `ถ` บนคีย์บอร์ด) วางไว้หลังวงเล็บเปิด (`[`) และต้องวางไว้หน้าตัวอักษรที่คุณไม่ต้องการ match

เช่น `/[^aeiou]/gi` จะ match ทุกตัวอักษรที่ไม่ใช่สระในภาษาอังกฤษ (`a` `e` `i` `o` และ `u`) โดยตัวอักษรที่เป็นสัญลักษณ์ เช่น `.`, `!`, `[`, `@`, `/` และ white space (เช่นการเว้นวรรค หรือการเว้นบรรทัด) จะถูก match ด้วย เพราะว่า negated character set จะไม่ match แค่ตัวอักษรที่เป็นสระในภาษาอังกฤษเท่านั้น

# --instructions--

จงสร้าง regex ที่จะ match กับทุกตัวอักษรที่ไม่ใช่ตัวเลขหรือสระในภาษาอังกฤษ อย่าลืมใส่ flag ใน regex ด้วย

# --hints--

regex `myRegex` ต้องเจอทั้งหมด 9 ตัวอักษร

```js
assert(result.length == 9);
```

regex `myRegex` ต้องใช้ flag global (`g`)

```js
assert(myRegex.flags.match(/g/).length == 1);
```

regex `myRegex` ต้องใช้ flag case insensitive (`i`)

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "3 blind mice.";
let myRegex = /change/; // แก้บรรทัดนี้
let result = myRegex; // แก้บรรทัดนี้
```

# --solutions--

```js
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi; // แก้บรรทัดนี้
let result = quoteSample.match(myRegex); // แก้บรรทัดนี้
```
