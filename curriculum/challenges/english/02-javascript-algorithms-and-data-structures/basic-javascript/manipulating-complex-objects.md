---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

ถ้าคุณต้องการจัดเก็บข้อมูลที่ <dfn>โครงสร้างข้อมูล</dfn> เปลี่ยนไปเปลี่ยนมาได้ตลอด object ใน JavaScript จะรองรับโครงสร้างข้อมูลแบบนี้ เพราะ object ใน JavaScript จะยอมให้คุณใส่ข้อมูลประเภท <dfn>string</dfn>, <dfn>number</dfn>, <dfn>boolean</dfn>, <dfn>array</dfn>, <dfn>function</dfn> และ <dfn>object</dfn> ผสมกันใน object ได้ตามที่ต้องการ

นี่เป็นตัวอย่างโครงสร้างข้อมูลแบบซับซ้อน

```js
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];
```

`ourMusic` เป็น array ที่มีหนึ่ง object โดย object นี้เก็บข้อมูล <dfn>metadata</dfn> ของอัลบั้มเพลงอยู่ นอกจากนี้ยังมี property ชื่อ `formats` ที่เป็น array ซ้อนอยู่ข้างใน
ถ้าคุณต้องการเพิ่มข้อมูลอัลบั้มอื่นเข้าไป จะทำได้โดยการเพิ่มข้อมูลใน array ชั้นนอกสุด นอกจากนี้ object ก็ยังเก็บข้อมูลใน property แบบ key-value อีกด้วย
ในตัวอย่างข้างบน `"artist": "Daft Punk"` เป็น property ที่มี key เป็น `artist` และมี value เป็น `Daft Punk` 

[JavaScript Object Notation](http://www.json.org/) หรือ `JSON` เป็นรูปแบบของการเก็บข้อมูลสำหรับการส่งข้อมูล
ตัวอย่างของ `JSON` แสดงอยู่ข้างล่างนี้:

```json
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [ 
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```

**หมายเหตุ:** คุณจะต้องใส่คอมม่า (`,`) เพื่อคั่นทุก object ที่อยู่ใน array


# --instructions--

จงเพิ่มอัลบั้มใหม่ไปยัง array ชื่อ `myMusic` โดยให้ object ที่เพิ่มมี property ตามนี้ 
property `artist` และ `title` เป็นประเภท strings
property `release_year` เป็นประเภท number
และ property `formats` เป็นประเภท array ที่มี string อยู่ภายใน

# --hints--

ตัวแปร `myMusic` ต้องเป็นข้อมูลประเภท array

```js
assert(Array.isArray(myMusic));
```

ตัวแปร `myMusic` ต้องมีอย่างน้อย 2 element อยู่ภายใน

```js
assert(myMusic.length > 1);
```

element ใน `myMusic` ต้องเป็น objects

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

แต่ละ object ใน `myMusic` ต้องมี property อย่างน้อย 4 ตัว

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

object ใน `myMusic` ต้องมี property `artist` ซึ่งเป็นข้อมูลประเภท string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

object ใน `myMusic` ต้องมี property `title` ซึ่งเป็นข้อมูลประเภท string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

object ใน `myMusic` ต้องมี property `release_year` ซึ่งเป็นข้อมูลประเภท number

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

object ใน `myMusic` ต้องมี property `formats` ซึ่งเป็นข้อมูลประเภท array

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

property ชื่อ `formats` ต้องเป็น array ที่มีข้อมูลภายในเป็น string โดยมีอย่างน้อยสอง element

```js
myMusic.forEach(object => {
  object.formats.forEach(format => {
    assert.typeOf(format, 'string')
  });
  assert.isAtLeast(object.formats.length, 2)
})
```

# --seed--

## --after-user-code--

```js
(function(x){ if (Array.isArray(x)) { return JSON.stringify(x); } return "myMusic is not an array"})(myMusic);
```

## --seed-contents--

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
];
```

# --solutions--

```js
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  },
  {
    "artist": "ABBA",
    "title": "Ring Ring",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP",
    "CD",
  ]
  }
];
```
