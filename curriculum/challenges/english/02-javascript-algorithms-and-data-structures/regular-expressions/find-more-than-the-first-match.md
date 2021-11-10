---
id: 587d7db4367417b2b2512b93
title: Find More Than the First Match
challengeType: 1
forumTopicId: 301342
dashedName: find-more-than-the-first-match
---

# --description--

ที่ผ่านมา คุณแยก  (extract) หรือค้นหา  (search) pattern ได้เพียงครั้งเดียว

```js
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
```

ในที่นี้ `match` จะคืนค่า `["Repeat"]`

การค้นหาหรือแยกตาม pattern มากกว่า 1 ครั้ง คุณสามารถใช้ `g` flag

```js
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);
```

ในที่นี้ `match` คืนค่า `["Repeat", "Repeat", "Repeat"]`

# --instructions--

ให้ใช้ regex `starRegex` เพื่อค้นหาและแยกคำว่า `Twinkle` ทุกคำจาก string `twinkleStar`

**Note**  
คุณสามารถใช้ flag ได้หลายตัวกับ regex เช่น `/search/gi`

# --hints--

regex `starRegex` ควรใช้ global flag `g`

```js
assert(starRegex.flags.match(/g/).length == 1);
```

regex `starRegex` ควรใช้ case insensitive flag `i`

```js
assert(starRegex.flags.match(/i/).length == 1);
```

ควร match คำว่า `Twinkle` ทั้ง 2 คำ

```js
assert(
  result.sort().join() ==
    twinkleStar
      .match(/twinkle/gi)
      .sort()
      .join()
);
```

ผลของการ match `result` ควรมี 2 elements

```js
assert(result.length == 2);
```

# --seed--

## --seed-contents--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /change/; // Change this line
let result = twinkleStar; // Change this line
```

# --solutions--

```js
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```
