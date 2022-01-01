---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

ที่เราได้เรียนมา ในการใช้ regex เราจะหาข้อความ (`.test`) หรือดึงข้อความออกมา (`.match`) ได้ครั้งเดียวต่อการเรียกใช้หนึ่งครั้ง

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

จากตัวอย่างข้างบนนี้ `match` จะคืนค่าเป็น `["Repeat"]`

ถ้าเราอยากค้นหาหรือดึงข้อความออกมามากกว่า 1 ครั้งเราจะต้องใช้ flag `g`

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

ในที่นี้ `match` จะคืนค่าเป็น `["Repeat", "Repeat", "Repeat"]`

# --instructions--

ให้ใช้ regex `starRegex` เพื่อค้นหาและดึงคำว่า `Twinkle` ทุกคำออกมาจาก string `twinkleStar`

**Note**  
ถ้าจะใช้ flag หลายตัวกับ regex ให้เขียนแบบนี้ `/search/gi`

# --hints--

regex `starRegex` ต้องใช้ flag global (`g`)

```js
assert(starRegex.flags.match(/g/).length == 1);
```

regex `starRegex` ควรใช้ flag case insensitive (`i`)

```js
assert(starRegex.flags.match(/i/).length == 1);
```

ต้อง match คำว่า `Twinkle` ทั้ง 2 คำ

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

เมื่อทำงานแล้ว ตัวแปร `result` ต้องมี 2 element

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // แก้บรรทัดนี้
let result = twinkleStar; // แก้บรรทัดนี้
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
