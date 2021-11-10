---
id: 56533eb9ac21ba0edf2244cd
title: Accessing Nested Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/cLeGDtZ'
forumTopicId: 16160
dashedName: accessing-nested-arrays
---

# --description--

ดังที่เราได้เห็นในตัวอย่างก่อนหน้านี้ object สามารถมีได้ทั้ง object ที่ซ้อนกันและ array ที่ซ้อนกัน เช่นเดียวกับการเข้าถึง object ที่ซ้อนกัน สัญลักษณ์วงเล็บ (brackets) สามารถเข้าถึง array ที่ซ้อนกันได้

นี่คือตัวอย่างของวิธีการเข้าถึง array ที่ซ้อนกัน

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

`ourPets[0].names[1]` ควรเป็น string `Fluffy`, และ `ourPets[1].names[0]` ควรเป็น string `Spot`

# --instructions--

จงใช้เครื่องหมายจุด (dot) และวงเล็บ (bracket) เพื่อกำหนดค่าตัวแปร  `secondTree` ให้กับ item ที่ 2 ใน `trees` list จาก object `myPlants`

# --hints--

`secondTree` ควรเป็น string `pine`

```js
assert(secondTree === 'pine');
```


โค้ดของคุณควรใช้เครื่องหมายจุดและวงเล็บในการเข้าถึง `myPlants`

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
