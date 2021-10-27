---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

คุณสามารถบอก Redux store ถึงวิธีจัดการกับ action หลายประเภท สมมติว่าคุณกำลังจัดการการตรวจสอบสิทธิ์ผู้ใช้ใน Redux store ของคุณ คุณต้องการให้แสดง state เมื่อผู้ใช้เข้าสู่ระบบและออกจากระบบ คุณแสดงสิ่งนี้ด้วย state object เดียวที่มี property `authenticated` คุณยังต้องการ action creators ที่สร้าง actions ที่ตอบสนองต่อการเข้าสู่ระบบของผู้ใช้และออกจากระบบของผู้ใช้ พร้อมกับต้องใช้ action objects เองด้วย

# --instructions--

code editor มี store, actionsม และ action creators ที่เซ็ทไว้แล้วสำหรับคุณ ให้เติมฟังก์ชัน `reducer` เพื่อ actions ตรวจสอบสิทธิ์หลายรายการ ให้ใช้คำสั่ง JavaScript `switch` ใน `reducer` เพื่อตอบสนองต่อ action events ต่างๆ นี่เป็นรูปแบบมาตรฐานในการเขียนร Redux reducers คำสั่ง switch ควรสลับไปที่ `action.type` และ return state การตรวจสอบสิทธิ์ที่เหมาะสม

**Note:** ณ จุดนี้ ไม่ต้องกังวลเกี่ยวกับ state immutability เนื่องจากแบบฝึกหัดนี้มีขนาดเล็กและเรียบง่าย สำหรับแต่ละ action คุณสามารถ return object ใหม่ได้ ตัวอย่างเช่น `{authenticated: true}` นอกจากนี้อย่าลืมเขียน `default` case ในคำสั่ง switch ของคุณที่ return `state` ปัจจุบัน นี่เป็นสิ่งสำคัญเพราะเมื่อแอปของคุณมี reducers หลายตัว พวกมันจะทำงานทุกครั้งที่มีการส่ง action แม้ว่า action จะไม่เกี่ยวข้องกับ reducer นั้นก็ตาม ในกรณีเช่นนี้คุณต้องแน่ใจว่าคุณจะต้อง return `state` ปัจจุบัน

# --hints--

การเรียกใช้ฟังก์ชัน `loginUser` ควร return object ด้วย type property ที่มีค่าเป้น string `LOGIN`

```js
assert(loginUser().type === 'LOGIN');
```

การเรียกใช้ฟังก์ชัน `logoutUser` ควร return object ด้วย type property ที่มีค่าเป้น string `LOGOUT`

```js
assert(logoutUser().type === 'LOGOUT');
```

Store ควรเริ่มต้นด้วย object ที่มี `authenticated` property เป็น `false`

```js
assert(store.getState().authenticated === false);
```

การส่ง `loginUser` ควรอัปเดต `authenticated` property ใน store state ให้เป็น `true`

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

การส่ง `loginUser` ควรอัปเดต `authenticated` property ใน store state ให้เป็น `false`

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

`authReducer` function ควรจัดการหลาย action types ด้วย `switch` statement

```js
(getUserInput) =>
  assert(
    getUserInput('index').toString().includes('switch') &&
      getUserInput('index').toString().includes('case') &&
      getUserInput('index').toString().includes('default')
  );
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line

  // Change code above this line
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
