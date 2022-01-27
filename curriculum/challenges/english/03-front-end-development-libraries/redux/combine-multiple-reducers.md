---
id: 5a24c314108439a4d4036154
title: Combine Multiple Reducers
challengeType: 6
forumTopicId: 301436
dashedName: combine-multiple-reducers
---

# --description--

เมื่อ state ของแอปเริ่มซับซ้อนมากขึ้น คุณอาจจะอยากแบ่ง state ออกเป็นหลายๆตัว แต่แทนที่คุณจะไปแบ่ง state ให้นึกถึงหลักการแรกของ Redux ก่อน ซึ่งคือ state ทั้งหมดของแอปจะรวมอยู่ใน state object ตัวเดียวใน store 
ดังนั้น Redux จึงมี reducer composition เพื่อแก้ปัญหา state ที่ซับซ้อน 

วิธีการคือ คุณต้องสร้าง reducer หลายๆตัวเพื่อจัดการกับแต่ละส่วนของ state แล้วก็รวม reducer พวกนี้เข้าด้วยกันเป็น root reducer ตัวเดียว ซึ่งจะต้องส่ง root reducer ตัวนี้เข้าไปใน method `createStore()` ของ Redux

Redux มี method `combineReducers()` เพื่อให้เรารวม reducer หลายตัวเข้าด้วยกัน 
method นี้รับ argument เป็น object โดยคุณต้องตั้งชื่อ property เป็นชื่อเดียวกับ property ของ state ที่จะจัดการ และมีค่าของ property นั้นเป็น reducer function

วิธีที่ดีคือเราต้องสร้าง reducer สำหรับ state แต่ละส่วนเมื่อ state นั้นมีความแตกต่างกันอย่างชันเจน หรือมีลักษณะพิเศษที่ทำให้ต้องแยกออกมา  
เช่น ในแอพสำหรับจดโน๊ตที่มีการตรวจสอบสิทธิ์ของผู้ใช้ เราสามารถเขียนให้ reducer ตัวหนึ่งจัดการการตรวจสอบสิทธิ์ ในขณะที่ reducer อีกตัวหนึ่งจัดการข้อความ และโน๊ตที่ผู้ใช้ submit มา 
สำหรับแอปจดโน๊ตนี้ เราจะเขียน method `combineReducers()` ได้ตามนี้:

```js
const rootReducer = Redux.combineReducers({
  auth: authenticationReducer,
  notes: notesReducer
});
```

ตอนนี้ key `notes` จะเก็บ state ทั้งหมดที่เกี่ยวข้องกับ notes ของเราซึ่งจะถูกจัดการโดย `notesReducer`
ตัวอย่างนี้เป็นวิธีการรวม reducer หลายๆตัวเข้าด้วยกัน เพื่อจัดการ state แอปที่ซับซ้อนมากขึ้น 

ในตัวอย่างด้านบน state ที่อยู่ใน Redux store จะเป็น object ตัวเดียว ที่มี property สองตัวคือ `auth` และ `notes`

# --instructions--

เราได้เขียนฟังก์ชัน `counterReducer()` และ `authReducer()` พร้อมกับ Redux store ไว้ใน code editor ให้แล้ว 

ให้เขียนฟังก์ชัน `rootReducer()` ให้เสร็จ โดยใช้ method `Redux.combineReducers()` และให้คีย์ `count` มีค่าเป็น `counterReducer` และคีย์ `auth` มีค่าเป็น `authReducer`

# --hints--

`counterReducer` ต้องเพิ่มหรือลด `state` ได้

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

`authReducer` ต้องเปลี่ยนค่าของ `authenticated` ใน `state` เป็น `true` หรือ `false`

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

`state` ของ store ต้องมีคีย์ 2 ตัวคือ `count` ที่เป็นตัวเลข และ `auth` ที่เป็น object ซึ่ง `auth` object ต้องมี property ชื่อ `authenticated` ที่เก็บค่า boolean

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

`rootReducer` ต้องเป็นฟังก์ชันที่เกิดจากการรวม `counterReducer` และ `authReducer` เข้าด้วยกัน

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

const rootReducer = // สร้าง root reducer ที่นี่

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
