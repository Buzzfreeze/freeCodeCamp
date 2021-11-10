---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

จนถึงตอนนี้ คุณได้เรียนรู้ regex ที่ match กับ string ตามตัวอักษร (literal match) แต่บางครั้ง คุณอาจต้องการให้ match กับ case (ตัวเล็กตัวใหญ่) ที่แตกต่างกัน

Case (หรือบางครั้งเรียกว่า letter case) คือ ความแตกต่างระหว่างตัวอักษรพิมพ์ใหญ่ (uppercase) และพิมพ์เล็ก (lowercase) ตัวอย่างของตัวพิมพ์ใหญ่ คือ `A`, `B` และ `C` ตัวอย่างของตัวพิมพ์เล็ก คือ `a`, `b` และ `c`

คุณสามารถ match ทั้ง 2 cases โดยการใช้สิ่งที่เรียกว่า flag จริงๆ แล้วมี flag หลายตัว แต่ตัวที่คุณจะได้เรียนรู้นั้นมันไม่สนใจ case นั่นคือ `i` flag คุณสามารถใช้ flag โดยการต่อเข้าไปที่ regex ดังตัวอย่างนี้ `/ignorecase/i` ซึ่ง regex นี้สามารถ match กับ string `ignorecase`, `igNoreCase`, และ `IgnoreCase` ได้

# --instructions--

จงเขียน regex `fccRegex` เพื่อ match `freeCodeCamp` โดยไม่คำนึงถึง case ว่าเป็นอย่างไร ซึ่ง regex ของคุณไม่ควร match กับตัวย่อหรือ space ที่มีความแตกต่าง

# --hints--

regex ของคุณควร match กับ string `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

regex ของคุณควร match กับ string `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

regex ของคุณควร match กับ string `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

regex ของคุณควร match กับ string `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

regex ของคุณไม่ควร match กับ string `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

regex ของคุณควร match กับ string `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

regex ของคุณไม่ควร match กับ string `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

regex ของคุณควร match กับ string `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

regex ของคุณควร match กับ string `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

regex ของคุณควร match กับ string `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // Change this line
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result = fccRegex.test(myString);
```
