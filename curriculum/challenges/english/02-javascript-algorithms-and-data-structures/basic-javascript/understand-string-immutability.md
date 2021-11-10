---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

ใน JavaScript ค่า `String` <dfn>immutable</dfn> ซึ่งหมายความว่าเมื่อสร้างแล้วจะไม่สามารถแก้ไขได้

ยกตัวอย่างตามโค้ดด้านล่าง:

```js
var myStr = "Bob";
myStr[0] = "J";
```

ไม่สามารถเปลี่ยนค่าของ `myStr` เป็น `Job` เพราะเนื้อหาของ `myStr` ไม่สามารถเปลี่ยนแปลงได้ อย่างไรก็ตาม *ไม่* ได้ หมายความว่า `myStr` ไม่สามารถเปลี่ยนแปลงได้ เพียงแต่ไม่สามารถเปลี่ยนแปลงอักขระแต่ละตัวของ <dfn>string literal</dfn> ได้ วิธีเดียวที่จะเปลี่ยน `myStr` ได้ คือการกำหนดค่าด้วยสตริงใหม่ ดังนี้:

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

จงแก้ไขการกำหนดค่าให้กับ `myStr` เพื่อให้มีค่า string เป็น  `Hello World` โดยใช้วิธีการตามตัวอย่างด้านบน

# --hints--

`myStr` ควรมีค่า string `Hello World`

```js
assert(myStr === 'Hello World');
```

คุณไม่ควรแก้โค้ดเหนือ comment ที่กำหนด

```js
assert(/myStr = "Jello World"/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(v){return "myStr = " + v;})(myStr);
```

## --seed-contents--

```js
// Setup
var myStr = "Jello World";

// Only change code below this line
myStr[0] = "H"; // Change this line
// Only change code above this line
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
