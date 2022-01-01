---
id: 587d7db9367417b2b2512ba4
title: Match Non-Whitespace Characters
challengeType: 1
forumTopicId: 18210
dashedName: match-non-whitespace-characters
---

# --description--

เราได้เรียนเรื่องการหา whitespace โดยใช้ `\s` (`s` พิมพ์เล็ก) ไปแล้ว 
เราจะหาทุกตัวอักษรยกเว้น whitespace (non-whitespace character) ได้อีกด้วย 

เราจะใช้ `\S` (ใช้ `S` พิมพ์ใหญ่) ในการหา non-whitespace โดย pattern นี้จะไม่ match กับ whitespace, carriage return, tab, form feed และ new line character 
โดย `\S` นั้นจะเหมือนกับ character class `[^ \r\t\f\n\v]`

```js
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length;
```

การเรียกใช้ method `.length` จะได้ค่าเป็น `32`

# --instructions--

ให้เปลี่ยน regex `countNonWhiteSpace` เพื่อค้นหา non-whitespace character ทุกตัวใน string

# --hints--

regex ที่เขียนต้องใช้ flag global 

```js
assert(countNonWhiteSpace.global);
```

regex ที่เขียนต้องใช้ shorthand character `\S` เพื่อ match non-whitespace character ทุกตัว

```js
assert(/\\S/.test(countNonWhiteSpace.source));
```

regex ที่เขียนต้องเจอ non-spaces 35 ตัวใน string `Men are from Mars and women are from Venus.`

```js
assert(
  'Men are from Mars and women are from Venus.'.match(countNonWhiteSpace)
    .length == 35
);
```

regex ที่เขียนต้องเจอ non-spaces 23 ตัวใน string `Space: the final frontier.`

```js
assert('Space: the final frontier.'.match(countNonWhiteSpace).length == 23);
```

regex ที่เขียนต้องเจอ non-spaces 21 ตัวใน string `MindYourPersonalSpace`

```js
assert('MindYourPersonalSpace'.match(countNonWhiteSpace).length == 21);
```

# --seed--

## --seed-contents--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /change/; // แก้บรรทัดนี้
let result = sample.match(countNonWhiteSpace);
```

# --solutions--

```js
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // แก้บรรทัดนี้
let result = sample.match(countNonWhiteSpace);
```
