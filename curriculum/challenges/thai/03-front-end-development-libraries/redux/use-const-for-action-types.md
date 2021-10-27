---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

ทั่วไปแล้วเมื่อทำงานกับ Redux คือการกำหนดประเภท action เป็น constants แบบอ่านอย่างเดียว (read-only) จากนั้นอ้างอิง constants เหล่านี้ไม่ว่าจะใช้งานอยู่ที่ใด คุณสามารถจัดโครงสร้างโค้ดใหม่ที่คุณกำลังทำงานด้วยเพื่อเขียนประเภท action เป็นการประกาศ "const"

# --instructions--

ประกาศ `LOGIN` และ `LOGOUT` เป็นค่า `const` และกำหนดค่าให้กับสตริง `'LOGIN'` และ `'LOGOUT''` ตามลำดับ จากนั้นให้แก้ไข `authReducer()` และ action creators ให้อ้างอิงค่าคงที่เหล่านี้แทนค่าสตริง

**Note:** โดยทั่วไปการเขียนค่าคงที่ด้วยตัวพิมพ์ใหญ่ทั้งหมดนั้นเป็นเรื่องปกติ และนี่เป็นแนวทางปฏิบัติมาตรฐานใน Redux เช่นกัน

# --hints--

การเรียกใช้ฟังก์ชัน `loginUser` ควร return object ด้วย `type` property ที่มีค่า string `LOGIN`

```js
assert(loginUser().type === 'LOGIN');
```

การเรียกใช้ฟังก์ชัน `logoutUser` ควร return object ด้วย `type` property ที่มีค่า string `LOGOUT`

```js
assert(logoutUser().type === 'LOGOUT');
```

Store ควรเริ่มต้นด้วย object ที่มี property `login` เป็น `false`

```js
assert(store.getState().authenticated === false);
```

การส่ง `loginUser` ควรอัปเดต `login` property ใน store state เป็น `true`

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginUser());
    const afterLogin = store.getState();
    return (
      initialState.authenticated === false && afterLogin.authenticated === true
    );
  })()
);
```

การส่ง `logoutUser` ควรอัปเดต `login` property ใน store state เป็น `false`

```js
assert(
  (function () {
    store.dispatch(loginUser());
    const loggedIn = store.getState();
    store.dispatch(logoutUser());
    const afterLogout = store.getState();
    return (
      loggedIn.authenticated === true && afterLogout.authenticated === false
    );
  })()
);
```

ฟังก์ชัน `authReducer` ควรจัดการหลาย action types ด้วย switch statement

```js
(getUserInput) =>
  assert(
    (function () {
      return (
        typeof authReducer === 'function' &&
        getUserInput('index').toString().includes('switch') &&
        getUserInput('index').toString().includes('case') &&
        getUserInput('index').toString().includes('default')
      );
    })()
  );
```

ควรประกาศ `LOGIN` และ `LOGOUT` เป็นค่า `const` และกำหนดค่า string เป็น `LOGIN`และ `LOGOUT`

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(
  (/constLOGIN=(['"`])LOGIN\1/.test(noWhiteSpace) &&
    /constLOGOUT=(['"`])LOGOUT\1/.test(noWhiteSpace)) ||
      /const(LOGIN|LOGOUT)=(['"`])\1\2,(?!\1)(LOGIN|LOGOUT)=(['"`])\3\4/.test(noWhiteSpace)
);
```

action creators และ the reducer ควรอ้างอิงไปที่ `LOGIN` และ `LOGOUT` constants

```js
(getUserInput) =>
  assert(
    (function () {
      const noWhiteSpace = __helpers.removeWhiteSpace(
        getUserInput('index').toString()
      );
      return (
        noWhiteSpace.includes('caseLOGIN:') &&
        noWhiteSpace.includes('caseLOGOUT:') &&
        noWhiteSpace.includes('type:LOGIN') &&
        noWhiteSpace.includes('type:LOGOUT')
      );
    })()
  );
```

# --seed--

## --seed-contents--

```js


const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'LOGIN': 
      return {
        authenticated: true
      }
    case 'LOGOUT': 
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};
```

# --solutions--

```js
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

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

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
```
