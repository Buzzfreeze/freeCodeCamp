---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

ในบทเรียนที่แล้ว เราได้เรื่ยนเรื่องการใช้ caret character เพื่อค้นหา pattern จากต้น string ไปแล้ว
คราวนี้เรามาเรียนเรื่องการหา pattern ที่ตำแหน่งสุดท้ายของ string กัน

เราจะหา pattern ที่ตำแหน่งสุดท้ายของ string ได้ด้วยการนำ dollar sign (`$`) ไปต่อท้าย regex

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

การเรียกใช้ `test` ครั้งแรกจะได้ค่าเป็น `true` ส่วนการเรียกใช้ครั้งที่สองจะได้ค่าเป็น `false`

# --instructions--

ให้ใช้ anchor character (`$`) เพื่อหาว่า string `"caboose"` อยู่ที่ตำแหน่งสุดท้ายของตัวแปร `caboose` หรือไม่

# --hints--

ต้องเขียน regex เพื่อหา `caboose` โดยใช้ dollar sign `$`

```js
assert(lastRegex.source == 'caboose$');
```

ต้องไม่ใช้ flag ใน regex

```js
assert(lastRegex.flags == '');
```

regex ที่เขียนต้องเจอว่า `caboose` อยู่ท้าย string `The last car on a train is the caboose`

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // แก้บรรทัดนี้
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // แก้บรรทัดนี้
let result = lastRegex.test(caboose);
```
