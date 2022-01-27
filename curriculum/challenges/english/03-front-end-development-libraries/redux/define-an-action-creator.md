---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

หลังจากสร้าง action ได้แล้ว ขั้นตอนต่อไปคือการส่ง action ไปยัง Redux store เพื่ออัปเดต state 

ในการส่ง action เข้าไปใน Redux store คุณต้องใช้ action creator 
โดย action creator ก็เป็นแค่ฟังก์ชัน JavaScript ที่คืนค่าออกมาเป็น action 

ถ้าจะให้อธิบายก็คือ action creator จะเป็นฟังก์ชันที่ใช้สร้าง object โดย object นี้จะใช้สื่อถึง action ที่เกิดขึ้น

# --instructions--

ให้กำหนดฟังก์ชันชื่อ `actionCreator()` ซึ่งจะคืนค่า `action` object ออกมาเมื่อเรียกใช้งาน

# --hints--

ต้องเขียนฟังก์ชัน `actionCreator`

```js
assert(typeof actionCreator === 'function');
```

การเรียกใช้ฟังก์ชัน `actionCreator` ต้องคืนค่า `action` object ออกมา

```js
assert(typeof action === 'object');
```

`action` ที่ถูกคืนค่าออกมาต้องมี property ชื่อ `type` ที่มีค่าเป็น `LOGIN`

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// ประกาศฟังก์ชัน actionCreator ใต้บรรทัดนี้:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
const actionCreator = () => {
  return action;
};
```
