---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

การใช้ hyphen (`-`) เพื่อ match ช่วงตัวอักษร ไม่จำกัดการใช้เฉพาะตัวอักษรเท่านั้น แต่ยังใช้กับช่วงตัวเลขได้ด้วย

ตัวอย่างเช่น `/[0-5]/` match กับตัวเลขที่อยู่ระหว่าง `0` และ `5` รวมถึง `0` และ `5` ด้วย

นอกจากนี้ เรายังสามารถรวมช่วงตัวอักษรและช่วงตัวเลขให้อยู่ใน character set เดียวกันได้ด้วย

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

จงสร้าง regex ที่ match กับช่วงตัวอักษรระหว่าง `h` และ `s` และช่วงตัวเลขระหว่าง `2` และ `6` โดยสามารถเพิ่ม flag ที่เหมาะสมใน regex ได้

# --hints--

regex `myRegex` ควร match 17 items

```js
assert(result.length == 17);
```

regex `myRegex` ควรใช้ global flag

```js
assert(myRegex.flags.match(/g/).length == 1);
```

regex `myRegex` ควรใช้ case insensitive flag

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // Change this line
let result = myRegex; // Change this line
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line
```
