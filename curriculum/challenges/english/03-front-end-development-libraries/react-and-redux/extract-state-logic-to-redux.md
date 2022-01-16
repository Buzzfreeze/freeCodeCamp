---
id: 5a24c314108439a4d4036143
title: Extract State Logic to Redux
challengeType: 6
forumTopicId: 301429
dashedName: extract-state-logic-to-redux
---

# --description--

เมื่อคุณสร้าง React component เสร็จแล้ว คุณต้องย้าย logic ที่ใช้งาน `state` ไปไว้ใน Redux นี่เป็นขั้นตอนแรกในการเชื่อม React กับ Redux 
ตอนนี้แอปของคุณทำแค่การนำข้อความที่กรอกลงมาไปใส่ใน `ul` 
ตัวอย่างนี้จะทำให้เห็นว่า React จะทำงานกับ Redux ได้อย่างไร

# --instructions--

ขั้นแรก ให้สร้าง const `ADD` เพื่อเก็บ action ที่ชื่อว่า `"ADD"`
ต่อไปให้สร้าง action creator ชื่อ `addMessage()` ซึ่งจะสร้าง action ที่ใช้เพิ่มข้อความ 
ถัดไป action creator ต้องรับค่า `message` ซึ่งเป็นข้อความที่เข้ามา และใน `action` ที่คืนค่าออกมา จะต้องมี property ชื่อ message ที่เก็บค่าของข้อความที่รับเข้ามาด้วย

จากนั้นสร้าง reducer ชื่อ `messageReducer()` ที่จัดการ state ของข้อความ
state นี้ต้องมีค่าเริ่มต้นเป็น array ว่าง และ reducer นี้จะต้องเพิ่มข้อความที่รับเข้ามาไปใน array `messages` ของ state หรือคืนค่าเป็น state ปัจจุบัน 
และสุดท้ายให้สร้าง Redux store และส่ง reducer เข้าไปในฟังก์ชัน `createStore`

# --hints--

const `ADD` ต้องมีค่าเป็น string `ADD`

```js
assert(ADD === 'ADD');
```

action creator `addMessage` ต้องคืนค่าเป็น object ที่มี property `type` ที่มีค่าเป็น `ADD` และ property `message` ที่เป็นค่าของข้อความที่รับเข้ามาในฟังก์ชัน

```js
assert(
  (function () {
    const addAction = addMessage('__TEST__MESSAGE__');
    return addAction.type === ADD && addAction.message === '__TEST__MESSAGE__';
  })()
);
```

`messageReducer` ต้องเป็นฟังก์ชัน

```js
assert(typeof messageReducer === 'function');
```

ต้องมี store ที่มีค่าเริ่มต้นของ state เป็น array ว่าง

```js
assert(
  (function () {
    const initialState = store.getState();
    return typeof store === 'object' && initialState.length === 0;
  })()
);
```

การ dispatch `addMessage` ไปยัง store ต้องเพิ่มข้อความใหม่ลงใน state ที่เป็น array โดยไม่เปลี่ยนแปลง state เดิม

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
// สร้าง ADD, addMessage(), messageReducer(), และ store ที่นี่:
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
