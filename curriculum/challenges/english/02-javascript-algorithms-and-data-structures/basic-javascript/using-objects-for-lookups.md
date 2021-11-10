---
id: 56533eb9ac21ba0edf2244ca
title: Using Objects for Lookups
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBk8sM'
forumTopicId: 18373
dashedName: using-objects-for-lookups
---

# --description--

Object เปรียบได้กับที่เก็บ key/value เช่นเดียวกับพจนานุกรม ถ้าคุณมีข้อมูลแบบตาราง คุณสามารถใช้ object เพื่อค้นหาค่า แทนที่จะใช้คำสั่ง `switch` หรือกลุ่ม `if/else` นอกจากนี้ object ยังมีประโยชน์มาก เมื่อคุณรู้ว่าข้อมูลที่คุณป้อนเข้าไปถูกจำกัดตามช่วงที่กำหนด


นี่เป็นตัวอย่างในการค้นหาตัวอักษรย้อนกลับอย่างง่าย


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

`alpha[2]` เป็น string `Y`, `alpha[24]` เป็น string `C`, และ `alpha[value]` เป็น string `Y`

# --instructions--

จงแปลงคำสั่ง switch ให้เป็น object ชื่อว่า `lookup` เพื่อค้นหา `val` และกำหนดค่า string ที่เกี่ยวข้องให้กับตัวแปร `result`

# --hints--

`phoneticLookup("alpha")` ควรเท่ากับ string `Adams`

```js
assert(phoneticLookup('alpha') === 'Adams');
```

`phoneticLookup("bravo")` ควรเท่ากับ string `Boston`

```js
assert(phoneticLookup('bravo') === 'Boston');
```

`phoneticLookup("charlie")` ควรเท่ากับ string `Chicago`

```js
assert(phoneticLookup('charlie') === 'Chicago');
```

`phoneticLookup("delta")` ควรเท่ากับ string `Denver`

```js
assert(phoneticLookup('delta') === 'Denver');
```

`phoneticLookup("echo")` ควรเท่ากับ string `Easy`

```js
assert(phoneticLookup('echo') === 'Easy');
```

`phoneticLookup("foxtrot")` ควรเท่ากับ string `Frank`

```js
assert(phoneticLookup('foxtrot') === 'Frank');
```

`phoneticLookup("")` ควรเท่ากับ `undefined`

```js
assert(typeof phoneticLookup('') === 'undefined');
```

คุณไม่ควรแก้ไข `return` statement

```js
assert(code.match(/return\sresult;/));
```

คุณไม่ควรใช้ `case`, `switch` หรือ `if` statements

```js
assert(
  !/case|switch|if/g.test(code.replace(/([/]{2}.*)|([/][*][^/*]*[*][/])/g, ''))
);
```

# --seed--

## --seed-contents--

```js
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
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

  // Only change code above this line
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
