---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

`dispatch` method คือสิ่งที่คุณใช้เพื่อส่ง actions ไปยัง Redux store การเรียกใช้ `store.dispatch()` และส่งค่าที่ return จาก action creator จะส่ง action กลับไปยัง store

จำได้ไหมว่า action creators นั้น return object ที่มี type property ที่ระบุ action ที่เกิดขึ้น จากนั้น method จะส่ง action object ไปยัง Redux store จากตัวอย่างแบบทดสอบครั้งก่อน โค้ดต่อไปนี้ทำงานเหมือนกัน และทั้งสองส่ง action ของ type `LOGIN`:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

Redux store ใน code editor มี state เริ่มต้นซึ่งเป็น object ที่มี `login` property ซึ่งปัจจุบันตั้งค่าเป็น `false` นอกจากนี้ยังมี action creator ชื่อ `loginAction()` ซึ่ง return action ของ type `LOGIN` ให้ส่ง `LOGIN` action ไปยัง Redux store โดยเรียกใช้ `dispatch` method และส่งผ่าน action ที่สร้างโดย `loginAction()`

# --hints--

การเรียกใช้ฟังก์ชัน `loginAction` ควร return object ด้วย `type` property ที่ตั้งค่าเป็นสตริง `LOGIN`

```js
assert(loginAction().type === 'LOGIN');
```

Store ควรเริ่มต้นด้วย object ที่มี property `login` มีค่าเป็น `false`

```js
assert(store.getState().login === false);
```

`store.dispatch()` method ควรถูกใช้เพื่อส่ง action ของ type `LOGIN`


```js
(getUserInput) =>
  assert(
    (function () {
      let noWhiteSpace = getUserInput('index').replace(/\s/g, '');
      return (
        noWhiteSpace.includes('store.dispatch(loginAction())') ||
        noWhiteSpace.includes("store.dispatch({type: 'LOGIN'})") === true
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
```

# --solutions--

```js
const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

store.dispatch(loginAction());
```
