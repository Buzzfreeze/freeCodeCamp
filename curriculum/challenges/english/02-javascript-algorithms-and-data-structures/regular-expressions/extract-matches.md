---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

ที่ผ่านมาเราได้เรียนแค่การดูว่าเจอ pattern ใน string หรือไม่ แต่ว่าเราก็สามารถดึงข้อความที่เจอออกมาได้ด้วย ถ้าใช้ method `.match()`

เราจะใช้ method `.match()` โดยการเรียก method จาก string และใส่ regex เข้าไปในวงเล็บ

ตามตัวอย่างนี้:

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

จากตัวอย่างนี้การใช้ `match` ครั้งแรกจะคืนค่าเป็น `["Hello"]` และครั้งที่สองจะคืนค่าเป็น `["expressions"]`

syntax ของ `.match` ตรงข้ามกับ method `.test` ที่เราได้เรียนกันมาก่อนหน้านี้:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

จงใช้ method `.match()` เพื่อดึง string `coding` ออกมา

# --hints--

ตัวแปร `result` ต้องมีค่าเป็น string `coding`

```js
assert(result.join() === 'coding');
```

regex `codingRegex` ต้องหา string `coding`

```js
assert(codingRegex.source === 'coding');
```

ต้องใช้ method `.match()`

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // แก้บรรทัดนี้
let result = extractStr; // แก้บรรทัดนี้
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // แก้บรรทัดนี้
let result = extractStr.match(codingRegex); // แก้บรรทัดนี้
```
