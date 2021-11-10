---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

เรายังสามารถลบ property ออกจาก object ได้ดังนี้

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

หลังจากบรรทัดสุดท้ายด้านบน `ourDog` จะมีหน้าตาดังนี้

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

จงลบ property `tails` ออกจาก `myDog` คุณอาจใช้เครื่องหมายจุด หรือวงเล็บ

# --hints--

คุณควรลบ property `tails` ออกจาก `myDog`

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

คุณไม่ควรแก้ไข `myDog` 

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
// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line
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
