---
id: 587d7db7367417b2b2512b9e
title: Match Ending String Patterns
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

ในแบบทดสอบที่แล้ว คุณทราบการใช้ caret character เพื่อค้นหา pattern ที่ตำแหน่งแรกของ string อย่งไรก็ตาม มีวิธีค้นหา pattern ที่ตำแหน่งสุดท้ายของ string ด้วย

คุณสามารถค้นหาที่ตำแหน่งสุดท้ายของ string โดยนำ dollar sign character `$` วางไว้ท้ายสุดของ regex

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

การเรียก `test` ครั้งแรกคืนค่า `true` ส่วนการเรียกครั้งที่สองจะคืนค่า `false`

# --instructions--

จงใช้ anchor character (`$`) เพื่อ match กับ string `caboose` ที่ตำแหน่งสุดท้ายของ string `caboose`

# --hints--

คุณควรค้นหา `caboose` ด้วย dollar sign `$` ใน regex ของคุณ

```js
assert(lastRegex.source == 'caboose$');
```

regex ของคุณไม่ควรใช้ flag ใดๆ

```js
assert(lastRegex.flags == '');
```

คุณควร match `caboose` ที่ตำแหน่งสุดท้ายของ string `The last car on a train is the caboose`

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
