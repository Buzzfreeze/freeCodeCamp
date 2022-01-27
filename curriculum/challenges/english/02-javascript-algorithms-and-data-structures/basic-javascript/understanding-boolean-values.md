---
id: bd7123c9c441eddfaeb5bdef
title: Understanding Boolean Values
challengeType: 1
videoUrl: 'https://scrimba.com/c/c9Me8t4'
forumTopicId: 301176
dashedName: understanding-boolean-values
---

# --description--

ข้อมูลอีกประเภทนึง คือ <dfn>Boolean</dfn>  
Boolean มีค่าแค่สองแบบคือ `true` หรือ `false` ซึ่งก็เป็นเหมือนสวิตช์นั่นแหละ โดย `true` คือ เปิด และ `false` คือ ปิด 

**หมายเหตุ:** เวลาเขียนค่า boolean จะไม่เขียนไว้ใน quote และสตริง string ในรูปแบบ `"true"` กับ `"false"` จะไม่ใช่ boolean และก็ไม่มีได้ความหมายพิเศษใดๆ ใน JavaScript

# --instructions--

จงแก้ไขฟังก์ชัน `welcomeToBooleans` เพื่อให้คืนค่า `true` แทนที่จะเป็น `false` เมื่อมีกดปุ่ม

# --hints--

ฟังก์ชัน `welcomeToBooleans()` ต้องคืนค่าออกมาเป็น Boolean (`true` หรือ `false`) 


```js
assert(typeof welcomeToBooleans() === 'boolean');
```

`welcomeToBooleans()` ต้องคืนค่าออกมาเป็น `true`

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

  // แก้ไขโค้ดใต้บรรทัดนี้เท่านั้น

  return false; // แก้ไขบรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้เท่านั้น
}
```

# --solutions--

```js
function welcomeToBooleans() {
  return true; // แก้ไขโค้ดบรรทัดนี้
}
```
