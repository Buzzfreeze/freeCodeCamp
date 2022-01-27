---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

ในแบบทดสอบที่แล้ว เราได้ลองหาคำว่า `Hello` โดยใช้ regex `/Hello/` ซึ่ง regex นี้จะหาข้อความที่ตรงกับ string `Hello`  
ด้านล่างนี้เป็นตัวอย่างการหาข้อความที่ตรงกับ string `Kevin` เป๊ะๆ:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

จากตัวอย่างด้านบน `test` จะคืนค่าเป็น `true`

ถ้าเราเขียน `Kevin` เป็นแบบอื่นก็จะทำให้หาไม่เจอ เช่น regex `/Kevin/` จะหาข้อความที่เป็น `kevin` หรือ `KEVIN` ไม่เจอ

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

จากตัวอย่างด้านบน `test` จะคืนค่าเป็น `false`

บทเรียนที่เราจะได้เรียนหลังจากนี้ จะสอนวิธีการหาข้อความที่มีตัวพิมพ์ใหญ่พิมพ์เล็กไม่ตรงกันแบบตัวอย่างนี้ได้ด้วย

# --instructions--

ให้แก้ regex `waldoRegex` เพื่อให้หาคำว่า `"Waldo"` เจอใน string `waldoIsHiding`

# --hints--

regex `waldoRegex` ต้องหา string `Waldo` เจอ

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

regex `waldoRegex` ต้องไม่เจอข้อความอื่นใน string

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

ต้องหา string ตามตัวอักษรที่ตรงกับ regex ของคุณ

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // แก้บรรทัดนี้
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // แก้บรรทัดนี้
let result = waldoRegex.test(waldoIsHiding);
```
