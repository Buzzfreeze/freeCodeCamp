---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

ถ้ายังจำได้เราจะใช้เครื่องหมายบวก `+` เพื่อหา pattern ที่เจออย่างน้อย 1 ครั้ง และใช้ดอกจัน `*` เพื่อค้นหา pattern ที่อาจจะไม่เจอหรือเจอหลายครั้ง เครื่องหมายสองตัวนี้ทำให้เราทำงานได้ง่ายขึ้น แต่บางครั้งเราก็อาจจะอยากระบุได้ว่าต้องเจอ pattern นั้นกี่ครั้งถึงจะนับว่า match

เราจะระบุจำนวน pattern ที่ match ได้ด้วยการใช้ <dfn>quantity specifiers</dfn> ซึ่ง Quantity specifiers นั้นจะใช้วงเล็บปีกกา (`{` และ `}`) เป็นตัวกำหนด โดยเราต้องใส่ตัวเลขสองตัวลงในวงเล็บปีกกา ตัวเลขแรกเป็นตัวเลขที่บอกว่าต้องเจอ pattern อย่างน้อยกี่ครั้งถึงจะนับว่า match และตัวเลขที่สองเป็นตัวเลขที่บอกว่าต้องเจอ pattern ไม่เกินกี่ครั้งถึงจะนับว่า match

เช่น ถ้าเราต้องการเขียน regex ให้ match ถ้ามีตัวอักษร `a` อย่างน้อย `3` ตัวและไม่เกิน `5` ตัวอยู่ใน string `ah` เราจะเขียน regex ได้เป็น `/a{3,5}h/`

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

การเรียกใช้ method `test` ครั้งแรกได้ค่าเป็น `true` ในขณะที่ครั้งที่สองจะได้ค่าเป็น `false`

# --instructions--

จงปรับแก้ regex `ohRegex` ให้ match กับคำว่า `Oh no` ถ้ามีตัวอักษร `h` จำนวนตั้งแต่ `3` ถึง `6` ตัว 

# --hints--

regex ต้องเขียนโดยใช้ curly bracket (`{` และ `}`)

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

regex ที่เขียนต้องไม่ match กับ string `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

regex ที่เขียนต้อง match กับ string `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

regex ที่เขียนต้อง match กับ string `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

regex ที่เขียนต้อง match กับ string `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

regex ที่เขียนต้อง match กับ string `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

regex ที่เขียนต้องไม่ match กับ string `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // แก้ไขบรรทัดนี้
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // แก้ไขบรรทัดนี้
let result = ohRegex.test(ohStr);
```
