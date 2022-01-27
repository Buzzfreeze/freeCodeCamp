---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

แบบทดสอบที่ผ่านมาเราหลีกเลี่ยงที่จะพูดถึง asynchronous action แต่ส่วนนี้เป็นส่วนที่หลีกเลี่ยงไม่ได้ในการพัฒนาเว็บ 

เมื่อถึงจุดหนึ่งคุณจะต้องเรียกใช้ asynchronous endpoint ในแอป Redux ของคุณ คุณจะจัดการกับ request แบบนี้ได้อย่างไร?

Redux มี middleware ที่ออกแบบมาเพื่อจุดประสงค์นี้โดยเฉพาะ โดยเรียกว่า Redux Thunk middleware

วิธีเพิ่ม Redux Thunk middleware คือ คุณต้องส่ง middleware เป็น argument ไปให้ `Redux.applyMiddleware()` 
แล้วคุณก็จะต้องนำ `Redux.applyMiddleware()` ไปใช้เป็น argument ตัวที่สองในฟังก์ชัน `createStore()` (ลองดูตัวอย่างโค้ดได้ใน editor) 

ส่วนในการสร้าง asynchronous action คุณจะต้องให้ action creator ตัวที่ใช้ `dispatch` เป็น argument คืนค่าออกมาเป็นฟังก์ชัน ในฟังก์ชันที่คืนออกมานี้ คุณจะ `dispatch` action และทำการส่ง request แบบ asynchronous ได้

ในตัวอย่างนี้เราจะจำลอง request แบบ asynchronous ด้วยการใช้ `setTimeout()` 
ปกติแล้วเราจะ `dispatch` action ก่อนที่จะเริ่มการทำงานแบบ asynchronous เพื่อให้ state ของแอปรู้ว่ามีการ request ข้อมูลอยู่ (เช่น state นี้อาจแสดงไอคอนการโหลด เป็นต้น) จากนั้น เมื่อคุณได้รับข้อมูลมาแล้ว คุณจะ `dispatch` action อีกตัวหนึ่งที่มีข้อมูลที่ได้คืนมาจาก request ที่ส่งไป พร้อมกับข้อมูลที่แสดงว่า action นั้นเสร็จสิ้น

จำไว้ว่าคุณกำลังส่ง `dispatch` เป็นพารามิเตอร์ไปยัง action creator ตัวพิเศษนี้ 
และคุณจะต้องใช้พารามิเตอร์นี้เพื่อ `dispatch` action ของคุณ 
คุณแค่ต้องส่ง action นั้นให้กับ `dispatch` โดยตรง จากนั้น middleware จะจัดการส่วนที่เหลือเอง

# --instructions--

ให้เขียน `dispatch` สองตัวใน `handleAsync()` action creator 

ให้ `dispatch` action `requestingData()` ก่อน แล้วค่อยเรียกใช้ `setTimeout()` (จำลองการเรียก API) 

หลังจากที่คุณได้รับข้อมูล (จำลอง) ให้ `dispatch` action `receivedData()` โดยส่งข้อมูล (จำลอง) นี้ไปให้ `dispatch`  
เท่านี้คุณก็รู้วิธีจัดการกับ asynchronous action ใน Redux แล้ว ส่วนอื่นของโค้ดก็ยังจะทำงานได้เหมือนเดิม

# --hints--

`requestingData` ต้องคืนค่าเป็น object ที่มีค่าของ type เป็น `REQUESTING_DATA`

```js
assert(requestingData().type === REQUESTING_DATA);
```

`receivedData` ต้องคืนค่าเป็น object ที่มีค่าของ type เป็น `RECEIVED_DATA`

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` ต้องเป็นฟังก์ชัน

```js
assert(typeof asyncDataReducer === 'function');
```

การ dispatch `requestingData` ต้องอัปเดต property fetch ของ store `state` เป็น `true`

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(requestingData());
    const reqState = store.getState();
    return initialState.fetching === false && reqState.fetching === true;
  })()
);
```

การ dispatch `handleAsync` จะต้องไปทำการ `dispatch` action `requestingData` และ `dispatch` action `receivedData` หลังจากการหน่วงเวลาต่อ

```js
assert(
  (function () {
    const noWhiteSpace = __helpers.removeWhiteSpace(handleAsync.toString());
    return (
      noWhiteSpace.includes('dispatch(requestingData())') === true &&
      noWhiteSpace.includes('dispatch(receivedData(data))') === true
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    // dispatch requestingData ตรงนี้

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // dispatch receivedData ตรงนี้

    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```

# --solutions--

```js
const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

const handleAsync = () => {
  return function(dispatch) {
    dispatch(requestingData());
    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      dispatch(receivedData(data));
    }, 2500);
  }
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);
```
