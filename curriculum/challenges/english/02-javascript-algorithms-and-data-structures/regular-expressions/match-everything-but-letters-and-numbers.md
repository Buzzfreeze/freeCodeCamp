---
id: 587d7db8367417b2b2512ba0
title: Match Everything But Letters and Numbers
challengeType: 1
forumTopicId: 301353
dashedName: match-everything-but-letters-and-numbers
---

# --description--

เรารู้แล้วว่าเราใช้ shortcut เพื่อ match ตัวเลขและตัวอักษรภาษาอังกฤษแบบนี้ได้ `[A-Za-z0-9_]` ถ้าใช้ `\w` 
แต่บางทีเราอาจอยากหาว่ามีตัวอักษรหรือสัญลักษณ์อื่นนอกเหนือจาก `[A-Za-z0-9_]` ใน string หรือไม่

เราจะมี `\W` ที่ทำงานตรงข้ามกับ `\w` เลย 
ให้ลองดูดีๆ pattern นี้จะใช้ตัวพิมพ์ใหญ่ และ shortcut นี้จะทำงานเหมือนกับ [^A-Za-z0-9_]`

```js
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
```

จากตัวอย่างด้านบน การใช้ `match` ครั้งแรกจะได้ค่าเป็น `["%"]` และครั้งที่สองจะได้ค่าเป็น `["!"]`

# --instructions--

จงใช้ shorthand character class `\W` เพื่อนับเครื่องหมายอื่นที่ไม่ใช่ตัวอักษรในภาษาอังกฤษและตัวเลขใน string

# --hints--

ต้องเขียน regex โดยใช้ flag global

```js
assert(nonAlphabetRegex.global);
```

regex ที่เขียนต้องเจอเครื่องหมายที่ไม่ใช่ตัวอักษรในภาษาอังกฤษและตัวเลขทั้งหมด 6 ตัวใน string `The five boxing wizards jump quickly.`.

```js
assert(
  'The five boxing wizards jump quickly.'.match(nonAlphabetRegex).length == 6
);
```

ต้องเขียน regex โดยใช้ shorthand character เพื่อ match เครื่องหมายที่ไม่ใช่ตัวอักษรในภาษาอังกฤษและตัวเลข (non-alphanumeric)

```js
assert(/\\W/.test(nonAlphabetRegex.source));
```

regex ที่เขียนต้องเจอเครื่องหมายที่ไม่ใช่ตัวอักษรในภาษาอังกฤษและตัวเลขทั้งหมด 8 ตัวใน string `Pack my box with five dozen liquor jugs.`

```js
assert(
  'Pack my box with five dozen liquor jugs.'.match(nonAlphabetRegex).length == 8
);
```

regex ที่เขียนต้องเจอเครื่องหมายที่ไม่ใช่ตัวอักษรในภาษาอังกฤษและตัวเลขทั้งหมด 6 ตัวใน string `How vexingly quick daft zebras jump!`

```js
assert(
  'How vexingly quick daft zebras jump!'.match(nonAlphabetRegex).length == 6
);
```

regex ที่เขียนต้องเจอเครื่องหมายที่ไม่ใช่ตัวอักษรในภาษาอังกฤษและตัวเลขทั้งหมด 12 ตัวใน string `123 456 7890 ABC def GHI jkl MNO pqr STU vwx YZ.`

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
let nonAlphabetRegex = /change/; // แก้บรรทัดนี้
let result = quoteSample.match(nonAlphabetRegex).length;
```

# --solutions--

```js
let quoteSample = "The five boxing wizards_jump quickly.";
let nonAlphabetRegex = /\W/g; // แก้บรรทัดนี้
let result = quoteSample.match(nonAlphabetRegex).length;
```
