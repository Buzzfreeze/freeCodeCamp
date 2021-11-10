---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

คุณได้เรียนรู้ shortcut สำหรับ string pattern ที่ใช้กันทั่วไปเช่น alphanumerics (ตัวเลขและตัวอักษร) แต่ยังมีอีก pattern นึงที่ใช้กันทั่วไปสำหรับการค้นหาตัวเลข

shortcut ที่ค้นหาตัวเลข ก็คือ `\d`, เขียนด้วยตัวพิมพ์เล็ก `d` ซึ่งเทียบเท่ากับ character class `[0-9]` โดยค้นหาอักขระหนึ่งตัวที่เป็นตัวเลขระหว่าง 0 ถึง 9

# --instructions--

จงใช้ shorthand character class `\d` เพื่อนับจำนวนตัวเลขที่อยู่ในชื่อภาพยนตร์ ให้เขียนเป็นตัวเลขที่พบออกมา ไม่ใช่นับจำนวนตัวเลข ("six" ไม่ใช่ 6) 

# --hints--

regex ของคุณควรใช้ shortcut character to match digit characters

```js
assert(/\\d/.test(numRegex.source));
```

regex ของคุณควรใช้ global flag

```js
assert(numRegex.global);
```

regex ของคุณควรพบตัวเลข 1 ตัวใน string `9`

```js
assert('9'.match(numRegex).length == 1);
```

regex ของคุณควรพบตัวเลข 2 ตัวใน string `Catch 22`

```js
assert('Catch 22'.match(numRegex).length == 2);
```

regex ของคุณควรพบตัวเลข 3 ตัวใน string `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

regex ของคุณควรพบตัวเลข no ตัวใน string `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

regex ของคุณควรพบตัวเลข 2 ตัวใน string `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

regex ของคุณควรพบตัวเลข 4 ตัวใน string `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // Change this line
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result = movieName.match(numRegex).length;
```
