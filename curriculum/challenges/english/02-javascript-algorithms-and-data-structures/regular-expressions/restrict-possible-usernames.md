---
id: 587d7db8367417b2b2512ba2
title: Restrict Possible Usernames
challengeType: 1
forumTopicId: 301363
dashedName: restrict-possible-usernames
---

# --description--

Usernames มีการใช้งานทุกที่บนอินเทอร์เน็ต เป็นเหมือนเอกลักษณ์เฉพาะตัวของผู้ใช้งานในการเข้าใช้งานเว็บไซต์

คุณต้องตรวจสอบทุก usernames ในฐานข้อมูล รายการต่อไปนี้เป็นกฎเกณฑ์ที่ผู้ใช้งานต้องปฏิบัติตามเมื่อสร้าง username ของตนเอง

1) Usernames สามารถมีอักขระที่เป็นตัวเลขและตัวอักษรเท่านั้น (alpha-numeric characters)

2) หากมีตัวเลข ต้องอยู่ในตำแหน่งท้ายสุดเท่านั้น และมีได้ 0 ตัวหรือมากกว่า 0 โดย Username ไม่สามารถเริ่มต้นด้วยตัวเลข

3) Username สามารถระบุด้วยตัวอักษรพิมพ์เล็กหรือพิมพ์ใหญ่ก็ได้

4) Usernames ต้องมีความยาวอย่างน้อย 2 ตัวอักษร ซึ่งหากมีเพิียง 2 ตัวอักษร ทั้ง 2 ตัวอักษรต้องเป็นพยัญชนะเท่านั้น

# --instructions--

จงปรับแก้ regex `userCheck` เพื่อให้สอดคล้องกับเงื่อนไขที่ระบุด้านบน

# --hints--

regex ของคุณควร match กับ string `JACK`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('JACK'));
```

regex ของคุณไม่ควร match กับ string `J`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J'));
```

regex ของคุณควร match กับ string `Jo`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Jo'));
```

regex ของคุณควร match กับ string `Oceans11`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Oceans11'));
```

regex ของคุณควร match กับ string `RegexGuru`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('RegexGuru'));
```

regex ของคุณไม่ควร match กับ string `007`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('007'));
```

regex ของคุณไม่ควร match กับ string `9`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('9'));
```

regex ของคุณไม่ควร match กับ string `A1`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('A1'));
```

regex ของคุณไม่ควร match กับ string `BadUs3rnam3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('BadUs3rnam3'));
```

regex ของคุณควร match กับ string `Z97`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('Z97'));
```

regex ของคุณไม่ควร match กับ string `c57bT3`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('c57bT3'));
```

regex ของคุณควร match กับ string `AB1`

```js
userCheck.lastIndex = 0;
assert(userCheck.test('AB1'));
```

regex ของคุณไม่ควร match กับ string `J%4`

```js
userCheck.lastIndex = 0;
assert(!userCheck.test('J%4'))
```

# --seed--

## --seed-contents--

```js
let username = "JackOfAllTrades";
let userCheck = /change/; // Change this line
let result = userCheck.test(username);
```

# --solutions--

```js
let username = "JackOfAllTrades";
const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```
