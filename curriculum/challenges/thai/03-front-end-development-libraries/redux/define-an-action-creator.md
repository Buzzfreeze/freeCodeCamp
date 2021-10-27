---
id: 5a24c314108439a4d403614e
title: Define an Action Creator
challengeType: 6
forumTopicId: 301441
dashedName: define-an-action-creator
---

# --description--

หลังจากสร้าง action ขั้นตอนต่อไปคือการส่ง action ไปยัง Redux store เพื่อให้สามารถอัปเดต state ได้ ใน Redux คุณกำหนด action creators เพื่อทำสิ่งนี้ให้สำเร็จ action creators เป็นเพียงฟังก์ชัน JavaScript ที่ return action กล่าวอีกนัยหนึ่ง action creators สร้าง object ที่แสดงถึง action events

# --instructions--

กำหนดฟังก์ชันชื่อ `actionCreator()` ซึ่งจะ return `action` object เมื่อมีการเรียกใช้งาน

# --hints--

ควรมีฟังก์ชัน `actionCreator`

```js
assert(typeof actionCreator === 'function');
```

การใช้งานฟังก์ชัน `actionCreator` ควร return `action` object

```js
assert(typeof action === 'object');
```

`action` ที่ถูก return มาควรมี key property `type` ที่มีค่าเป็น `LOGIN`

```js
assert(action.type === 'LOGIN');
```

# --seed--

## --seed-contents--

```js
const action = {
  type: 'LOGIN'
}
// Define an action creator here:
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
