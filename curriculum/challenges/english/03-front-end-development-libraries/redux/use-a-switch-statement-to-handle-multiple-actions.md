---
id: 5a24c314108439a4d4036151
title: Use a Switch Statement to Handle Multiple Actions
challengeType: 6
forumTopicId: 301449
dashedName: use-a-switch-statement-to-handle-multiple-actions
---

# --description--

คุณสามารถเขียนให้ Redux store จัดการกับ action หลายๆประเภทได้

สมมติว่าคุณกำลังจัดการการตรวจสอบสิทธิ์ผู้ใช้ (Authentication) ใน Redux store อยู่ แล้วคุณต้องการใช้ state เพื่อแสดงว่าผู้ใช้ยังอยู่ในระบบหรือไม่ โดยใช้ property `authenticated` ของ state object 
และคุณยังต้องการ action creator ที่สร้าง action ตามการอยู่ในระบบของผู้ใช้ พร้อมกับต้องใช้ action object เองด้วย

# --instructions--

ใน code editor เราได้เขียน store, action และ action creators ไว้ให้แล้ว 

ให้คุณเขียนฟังก์ชัน `reducer` เพื่อจัดการการตรวจสอบสิทธิ์ผู้ใช้ โดยให้ใช้คำสั่ง `switch` ของ JavaScript ใน `reducer` ในการจัดการ action event ที่ต่างกัน การเขียนโดยใช้ `switch` แบบนี้ถือเป็นมาตรฐานในการเขียน Redux reducer 

ต้องใช้คำสั่ง switch กับค่าของ `action.type` และคืนค่าเป็น state โดยถ้าผู้ใช้อยู่ในระบบต้องให้ `authenticated` เป็น `true` และถ้าไม่ได้อยู่ในระบบแล้ว `authenticated` ต้องเป็น `false`

**Note:** ตอนนี้ยังไม่ต้องกังวลเรื่อง state immutability เพราะว่าแบบฝึกหัดนี้ยังไม่ซับซ้อน  
ในการคืนค่าของ `authReducer` คุณจะคืนค่าเป็น object ตัวใหม่ได้เลย เช่น `{authenticated: true}` 
นอกจากนี้อย่าลืมเขียน `default` case ในคำสั่ง switch โดยที่จะต้องคืนค่าเป็น `state` ปัจจุบัน  
การเขียน `default` case ให้คืนค่าเป็น `state` ตัวปัจจุบันเป็นเรื่องสำคัญ เพราะเมื่อแอปของคุณมี reducer หลายตัว reducer พวกนี้จะทำงานทุกครั้งที่มีการส่ง action แม้ว่า action จะไม่เกี่ยวข้องกับ reducer นั้นก็ตาม

# --hints--

การเรียกใช้ฟังก์ชัน `loginUser` ต้องคืนค่าเป็น object ที่ property `type` มีค่าเป้น string `LOGIN`

```js
assert(loginUser().type === 'LOGIN');
```

การเรียกใช้ฟังก์ชัน `logoutUser` ต้องคืนค่าเป็น object ที่ property `type` มีค่าเป้น string `LOGOUT`

```js
assert(logoutUser().type === 'LOGOUT');
```

ค่าเริ่มต้นของ store ต้องเป็น object ที่มี property ชื่อ `authenticated` ที่มีค่าเป็น `false`

```js
assert(store.getState().authenticated === false);
```

การส่ง `loginUser` ให้กับ store ต้องไปอัปเดต property `authenticated` ใน store state ให้เป็น `true`

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

การส่ง `logoutUser` ให้กับ store ต้องไปอัปเดต property `authenticated` ใน store state ให้เป็น `false`

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
  // แก้ไขโค้ดใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
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
