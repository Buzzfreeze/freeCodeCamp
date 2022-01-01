---
id: 587d7db4367417b2b2512b91
title: Ignore Case While Matching
challengeType: 1
forumTopicId: 301344
dashedName: ignore-case-while-matching
---

# --description--

เราได้เรียนเรื่อง regex ที่ match ตามตัวอักษรเป๊ะๆ (literal match) ไปแล้ว แต่บางครั้ง เราอาจอยากให้ match ทั้งข้อความเป็นตัวพิมพ์เล็กและตัวพิมพ์ใหญ่

Case (หรือบางครั้งเรียกว่า letter case) คือ ความต่างของตัวอักษรพิมพ์ใหญ่ (uppercase) กับพิมพ์เล็ก (lowercase) ตัวอย่างของตัวพิมพ์ใหญ่ คือ `A`, `B` และ `C` ตัวอย่างของตัวพิมพ์เล็ก คือ `a`, `b` และ `c`

เราสามารถทำให้ regex นั้น match ทั้ง 2 case ได้ ถ้าเราใช้ flag 
จริงๆ แล้วเรามี flag ให้ใช้หลายแบบ แต่ตอนนี้เราจะมาเรียนตัวที่ใช้เพื่อให้ regex ไม่สนใจ case ของตัวอักษรกันก่อน ซึ่ง flag นั้นคือ `i` 
วิธีการใช้ flag คือการเอาไปต่อท้าย regex แบบนี้ `/ignorecase/i` ซึ่งตัวอย่าง regex นี้จะ match กับ `ignorecase`, `igNoreCase`, และ `IgnoreCase` ได้แล้ว

# --instructions--

จงเขียน regex `fccRegex` เพื่อ match `freeCodeCamp` โดยไม่สนใจ case ของ string 
และ regex ของคุณต้องไม่ match กับตัวย่อหรือข้อความที่มีการเว้นวรรค

# --hints--

regex ที่เขียนต้อง match กับ string `freeCodeCamp`

```js
fccRegex.lastIndex = 0; 
assert(fccRegex.test('freeCodeCamp'));
```

regex ที่เขียนต้อง match กับ string `FreeCodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodeCamp'));
```

regex ที่เขียนต้อง match กับ string `FreecodeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreecodeCamp'));
```

regex ที่เขียนต้อง match กับ string `FreeCodecamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCodecamp'));
```

regex ที่เขียนต้อง*ไม่* match กับ string `Free Code Camp`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('Free Code Camp'));
```

regex ที่เขียนต้อง match กับ string `FreeCOdeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FreeCOdeCamp'));
```

regex ที่เขียนต้อง*ไม่* match กับ string `FCC`

```js
fccRegex.lastIndex = 0;
assert(!fccRegex.test('FCC'));
```

regex ที่เขียนต้อง match กับ string `FrEeCoDeCamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCoDeCamp'));
```

regex ที่เขียนต้อง match กับ string `FrEeCodECamp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FrEeCodECamp'));
```

regex ที่เขียนต้อง match กับ string `FReeCodeCAmp`

```js
fccRegex.lastIndex = 0;
assert(fccRegex.test('FReeCodeCAmp'));
```

# --seed--

## --seed-contents--

```js
let myString = "freeCodeCamp";
let fccRegex = /change/; // แก้บรรทัดนี้
let result = fccRegex.test(myString);
```

# --solutions--

```js
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // แก้บรรทัดนี้
let result = fccRegex.test(myString);
```
