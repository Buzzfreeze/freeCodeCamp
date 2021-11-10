---
id: 587d7db3367417b2b2512b8f
title: Match Literal Strings
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

ในแบบทดสอบที่แล้ว คุณค้นหาคำว่า `Hello` โดยใช้ regular expression `/Hello/` ซึ่ง regex นั้นค้นหาข้อความที่ match กับ string `Hello` ต่อไปนี้เป็นตัวอย่างการค้นหาข้อความที่ match กับ string `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

`test` ในที่นี้คืนค่า `true`

รูปแบบอื่นของ `Kevin` จะไม่ match ตัวอย่างเช่น regex `/Kevin/` จะไม่ match กับ `kevin` หรือ `KEVIN`

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

`test` ในที่นี้คืนค่า `false`

แบบทดสอบหลังจากนี้จะแสดงวิธีการ match กับรูปแบบอื่นๆ ให้ด้วย

# --instructions--

จงทำให้ regex `waldoRegex` สมบูรณ์ เพื่อค้นหา `"Waldo"` ใน string `waldoIsHiding`

# --hints--

regex `waldoRegex` ควรค้นหา string `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

regex `waldoRegex` ไม่ควรค้นหาข้อความอื่นอีก

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

คุณควรค้นหา string ตามตัวอักษรที่ match กับ regex ของคุณ

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
