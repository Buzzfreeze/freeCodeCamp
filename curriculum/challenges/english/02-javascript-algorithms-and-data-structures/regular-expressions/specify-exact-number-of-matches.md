---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

คุณสามารถกำหนดจำนวนขั้นต่ำและจำนวนสูงสุดของ pattern ด้วย quantity specifiers ที่อยู่ใน curly brackets (วงเล็บปีกกา) แต่บางครั้งคุณเพียงต้องการให้ match ตามจำนวนที่ระบุ

การระบุเลขจำนวนหนึ่งๆ ของ pattern นั้น ทำได้โดยการนำตัวเลขมาใส่ใน curly brackets (วงเล็บปีกกา)  

ตัวอย่างเช่น การ match คำว่า `hah` ก็ต่อเมื่อมีตัวอักษร `a` จำนวน `3` ตัว สามารถเขียน regex ได้ดังนี้ `/ha{3}h/`

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

การเรียก `test` 3 ครั้งจะคืนค่า `false`, `true`, และ `false` ตามลำดับ

# --instructions--

จงปรับแก้ regex `timRegex` เพื่อ match กับ `Timber` ก็ต่อเมื่อมีตัวอักษร `m` 4 ตัว

# --hints--

regex ของคุณควรใช้ curly brackets (วงเล็บปีกกา)

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

regex ของคุณไม่ควร match กับ string `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

regex ของคุณไม่ควร match กับ string `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

regex ของคุณไม่ควร match กับ string `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

regex ของคุณควร match กับ string `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

regex ของคุณไม่ควร match กับ string `Timber` ที่มีตัวอักษร `m` จำนวน 30 ตัว

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // Change this line
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
```
