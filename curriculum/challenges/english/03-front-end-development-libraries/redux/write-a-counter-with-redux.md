---
id: 5a24c314108439a4d4036157
title: Write a Counter with Redux
challengeType: 6
forumTopicId: 301453
dashedName: write-a-counter-with-redux
---

# --description--

ตอนนี้คุณได้เรียนรู้หลักการสำคัญของ Redux ทั้งหมดแล้ว! คุณได้เห็นวิธีสร้าง action และ action creator, สร้าง Redux Store, ส่ง action ไปใน store และออกแบบการอัปเดต state ด้วย reducer ที่เป็น pure function
คุณยังได้เห็นวิธีจัดการ state ที่ซับซ้อนโดยใช้ reducer composition และจัดการ asynchronous action แล้วด้วย 
ตัวอย่างที่ได้เรียนไปพวกนี้เป็นตัวอย่างแบบง่ายๆ แต่แนวคิดที่ได้เรียนไปเป็นหลักการสำคัญของ Redux หากคุณเข้าแนวคิดที่เราสอนไปอย่างดี คุณก็พร้อมที่จะเริ่มสร้างแอป Redux ของคุณเองแล้ว 
แบบทดสอบต่อไปจะพูดถึงรายละเอียดบางอย่างเกี่ยวกับ immutability ของ `state` แต่ก่อนอื่น มาทบทวนทุกอย่างที่คุณเรียนไปแล้วกัน

# --instructions--

ในบทเรียนนี้ สร้างแอปที่ใช้นับเลขโดยใช้ Redux ตั้งแต่ต้นเลย 
เรามีโค้ดให้บางส่วนใน code editor แล้ว แต่คุณจะต้องเขียนที่เหลือเอง! 
ให้ใช้ชื่อที่ให้มาเพื่อสร้าง 

1. action creator ชื่อ `incAction` และ `decAction` 
2. ฟังก์ชัน reducer ชื่อ `counterReducer()`
3. action type ชื่อ `INCREMENT` (เพิ่มค่า) และ `DECREMENT` (ลดค่า) และ
4. Redux `store` 

เมื่อทำเสร็จแล้วคุณต้องใช้ `INCREMENT` หรือ `DECREMENT` action เพื่อเพิ่มหรือลด state ที่เก็บไว้ใน `store` ได้
ขอให้สนุกกับการสร้างแอป Redux แอปแรกของคุณ!

# --hints--

action creator `incAction` ต้องคืนค่าเป็น action object ที่มี `type` เป็น `INCREMENT`

```js
assert(incAction().type === INCREMENT);
```

action creator `decAction` ต้องคืนค่าเป็น action object ที่มี `type` เป็น `DECREMENT`

```js
assert(decAction().type === DECREMENT);
```

Redux store ต้องมีค่า `state` เริ่มต้นเป็น 0

```js
assert(store.getState() === 0);
```

การส่ง `incAction` ไปใช้ใน Redux store ต้องทำให้ `state` เพิ่มขึ้นทีละ 1

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

การส่ง `decAction` ไปใช้ใน Redux store ต้องทำให้ `state` ลดลงทีละ 1

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

`counterReducer` ต้องเป็นฟังก์ชัน

```js
assert(typeof counterReducer === 'function');
```

# --seed--

## --seed-contents--

```js
const INCREMENT = null; // ประกาศตัวแปรค่าคงที่สำหรับใช้เป็น action type INCREMENT
const DECREMENT = null; // ประกาศตัวแปรค่าคงที่สำหรับใช้เป็น action type DECREMENT

const counterReducer = null; // เขียน reducer ที่จะเพิ่ม/ลด ค่าของ state ทีละ 1 ตาม action type ที่ได้รับ

const incAction = null; // ประกาศฟังก์ชัน action creator สำหรับการเพิ่มค่า

const decAction = null; // ประกาศฟังก์ชัน action creator สำหรับการลดค่า

const store = null; // ประกาศ Redux store ที่นี่ แล้วส่ง reducer เข้าไปด้วย
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
