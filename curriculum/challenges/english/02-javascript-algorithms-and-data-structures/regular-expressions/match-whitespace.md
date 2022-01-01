---
id: 587d7db8367417b2b2512ba3
title: Match Whitespace
challengeType: 1
forumTopicId: 301359
dashedName: match-whitespace
---

# --description--

ที่ผ่านมาเราได้เรียนเรื่องการ match ตัวอักษรและตัวเลขไปแล้ว ในบทเรียนนี้เรามาเรียนเรื่องการ match whitespace หรือการเว้นวรรคระหว่างตัวอักษรกัน

ในการหา whitespace เราจะใช้ `\s` (ใช้ `s` พิมพ์เล็ก) โดย pattern จะไม่ได้ match แค่เว้นวรรคเท่านั้นแต่จะ match ทั้ง carriage return (`\r`), tab (`\t`), form feed (`\f`) และ new line character (`\n`) ด้วย ซึ่งการใช้ `\s` นี้จะเหมือนกับการใช้ character class `[ \r\t\f\n\v]`

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
```

การเรียก `match` นี้จะคืนค่า `[" ", " "]`
# --instructions--

จงปรับแก้ regex `countWhiteSpace` ให้ค้นหา whitespace character ทั้งหมดใน string

# --hints--

regex ที่เขียนต้องใช้ flag global 

```js
assert(countWhiteSpace.global);
```

regex ที่เขียนต้องใช้ shorthand character `\s` เพื่อ match whitespace character ทั้งหมด

```js
assert(/\\s/.test(countWhiteSpace.source));
```

regex ที่เขียนต้องเจอ space ทั้งหมด 8 ตัว ใน string `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countWhiteSpace).length ==
    8
);
```

regex ที่เขียนต้องเจอ space ทั้งหมด 3 ตัว ใน string `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countWhiteSpace).length == 3);
```

regex ที่เขียนต้องไม่เจอ space ใน string `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countWhiteSpace) == null);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /change/; // แก้บรรทัดนี้
let result = sample.match(countWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```
