---
id: 587d7db9367417b2b2512ba7
title: Specify Exact Number of Matches
challengeType: 1
forumTopicId: 301365
dashedName: specify-exact-number-of-matches
---

# --description--

เราสามารถกำหนดจำนวนขั้นต่ำและจำนวนสูงสุดที่จะเจอ pattern ด้วย quantity specifier ที่อยู่ใน curly bracket (วงเล็บปีกกา) ได้  
แต่บางครั้งเราก็อาจอยากระบุจำนวนครั้งที่จะเจอ pattern ไปเลย

จำนวนครั้งที่จะเจอ pattern นั้นทำได้โดยการนำแค่ตัวเลขนั้นมาใส่ใน curly bracket (วงเล็บปีกกา)  

เช่น ถ้าเราอยากให้ match คำว่า `hah` ถ้าตัวอักษร `a` มีจำนวน `3` ตัว (ไม่มากหรือน้อยกว่านี้) จะเขียน regex ได้เป็น `/ha{3}h/`

```js
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h"; //บรรทัดนี้จะทำให้เกิดคำว่า hah ที่มีตัว a 100 ตัว 
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
```

การเรียกใช้ method `test` จะทำให้ได้ค่าเป็น `false`, `true`, และ `false` ตามลำดับ

# --instructions--

ให้เปลี่ยน regex `timRegex` ให้ match กับคำว่า `Timber` ถ้ามีตัวอักษร `m` 4 ตัว

# --hints--

ต้องเขียน regex โดยใช้ curly brackets (วงเล็บปีกกา)

```js
assert(timRegex.source.match(/{.*?}/).length > 0);
```

regex ที่เขียนต้องไม่ match กับ string `Timber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timber'));
```

regex ที่เขียนต้องไม่ match กับ string `Timmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmber'));
```

regex ที่เขียนต้องไม่ match กับ string `Timmmber`

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Timmmber'));
```

regex ที่เขียนต้อง match กับ string `Timmmmber`

```js
timRegex.lastIndex = 0;
assert(timRegex.test('Timmmmber'));
```

regex ที่เขียนต้องไม่ match กับ string `Timber` ที่มีตัวอักษร `m` จำนวน 30 ตัว

```js
timRegex.lastIndex = 0;
assert(!timRegex.test('Ti' + 'm'.repeat(30) + 'ber'));
```

# --seed--

## --seed-contents--

```js
let timStr = "Timmmmber";
let timRegex = /change/; // แก้บรรทัดนี้
let result = timRegex.test(timStr);
```

# --solutions--

```js
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // แก้บรรทัดนี้
let result = timRegex.test(timStr);
```
