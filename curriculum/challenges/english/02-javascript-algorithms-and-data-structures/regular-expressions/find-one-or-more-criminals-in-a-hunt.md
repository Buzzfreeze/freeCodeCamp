---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

ถึงเวลาหยุดพักและทดสอบความเข้าใจของคุณเรื่อง regex กันหน่อย มีกลุ่มอาชญากรแหกคุกออกมา แต่คุณไม่ทราบว่ามีจำนวนเท่าไหร่ อย่างไรก็ตาม คุณทราบว่าพวกเขาอยู่ใกล้กันเมื่ออยู่ท่ามกลางคนอื่นๆ งานของคุณคือการค้นหาเหล่าอาชญากรทั้งหมด

ต่อไปนี้คือตัวอย่างเพื่อทบทวนวิธีการทำ:

regex `/z+/` match กับตัวอักษร `z` เมื่อพบตั้งแต่ 1 ครั้งขึ้นไปติดต่อกัน โดยจะ match ใน string ต่อไปนี้:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

แต่จะไม่ match ใน string ต่อไปนี้ เนื่องจากไม่มีตัวอักษร `z`:

```js
""
"ABC"
"abcabc"
```

# --instructions--

จงเขียน greedy regex ที่ค้นหาอาชญากรจำนวน 1 หรือมากกว่า ภายในกลุ่มคน โดยอาชญากรแทนด้วยตัวอักษร `C`

# --hints--

regex ของคุณควร match อาชญากร 1 คน (`C`) ใน string `C`

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

regex ของคุณควร match อาชญากร 2 คน (`CC`) ใน string `CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

regex ของคุณควร match อาชญากร 3 คน (`CCC`) ใน string `P1P5P4CCCcP2P6P3`.

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

regex ของคุณควร match อาชญากร 5 คน (`CCCCC`) ใน string `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

regex ของคุณไม่ควร match กับอาชญากร ใน empty string `""`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

regex ของคุณไม่ควร match กับอาชญากร ใน string `P1P2P3`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

regex ของคุณควร match กับอาชญากร 50 คน (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) ใน string `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`.

```js
assert(
  'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
    reCriminals
  ) &&
    'P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3'.match(
      reCriminals
    )[0] == 'CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC'
);
```

# --seed--

## --seed-contents--

```js
let reCriminals = /./; // Change this line
```

# --solutions--

```js
let reCriminals = /C+/; // Change this line
```
