---
id: 5a24c314108439a4d403614c
title: Get State from the Redux Store
challengeType: 6
forumTopicId: 301443
dashedName: get-state-from-the-redux-store
---

# --description--

Redux store object มี method หลายอย่างที่อนุญาตให้คุณโต้ตอบกับมัน ตัวอย่างเช่น คุณสามารถดึงข้อมูล `state` ปัจจุบันที่เก็บไว้ใน Redux store object ด้วยเมธอด `getState()`

# --instructions--

โค้ดจากแบบทดสอบครั้งก่อนถูกเขียนใหม่ให้กระชับยิ่งขึ้นใน code editor ให้ใช้ `store.getState()` เพื่อดึง `state` จาก `store` และกำหนดสิ่งนี้ให้กับตัวแปร `currentState` ใหม่

# --hints--

Redux store ควรมีค่าเป็น 5 สำหรับ state เริ่มต้น

```js
assert(store.getState() === 5);
```

ควรมีตัวแปร `currentState` และควรถูกกำหนดให้เป็น state ของ Redux store

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

// Change code below this line
```

# --solutions--

```js
const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line
const currentState = store.getState();
```
