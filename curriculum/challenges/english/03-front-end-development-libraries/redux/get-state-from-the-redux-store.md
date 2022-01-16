---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

Redux store object มี method หลายตัวที่ใช้ได้ 
เช่น คุณสามารถดึงข้อมูล `state` ปัจจุบันที่เก็บไว้ใน Redux store object ด้วยได้โดยใช้ method `getState()`

# --instructions--

เราได้ย่อโค้ดจากแบบทดสอบที่แลัวให้ใน code editor 
คราวนี้ให้ใช้ `store.getState()` เพื่อดึง `state` จาก `store` และเอาค่านี้ไปเก็บในตัวแปรชื่อ `currentState`

# --hints--

Redux store ต้องมีค่าเริ่มต้นของ state เป็น 5

```js
assert(store.getState() === 5);
```

ต้องมีตัวแปร `currentState` ที่เก็บค่าของ state จาก Redux store

```js
(getUserInput) =>
  assert(
    currentState === 5 && getUserInput('index').includes('store.getState()')
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// แก้ไขโค้ดใต้บรรทัดนี้
```

# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// แก้ไขโค้ดใต้บรรทัดนี้
const currentState = store.getState();
```
