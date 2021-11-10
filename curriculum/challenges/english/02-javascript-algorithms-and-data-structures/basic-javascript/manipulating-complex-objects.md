---
id: 56533eb9ac21ba0edf2244cb
title: Manipulating Complex Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yNMfR'
forumTopicId: 18208
dashedName: manipulating-complex-objects
---

# --description--

บางครั้งคุณอาจต้องการจัดเก็บข้อมูลใน <dfn>โครงสร้างข้อมูล</dfn> ที่ยืดหยุ่น ซึ่ง JavaScript object เป็นวิธีหนึ่งในการจัดการข้อมูลที่ยืดหยุ่น โดยอนุญาตให้รวม <dfn>strings</dfn>, <dfn>numbers</dfn>, <dfn>booleans</dfn>, <dfn>arrays</dfn>, <dfn>functions</dfn> และ <dfn>objects</dfn> ได้ตามต้องการ

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

นี่เป็น array ที่มี object หนึ่งอยู่ภายใน โดย object มีหลาย<dfn>metadata</dfn> ที่เกี่ยวกับอัลบั้ม นอกจากนี้ยังมี `formats` array ที่ซ้อนกัน หากคุณต้องการเพิ่มข้อมูลอัลบั้ม คุณสามารถทำได้ โดยเพิ่มข้อมูลใน array ระดับบนสุด นอกจากนี้ Objects เก็บข้อมูลใน property ซึ่งมีรูปแบบ key-value ในตัวอย่างข้างต้น `"artist": "Daft Punk"` เป็น property ที่มี key เป็น `artist` และมีค่าเป็น `Daft Punk` [JavaScript Object Notation](http://www.json.org/) หรือ `JSON` เป็นรูปแบบการแลกเปลี่ยนข้อมูลที่เกี่ยวข้องซึ่งใช้ในการจัดเก็บข้อมูล

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

**หมายเหตุ:** คุณจะต้องใส่ comma (,) ต่อจากทุก object ใน array เว้นแต่จะเป็น object สุดท้ายใน array


# --instructions--

จงเพิ่มอัลบั้มใหม่ไปยัง `myMusic` array โดยเพิ่ม `artist` และ `title` strings, `release_year` number, และ string `formats` array

# --hints--

`myMusic` ควรเป็น an array

```js
assert(Array.isArray(myMusic));
```

`myMusic` ควรมีอย่างน้อยสององค์ประกอบ

```js
assert(myMusic.length > 1);
```

องค์ประกอบใน `myMusic` array ควรเป็น objects

```js
myMusic.forEach(object => {assert.typeOf(object, 'object')})
```

object ของคุณใน `myMusic` ควรมีอย่างน้อย 4 properties

```js
myMusic.forEach(object => {assert(Object.keys(object).length > 3); });
```

object ของคุณใน `myMusic` ควรมี property `artist` ซึ่งเป็น string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['artist']);
  assert.typeOf(object.artist, 'string')
})
```

object ของคุณใน `myMusic` ควรมี property `title` ซึ่งเป็น string

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['title']);
  assert.typeOf(object.title, 'string')
})
```

object ของคุณใน `myMusic` ควรมี property `release_year` ซึ่งเป็น number

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['release_year']);
  assert.typeOf(object.release_year, 'number')
})
```

object ของคุณใน `myMusic` ควรมี property `formats` ซึ่งเป็น array

```js
myMusic.forEach(object => {
  assert.containsAllKeys(object, ['formats']);
  assert.typeOf(object.formats, 'array')
})
```

`formats` ควรเป็น string array ที่มีอย่างน้อยสอง elements

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
