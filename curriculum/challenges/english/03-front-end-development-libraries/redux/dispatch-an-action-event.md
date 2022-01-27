---
id: 5a24c314108439a4d403614f
title: Dispatch an Action Event
challengeType: 6
forumTopicId: 301442
dashedName: dispatch-an-action-event
---

# --description--

method `dispatch` คือ method ที่ใช้เพื่อส่ง action ไปยัง Redux store 
การเรียกใช้ `store.dispatch()` โดยส่งค่าที่ได้จาก action creator เข้าไป จะเป็นการส่ง action กลับไปยัง store

จำได้ไหมว่า action creator นั้นจะคืนค่าออกมาเป็น object ที่มี property `type` ที่ใช้ระบุ action ที่เกิดขึ้น 
จากนั้น method `dispatch` จะส่ง action object กลับไปยัง Redux store 

โค้ดด้านล่างนี้ทำงานเหมือนกัน โดยจะส่ง action ที่มี type เป็น `LOGIN` ไปยัง store:

```js
store.dispatch(actionCreator());
store.dispatch({ type: 'LOGIN' });
```

# --instructions--

Redux store ใน code editor มี state เริ่มต้นซึ่งเป็น object ที่มี property ชื่อ `login` ซึ่งมีค่าเป็น `false` 
แล้วก็ยังมี action creator ชื่อ `loginAction()` ซึ่งจะคืนค่าออกมาเป็น action ที่มี type เป็น `LOGIN` 

ให้ส่ง `LOGIN` action ไปยัง Redux store โดยเรียกใช้ method `dispatch` และส่ง action ที่สร้างโดย `loginAction()` เข้าไปใน method `dispatch` ด้วย

# --hints--

การเรียกใช้ฟังก์ชัน `loginAction` ควรต้องคืนค่าออกมาเป็น object ที่มี property ชื่อ`type` ที่มีค่าเป็น string `LOGIN`

```js
assert(loginAction().type === 'LOGIN');
```

store ต้องมีค่าเริ่มต้นเป็น object ที่มี property ชื่อ `login` ซึ่งมีค่าเป็น `false`

```js
assert(store.getState().login === false);
```

ต้องใช้ method `store.dispatch()` เพื่อส่ง action ที่มี type เป็น `LOGIN` ไปให้ store


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

// ให้ลองเขียนการใช้ dispatch ด้านล่าง:
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
