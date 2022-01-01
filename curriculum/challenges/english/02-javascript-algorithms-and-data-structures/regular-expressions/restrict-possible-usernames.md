---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

ในโลกอินเทอร์เน็ตนั้นมีการใช้ Username เต็มไปหมด โดย Username หรือที่เรารู้จักกันในชื่อ "ชื่อผู้ใช้" นั้น เป็นชื่อที่ผู้ใช้จะสร้างขึ้นเพื่อเอาไว้ระบุตัวตนของตัวเองโดยไม่ซ้ำกับคนอื่นในเว็บเดียวกัน

กฎด้านล่างนี้เป็นกฎในการสร้าง username ที่ผู้ใช้งานจะฝ่าฝืนไม่ได้

1) Username ต้องเป็นตัวเลขและตัวอักษรเท่านั้น (alpha-numeric character)

2) ถ้ามีตัวเลข ต้องใช้ต่อท้ายเท่านั้น โดยจะไม่มีตัวเลขเลยก็ได้ และถ้ามีจะมีกี่ตัวก็ได้ และห้ามสร้าง Username ที่ขึ้นต้นด้วยตัวเลข

3) Username จะใช้ตัวอักษรพิมพ์เล็กหรือพิมพ์ใหญ่ก็ได้

4) Username ต้องมีความยาวอย่างน้อย 2 ตัวอักษร และถ้ามีความยาวแค่ 2 ตัวอักษร ทั้ง 2 ตัวอักษรต้องเป็นพยัญชนะเท่านั้น

# --instructions--

จงปรับแก้ regex `userCheck` เพื่อให้สอดคล้องกับเงื่อนไขที่ระบุด้านบน

# --hints--

regex ที่เขียนต้อง match กับ string `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

regex ที่เขียนต้องไม่ match กับ string `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

regex ที่เขียนต้อง match กับ string `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

regex ที่เขียนต้อง match กับ string `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

regex ที่เขียนต้อง match กับ string `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

regex ที่เขียนต้องไม่ match กับ string `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

regex ที่เขียนต้องไม่ match กับ string `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

regex ที่เขียนต้องไม่ match กับ string `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

regex ที่เขียนต้องไม่ match กับ string `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

regex ที่เขียนต้อง match กับ string `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

regex ที่เขียนต้องไม่ match กับ string `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

regex ที่เขียนต้อง match กับ string `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

regex ที่เขียนต้องไม่ match กับ string `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // แก้บรรทัดนี้
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
