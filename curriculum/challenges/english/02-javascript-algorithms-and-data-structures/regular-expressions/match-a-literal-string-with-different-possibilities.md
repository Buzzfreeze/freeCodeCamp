---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

เราจะใช้ regex เช่น `/coding/` เพื่อหา pattern ของคำว่า `coding` ใน string อีกตัวนึง

เราใช้วิธีนี้หาข้อความที่มี pattern เดียวได้ แต่ถ้าเราอยากหาทีละหลายๆ pattern เราจะใช้ `alternation` หรือ `OR` operator: `|` (ปกติแล้ว `|` จะอยู่เหนือปุ่ม enter จะอยู่กับตัว ฃ หรือ ฅ)

operator นี้จะทำการเช็คทั้ง pattern ที่อยู่หน้าและหลัง operator เช่น
ถ้าเราต้องการหา string `yes` หรือ `no` เราควรกำหนด regex เป็น `/yes|no/` (ไม่ว่าจะเจอ `yes` หรือ `no` ก็จะคืนค่าเป็น `true`)

นอกจากนี้ เรายังสามารถค้นหามากกว่า 2 pattern ได้ถ้าเพิ่ม pattern และใส่ `OR` operator เข้าไปอีก เช่น `/yes|no|maybe/`

# --instructions--

ให้เขียน regex `petRegex` เพื่อให้ match ถ้าเจอคำใดคำหนึ่งจากคำกลุ่มนี้ `dog`, `cat`, `bird` หรือ `fish`

# --hints--

regex `petRegex` ต้องคืนค่าเป็น `true` ถ้าใช้กับ string `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

regex `petRegex` ต้องคืนค่าเป็น `false` ถ้าใช้กับ string `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

regex `petRegex` ต้องคืนค่าเป็น `true` ถ้าใช้กับ string `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

regex `petRegex` ต้องคืนค่าเป็น `true` ถ้าใช้กับ string `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

regex `petRegex` ต้องคืนค่าเป็น `false` ถ้าใช้กับ string `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

regex `petRegex` ต้องคืนค่าเป็น `true` ถ้าใช้กับ string `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

regex `petRegex` ต้องคืนค่าเป็น `false` ถ้าใช้กับ string `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // แก้บรรทัดนี้
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // แก้บรรทัดนี้
let result = petRegex.test(petString);
```
