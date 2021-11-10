---
id: 587d7db4367417b2b2512b90
title: Match a Literal String with Different Possibilities
challengeType: 1
forumTopicId: 301345
dashedName: match-a-literal-string-with-different-possibilities
---

# --description--

การใช้ regexes เช่น `/coding/` ทำให้คุณสามารถค้นหา pattern (รูปแบบ) `coding` ใน string อีกตัวนึง

วิธีนี้มีประสิทธิภาพในการค้นหา string เดียว และจำกัดไว้เพียง pattern เดียวเท่านั้น อย่างไรก็ตาม คุณสามารถค้นหาหลาย patterns โดยใช้ `alternation` หรือ `OR` operator: `|`

operator นี้จะทำการ match patterns ที่อยู่ก่อนหน้าหรือหลัง operator ยกตัวอย่างเช่น ถ้าคุณต้องการ match ค่า string `yes` หรือ `no` คุณควรกำหนด regex เป็น `/yes|no/` 

นอกจากนี้ คุณยังสามารถค้นหามากกว่า 2 patterns โดยการเพิ่ม pattern และใส่ `OR` operators เข้าไป เช่น `/yes|no|maybe/`

# --instructions--

จงทำให้ regex `petRegex` สมบูรณ์ เพื่อ match สัตว์เลี้ยง `dog`, `cat`, `bird` หรือ `fish`

# --hints--

regex `petRegex` ของคุณควรคืนค่า `true` หากค้นหาใน string `John has a pet dog.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('John has a pet dog.'));
```

regex `petRegex` ของคุณควรคืนค่า `false` หากค้นหาใน string `Emma has a pet rock.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Emma has a pet rock.'));
```

regex `petRegex` ของคุณควรคืนค่า `true` หากค้นหาใน string `Emma has a pet bird.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Emma has a pet bird.'));
```

regex `petRegex` ของคุณควรคืนค่า `true` หากค้นหาใน string `Liz has a pet cat.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Liz has a pet cat.'));
```

regex `petRegex` ของคุณควรคืนค่า `false` หากค้นหาใน string `Kara has a pet dolphin.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Kara has a pet dolphin.'));
```

regex `petRegex` ของคุณควรคืนค่า `true` หากค้นหาใน string `Alice has a pet fish.`

```js
petRegex.lastIndex = 0;
assert(petRegex.test('Alice has a pet fish.'));
```

regex `petRegex` ของคุณควรคืนค่า `false` หากค้นหาใน string `Jimmy has a pet computer.`

```js
petRegex.lastIndex = 0;
assert(!petRegex.test('Jimmy has a pet computer.'));
```

# --seed--

## --seed-contents--

```js
let petString = "James has a pet cat.";
let petRegex = /change/; // Change this line
let result = petRegex.test(petString);
```

# --solutions--

```js
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString);
```
