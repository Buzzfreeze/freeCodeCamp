---
id: 587d7dbb367417b2b2512baa
title: Reuse Patterns Using Capture Groups
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

บางทีเราอาจจะอยาก match คำที่เกิดขึ้นหลายครั้ง เหมือนในตัวอย่างด้านล่างนี้ 

```js
let repeatStr = "row row row your boat";
```

ซึ่งเราจะใช้ `/row row row/` ก็ได้ แต่ถ้าเราไม่รู้ว่าคำจะเขียนซ้ำกี่ครั้งล่ะ?  
การใช้ <dfn>Capture groups</dfn> จะช่วยแก้ปัญหานี้ เพราะจะใช้หา string ย่อยที่ซ้ำกันได้

Capture group จะประกอบด้วย regex pattern ที่ใช้จับค่าที่ต้องการ (capture) แล้วเขียน regex pattern นั้นให้อยู่ในวงเล็บ ในตัวอย่างนี้ เราอยากจับคำที่เป็นทั้งตัวเลขและตัวอักษร ดังนั้น capture group จึงเป็น `\w+` ที่อยู่ในวงเล็บ: `/(\w+)/`

string ย่อยที่ match กับ capture group จะถูกเก็บไว้ในตัวแปรชั่วคราว ซึ่ง regex ตัวเดียวกันจะเอาค่ามาใช้ได้ วิธีการใช้คือจะใช้ backslash ตามด้วยเลขของ capture group นั้น (เช่น `\1`)  
เลขของ capture group นั้นจะถูกกำหนดโดยอัตโนมัติจากตำแหน่งของวงเล็บเปิด (ไล่จากซ้ายไปขวา) โดยเริ่มต้นจาก 1

ลองดูตัวอย่างด้านล่าง ที่จะ match ถ้าเจอคำที่มีซ้ำ 3 ครั้ง และคั่นด้วยเว้นวรรค:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // ได้ค่าเป็น true
repeatStr.match(repeatRegex); // ได้ค่าเป็น ["row row row", "row"]
```

การใช้ `.match()` method กับ string จะคืนค่าเป็น array ที่มี string ย่อยที่ถูก match และค่าของ capture group (ในตัวอย่างข้างบน string ย่อยที่ถูก match คือ `"row row row"` และค่าของ capture group คือ `"row"`)


# --instructions--

ให้ใช้ capture group ใน `reRegex` เพื่อให้ match ถ้า string เป็นตัวเลข 3 ชุดที่ซ้ำกัน ซึ่งถูกคั่นด้วยเว้นวรรค

# --hints--

regex ที่เขียนต้องใช้ shorthand character class ที่เป็นตัวเลข

```js
assert(reRegex.source.match(/\\d/));
```

regex ที่เขียนต้องใช้ capture group สองครั้ง

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

regex ที่เขียนต้อง match กับ string `42 42 42`

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

regex ที่เขียนต้อง match กับ string `100 100 100`

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

regex ที่เขียนต้องไม่ match กับ string `42 42 42 42`

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

regex ที่เขียนต้องไม่ match กับ string `42 42`

```js
assert.equal('42 42'.match(reRegex.source), null);
```

regex ที่เขียนต้องไม่ match กับ string `101 102 103`

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

regex ที่เขียนต้องไม่ match กับ string `1 2 3`

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

regex ที่เขียนต้อง match กับ string `10 10 10`

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // แก้บรรทัดนี้
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
```
