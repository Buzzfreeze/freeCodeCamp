---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

จากที่เราได้เห็นในตัวอย่างที่แล้ว ข้อมูลภายใน object นั้นสามารถมีได้ทั้ง object ที่ซ้อนกันและ array ที่ซ้อนกัน 
เราสามารถสามารถเข้าถึง array ที่ซ้อนกันได้ด้วยวิธีเดียวกับการเข้าถึง object ที่ซ้อนกัน ซึ่งก็คือการใช้ Bracket Notation 

โค้ดด้านล่างเป็นตัวอย่างในการเข้าถึง array ที่ซ้อนกันอยู่:

```js
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1];
ourPets[1].names[0];
```

`ourPets[0].names[1]` จะมีค่าเป็น string `Fluffy`
และ `ourPets[1].names[0]` จะมีค่าเป็น string `Spot`

# --instructions--

จงใช้เครื่องหมายจุด (Dot Notation) และวงเล็บ (Bracket Notation) ให้ดึงค่าจาก element ที่ 2 ใน property `list` ของ object ที่มี `type` เป็น `"trees"` ใน array ชื่อ `myPlants` มากำหนดให้กับตัวแปร `secondTree` 

*อย่าลืมว่า* array นั้นใช้ระบบ zero-based index คือการเริ่มนับจาก 0

# --hints--

`secondTree` ควรเป็น string `pine`

```js
assert(secondTree === 'pine');
```


โค้ดของคุณควรใช้ Dot Notation และ Bracket Notation ในการเข้าถึง `myPlants`

```js
assert(/=\s*myPlants\[1\].list\[1\]/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) {
  if(typeof x != 'undefined') {
    return "secondTree = " + x;
  }
  return "secondTree is undefined";
})(secondTree);
```

## --seed-contents--

```js
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = "";
```

# --solutions--

```js
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1];
```
