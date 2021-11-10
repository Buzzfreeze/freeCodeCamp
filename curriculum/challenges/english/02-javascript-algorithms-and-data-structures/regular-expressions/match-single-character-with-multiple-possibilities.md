---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

คุณได้เรียนรู้วิธี match ตามตัวอักษร (`/literal/`) และ match ด้วย wildcard character (`/./`) ซึ่งเป็นวิธีสุดโต่งทั้งคู่ เพราะวิธีแรกหาข้อความตรงตามตัวอักษรทุกประการ ส่วนวิธีที่สองสามารถ match กับตัวอักษรอะไรก็ได้ทั้งหมด อย่างไรก็ตาม มีอีกวิธีนึงที่สมดุลระหว่างสองสุดขั้วนั้น

คุณสามารถค้นหา pattern ที่ตรงตามตัวอักษร แต่มีความยืดหยุ่น โดยใช้ <dfn>character classes</dfn> ซึ่ง Character classes ช่วยให้คุณสามารถกำหนดกลุ่มของตัวอักษรที่คุณต้องการ match โดยนำกลุ่มตัวอักษรเหล่านั้นไปไว้ใน square brackets (`[` และ `]`)

ตัวอย่างเช่น คุณต้องการ match `bag`, `big` และ `bug` แต่ไม่ใช่ `bog` คุณสามารถสร้าง regex `/b[aiu]g/` โดย `[aiu]` คือ character class ที่ match กับตัวอักษร `a`, `i` หรือ `u`

```js
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);
```

การเรียก `match` ทั้ง 4 ครั้งจะคืนค่า `["big"]`, `["bag"]`, `["bug"]` และ `null` ตามลำดับ

# --instructions--

จงใช้ character class กำหนดให้มีสระ (`a`, `e`, `i`, `o`, `u`) ใน regex `vowelRegex` เพื่อค้นหาสระทั้งหมดใน string `quoteSample`

**Note:** ตรวจเช็คให้มั่นใจว่า match สระที่เป็นทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก

# --hints--

คุณควรพบสระทั้งหมด 25 ตัว

```js
assert(result.length == 25);
```

regex `vowelRegex` ควรใช้ character class

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

regex `vowelRegex` ควรใช้ global flag

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

regex `vowelRegex` ควรใช้ case insensitive flag

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

regex ไม่ควร match กับพยัญชนะใดๆ

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // Change this line
let result = vowelRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result = quoteSample.match(vowelRegex); // Change this line
```
