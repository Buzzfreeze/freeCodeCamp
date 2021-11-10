---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

มีความเป็นไปได้ที่จะมีทั้งตัวแปร <dfn>local</dfn> และ <dfn>global</dfn> ที่ชื่อเหมือนกัน เมื่อเป็นเช่นนี้แล้ว local variable จะมีอภิสิทธิ์เหนือ global variable

ดังตัวอย่างนี้

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

ฟังก์ชัน `myFun` จะคืนค่า string  `Head` เพราะมีตัวแปรที่มีเวอร์ชัน local ใน function ด้วย

# --instructions--

จงเพิ่ม local variable ให้กับฟังก์ชัน `myOutfit` เพื่อแทนที่ (override) ค่าของ `outerWear` ด้วย string `sweater`

# --hints--

คุณไม่ควรแก้ไขค่าของ global `outerWear`

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` ควรคืนค่า string `sweater`

```js
assert(myOutfit() === 'sweater');
```

คุณไม่ควรแก้ไข return statement

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line



  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
var outerWear = "T-Shirt";
function myOutfit() {
  var outerWear = "sweater";
  return outerWear;
}
```
