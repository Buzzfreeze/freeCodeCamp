---
id: 5a24c314108439a4d4036156
title: Use Middleware to Handle Asynchronous Actions
challengeType: 6
forumTopicId: 301451
dashedName: use-middleware-to-handle-asynchronous-actions
---

# --description--

แบบทดสอบที่ผ่านมาหลีกเลี่ยงที่จะพูดถึง asynchronous actions แต่นี่เป็นส่วนที่หลีกเลี่ยงไม่ได้ในการพัฒนาเว็บ เมื่อถึงจุดหนึ่งคุณจะต้องเรียกใช้ asynchronous endpoints ในแอป Redux ของคุณ คุณจะจัดการกับคำขอประเภทนี้อย่างไร Redux มี middleware ที่ออกแบบมาเพื่อจุดประสงค์นี้โดยเฉพาะ เรียกว่า Redux Thunk middleware ต่อไปนี้เป็นคำอธิบายสั้น ๆ เกี่ยวกับวิธีใช้ Redux Thunk middleware นี้กับ Redux

หากต้องเพิ่ม Redux Thunk middleware คุณต้องส่งผ่านมันเป็น argument ไปยัง `Redux.applyMiddleware()` คำสั่งนี้จะถูกจัดเตรียมเป็นพารามิเตอร์ทางเลือกที่สองสำหรับฟังก์ชัน `createStore()` ดูโค้ดที่ด้านล่างของ editor เพื่อดูสิ่งนี้ จากนั้น ในการสร้าง asynchronous action คุณจะต้อง return ฟังก์ชันใน action creator ที่ใช้ `dispatch` เป็น argument ภายในฟังก์ชันนี้ คุณสามารถส่ง actions และดำเนินการ asynchronous requests ได้

ในตัวอย่างนี้ asynchronous request จะถูกจำลองด้วยการเรียใช้ `setTimeout()` เป็นเรื่องปกติที่จะส่ง action ก่อนที่จะเริ่มการทำงานแบบ asynchronous เพื่อให้ state แอปพลิเคชันของคุณรู้ว่ามีการร้องขอข้อมูลบางอย่าง (เช่น state นี้อาจแสดงไอคอนการโหลด เป็นต้น) จากนั้น เมื่อคุณได้รับข้อมูล คุณจะส่ง action อื่นที่มีข้อมูลเป็นเพย์โหลดพร้อมกับข้อมูลที่ว่า action นั้นเสร็จสิ้น

จำไว้ว่าคุณกำลังส่ง `dispatch` เป็นพารามิเตอร์ไปยัง action creator พิเศษนี้ นี่คือสิ่งที่คุณจะใช้เพื่อส่ง actions ของคุณ คุณเพียงแค่ส่ง action นั้นโดยตรงเพื่อส่ง จากนั้น middleware จะดูแลส่วนที่เหลือเอง

# --instructions--

ให้เขียนการส่งทั้งสองใน `handleAsync()` action creator ส่ง `requestingData()` ก่อน `setTimeout()` (การเรียกใช้ API จำลอง) แล้วหลังจากที่คุณได้รับข้อมูล (จำลอง) ให้ส่ง `receivedData()` action โดยส่งข้อมูลนี้ ตอนนี้คุณรู้วิธีจัดการกับ asynchronous actions ใน Redux แล้ว สิ่งอื่นนอกจากนี้ก็จะยังคงทำตามแบบปฏิบัติเดิม

# --hints--

`requestingData` action creator ควร return object ของ type ที่มีค่าเท่ากับ `REQUESTING_DATA`

```js
assert(requestingData().type === REQUESTING_DATA);
```

`receivedData` action creator ควร return object ของ type ที่มีค่าเท่ากับ `RECEIVED_DATA`

```js
assert(receivedData('data').type === RECEIVED_DATA);
```

`asyncDataReducer` ควรเป็นฟังก์ชัน

```js
assert(typeof asyncDataReducer === 'function');
```

การส่ง `requestingData` action creator ควรอัปเดต store `state` ที่มี property ที่รับมาเป็น `true`

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

การส่ง `handleAsync` ควรส่งข้อมูลที่เรียกร้อง action และจากนั้นส่ง action ข้อมูลที่ได้รับหลังจากการ delay

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
    // Dispatch request action here

    setTimeout(function() {
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }
      // Dispatch received data action here

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
