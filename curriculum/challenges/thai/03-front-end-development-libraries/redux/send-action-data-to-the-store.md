---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

ถึงตอนนี้ คุณได้เรียนรู้วิธีส่ง actions ไปยัง Redux store แล้ว แต่จนถึงตอนนี้ actions เหล่านี้ยังไม่มีข้อมูลอื่นใดนอกจาก `type` คุณยังสามารถส่งข้อมูลเฉพาะพร้อมกับ actions ของคุณ อันที่จริง นี่เป็นเรื่องปกติมากเพราะ actions มักเกิดจากการโต้ตอบของผู้ใช้และมีแนวโน้มที่จะนำข้อมูลบางอย่างติดตัวไปด้วย และ Redux store มักต้องการทราบเกี่ยวกับข้อมูลนี้

# --instructions--

มี action creator `notesReducer()` และ `addNoteText()` พื้นฐานที่ถูกกำหนดไว้แล้วใน code editor ให้เติม body ของฟังก์ชัน `addNoteText()` ให้สำเร็จเพื่อให้ return `action` object และ object นั้น ควรมี `type` property ที่มีค่า `ADD_NOTE` และ`text` property ที่ตั้งค่าเป็นข้อมูล `note` ที่ส่งผ่านไปยัง action creator เมื่อคุณเรียกใช้ action creator คุณจะต้องส่งผ่านข้อมูล note เฉพาะที่คุณสามารถเข้าถึงสำหรับ object

ถัดไป ให้เขียนคำสั่ง `switch' ใน `notesReducer()` ให้เสร็จสิ้น คุณต้องเพิ่มเคสที่จัดการการดำเนินการ `addNoteText()` กรณีนี้ควรทริกเกอร์ทุกครั้งที่มีการดำเนินการประเภท "ADD_NOTE" และควรส่งคืนคุณสมบัติ "ข้อความ" ใน "การดำเนินการ" ขาเข้าเป็น "สถานะ" ใหม่

Next, finish writing the `switch` statement in the `notesReducer()`. You need to add a case that handles the `addNoteText()` actions. This case should be triggered whenever there is an action of type `ADD_NOTE` and it should return the `text` property on the incoming `action` as the new `state`.

action จะถูกส่งไปที่ด้านล่างของโค้ด เมื่อคุณทำเสร็จแล้วให้รันโค้ดและดูคอนโซล นั่นคือทั้งหมดที่ใช้ในการส่งข้อมูล action เฉพาะ ไปยัง store และใช้งานเมื่อคุณอัปเดต `state` ของ store

# --hints--

action creator `addNoteText` ควรจะ return object ที่มี keys `type` และ `text`

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

การส่ง action ของ type `ADD_NOTE` กับ `addNoteText` action creator ควรอัปเดต `state` ไปยัง string ที่ถูกส่งไปยัง action creator

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch(addNoteText('__TEST__NOTE'));
    const newState = store.getState();
    return initialState !== newState && newState === '__TEST__NOTE';
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());
```

# --solutions--

```js
const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line
    case ADD_NOTE:
      return action.text;
    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  return {
    type: ADD_NOTE,
    text: note
  }
  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```
