---
id: 56533eb9ac21ba0edf2244cc
title: Accessing Nested Objects
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRnRnfa'
forumTopicId: 16161
dashedName: accessing-nested-objects
---

# --description--

property ย่อยของ object สามารถเข้าถึงได้ โดยใช้เครื่องหมายจุด หรือวงเล็บ (brackets)

ต่อไปนี้เป็น nested object:

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

`ourStorage.cabinet["top drawer"].folder2` ควรเป็น string `secrets` และ `ourStorage.desk.drawer` ควรเป็น string `stapler`

# --instructions--

จงเข้าถึง object `myStorage` และกำหนดค่า property ของ `glove box` ให้กับตัวแปร `gloveBoxContents` โดยใช้เครื่องหมายจุด (dot notation) สำหรับทุก property เท่าที่เป็นไปได้ ถ้าไม่ได้ ให้ใช้เครื่องหมายวงเล็บ (bracket notation)

# --hints--

`gloveBoxContents` ควรเป็น string `maps`.

```js
assert(gloveBoxContents === 'maps');
```

โค้ดของคุณควรใช้เครื่องหมายจุดและวงเล็บในการเข้าถึง `myStorage`

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
