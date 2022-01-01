---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

บางครั้งเราอาจอยาก match ตัวอักษร (หรือกลุ่มตัวอักษร) ที่ต่อกันอยู่

ในกรณีนี้เราจะใช้ `+` ถ้ายังจำได้ ตัวอักษรหรือ pattern จะต้องอยู่ติดกัน แปลว่าตัวอักษรที่เราหานั้นจะต้องวางต่อๆกันอยู่

เช่น `/a+/g` จะ match 1 ครั้งใน `abc` และคืนค่าเป็น `["a"]` และจะ match 1 ครั้งใน `aabc` และคืนค่า `["aa"]`

แต่ถ้าเอาไปใช้กับ `abab` จะ match 2 ครั้ง และคืนค่าเป็น `["a", "a"]` เพราะตัวอักษร `a` ไม่ได้อยู่ติดกัน แต่มี `b` คั่นอยู่ และตัวอย่างสุดท้าย ถ้าใช้กับ string `bcd` จะไม่ match เพราะไม่มี `a` เลยซักตัว

# --instructions--

ใหเขียน regex ที่ match ตัวอักษร `s` ที่วางต่อกัน ใน `Mississippi` โดยใช้ `+`

# --hints--

regex `myRegex` ต้องใช้ `+` เพื่อ match ตัวอักษร `s` ที่วางต่อกัน

```js
assert(/\+/.test(myRegex.source));
```

regex `myRegex` ต้องเจอทั้งหมด 2 ตัวอักษร

```js
assert(result.length == 2);
```

ตัวแปร `result` ต้องมีค่าเป็น array ที่มี `ss` 2 ตัวอยู่ข้างใน

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // แก้บรรทัดนี้
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // แก้บรรทัดนี้
let result = difficultSpelling.match(myRegex);
```
