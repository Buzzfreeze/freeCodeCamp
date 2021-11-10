---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

แบบทดสอบที่ผ่านมากล่าวถึงการ match อักขระที่เป็นตัวอักษรและตัวเลข อย่างไรก็ตาม คุณสามารถ match whitespace หรือ spaces ระหว่างตัวอักษรได้ด้วย

คุณสามารถค้นหา whitespace โดยการใช้ `\s`, ซึ่งเป็น `s` ตัวพิมพ์เล็ก โดย pattern นี้ไม่เพียงแต่ match whitespace แต่ยัง match carriage return, tab, form feed และ new line characters ด้วย ซึ่งเทียบเท่ากับ character class `[ \r\t\f\n\v]`

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

การเรียก `match` นี้จะคืนค่า `[" ", " "]`
# --instructions--

จงปรับแก้ regex `countWhiteSpace` ให้ค้นหา whitespace characters ทั้งหมดใน string

# --hints--

regex ของคุณควรใช้ global flag.

```js
assert(countWhiteSpace.global);
```

regex ของคุณควรใช้ shorthand character `\s` เพื่อ match whitespace characters ทั้งหมด

```js
assert(/\\s/.test(countWhiteSpace.source));
```

regex ของคุณควรพบ 8 spaces ใน string `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

regex ของคุณควรพบ 3 spaces ใน string `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

regex ของคุณไม่ควรพบ spaces ใน string `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // Change this line
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
