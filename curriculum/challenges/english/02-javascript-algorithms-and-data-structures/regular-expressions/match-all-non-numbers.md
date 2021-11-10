---
id: 587d7db8367417b2b2512ba1
title: Match All Non-Numbers
challengeType: 1
forumTopicId: 301347
dashedName: match-all-non-numbers
---

# --description--

แบบทดสอบที่แล้วแสดงวิธีค้นหาตัวเลข โดยใช้ shortcut `\d` ซึ่งเป็นตัวพิมพ์เล็ก `d` อย่างไรก็ตาม คุณสามารถค้นหาอักขระที่ไม่ใช่ตัวเลข (non-digits) โดยใช้ shortcut ที่คล้ายกัน นั่นคือการใช้ตัวพิมพ์ใหญ่ `D`


shortcut ที่ค้นหาอักขระที่ไม่ใช่ตัวเลข ก็คือ `\D` ซึ่งเทียบเท่ากับ character class `[^0-9]` โดยค้นหาอักขระหนึ่งตัวที่ไม่ใช่ตัวเลขระหว่าง 0 ถึง 9

# --instructions--

จงใช้ shorthand character class สำหรับอักขระที่ไม่ใช่ตัวเลข (non-digits) `\D` เพื่อนับจำนวนอักขระที่ไม่ใช่ตัวเลขในชื่อภาพยนตร์

# --hints--

regex ของคุณควรใช้ shortcut character เพื่อ match อักขระที่ไม่ใช่ตัวเลข (non-digit characters)

```js
assert(/\\D/.test(noNumRegex.source));
```

regex ของคุณควรใช้ global flag

```js
assert(noNumRegex.global);
```

regex ของคุณไม่ควรพบอักขระที่ไม่ใช่ตัวเลข (non-digit characters) ใน string `9`

```js
assert('9'.match(noNumRegex) == null);
```

regex ของคุณควรพบอักขระที่ไม่ใช่ตัวเลข 6 ตัวใน string `Catch 22`

```js
assert('Catch 22'.match(noNumRegex).length == 6);
```

regex ของคุณควรพบอักขระที่ไม่ใช่ตัวเลข 11 ตัวใน string `101 Dalmatians`

```js
assert('101 Dalmatians'.match(noNumRegex).length == 11);
```

regex ของคุณควรพบอักขระที่ไม่ใช่ตัวเลข 15 ตัวใน string `One, Two, Three`

```js
assert('One, Two, Three'.match(noNumRegex).length == 15);
```

regex ของคุณควรพบอักขระที่ไม่ใช่ตัวเลข 12 ตัวใน string `21 Jump Street`

```js
assert('21 Jump Street'.match(noNumRegex).length == 12);
```

regex ของคุณควรพบอักขระที่ไม่ใช่ตัวเลข 17 ตัวใน string `2001: A Space Odyssey`

```js
assert('2001: A Space Odyssey'.match(noNumRegex).length == 17);
```

# --seed--

## --seed-contents--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /change/; // Change this line
let result = movieName.match(noNumRegex).length;
```

# --solutions--

```js
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result = movieName.match(noNumRegex).length;
```
