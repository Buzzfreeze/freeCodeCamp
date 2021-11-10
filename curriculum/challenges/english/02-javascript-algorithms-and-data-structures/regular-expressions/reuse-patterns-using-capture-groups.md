---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

บางครั้งคุณต้องการ match คำที่เกิดขึ้นหลายครั้ง ดังตัวอย่างด้านล่างนี้ 

```js
let repeatStr = "row row row your boat";
```

คุณสามารถใช้ `/row row row/` แต่ถ้าคุณไม่รู้ว่า คำจะเขียนซ้ำกี่ครั้งล่ะ? <dfn>Capture groups</dfn> สามารถตอบโจทย์นี้ได้ โดยการค้นหา substrings ที่ซ้ำ

Capture groups ประกอบด้วย regex pattern ที่ใช้จับค่าที่ต้องการ (capture) แล้วเขียน regex pattern นั้นให้อยู่ในวงเล็บ สำหรับกรณีนี้ เป้าหมายคือการจับคำที่ประกอบด้วยอักขระที่เป็นตัวเลขและตัวอักษร ดังนั้น capture group จึงเป็น `\w+` อยู่ในวงเล็บ: `/(\w+)/`

substring ที่ match กับ Capture group จะถูกบันทึกไว้ในตัวแปรชั่วคราว ซึ่งสามารถเข้าถึงได้จากภายใน regex เดียวกัน โดยใช้ backslash และเลขของ capture group (เช่น `\1`) ซึ่ง Capture groups จะลำดับเลขให้อัตโนมัติตามตำแหน่งของวงเล็บเปิด (จากซ้ายไปขวา) เริ่มต้นจาก 1

ตัวอย่างด้านล่าง match กับคำที่เกิดขึ้น 3 ครั้ง และแยกด้วย space:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

การใช้ `.match()` method กับ string จะคืนค่าเป็น array ที่มี substring ที่ match และ captured group


# --instructions--

จงใช้ capture groups ใน `reRegex` เพื่อ match กับ string ที่ประกอบด้วยคำซ้ำกัน 3 คำที่คั่นด้วย space

# --hints--

regex ของคุณควรใช้ shorthand character class ที่เป็นตัวเลข

```js
assert(reRegex.source.match(/\\d/));
```

regex ของคุณควรใช้ capture group สองครั้ง

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

regex ของคุณควร match กับ string `42 42 42`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

regex ของคุณควร match กับ string `100 100 100`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

regex ของคุณไม่ควร match กับ string `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

regex ของคุณไม่ควร match กับ string `42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

regex ของคุณไม่ควร match กับ string `101 102 103`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

regex ของคุณไม่ควร match กับ string `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

regex ของคุณควร match กับ string `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
