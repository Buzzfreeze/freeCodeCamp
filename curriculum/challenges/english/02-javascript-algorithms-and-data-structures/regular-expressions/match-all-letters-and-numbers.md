---
id: 587d7db7367417b2b2512b9f
title: Match All Letters and Numbers
challengeType: 1
forumTopicId: 301346
dashedName: match-all-letters-and-numbers
---

# --description--

การใช้ character class ทำให้คุณสามารถค้นหาตัวอักษรภาษาอังกฤษด้วย regex `[a-z] ได้ ซึ่ง character class นี้มีการใช้งานกันแพร่หลาย จึงได้มีการกำหนด shortcut ขึ้นมา แม้ว่า shortcut นี้จะมีตัวอักษรพิเศษเพิ่มเข้ามาก็ตาม

character class ที่ใกล้เคียงที่สุด ในภาษา JavaScript สำหรับ match กับตัวอักษร ก็คือ `\w` ซึ่งเป็น shortcut ที่เท่ากับ `[A-Za-z0-9_]` โดย character class นี้ match ทั้งตัวพิมพ์ใหญ่ ตัวพิมพ์เล็ก และตัวเลข นอกจากนี้ character class ยังรวม underscore character (`_`) ด้วย

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

การเรียก `test` ทั้ง 4 ครั้งนี้ คืนค่า `true`

shortcut character classes เหล่านี้ เรียกกันว่า <dfn>shorthand character classes</dfn>


# --instructions--

จงใช้ shorthand character class `\w` เพื่อนับจำนวนตัวอักษรและตัวเลขใน strings

# --hints--

regex ของคุณควรใช้ global flag

```js
assert(alphabetRegexV2.global);
```

regex ของคุณควรใช้ shorthand character `\w` เพื่อ match ทุกอักขระที่เป็นตัวอักษรและตัวเลข

```js
assert(/\\w/.test(alphabetRegexV2.source));
```

regex ของคุณควรค้นพบ 31 อักขระที่เป็นตัวอักษรและตัวเลขจาก string `The five boxing wizards jump quickly.`

```js
assert(
  'The five boxing wizards jump quickly.'.match(alphabetRegexV2).length === 31
);
```

regex ของคุณควรค้นพบ 32 อักขระที่เป็นตัวอักษรและตัวเลขจาก string `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(alphabetRegexV2).length ===
    32
);
```

regex ของคุณควรค้นพบ 30 อักขระที่เป็นตัวอักษรและตัวเลขจาก string `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(alphabetRegexV2).length === 30
);
```

regex ของคุณควรค้นพบ 36 อักขระที่เป็นตัวอักษรและตัวเลขจาก string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

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
let alphabetRegexV2 = /change/; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;
```
