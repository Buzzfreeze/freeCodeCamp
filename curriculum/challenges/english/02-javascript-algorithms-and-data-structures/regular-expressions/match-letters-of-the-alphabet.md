---
id: 587d7db5367417b2b2512b96
title: Match Letters of the Alphabet
challengeType: 1
forumTopicId: 301354
dashedName: match-letters-of-the-alphabet
---

# --description--

เราได้เรียนการใช้ <dfn>character class</dfn> เพื่อกำหนดกลุ่มของตัวอักษรที่จะ match แล้ว  
แต่เราจะเห็นว่าถ้าเราต้องการที่จะ match ตัวอักษรหลายๆตัว เราจะต้องพิมพ์เยอะมากๆ แต่ไม่ต้องห่วง regex มีฟีเจอร์ที่ทำให้คุณไม่ต้องพิมพ์เยอะขนาดนั้นด้วย

ภายใน character set คุณสามารถกำหนดช่วงของตัวอักษรที่จะ match โดยใช้ hyphen character: `-`

เช่น ต้องการ match ตัวพิมพ์เล็กตั้งแต่ `a` ถึง `e` จะเขียนได้แบบนี้ `[a-e]` (ถ้าใช้ภาษาไทยจะใช้เป็น `[ก-จ]` ก็ได้)

```js
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRegex);
matStr.match(bgRegex);
```

การเรียก `match` ทั้ง 3 ครั้งจะได้ค่าเป็น `["cat"]`, `["bat"]` และ `null` ตามลำดับ

# --instructions--

ให้ Match ทุกตัวอักษรใน string `quoteSample`

**Note**: ให้ match ทั้งตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก

# --hints--

regex `alphabetRegex` ต้องเจอทั้งหมด 35 ตัวอักษร

```js
assert(result.length == 35);
```

regex `alphabetRegex` ต้องใช้ flag global (`g`)

```js
assert(alphabetRegex.flags.match(/g/).length == 1);
```

regex `alphabetRegex` ต้องใช้ flag case insensitive (`i`)

```js
assert(alphabetRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /change/; // แก้บรรทัดนี้
let result = alphabetRegex; // แก้บรรทัดนี้
```

# --solutions--

```js
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // แก้บรรทัดนี้
let result = quoteSample.match(alphabetRegex); // แก้บรรทัดนี้
```
