---
id: 5a24c314108439a4d4036150
title: Handle an Action in the Store
challengeType: 6
forumTopicId: 301444
dashedName: handle-an-action-in-the-store
---

# --description--

หลังจากสร้างและส่ง action แล้วนั้น Redux store จำเป็นต้องรู้วิธีตอบสนองต่อ action นั้น นี่คืองานของฟังก์ชัน `reducer` ซึ่ง Reducers ใน Redux มีหน้าที่ในการแก้ไข state ที่เกิดขึ้นเพื่อตอบสนองต่อ actions `reducer` ใช้ `state` และ `action` เป็น argument และจะ return `state` ใหม่เสมอ สิ่งสำคัญคือต้องเห็นว่านี่เป็นบทบาท **เท่านั้น** ของ reducer มันไม่มีผลข้างเคียงและมันไม่เคยเรียกใช้ API endpoint และไม่เคยมีความประหลาดใจที่ซ่อนอยู่ reducer เป็นเพียงฟังก์ชันบริสุทธิ์ที่รับ state และ action จากนั้น return state ใหม่

หลักการสำคัญอีกประการหนึ่งใน Redux คือ `state` เป็นแบบอ่านอย่างเดียว กล่าวอีกนัยหนึ่งฟังก์ชัน `reducer` จะต้อง  return สำเนาใหม่ของ `state`  **เสมอ** และไม่แก้ไข state โดยตรง Redux ไม่ได้บังคับใช้ state immutability นี้ อย่างไรก็ตามคุณต้องรับผิดชอบในการบังคับใช้ในโค้ดของฟังก์ชัน reducer ของคุณ คุณจะฝึกฝนสิ่งนี้ในแบบทดสอบต่อไป

# --instructions--

code editor มีตัวอย่างโค้ดก่อนหน้านี้และจุดเริ่มต้นของฟังก์ชัน `reducer` สำหรับคุณ ให้เติม bodyของฟังก์ชัน `reducer` เพื่อที่ว่าหากมันได้รับ action ของ type `'LOGIN'` มันก็จะ return state object ด้วยค่า `login` ที่เป็น `true` มิฉะนั้นจะ return `state` ปัจจุบัน โปรดทราบว่า `state` ปัจจุบันและ `action` จะถูกส่งไปยัง reducer ดังนั้นคุณจึงสามารถเข้าถึง action's type ได้โดยตรงด้วย `action.type`

# --hints--

การเรียกใช้ฟังก์ชัน `loginAction` ควร return object ที่มี type property ที่ตั้งค่า string เป็น `LOGIN`

```js
assert(loginAction().type === 'LOGIN');
```

Store ควรเริ่มต้นด้วย object ที่มี property `login` ที่เป็น `false`

```js
assert(store.getState().login === false);
```

การส่ง `loginAction` ควรอัปเดต `login` property ใน store state เป็น `true`

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

ถ้า action ไม่ใช่ type `LOGIN` store ควรจะต้อง return state ปัจจุบัน

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
  // Change code below this line

  // Change code above this line
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
