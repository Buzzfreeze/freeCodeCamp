---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
forumTopicId: 301429
dashedName: extract-state-logic-to-redux
---

# --description--

เมื่อคุณสร้าง React component เสร็จแล้ว คุณต้องย้ายตรรกะที่ทำงานอยู่ใน `state` ไปไว้ใน Redux นี่เป็นขั้นตอนแรกในการเชื่อมต่อแอป React อย่างง่ายกับ Redux ฟังก์ชันเดียวที่แอปของคุณมีคือการเพิ่มข้อความใหม่จากผู้ใช้ไปยัง unordered list ตัวอย่างง่าย ๆ นี้แสดงให้เห็นว่า React และ Redux ทำงานร่วมกันอย่างไร

# --instructions--

ขั้นแรก กำหนดประเภทการดำเนินการ `ADD` และตั้ง const `ADD` ถัดไปกำหนด action creator `addMessage()` ซึ่งสร้างการดำเนินการเพื่อเพิ่มข้อความ คุณจะต้องส่ง `message` ไปยัง action creator นี้ และรวมข้อความไว้ใน `action` ที่ return

จากนั้นสร้าง reducer ชื่อ `messageReducer()` ที่จัดการ state ของข้อความต่างๆ state เริ่มต้นควรเป็น array ว่าง reducer นี้ควรเพิ่มข้อความไปยัง array ของข้อความที่อยู่ใน state หรือ return state ปัจจุบัน สุดท้ายสร้างร้าน Redux และส่งผ่าน reducer

# --hints--

ควรมี const `ADD` และมีค่า เท่ากับ string `ADD`

```js
assert(ADD === 'ADD');
```

action creator `addMessage` ควร return object ด้วย `type` เท่ากับ `ADD` และ `message` เท่ากับข้อความที่ถูกส่งต่อมา

```js
assert(
  (function () {
    const addAction = addMessage('__TEST__MESSAGE__');
    return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__';
  })()
);
```

`messageReducer` ควรเป็นฟังก์ชัน

```js
assert(typeof messageReducer === 'function');
```

จะต้องมี store และมี state ค่าเริ่มต้นตั้งให้เป็น array ว่าง

```js
assert(
  (function () {
    const initialState = store.getState();
    return typeof store === 'object' && initialState.length === 0;
  })()
);
```

การส่ง `addMessage` ต่อ store ควรเพิ่มข้อความใหม่ไปยัง array ของข้อความที่อยู่ใน state โดยไม่เปลี่ยนรูป

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addMessage('__A__TEST__MESSAGE'));
    const addState = store.getState();
    return isFrozen && addState[0] === '__A__TEST__MESSAGE';
  })()
);
```

`messageReducer` ควร return state ปัจจุบัน ถ้าหากถูกเรียกใช้งานกับ action อื่น

```js
assert(
  (function () {
    const addState = store.getState();
    store.dispatch({ type: 'FAKE_ACTION' });
    const testState = store.getState();
    return addState === testState;
  })()
);
```

# --seed--

## --seed-contents--

```jsx
// Define ADD, addMessage(), messageReducer(), and store here:
```

# --solutions--

```jsx
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);
```
