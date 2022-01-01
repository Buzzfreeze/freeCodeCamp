---
id: 5d712346c441eddfaeb5bdef
title: Match All Numbers
challengeType: 1
forumTopicId: 18181
dashedName: match-all-numbers
---

# --description--

เราได้เรียนเรื่อง shortcut สำหรับ string pattern ที่ใช้กันทั่วไปเช่น alphanumeric (ตัวเลขและตัวอักษร) ไปแล้ว
แต่ก็ยังมีอีก pattern นึงที่นิยมใช้กันเพื่อหาแค่ตัวเลข

shortcut สำหรับการหาแค่ตัวเลขคือ `\d` (ใช้ `d` พิมพ์เล็ก) ซึ่งจะมีค่าเหมือนกับ `[0-9]` shortcut นี้จะเป็นการหาตัวอักษรหนึ่งตัวที่เป็นตัวเลขโดยเป็นได้ตั้งแต่ `0` ถึง `9`

# --instructions--

จงใช้ shorthand character class `\d` เพื่อนับจำนวนตัวเลขที่อยู่ในชื่อภาพยนตร์ และให้เขียนค่าที่ได้ออกมาเป็นตัวหนังสือ (ถ้าเจอคำ เช่นคำว่า `"six"` เราจะไม่นับว่าเป็นตัวเลข)

# --hints--

regex ที่เขียนต้องใช้ shortcut character `\d`

```js
assert(/\\d/.test(numRegex.source));
```

regex ที่เขียนต้องใช้ flag global

```js
assert(numRegex.global);
```

regex ที่เขียนต้องเจอตัวเลข 1 ตัวใน string `9`

```js
assert('9'.match(numRegex).length == 1);
```

regex ที่เขียนต้องเจอตัวเลข 2 ตัวใน string `Catch 22`

```js
assert('Catch 22'.match(numRegex).length == 2);
```

regex ที่เขียนต้องเจอตัวเลข 3 ตัวใน string `101 Dalmatians`.

```js
assert('101 Dalmatians'.match(numRegex).length == 3);
```

regex ที่เขียนต้องไม่เจอตัวเลข string `One, Two, Three`.

```js
assert('One, Two, Three'.match(numRegex) == null);
```

regex ที่เขียนต้องเจอตัวเลข 2 ตัวใน string `21 Jump Street`.

```js
assert('21 Jump Street'.match(numRegex).length == 2);
```

regex ที่เขียนต้องเจอตัวเลข 4 ตัวใน string `2001: A Space Odyssey`.

```js
assert('2001: A Space Odyssey'.match(numRegex).length == 4);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /change/; // แก้บรรทัดนี้
let result = movieName.match(numRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // แก้บรรทัดนี้
let result = movieName.match(numRegex).length;
```
