---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

คุณได้เรียนรู้การค้นหา whitespace โดยใช้ `\s`, ที่มีตัวพิมพ์เล็ก `s` แล้ว อย่างไรก็ตาม คุณยังสามารถค้นหาทุกอย่างยกเว้น whitespace ได้อีกด้วย 

การค้นหา non-whitespace ให้ใช้ `\S`, ซึ่งเป็นตัวพิมพ์ใหญ่ `S` โดย pattern นี้จะไม่ match กับ whitespace, carriage return, tab, form feed และ new line characters คุณสามารถนึกถึง `\S` เทียบเท่ากับ character class `[^ \r\t\f\n\v]`

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

`.length` method คืนค่าเป็น `32`

# --instructions--

จงปรับแก้ regex `countNonWhiteSpace` เพื่อค้นหา non-whitespace characters ทุกตัวใน string

# --hints--

regex ของคุณควรใช้ global flag

```js
assert(countNonWhiteSpace.global);
```

regex ของคุณควรใช้ shorthand character `\S` เพื่อ match non-whitespace characters ทุกตัว

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

regex ของคุณควรพบ non-spaces 35 ตัวใน string `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

regex ของคุณควรพบ non-spaces 23 ตัวใน string `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

regex ของคุณควรพบ non-spaces 21 ตัวใน string `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // Change this line
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);
```
