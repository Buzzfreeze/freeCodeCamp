---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

คุณได้เรียนรู้แล้วว่า คุณสามารถใช้ shortcut เพื่อ match อักขระที่เป็นตัวเลขและตัวอักษร `[A-Za-z0-9_]` โดยการใช้ `\w` อย่างไรก็ตาม บางครั้งคุณอาจต้องการค้นหาอักขระอื่นที่นอกเหนือจากตัวเลขและตัวอักษร

คุณสามารถค้นหาสิ่งตรงข้ามกับ `\w` ด้วย `\W` ซึ่ง pattern ที่ตรงข้ามจะใช้ตัวอักษรพิมพ์ใหญ่ โดย shortcut นี้เทียบเท่ากับ [^A-Za-z0-9_]`

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

การเรียก `match` ครั้งแรกควรคืนค่า `["%"]` และครั้งที่สองควรควรค่า `["!"]`

# --instructions--

จงใช้ shorthand character class `\W` เพื่อนับตัวอักษรและตัวเลขใน strings

# --hints--

regex ของคุณควรใช้ global flag

```js
assert(nonAlphabetRegex.global);
```

regex ของคุณควรพบอักขระอื่นที่นอกเหนือจากตัวเลขและตัวอักษรจำนวน 6 ตัวใน string `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

regex ของคุณควรใช้ shorthand character เพื่อ match อักขระอื่นที่นอกเหนือจากตัวเลขและตัวอักษร (non-alphanumeric)

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

regex ของคุณควรพบอักขระอื่นที่นอกเหนือจากตัวเลขและตัวอักษรจำนวน 8 ตัวใน string `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

regex ของคุณควรพบอักขระอื่นที่นอกเหนือจากตัวเลขและตัวอักษรจำนวน 6 ตัวใน string `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

regex ของคุณควรพบอักขระอื่นที่นอกเหนือจากตัวเลขและตัวอักษรจำนวน 12 ตัวใน string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

```js
assert(
  '123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.'.match(nonAlphabetRegex)
    .length == 12
);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /change/; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;
```
