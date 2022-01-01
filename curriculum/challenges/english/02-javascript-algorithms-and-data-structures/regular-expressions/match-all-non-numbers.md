---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

บทเรียนที่แล้วเราได้ลองหาตัวเลขด้วยการใช้ shortcut `\d` (ใช้ `d` พิมพ์เล็ก) 
คราวนี้เรามาลองหาตัวอักษรที่ไม่ใช่ตัวเลข โดยใช้ shortcut ที่ใช้ตัว `D` พิมพ์ใหญ่กัน


shortcut ที่ใช้หาตัวอักษรที่ไม่ใช่ตัวเลขคือ `\D` จะทำงานเหมือนกับ `[^0-9]` ซึ่งจะหาตัวอักษรหรือสัญลักษณ์หนึ่งตัวที่ไม่ได้มีค่าอยู่ระหว่าง `0` ถึง `9`

# --instructions--

จงใช้ shorthand character class สำหรับหาตัวอักษรที่ไม่ใช่ตัวเลข (`\D`) เพื่อนับจำนวนตัวอักษรที่ไม่ใช่ตัวเลขในชื่อภาพยนตร์

# --hints--

regex ที่เขียนต้องใช้ shortcut character `\D`

```js
assert(/\\D/.test(noNumRegex.source));
```

regex ที่เขียนต้องใช้ flag global

```js
assert(noNumRegex.global);
```

regex ที่เขียนต้องไม่ match กับ string `9`

```js
assert('9'.match(noNumRegex) == null);
```

regex ที่เขียนต้องเจออักษรที่ไม่ใช่ตัวเลขทั้งหมด 6 ตัวใน string `Catch 22`

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

regex ที่เขียนต้องเจออักษรที่ไม่ใช่ตัวเลขทั้งหมด 11 ตัวใน string `101 Dalmatians`

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

regex ที่เขียนต้องเจออักษรที่ไม่ใช่ตัวเลขทั้งหมด 15 ตัวใน string `One, Two, Three`

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

regex ที่เขียนต้องเจออักษรที่ไม่ใช่ตัวเลขทั้งหมด 12 ตัวใน string `21 Jump Street`

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

regex ที่เขียนต้องเจออักษรที่ไม่ใช่ตัวเลขทั้งหมด 17 ตัวใน string `2001: A Space Odyssey`

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // แก้บรรทัดนี้
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // แก้บรรทัดนี้
let result = movieName.match(noNumRegex).length;
```
