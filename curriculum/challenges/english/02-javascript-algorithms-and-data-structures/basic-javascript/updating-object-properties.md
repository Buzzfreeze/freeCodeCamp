---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9yEJT4'
forumTopicId: 18336
dashedName: updating-object-properties
---

# --description--

หลังจากที่คุณสร้าง JavaScript object แล้ว คุณสามารถเปลี่ยนแปลง property ของ object ได้ตลอดเวลา เหมือนกับเวลาที่คุณแก้ไขตัวแปรปกติ โดยจะใช้ Dot Notation หรือ Bracket Notation เพื่อแข้ไข property ก็ได้

ดูตัวอย่าง `ourDog`

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
```

สุนัขตัวนี้มีความสุขมาก เพราะฉะนั้นเรามาเปลี่ยนชื่อสุนัขตัวนี้เป็น `Happy Camper` กัน 
เราเปลี่ยน property `name` ของ object ได้สองวิธีคือ

- `ourDog.name = "Happy Camper";` 
- `ourDog["name"] = "Happy Camper";` 

ต่อไปถ้าเราอ่านค่าของ `ourDog.name` เราจะไม่ได้ชื่อ `Camper` แล้ว แต่เราจะได้ `Happy Camper` ที่เป็นชื่อใหม่แทน


# --instructions--

จงเปลี่ยนค่าของ property `name` ของ object `myDog` จาก `Coder` ให้มีค่าเป็น `Happy Coder` โดยคุณจะใช้ Dot Notation หรือ Bracket Notation ก็ได้


# --hints--

คุณควรเปลี่ยนค่าของ property `name` ของ `myDog` ให้เป็น string `Happy Coder`

```js
assert(/happy coder/gi.test(myDog.name));
```

คุณไม่ควรแก้ไขการประกาศตัวแปร `myDog`

```js
assert(/"name": "Coder"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// เตรียมข้อมูล
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```
