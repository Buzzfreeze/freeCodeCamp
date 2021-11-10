---
id: 587d7db9367417b2b2512ba5
title: Specify Upper and Lower Number of Matches
challengeType: 1
forumTopicId: 301367
dashedName: specify-upper-and-lower-number-of-matches
---

# --description--

จากบทที่ผ่านมา คุณใช้ plus sign `+` ค้นหาตัวอักษร 1 ตัวหรือมากกว่า และ asterisk `*` เพื่อค้นหาตัวอักษร 0 ตัวหรือมากกว่า ทั้งสองตัวนี้ต่างก็ใช้งานสะดวก แต่บางครั้งคุณอาจต้องการ match pattern เป็นช่วง 

คุณสามารถระบุจำนวนขั้นต่ำ (lower) และจำนวนสูงสุด (upper) ของ pattern ด้วย <dfn>quantity specifiers</dfn> ซึ่ง Quantity specifiers ใช้กับวงเล็บปีกกา (`{` และ `}`) คุณใส่ตัวเลขทั้งสองที่เป็นจำนวนขั้นต่ำและจำนวนสูงสุดของ pattern ภายในวงเล็บปีกกา

ตัวอย่างเช่น การ match ก็ต่อเมื่อมีตัวอักษร `a` จำนวน `3` ถึง `5` ตัวอยู่ใน string `ah` คุณสามารถเขียน regex ได้เป็น `/a{3,5}h/`

```js
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);
```

การเรียก `test` ครั้งแรกคืนค่า `true` ในขณะที่ครั้งที่สองจะคืนค่า `false`

# --instructions--

จงปรับแก้ regex `ohRegex` เพื่อ match ก็ต่อเมื่อมีตัวอักษร `h` จำนวน `3` ถึง `6` ตัว อยู่ในวลี `Oh no` 

# --hints--

regex ของคุณควรใช้ curly brackets

```js
assert(ohRegex.source.match(/{.*?}/).length > 0);
```

regex ของคุณไม่ควร match กับ string `Ohh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohh no'));
```

regex ของคุณควร match กับ string `Ohhh no`

```js
assert('Ohhh no'.match(ohRegex)[0].length === 7);
```

regex ของคุณควร match กับ string `Ohhhh no`

```js
assert('Ohhhh no'.match(ohRegex)[0].length === 8);
```

regex ของคุณควร match กับ string `Ohhhhh no`

```js
assert('Ohhhhh no'.match(ohRegex)[0].length === 9);
```

regex ของคุณควร match กับ string `Ohhhhhh no`

```js
assert('Ohhhhhh no'.match(ohRegex)[0].length === 10);
```

regex ของคุณไม่ควร match กับ string `Ohhhhhhh no`

```js
ohRegex.lastIndex = 0;
assert(!ohRegex.test('Ohhhhhhh no'));
```

# --seed--

## --seed-contents--

```js
let ohStr = "Ohhh no";
let ohRegex = /change/; // Change this line
let result = ohRegex.test(ohStr);
```

# --solutions--

```js
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);
```
