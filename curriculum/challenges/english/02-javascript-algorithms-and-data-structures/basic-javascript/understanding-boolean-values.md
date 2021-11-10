---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

ข้อมูลอีกประเภทนึง คือ <dfn>Boolean</dfn> Booleans มีค่าเป็นหนึ่งในสองค่านี้เท่านั้น: `true` หรือ `false` ซึ่งเป็นเหมือนสวิตช์เปิดปิดอย่างง่าย โดย `true` คือ เปิด และ `false` คือ ปิด ทั้งสองสถานะนี้แยกจากกัน

**หมายเหตุ:** ค่า boolean ไม่เขียนด้วยเครื่องหมายคำพูด (quotes) อย่างไรก็ตาม strings `"true"` และ `"false"` ไม่ใช่ boolean และไม่มีความหมายพิเศษใน JavaScript

# --instructions--

จงแก้ไข function `welcomeToBooleans` เพื่อให้คืนค่า  `true` แทนที่จะเป็น `false` เมื่อมีการกดปุ่ม

# --hints--

function `welcomeToBooleans()` ควรคืนค่า Boolean (`true` หรือ `false`) 


```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` ควรคืนค่า `true`

```js
assert(welcomeToBooleans() === true);
```

# --seed--

## --after-user-code--

```js
welcomeToBooleans();
```

## --seed-contents--

```js
function welcomeToBooleans() {

  // Only change code below this line

  return false; // Change this line

  // Only change code above this line
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // Change this line
}
```
