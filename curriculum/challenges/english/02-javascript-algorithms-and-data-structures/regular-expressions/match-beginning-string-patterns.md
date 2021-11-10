---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

แบบทดสอบที่แล้วแสดงให้เห็นว่า regular expressions สามารถค้นหาการ match ได้หลายครั้ง นอกจากนี้ยังค้นหา pattern ในตำแหน่งที่กำหนดใน string ได้ด้วย

ในแบบทดสอบที่แล้ว คุณใช้ caret character (`^`) ภายใน character set เพื่อสร้าง negated character set ในรูปแบบ `[^thingsThatWillNotBeMatched]` อย่างไรก็ตาม หากคุณนำ caret character วางไว้นอก character set จะใช้สำหรับค้นหา patterns ที่ตำแหน่งแรกของ string

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

การเรียก `test` ครั้งแรกคืนค่า `true` ขณะที่การเรียกครั้งท่ี่สองคืนค่า `false`

# --instructions--

จงใช้ caret character ใน regex เพื่อค้นหา `Cal` ที่อยู่ตำแหน่งเริ่มต้น string `rickyAndCal`

# --hints--

regex ของคุณควรค้นหา string `Cal` ที่มีตัวพิมพ์ใหญ่

```js
assert(calRegex.source == '^Cal');
```

regex ของคุณไม่ควรใช้ flag ใดๆ

```js
assert(calRegex.flags == '');
```

regex ของคุณควร match กับ string `Cal` ที่ตำแหน่งเริ่มต้นของ string

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

regex ของคุณไม่ควร match กับ string `Cal` ที่อยู่กลาง string

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // Change this line
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
```
