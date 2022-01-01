---
id: 587d7db5367417b2b2512b94
title: Match Anything with Wildcard Period
challengeType: 1
forumTopicId: 301348
dashedName: match-anything-with-wildcard-period
---

# --description--

บางครั้งอาจไม่รู้ว่าตัวอักษรที่อยู๋ pattern จะต้องใช้ตัวอะไร การระบุทุกคำใน pattern ที่ต้องการ match อาจลำบากมาก แต่ยินดีด้วย เราจะขอแนะนำให้คุณรู้จักกับ wildcard character: `.` ที่จะช่วยแก้ปัญหาตรงนี้

wildcard character `.` จะ match กับตัวอักษรใดก็ได้ 1 ตัว (ตัว wildcard นี้จะเรียกว่า `dot` หรือ `period` ก็ได้)
เราจะใช้ wildcard character ได้เหมือนกับตัวอักษรอื่นๆ ใน regex 
เช่น ถ้าเราต้องการ match `hug`, `huh`, `hut` และ `hum` เราสามารถใช้ regex `/hu./` เพื่อ match คำทั้ง 4 คำได้ (การใช้ `.` ในตัวอย่างนี้จะทำให้ match ตัวอักษรอื่นด้วย เช่น `hua`,`hub`, `huc` ฯลฯ)

```js
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);
```

ทั้งสอง `test` จะคืนค่าเป็น `true`

# --instructions--

ให้เขียน regex `unRegex` ให้ match กับ string `run`, `sun`, `fun`, `pun`, `nun` และ `bun` โดยต้องใช้ wildcard character

# --hints--

ต้องใช้ method `.test()` 

```js
assert(code.match(/\.test\(.*\)/));
```

ต้องใช้ wildcard character (`.`) ใน regex `unRegex`

```js
assert(/\./.test(unRegex.source));
```

regex `unRegex` ต้อง match คำว่า `run` ใน string `Let us go on a run.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Let us go on a run.'));
```

regex `unRegex` ต้อง match คำว่า `sun` ใน string `The sun is out today.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('The sun is out today.'));
```

regex `unRegex` ต้อง match คำว่า `fun` ใน string `Coding is a lot of fun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Coding is a lot of fun.'));
```

regex `unRegex` ต้อง match คำว่า `pun` ใน string `Seven days without a pun makes one weak.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('Seven days without a pun makes one weak.'));
```

regex `unRegex` ต้อง match คำว่า `nun` ใน string `One takes a vow to be a nun.`

```js
unRegex.lastIndex = 0;
assert(unRegex.test('One takes a vow to be a nun.'));
```

regex `unRegex` ต้อง match คำว่า `bun` ใน string `She got fired from the hot dog stand for putting her hair in a bun.`

```js
unRegex.lastIndex = 0;
assert(
  unRegex.test(
    'She got fired from the hot dog stand for putting her hair in a bun.'
  )
);
```

regex `unRegex` ต้องไม่ match กับ string `There is a bug in my code.`

```js
unRegex.lastIndex = 0;
assert(!unRegex.test('There is a bug in my code.'));
```

regex `unRegex` ต้องไม่ match กับ string `Catch me if you can.`

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
