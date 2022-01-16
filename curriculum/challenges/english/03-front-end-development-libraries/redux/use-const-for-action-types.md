---
id: 5a24c314108439a4d4036152
title: Use const for Action Types
challengeType: 6
forumTopicId: 301450
dashedName: use-const-for-action-types
---

# --description--

ปกติแล้วเวลาเราใช้ Redux เราจะเก็บประเภทของ action ไว้ในตัวแปรที่เป็นค่าคงที่ (ใช้ `const`) แล้วเราค่อยใช้ตัวแปรที่เป็นค่าคงที่นี้ ถ้าต้องการสื่อถึง action ตัวนั้นๆ

# --instructions--

ให้ประกาศ `LOGIN` และ `LOGOUT` โดยใช้ `const` และกำหนดให้มีค่าเป็น string `'LOGIN'` และ `'LOGOUT''` ตามลำดับ 
จากนั้นให้แก้ไข `authReducer()` และ action creator โดยใช้ตัวแปรค่าคงที่สองตัวนี้แทน string

**Note:** ปกติแล้วการเขียนชื่อตัวแปรที่เป็นค่าคงที่จะใช้ตัวพิมพ์ใหญ่ ซึ่งใน Redux ก็จะใช้วิธีนี้เหมือนกัน

# --hints--

การเรียกใช้ฟังก์ชัน `loginUser` ต้องคืนค่าเป็น object ที่ property `type` มีค่าเป็น string `LOGIN`

```js
assert(loginUser().type === 'LOGIN');
```

การเรียกใช้ฟังก์ชัน `logoutUser` ต้องคืนค่าเป็น object ที่ property `type` มีค่าเป็น string `LOGOUT`

```js
assert(logoutUser().type === 'LOGOUT');
```

ค่าเริ่มต้นของ store ต้องเป็น object ที่มี property ชื่อ `login` ที่มีค่าเป็น `false`

```js
assert(store.getState().authenticated === false);
```

การส่ง `loginUser` ให้กับ store ต้องไปอัปเดต property `login` ใน store state ให้เป็น `true`

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

การส่ง `logoutUser` ให้กับ store ต้องไปอัปเดต property `login` ใน store state ให้เป็น `false`

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

ฟังก์ชัน `authReducer` ต้องใช้คำสั่ง `switch` เพื่อแยกวิธีการทำงานของ action ที่ต่างกัน

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

ต้องประกาศ `LOGIN` และ `LOGOUT` โดยใช้ `const` และกำหนดค่าให้เป็น string `"LOGIN"` และ `"LOGOUT"` ตามลำดับ

```js
const noWhiteSpace = __helpers.removeWhiteSpace(code);
assert(
  (/constLOGIN=(['"`])LOGIN\1/.test(noWhiteSpace) &&
    /constLOGOUT=(['"`])LOGOUT\1/.test(noWhiteSpace)) ||
      /const(LOGIN|LOGOUT)=(['"`])\1\2,(?!\1)(LOGIN|LOGOUT)=(['"`])\3\4/.test(noWhiteSpace)
);
```

action creator และ reducer ต้องใช้ค่าของตัวแปร `LOGIN` และ `LOGOUT` แทน string

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
