---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

เราสามารถเข้าถึง property ที่อยู่ลึกลงไปใน object ได้โดยใช้ Dot Notation หรือ Bracket Notation

ตัวอย่างข้างล่างเป็นตัวอย่างของ object ที่ซ้อนกันอยู่:

```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;
ourStorage.desk.drawer;
```

โค้ดในส่วน `ourStorage.cabinet["top drawer"].folder2` จะมีค่าเป็น string `secrets`
และโค้ดในส่วน `ourStorage.desk.drawer` จะมีค่าเป็น string `stapler`

หากไม่เข้าใจให้ลองค่อยๆ ไล่ลำดับจาก object ตัวนอกสุดเข้าไปยังตัวในสุดและดูชื่อของ property ประกอบ
# --instructions--

จงเข้าถึง object `myStorage` และนำค่าของ property ที่ชื่อ `glove box` ไปกำหนดให้กับตัวแปร `gloveBoxContents` โดยใช้เครื่องหมายจุด (dot notation) สำหรับทุก property เท่าที่ใช้ได้ ถ้าตัวไหนใช้ไม่ได้ ให้ใช้เครื่องหมายวงเล็บ (bracket notation) แทน

# --hints--

`gloveBoxContents` ตัองเป็นข้อมูลประเภท string ซึ่งมีค่าเป็น `maps`

```js
assert(gloveBoxContents === 'maps');
```

โค้ดของคุณควรใช้ Dot Notation และ Bracket Notation ในการเข้าถึง `myStorage`

```js
assert(/=\s*myStorage\.car\.inside\[\s*("|')glove box\1\s*\]/g.test(code));
```

# --seed--

## --after-user-code--

```js
(function(x) { 
  if(typeof x != 'undefined') { 
    return "gloveBoxContents = " + x;
  }
  return "gloveBoxContents is undefined";
})(gloveBoxContents);
```

## --seed-contents--

```js
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = undefined;
```

# --solutions--

```js
var myStorage = {
  "car":{
    "inside":{
      "glove box":"maps",
      "passenger seat":"crumbs"
    },
    "outside":{
      "trunk":"jack"
    }
  }
};
var gloveBoxContents = myStorage.car.inside["glove box"];
```
