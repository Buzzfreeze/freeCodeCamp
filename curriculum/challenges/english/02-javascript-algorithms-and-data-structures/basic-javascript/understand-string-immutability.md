---
id: 56533eb9ac21ba0edf2244ba
title: Understand String Immutability
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWPVaUR'
forumTopicId: 18331
dashedName: understand-string-immutability
---

# --description--

ใน JavaScript ข้อมูลในรูปแบบ `string` นั้น <dfn>immutable</dfn> ซึ่งหมายความว่าเมื่อสร้างแล้วจะไม่สามารถแก้ไขได้

ยกตัวอย่างตามโค้ดด้านล่าง:

```js
var myStr = "Bob";
myStr[0] = "J";
```

โค้ดด้านบนจะไม่สามารถแก้ค่าของตัวแปร `myStr` ให้เป็น `Job` ได้ เพราะข้อมูล string ในตัวแปร `myStr` นั้นไม่สามารถแก้ไขได้ แต่เราก็จะสามารถทำให้ค่าของตัวแปร `myStr` เปลี่ยนไปได้โดยการกำหนดค่าใหม่ ตามตัวอย่างนี้:

```js
var myStr = "Bob";
myStr = "Job";
```

# --instructions--

จงแก้ไขวิธีการกำหนดค่าให้กับตัวแปร `myStr` เพื่อให้เป็นข้อมูลประเภท string ซึ่งมีค่าเป็น `Hello World` โดยใช้วิธีการตามตัวอย่างด้านบน

# --hints--

ตัวแปร `myStr` ต้องเป็น string ซึ่งมีค่าเป็น `Hello World`

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
// เตรียมข้อมูล
var myStr = "Jello World";

// แก้โค้ดใต้บรรทัดนี้เท่านั้น
myStr[0] = "H"; // แก้ไขบรรทัดนี้
// แก้โค้ดเหนือบรรทัดนี้เท่านั้น
```

# --solutions--

```js
var myStr = "Jello World";
myStr = "Hello World";
```
