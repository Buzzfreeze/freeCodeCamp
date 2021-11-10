---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

บางครั้งคุณไม่ (หรือไม่จำเป็นต้อง) ทราบตัวอักษรที่แน่นอนใน pattern ของคุณ การระบุทุกคำใน pattern ที่ต้องการ match ซึ่งอาจสะกดผิด ทำให้ใช้เวลามาก แต่โชคดีที่คุณสามารถประหยัดเวลาด้วยการใช้ wildcard character: `.`

wildcard character `.` จะ match กับตัวอักษรใดก็ได้ 1 ตัว โดย wildcard มักเรียกกันว่า `dot` และ `period` คุณสามารถใช้ wildcard character ได้เหมือนกับตัวอักษรอื่นๆ ใน regex ยกตัวอย่างเช่น ถ้าคุณต้องการ match `hug`, `huh`, `hut` และ `hum` คุณสามารถใช้ regex `/hu./` เพื่อ match ทั้ง 4 คำ

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

ทั้งสอง `test` จะคืนค่า `true`

# --instructions--

จงทำให้ regex `unRegex` สมบูรณ์ เพื่อ match กับ strings `run`, `sun`, `fun`, `pun`, `nun` และ `bun` โดย regex ของคุณควรใช้ wildcard character

# --hints--

คุณควรใช้ `.test()` method

```js
assert(code.match(/\.test\(.*\)/));
```

คุณควรใช้ wildcard character ใน regex `unRegex`

```js
assert(/\./.test(unRegex.source));
```

regex `unRegex` ควร match กับ `run` ใน string `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

regex `unRegex` ควร match กับ `sun` ใน string `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

regex `unRegex` ควร match กับ `fun` ใน string `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

regex `unRegex` ควร match กับ `pun` ใน string `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

regex `unRegex` ควร match กับ `nun` ใน string `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

regex `unRegex` ควร match กับ `bun` ใน string `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

regex `unRegex` ไม่ควร match กับ string `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

regex `unRegex` ไม่ควร match กับ string `Catch me if you can.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('Catch me if you can.'));
```

# --seed--

## --seed-contents--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /change/; // Change this line
let result = unRegex.test(exampleStr);
```

# --solutions--

```js
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result = unRegex.test(exampleStr);
```
