---
id: 587d7db6367417b2b2512b99
title: Match Characters that Occur One or More Times
challengeType: 1
forumTopicId: 301350
dashedName: match-characters-that-occur-one-or-more-times
---

# --description--

บางครั้งคุณต้องการ match ตัวอักษร (หรือกลุ่มตัวอักษร) ที่พบตั้งแต่ 1 ครั้งขึ้นไปในคราวเดียว นั่นหมายความว่า ตัวอักษรหรือกลุ่มตัวอักษรนั้นมีมากกว่า 1

คุณสามารถใช้ `+` เพื่อตรวจสอบกรณีนี้ หากยังจำได้ ตัวอักษรหรือ pattern จะต้องแสดงอย่างต่อเนื่อง นั่นคือ ตัวอักษรมีการเรียงในลักษณะตัวนึงวางต่อกับอีกตัวนึง ต่อๆ กันไป

ตัวอย่างเช่น `/a+/g` จะเจอ match 1 ครั้งใน `abc` และคืนค่า `["a"]` และการใช้ `+` จะเจอ match 1 ครั้งใน `aabc` และคืนค่า `["aa"]`

แต่ถ้าเช็ค `abab` จะเจอ match 2 ครั้ง และคืนค่า `["a", "a"]` เพราะตัวอักษร `a` ไม่ได้อยู่ติดกัน แต่มี `b` คั่นอยู่ และตัวอย่างสุดท้าย เนื่องจากไม่มี `a` ใน string `bcd` จึงไม่ match แต่อย่างใด 

# --instructions--

คุณต้องการค้นหาด้วยการ match ตัวอักษร `s` ที่พบตั้งแต่ 1 ครั้งขึ้นไปใน `Mississippi` จงเขียน regex โดยใช้ `+`

# --hints--

regex `myRegex` ควรใช้ `+` เพื่อ match ตัวอักษร `s` ที่พบ ตั้งแต่ 1 ครั้งเป็นต้นไป

```js
assert(/\+/.test(myRegex.source));
```

regex `myRegex` ควร match 2 items

```js
assert(result.length == 2);
```

ตัวแปร `result` ควรเป็น array ที่มี `ss` 2 items

```js
assert(result[0] == 'ss' && result[1] == 'ss');
```

# --seed--

## --seed-contents--

```js
let difficultSpelling = "Mississippi";
let myRegex = /change/; // Change this line
let result = difficultSpelling.match(myRegex);
```

# --solutions--

```js
let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);
```
