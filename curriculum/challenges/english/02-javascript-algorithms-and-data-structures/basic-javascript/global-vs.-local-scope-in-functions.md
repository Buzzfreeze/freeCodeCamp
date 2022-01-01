---
id: 56533eb9ac21ba0edf2244c0
title: Global vs. Local Scope in Functions
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

เราสามารถประกาศตัวแปร <dfn>local</dfn> และ <dfn>global</dfn> ที่ชื่อเหมือนกันได้ แต่ถ้าเราทำแบบนี้ฟังก์ชันจะเลือกใช้ตัวแปรในระดับ local แทนตัวแปรในระดับ global

ตามตัวอย่างนี้

```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
}
```

ฟังก์ชัน `myFun` จะคืนค่า string ที่เป็นคำว่า `Head` ออกมา เพราะว่าใน function นี้มีตัวแปร `someVar` ในระดับ local ด้วย

# --instructions--

จงเพิ่มตัวแปรในระดับ local ให้กับฟังก์ชัน `myOutfit` เพื่อให้ค่าของตัวแปร `outerWear` ในระดับ local เป็น string ที่มีค่าเป็น `sweater`

# --hints--

คุณไม่ควรแก้ไขค่าของตัวแปร `outerWear` ที่อยู่ในระดับ global

```js
assert(outerWear === 'T-Shirt');
```

ฟังก์ชัน `myOutfit` ควรคืนค่า string ที่มีค่าเป็น `sweater` ออกมา

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
// เตรียมข้อมูล
var outerWear = "T-Shirt";

function myOutfit() {
  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น



  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
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
