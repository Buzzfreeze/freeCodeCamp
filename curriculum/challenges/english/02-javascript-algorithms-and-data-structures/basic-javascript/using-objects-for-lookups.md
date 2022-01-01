---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

เราจะมองว่า Object เป็นการเก็บข้อมูลแบบ key/value เหมือนข้อมูลประเภท dictionary ก็ได้ 
ถ้าคุณมีข้อมูลในรูปแบบตาราง คุณสามารถใช้ object เพื่อค้นหาค่า แทนที่จะใช้คำสั่ง `switch` หรือ `if/else` การใช้วิธีนี้จะมีประโยชน์มาก ถ้าคุณรู้ขอบเขตของข้อมูลที่อยู๋ใน object


นี่เป็นตัวอย่างง่ายๆ ที่ใช้หาว่าในตำแหน่งที่ระบุเป็นตัวอักษรอะไร ถ้ามองย้อนจาก Z ไป A

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2];
alpha[24];

var value = 2;
alpha[value];
```

`alpha[2]` มีค่าเป็น string `Y`
`alpha[24]` มีค่าเป็น string `C` และ 
`alpha[value]` มีค่าเป็น string `Y`

# --instructions--

จงแปลงคำสั่ง switch ให้เป็น object ชื่อว่า `lookup` เพื่อเมื่อระบุค่า `val` จะได้คำตอบที่ถูกต้อง และนำคำตอบนั้นมากำหนดค่าให้กับตัวแปร `result`

# --hints--

การเรียกใช้ฟังก์ชัน `phoneticLookup("alpha")` ต้องคืนค่าออกมาเป็น string `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

การเรียกใช้ฟังก์ชัน `phoneticLookup("bravo")` ต้องคืนค่าออกมาเป็น string `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

การเรียกใช้ฟังก์ชัน `phoneticLookup("charlie")` ต้องคืนค่าออกมาเป็น string `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

การเรียกใช้ฟังก์ชัน `phoneticLookup("delta")` ต้องคืนค่าออกมาเป็น string `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

การเรียกใช้ฟังก์ชัน `phoneticLookup("echo")` ต้องคืนค่าออกมาเป็น string `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

การเรียกใช้ฟังก์ชัน `phoneticLookup("foxtrot")` ต้องคืนค่าออกมาเป็น string `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

การเรียกใช้ฟังก์ชัน `phoneticLookup("")` ต้องคืนค่าออกมาเป็น `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

ห้ามแก้ไขคำสั่ง `return` ในโค้ด

```js
assert(code.match(/return\sresult;/));
```

ห้ามใช้คำสั่ง `case`, `switch` และ `if` ในโค้ด

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// เตรียมข้อมูล
function phoneticLookup(val) {
  var result = "";

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น
  switch(val) {
    case "alpha":
      result = "Adams";
      break;
    case "bravo":
      result = "Boston";
      break;
    case "charlie":
      result = "Chicago";
      break;
    case "delta":
      result = "Denver";
      break;
    case "echo":
      result = "Easy";
      break;
    case "foxtrot":
      result = "Frank";
  }

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
  return result;
}

phoneticLookup("charlie");
```

# --solutions--

```js
function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

  result = lookup[val];

  return result;
}
```
