---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

คุณสามารถกำหนดจำนวนขั้นต่ำและจำนวนสูงสุดของ pattern ด้วย quantity specifiers ที่อยู่ใน curly brackets (วงเล็บปีกกา) บางครั้งคุณเพียงต้องการระบุจำนวนขั้นต่ำของ pattern โดยไม่ระบุจำนวนสูงสุด

การระบุเฉพาะจำนวนขั้นต่ำของ pattern ทำได้โดยใส่เฉพาะเลขตัวแรก แล้วตามด้วย comma

ตัวอย่างเช่น การ match ก็ต่อเมื่อมีตัวอักษร `a` อย่างน้อย 3 ตัว ใน string `hah` คุณสามารถเขียน regex ได้ดังนี้ `/ha{3,}h/`

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

การเรียก `test` จะคืนค่า `true`, `false` และ `true` ตามลำดับ

# --instructions--

จงปรับแก้ regex `haRegex` ที่ match ก็ต่อเมื่อมีตัวอักษร `z` จำนวน 4 ตัวหรือมากกว่าใน `Hazzah`

# --hints--

regex ของคุณควรใช้ curly brackets (วงเล็บปีกกา)

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

regex ของคุณไม่ควร match กับ string `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

regex ของคุณไม่ควร match กับ string `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

regex ของคุณควร match กับ string `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

regex ของคุณควร match กับ string `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

regex ของคุณควร match กับ string `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

regex ของคุณควร match กับ string `Hazzah` with 30 `z`'s in it.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // Change this line
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
```
