---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

ตอนนี้คุณได้เรียนรู้หลักการสำคัญของ Redux ทั้งหมดแล้ว! คุณได้เห็นวิธีสร้าง actions และ action creators, สร้าง Redux Store, ส่ง actions ของคุณกับ store และออกแบบการอัปเดต state ด้วย reducer ที่แท้จริง คุณยังได้เห็นวิธีจัดการ state ที่ซับซ้อนด้วย reducer composition และจัดการ asynchronous actions แล้ว ซึ่งเป็นตัวอย่างแบบเข้าใจง่าย แต่แนวคิดเหล่านี้เป็นหลักการสำคัญของ Redux หากคุณเข้าใจดี คุณก็พร้อมที่จะเริ่มสร้างแอป Redux ของคุณเองแล้ว แบบทดสอบต่อไปจะพูดถึงรายละเอียดบางอย่างเกี่ยวกับความไม่สามารถเปลี่ยนแปลงได้ของ `state` แต่ก่อนอื่น นี่คือการทบทวนทุกสิ่งที่คุณได้เรียนรู้ไปแล้ว

# --instructions--

ในบทเรียนนี้ คุณจะใช้ตัวนับอย่างง่ายกับ Redux ตั้งแต่เริ่มต้น ข้อมูลโค้ดพื้นฐานมีให้อยู่ใน code editor แล้ว แต่คุณจะต้องเติมรายละเอียดเพิ่มเติมเอง! ใช้ชื่อที่ให้มาและกำหนด `incAction` และ `decAction` action creators, `counterReducer()`, `INCREMENT` และ `DECREMENT` action types และสุดท้ายคือ Redux `store` เมื่อคุณทำเสร็จแล้วคุณควรสามารถส่ง 'INCREMENT' หรือ 'DECREMENT' actions เพื่อเพิ่มหรือลด state ที่เก็บไว้ใน `store` ขอให้โชคดีในการสร้างแอป Redux แรกของคุณ!

# --hints--

action creator `incAction` ควร return action object ด้วย `type` มีค่าเท่ากับ `INCREMENT`

```js
assert(incAction().type === INCREMENT);
```

action creator `decAction` ควร return action object ด้วย `type` มีค่าเท่ากับ `DECREMENT`

```js
assert(decAction().type === DECREMENT);
```

Redux store ควรเริ่มต้นด้วย `state` ของ 0

```js
assert(store.getState() === 0);
```

การส่ง `incAction` บน Redux store ควรเพิ่ม `state` ทีละ 1

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(incAction());
    const incState = store.getState();
    return initialState + 1 === incState;
  })()
);
```

การส่ง `decAction` บน Redux store ควรลด `state` ทีละ 1

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(decAction());
    const decState = store.getState();
    return initialState - 1 === decState;
  })()
);
```

`counterReducer` ควรเป็นฟังก์ชัน

```js
assert(typeof counterReducer === 'function');
```

# --seed--

## --seed-contents--

```js
const INCREMENT = null; // Define a constant for increment action types
const DECREMENT = null; // Define a constant for decrement action types

const counterReducer = null; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = null; // Define an action creator for incrementing

const decAction = null; // Define an action creator for decrementing

const store = null; // Define the Redux store here, passing in your reducers
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

const incAction = () => {
  return {
    type: INCREMENT
  }
};

const decAction = () => {
  return {
    type: DECREMENT
  }
};

const store = Redux.createStore(counterReducer);
```
