---
id: 587d7db5367417b2b2512b95
title: Match Single Character with Multiple Possibilities
challengeType: 1
forumTopicId: 301357
dashedName: match-single-character-with-multiple-possibilities
---

# --description--

เราได้เรียนการ match ตามตัวอักษรเป๊ะๆ (`/literal/`) และการ match ด้วย wildcard character (`/./`) ซึ่งเป็นวิธีที่สุดโต่งทั้งคู่ เพราะวิธีแรกข้อความจะต้องตรงกันเป๊ะๆ และวิธีที่สองก็จะ match กับทุกตัวอักษรเลย แต่เราก็ยังมีอีกวิธีนึงที่อยู่ตรงกลางระหว่างสองวิธีนั้น

เราจะหา pattern ที่ตรงตามตัวอักษรแต่ก็ยังยืดหยุ่นได้บ้าง ด้วยการใช้ <dfn>character class</dfn> ซึ่ง Character class จะทำให้เราเลือกตัวอักษรที่จะ match ได้ โดยใส่ตัวอักษรที่เราอยากจะ match ใน square bracket (`[` และ `]`)

เช่น ถ้าเราอยาก match `bag`, `big` และ `bug` แต่จะไม่เอา `bog` เราจะใช้ regex `/b[aiu]g/` โดย `[aiu]` คือ character class ที่ match กับตัวอักษร `a`, `i` หรือ `u` ลองดูตัวอย่าง:

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

การใช้ `match` ทั้ง 4 ครั้งเราจะได้ค่าเป็น `["big"]`, `["bag"]`, `["bug"]` และ `null` ตามลำดับ จะเห็นว่า `/b[aiu]g/` จะไม่ match กับ `bog`

# --instructions--

ให้ใช้ character class เพื่อหาสระในภาษาอังกฤษ (`a`, `e`, `i`, `o`, `u`) ด้วย regex `vowelRegex` จาก string `quoteSample`

**Note:** ให้ match สระทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก

# --hints--

ต้องเจอสระทั้งหมด 25 ตัว

```js
assert(result.length == 25);
```

regex `vowelRegex` ต้องใช้ character class

```js
assert(/\[.*\]/.test(vowelRegex.source));
```

regex `vowelRegex` ต้องใช้ flag *global*

```js
assert(vowelRegex.flags.match(/g/).length == 1);
```

regex `vowelRegex` ต้องใช้ flag *case insensitive*

```js
assert(vowelRegex.flags.match(/i/).length == 1);
```

regex ที่เขียนต้อง match กับพยัญชนะในภาษาอังกฤษ

```js
assert(!/[b-df-hj-np-tv-z]/gi.test(result.join()));
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /change/; // แก้บรรทัดนี้
let result = vowelRegex; // แก้บรรทัดนี้
```

# --solutions--

```js
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // แก้บรรทัดนี้
let result = quoteSample.match(vowelRegex); // แก้บรรทัดนี้
```
