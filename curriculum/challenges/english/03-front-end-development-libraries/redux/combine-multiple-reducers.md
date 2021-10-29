---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

เมื่อ state ของแอปเริ่มซับซ้อนมากขึ้น การแบ่ง state ออกเป็นหลายๆ ส่วนอาจเป็นเรื่องที่น่าสนใจ ให้จำหลักการแรกของ Redux ซึ่งคือ state แอปทั้งหมดจะอยู่ใน state object เดียวใน store ดังนั้น Redux จึงมี reducer composition เป็นวิธีแก้ปัญหาสำหรับโมเดล state ที่ซับซ้อน คุณกำหนด reducer หลายตัวเพื่อจัดการกับส่วนต่าง ๆ ของ state ของแอปพลิเคชันของคุณ จากนั้นจึงรวม reducer เหล่านี้เข้าด้วยกันเป็น root reducer ตัวเดียว ซึ่ง root reducer จะถูกส่งผ่านไปยัง`createStore()` method ของ Redux

Redux มี`combineReducers()` method เพื่อให้เรารวม reducer หลายตัวเข้าด้วยกัน เมธอดนี้ยอมรับ object เป็น argument ที่คุณกำหนด properties ซึ่งเชื่อมโยงคีย์กับ reducer functions เฉพาะ ชื่อที่คุณกำหนดให้กับคีย์จะถูกใช้โดย Redux เป็นชื่อสำหรับ state ที่เกี่ยวข้อง

โดยปกติแล้ว จะเป็นแนวปฏิบัติที่ดีในการสร้าง reducer สำหรับ state แอปพลิเคชันแต่ละส่วนเมื่อพวกมันมีความชัดเจนหรือไม่ซ้ำกันในทางใดทางหนึ่ง ตัวอย่างเช่นในแอพจดบันทึกที่มีการตรวจสอบสิทธิ์ user reducer หนึ่งสามารถจัดการการตรวจสอบสิทธิ์ ในขณะที่อีก reducer หนึ่งจัดการข้อความและบันทึกที่ผู้ใช้ส่ง submit มา สำหรับแอปพลิเคชันดังกล่าว เราอาจเขียน`combineReducers()` method ดังนี้:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

ตอนนี้ key `notes` จะมี state ทั้งหมดที่เกี่ยวข้องกับ notes ของเราและจัดการโดย `notesReducer` ของเรา นี่คือวิธีการประกอบ reducer หลายตัวเพื่อจัดการ state แอปพลิเคชันที่ซับซ้อนมากขึ้น ในตัวอย่างนี้ state ที่อยู่ใน Redux store จะเป็น object เดียวที่มี properties `auth` และ `notes`

# --instructions--

มีฟังก์ชัน `counterReducer()` และ `authReducer()` ที่ให้ไว้ใน code editor พร้อมกับ Redux store ให้เขียนฟังก์ชัน `rootReducer()` ให้เสร็จ โดยใช้ด `Redux.combineReducers()` method ให้กำหนด `counterReducer` ให้กับคีย์ชื่อ `count` และ `authReducer` ให้กับคีย์ชื่อ `auth`

# --hints--

`counterReducer` ควรทำการเพิ่มหรือลด `state`

```js
assert(
  (function () {
    const initialState = store.getState().count;
    store.dispatch({ type: INCREMENT });
    store.dispatch({ type: INCREMENT });
    const firstState = store.getState().count;
    store.dispatch({ type: DECREMENT });
    const secondState = store.getState().count;
    return firstState === initialState + 2 && secondState === firstState - 1;
  })()
);
```

`authReducer` ควรสลับค่า `state` ของ `authenticated` ระหว่าง `true` และ `false`

```js
assert(
  (function () {
    store.dispatch({ type: LOGIN });
    const loggedIn = store.getState().auth.authenticated;
    store.dispatch({ type: LOGOUT });
    const loggedOut = store.getState().auth.authenticated;
    return loggedIn === true && loggedOut === false;
  })()
);
```

`state` ของ store ควรมี key 2 key คือ `count` ที่เป็นตัวเลข และ `auth` ที่เป็น object ซึ่ง `auth` object ควรมี property ของ `authenticated` ที่เป็น boolean

```js
assert(
  (function () {
    const state = store.getState();
    return (
      typeof state.auth === 'object' &&
      typeof state.auth.authenticated === 'boolean' &&
      typeof state.count === 'number'
    );
  })()
);
```

`rootReducer` ควรเป็นฟังก์ชันที่รวม `counterReducer` และ `authReducer` เข้าด้วยกัน

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(getUserInput('index'));
      return (
        typeof rootReducer === 'function' &&
        noWhiteSpace.includes('Redux.combineReducers')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = // Define the root reducer here

const store = Redux.createStore(rootReducer);
```

# --solutions--

```js
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
});

const store = Redux.createStore(rootReducer);
```
