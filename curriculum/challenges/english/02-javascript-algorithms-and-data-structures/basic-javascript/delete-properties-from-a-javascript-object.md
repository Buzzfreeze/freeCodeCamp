---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

เรายังสามารถลบ property ออกจาก object ได้โดยใช้วิธีนี้:

```js
delete ourDog.bark;
```

ตัวอย่าง:

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

หลังจากบรรทัดสุดท้ายด้านบน `ourDog` จะมีข้อมูลตามนี้

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

จงลบ property `tails` ออกจาก `myDog` โดยคุณจะใช้ Dot Notation หรือ Bracket Notation ก็ได้

# --hints--

คุณควรลบ property `tails` ออกจาก `myDog`

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

คุณไม่ควรแก้ไข `myDog`  ในส่วนการเตรียมข้อมูล

```js
assert(code.match(/"tails": 1/g).length > 0);
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
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
