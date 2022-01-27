---
id: 587d7db7367417b2b2512b9c
title: Find One or More Criminals in a Hunt
challengeType: 1
forumTopicId: 301343
dashedName: find-one-or-more-criminals-in-a-hunt
---

# --description--

ได้เวลามาทดสอบความเข้าใจเรื่อง regex กันหน่อย  
ตอนนี้มีอาชญากรแหกคุกออกมา เราไม่รู้ว่ามีคนแหกคุกออกมากี่คน แต่เรารู้ว่าถ้ามีคนอื่นอยู่ด้วยอาชญากรเหล่านี้จะอยู่รวมกัน คุณต้องหาอาชญากรเหล่านี้ให้เจอ

ลองดูตัวอย่างการหา:

regex `/z+/` จะ match กับตัวอักษร `z` ถ้าเจอ `z` ที่อยู่ติดกันตั้งแต่ 1 ตัวขึ้นไป  
regex นี้จะ match ถ้าใช้กับ string ด้านล่างนี้:

```js
"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"
```

แต่จะไม่ match ถ้าใช้กับ string ด้านล่างนี้ เพราะว่าไม่มีตัวอักษร `z`:

```js
""
"ABC"
"abcabc"
```

# --instructions--

ให้เขียน greedy regex เพื่อหาคนที่แหกคุกออกมาซึ่งซ่อนตัวอยู่กับคนทั่วไป โดยที่คนที่แหกคุกออกมาจะแทนด้วยตัวอักษร `C`

# --hints--

regex ที่เขียนต้องเจออาชญากร 1 คน (`C`) ใน string `C`

```js
assert('C'.match(reCriminals) && 'C'.match(reCriminals)[0] == 'C');
```

regex ที่เขียนต้องเจออาชญากร 2 คน (`CC`) ใน string `CC`

```js
assert('CC'.match(reCriminals) && 'CC'.match(reCriminals)[0] == 'CC');
```

regex ที่เขียนต้องเจออาชญากร 3 คน (`CCC`) ใน string `P1P5P4CCCcP2P6P3`

```js
assert(
  'P1P5P4CCCcP2P6P3'.match(reCriminals) &&
    'P1P5P4CCCcP2P6P3'.match(reCriminals)[0] == 'CCC'
);
```

regex ที่เขียนต้องเจออาชญากร 5 คน (`CCCCC`) ใน string `P6P2P7P4P5CCCCCP3P1`

```js
assert(
  'P6P2P7P4P5CCCCCP3P1'.match(reCriminals) &&
    'P6P2P7P4P5CCCCCP3P1'.match(reCriminals)[0] == 'CCCCC'
);
```

regex ที่เขียนต้องไม่เจออาชญากร ใน empty string `""`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test(''));
```

regex ที่เขียนต้องไม่เจออาชญากร ใน string `P1P2P3`

```js
reCriminals.lastIndex = 0;
assert(!reCriminals.test('P1P2P3'));
```

regex ที่เขียนต้องเจออาชญากร 50 คน (`CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC`) ใน string `P2P1P5P4CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCP3`

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
let reCriminals = /./; // แก้บรรทัดนี้
```

# --solutions--

```js
let reCriminals = /C+/; // แก้บรรทัดนี้
```
