---
id: 587d7db4367417b2b2512b92
title: Extract Matches
challengeType: 1
forumTopicId: 301340
dashedName: extract-matches
---

# --description--

ที่ผ่านมา คุณเพียงตรวจสอบว่า pattern พบใน string หรือไม่พบ อย่างไรก็ตาม คุณสามารถแยก (extract) ข้อความที่เจอด้วย `.match()` method

วิธีใช้ `.match()` method คือ ให้นำ method มาใช้กับ string โดยส่ง regex เข้าไปภายในวงเล็บ

ดังตัวอย่างต่อไปนี้

```js
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
```

ในที่นี้ `match` แรกควรคืนค่า `["Hello"]` และอันที่สองควรคืนค่า `["expressions"]`

หมายเหตุ `.match` syntax ใช้งานตรงกันข้ามกับ `.test` method ที่คุณได้เรียนรู้มาก่อนหน้านี้แล้ว:

```js
'string'.match(/regex/);
/regex/.test('string');
```

# --instructions--

จงใช้ `.match()` method เพื่อแยก string `coding` ออกมา

# --hints--

`result` ควรมี string `coding`

```js
assert(result.join() === 'coding');
```

regex `codingRegex` ควรค้นหา string `coding`

```js
assert(codingRegex.source === 'coding');
```

คุณควรใช้ `.match()` method

```js
assert(code.match(/\.match\(.*\)/));
```

# --seed--

## --seed-contents--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /change/; // Change this line
let result = extractStr; // Change this line
```

# --solutions--

```js
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line
```
