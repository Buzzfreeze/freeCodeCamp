---
id: 587d7db7367417b2b2512b9d
title: Match Beginning String Patterns
challengeType: 1
forumTopicId: 301349
dashedName: match-beginning-string-patterns
---

# --description--

ในบทเรียนที่แล้วเราจะเห็นแล้วว่าเราใช้ regular expression เพื่อทำการ match ได้หลายครั้ง แล้วเรายังใช้หา pattern ในตำแหน่งที่กำหนดใน string ได้ด้วย

ในบทเรียนที่ผ่านมา เราใช้ caret character (`^`) ใน character set เพื่อสร้าง negated character set ในรูปแบบ `[^thingsThatWillNotBeMatched]` แต่ถ้าเราวาง caret character ไว้นอก character set จะเป็นการดู pattern ที่ต้น string
ลองดูตัวอย่าง:

```js
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
```

การเรียกใช้ `test` ครั้งแรกจะได้ค่าเป็น `true`แต่การเรียกใช้ครั้งที่สองจะได้ค่าเป็น `false`

# --instructions--

ให้ใช้ caret character (`^`) ใน regex เพื่อตรวจสอบว่ามี `Cal` อยู่ที่ต้น string `rickyAndCal` หรือไม่

# --hints--

regex ต้องหา string `Cal` ที่เป็นตัว `C` พิมพ์ใหญ่

```js
assert(calRegex.source == '^Cal');
```

ต้องไม่ใช้ flag ใน regex

```js
assert(calRegex.flags == '');
```

regex ที่เขียนต้อง match กับ string `Cal` ที่ต้น string

```js
calRegex.lastIndex = 0;
assert(calRegex.test('Cal and Ricky both like racing.'));
```

regex ที่เขียนต้องไม่ match กับ string `Cal` ที่อยู่กลาง string

```js
calRegex.lastIndex = 0;
assert(!calRegex.test('Ricky and Cal both like racing.'));
```

# --seed--

## --seed-contents--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /change/; // แก้บรรทัดนี้
let result = calRegex.test(rickyAndCal);
```

# --solutions--

```js
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // แก้บรรทัดนี้
let result = calRegex.test(rickyAndCal);
```
