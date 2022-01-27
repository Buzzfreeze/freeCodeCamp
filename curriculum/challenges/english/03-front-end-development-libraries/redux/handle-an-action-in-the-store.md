---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

หลังจากสร้างและส่ง action เข้าไปแล้ว Redux store จำเป็นต้องรู้ว่าจะทำอะไรต่อ 
เราจะใช้ฟังก์ชัน `reducer` เพื่อเปลี่ยนแปลง state ตาม action ที่เข้ามา 

`reducer` จะรับ argument สองตัวคือ `state` และ `action` และจะต้องคืนค่าออกมาเป็น `state` ตัวใหม่เสมอ 

สิ่งที่สำคัญมากๆคือ เราต้องใช้ reducer แค่นี้ **เท่านั้น** การใช้ reducer ต้องไม่ก่อให้เกิด side-effect และต้องไม่เรียกใช้ API endpoint และจะต้องไม่ทำให้เกิดผลกระทบอะไรที่เราไม่คาดคิด
reducer จะต้องเป็นแค่ pure function ที่รับ state และ action เข้ามาแล้วคืนค่าเป็น state ใหม่เท่านั้น 
(Pure function คือฟังก์ชันที่จะไม่อ่าน ไม่ใช้ ไม่แก้ไข ค่าหรือตัวแปรอะไรที่อยู่นอก scope ของตัวเอง)

หลักการสำคัญอีกข้อใน Redux คือ `state` จะเป็น read-only 
แปลว่า `reducer` จะต้องคืนค่าเป็น `state` ตัวใหม่ **เสมอ** โดยจะไม่แก้ไข state โดยตรง 
จริงๆแล้ว Redux ไม่ได้ห้ามแก้ไข state โดยตรง แต่เป็นหน้าที่ของคุณที่ต้องทำแบบนี้เพื่อให้ไม่เกิด side-effect ใน reducer ของคุณ 
เราจะให้คุณฝึกเรื่องนี้ในแบบทดสอบต่อไป

# --instructions--

ใน code editor จะมีโค้ดของแบบทดสอบที่แล้ว และโค้ดของฟังก์ชัน `reducer` ให้บางส่วน

ให้เขียนฟังก์ชัน `reducer` โดยใช้เงื่อนไขนี้:
ถ้าฟังก์ชันได้รับ action ที่มี type เป็น `'LOGIN'` ให้คืนค่าเป็น state object ที่มี property `login` เป็น `true` 
ถ้าได้รับ action ที่มี type เป็นค่าอื่นให้คืนค่าออกมาเป็น `state` ปัจจุบัน 

จะเห็นว่าเราได้ส่ง `state` ปัจจุบันและ `action` เข้าไปใน reducer ให้แล้ว คุณจึงเข้าถึง type ของ action ได้โดยตรงด้วย `action.type`

# --hints--

การเรียกใช้ฟังก์ชัน `loginAction` ต้องคืนค่าเป็น object ที่มี property `type` ที่มีค่าเป็น string `LOGIN`

```js
assert(loginAction().type === 'LOGIN');
```

ค่าเริ่มต้นของ store ต้องเป็น object ที่มีค่าของ property `login` เป็น `false`

```js
assert(store.getState().login === false);
```

การส่ง `loginAction` ไปให้ store จะต้องไปเปลี่ยนค่าของ property `login` ใน store state เป็น `true`

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(loginAction());
    const afterState = store.getState();
    return initialState.login === false && afterState.login === true;
  })()
);
```

ถ้า action ไม่ได้มี type เป็น `LOGIN` แล้ว store จะต้องคืนค่าออกมาเป็น state ตัวปัจจุบัน

```js
assert(
  (function () {
    store.dispatch({ type: '__TEST__ACTION__' });
    let afterTest = store.getState();
    return typeof afterTest === 'object' && afterTest.hasOwnProperty('login');
  })()
);
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {
  // แก้ไขโค้ดใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```

# --solutions--

```js
const defaultState = {
  login: false
};

const reducer = (state = defaultState, action) => {

  if (action.type === 'LOGIN') {
    return {login: true}
  }

  else {
    return state
  }

};

const store = Redux.createStore(reducer);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};
```
