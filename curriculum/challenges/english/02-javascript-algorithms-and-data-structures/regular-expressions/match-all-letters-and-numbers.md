---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

การใช้ character class ทำให้เราหาตัวอักษรภาษาอังกฤษทั้งหมดด้วย regex `[a-z]` ได้ ซึ่งการใช้ character class แบบนี้เป็นที่นิยมมากๆ จึงได้มีการสร้างทางลัดเพื่อให้เขียน regex แบบนี้ได้สั้นลง แต่ก็จะเพิ่มตัวอักษรที่ match ได้ไปด้วย

สำหรับ JavaScript นั้น character class ที่ใกล้เคียงกับการ match ทุกตัวอักษรที่สุดคือ `\w` ซึ่งทำหน้าที่เหมือน `[A-Za-z0-9_]`
โดย character class นี้จะ match ทั้งตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก ตัวเลข และจะรวม underscore (`_`) เข้าไปด้วย 
(เราเรียกการรวมตัวอักษรและตัวเลขนี้ว่า alphanumeric ซึ่งมาจากการรวมคำว่า alphabet:ตัวอักษร และ numeric:ตัวเลข)

```js
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);
```

การเรียก `test` ทั้ง 4 ครั้งนี้จะได้ค่าเป็น `true` ทั้งหมด

เราเรียก character class ที่เป็นทางลัดพวกนี้ว่า <dfn>shorthand character class</dfn>


# --instructions--

จงใช้ shorthand character class `\w` เพื่อนับจำนวนตัวอักษรและตัวเลขใน string

# --hints--

regex นี้ต้องเขียนโดยใช้ flag global `g`

```js
assert(alphabetRegexV2.global);
```

regex นี้ต้องเขียนโดยใช้ shorthand character `\w` เพื่อ match ทุกตัวอักษรและตัวเลข

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

regex ที่เขียนต้องเจอทั้งตัวอักษรและตัวเลขรวม 31 ตัวจาก string `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

regex ที่เขียนต้องเจอทั้งตัวอักษรและตัวเลขรวม 32 ตัวจาก string `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

regex ที่เขียนต้องเจอทั้งตัวอักษรและตัวเลขรวม 30 ตัวจาก string `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

regex ที่เขียนต้องเจอทั้งตัวอักษรและตัวเลขรวม 36 ตัวจาก string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(alphabetRegexV2)
    .length === 36
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /change/; // แก้บรรทัดนี้
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // แก้บรรทัดนี้
let result = quoteSample.match(alphabetRegexV2).length;
```
