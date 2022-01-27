---
id: 587d7db9367417b2b2512ba6
title: Specify Only the Lower Number of Matches
challengeType: 1
forumTopicId: 301366
dashedName: specify-only-the-lower-number-of-matches
---

# --description--

เราสามารถกำหนดจำนวนขั้นต่ำและจำนวนสูงสุดที่จะเจอ pattern ด้วย quantity specifier ที่อยู่ใน curly bracket (วงเล็บปีกกา) ได้  
แต่บางครั้งเราก็อาจอยากระบุแค่จำนวนขั้นต่ำ แล้วไม่กำหนดจำนวนสูงสุดที่จะเจอ pattern

การระบุเฉพาะจำนวนขั้นต่ำของ pattern จะต้องใส่แค่เลขตัวแรกแล้วตามด้วย comma และปีกกาปิด

เช่น ถ้าอยากให้ match ถ้ามีตัวอักษร `a` อย่างน้อย 3 ตัว ใน string `hah` เราจะเขียน regex เป็น `/ha{3,}h/`

```js
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);
```

การเรียกใช้ method `test` จะได้ค่าเป็น `true`, `false` และ `true` ตามลำดับ

# --instructions--

ให้เปลี่ยน regex `haRegex` ให้ match ถ้ามีตัวอักษร `z` อย่างน้อย 4 ตัวใน `Hazzah`

# --hints--

regex ที่เขียนต้องใช้ curly brackets (วงเล็บปีกกา)

```js
assert(haRegex.source.match(/{.*?}/).length > 0);
```

regex ที่เขียนต้องไม่ match กับ string `Hazzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzah'));
```

regex ที่เขียนต้องไม่ match กับ string `Hazzzah`

```js
haRegex.lastIndex = 0;
assert(!haRegex.test('Hazzzah'));
```

regex ที่เขียนต้อง match กับ string `Hazzzzah`

```js
assert('Hazzzzah'.match(haRegex)[0].length === 8);
```

regex ที่เขียนต้อง match กับ string `Hazzzzzah`

```js
assert('Hazzzzzah'.match(haRegex)[0].length === 9);
```

regex ที่เขียนต้อง match กับ string `Hazzzzzzah`

```js
assert('Hazzzzzzah'.match(haRegex)[0].length === 10);
```

regex ที่เขียนต้อง match กับ string `Hazzah` with 30 `z`'s in it.

```js
assert('Hazzzzzzzzzzzzzzzzzzzzzzzzzzzzzzah'.match(haRegex)[0].length === 34);
```

# --seed--

## --seed-contents--

```js
let haStr = "Hazzzzah";
let haRegex = /change/; // แก้บรรทัดนี้
let result = haRegex.test(haStr);
```

# --solutions--

```js
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // แก้บรรทัดนี้
let result = haRegex.test(haStr);
```
