---
id: 587d7db5367417b2b2512b97
title: Match Numbers and Letters of the Alphabet
challengeType: 1
forumTopicId: 301356
dashedName: match-numbers-and-letters-of-the-alphabet
---

# --description--

การใช้ hyphen (`-`) เพื่อ match ช่วงของตัวอักษร จะใช้กับช่วงตัวเลขได้ด้วย

เช่น ถ้าเราใช้ `/[0-5]/` จะ match กับตัวเลขที่อยู่ตั้งแต่ `0` ถึง `5` ซึ่งจะ match กับ `0` และ `5` ด้วย

นอกจากนี้ เรายังสามารถรวมช่วงของตัวอักษรและช่วงของตัวเลขให้อยู่ใน character set เดียวกันได้ด้วย

```js
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);
```

# --instructions--

จงสร้าง regex ที่ match กับช่วงตัวอักษรตั้งแต่ `h` ถึง `s` และช่วงตัวเลขตั้งแต่ `2` ถึง `6` อย่าลืมใส่ flag ใน regex ด้วย

# --hints--

regex `myRegex` ต้องเจอทั้งหมด 35 ตัวอักษร

```js
assert(result.length == 17);
```

regex `myRegex` ต้องใช้ flag global (`g`)

```js
assert(myRegex.flags.match(/g/).length == 1);
```

regex `myRegex` ต้องใช้ flag case insensitive (`i`)

```js
assert(myRegex.flags.match(/i/).length == 1);
```

# --seed--

## --seed-contents--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /change/; // แก้บรรทัดนี้
let result = myRegex; // แก้บรรทัดนี้
```

# --solutions--

```js
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi; // แก้บรรทัดนี้
let result = quoteSample.match(myRegex); // แก้บรรทัดนี้
```
