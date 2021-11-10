---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

คุณได้เรียนรู้การใช้ <dfn>character sets</dfn> เพื่อกำหนดกลุ่มของตัวอักษรที่จะ match แต่ยังต้องพิมพ์เป็นจำนวนมาก หากคุณต้องการ match ช่วงตัวอักษรกว้างๆ (เช่น ทุกตัวอักษรในภาษาอังกฤษ) แต่ยังโชคดีที่มีฟีเจอร์ที่ทำให้เขียนสั้นและง่าย

ภายใน character set คุณสามารถกำหนดช่วงตัวอักษรที่จะ match โดยใช้ hyphen character: `-`

ตัวอย่างเช่น ต้องการ match ตัวพิมพ์เล็กตั้งแต่ `a` ถึง `e` คุณกำหนดได้ดังนี้ `[a-e]`

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

การเรียก `match` ทั้ง 3 ครั้งจะคืนค่า `["cat"]`, `["bat"]` และ `null`

# --instructions--

จง Match ทุกตัวอักษรใน string `quoteSample`

**Note**: ตรวจเช็คให้มั่นใจว่า match ทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก

# --hints--

regex `alphabetRegex` ควร match 35 items

```js
assert(result.length == 35);
```

regex `alphabetRegex` ควรใช้ global flag

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

regex `alphabetRegex` ควรใช้ case insensitive flag

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // Change this line
let result = alphabetRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
```
