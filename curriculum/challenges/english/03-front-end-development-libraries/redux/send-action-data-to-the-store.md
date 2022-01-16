---
id: 5a24c314108439a4d4036155
title: Send Action Data to the Store
challengeType: 6
forumTopicId: 301448
dashedName: send-action-data-to-the-store
---

# --description--

คุณรู้วิธีส่ง action ไปยัง Redux store แล้ว แต่จนถึงตอนนี้ action พวกนี้ยังไม่มีข้อมูลอื่นนอกจาก `type` เลย 
คุณจะส่งข้อมูลไปพร้อมกับ action ได้ และการส่งข้อมูลแบบนี้เป็นเรื่องปกติ เพราะ action มักเกิดจากการที่ผู้ใช้ทำอะไรบางอย่าง และมีโอกาสที่ต้องส่งข้อมูลไปด้วย โดยส่วนใหญ่ Redux store มักต้องใช้ข้อมูลนี้

# --instructions--

เราได้เขียน action creator ชื่อ `notesReducer()` และ `addNoteText()` ไว้ให้คร่าวๆใน code editor แล้ว 
ให้เขียนฟังก์ชัน `addNoteText()` ให้เสร็จ โดยฟังก์ชันนี้ต้องคืนค่าเป็น `action` object ที่มี property สองตัวคือ 

1. `type` ที่มีค่าเป็น `ADD_NOTE` และ
2. `text` ที่เป็นข้อมูลของ `note` ถูกส่งเข้ามาใน action creator 

เมื่อเรียกใช้ action creator ค่าของ note จะถูกส่งเข้าไปด้วย

ต่อไป ให้เขียนคำสั่ง `switch` ใน `notesReducer()` ให้เสร็จ โดยจะต้องเพิ่ม case ที่รองรับ action ที่เป็น `ADD_NOTE` (ซึ่งจะเกิดจากการเรียกใช้ `addNoteText()`)และต้องคืนค่า `text` ของ `action` ออกมาเป็น `state` ตัวใหม่ 


เราได้เขียนฟังก์ชัน `dispatch` ไว้ให้แล้วที่ส่วนล่างๆของโค้ด ถ้าทำแบบฝึกหัดเสร็จแล้ว ให้ลองรันโค้ดและดูที่คอนโซล 
โค้ดที่คุณได้เขียนไปคือวิธีการส่งข้อมูลของ action ไปยัง store และเอาไปใช้งานเมื่อคุณอัปเดต `state` ของ store

# --hints--

action creator `addNoteText` ต้องคืนค่าเป็น object ที่มี property เป็น `type` และ `text`

```js
assert(
  (function () {
    const addNoteFn = addNoteText('__TEST__NOTE');
    return addNoteFn.type === ADD_NOTE && addNoteFn.text === '__TEST__NOTE';
  })()
);
```

การ dispatch action ที่มีค่าของ type เป็น `ADD_NOTE` โดยใช้ action creator ชื่อ `addNoteText` ต้องไปอัปเดต `state` ให้เป็นค่าของ string ที่ถูกส่งไปยัง action creator

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
    // แก้ไขโค้ดใต้บรรทัดนี้

    // แก้ไขโค้ดเหนือบรรทัดนี้
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // แก้ไขโค้ดใต้บรรทัดนี้

  // แก้ไขโค้ดเหนือบรรทัดนี้
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
    // แก้ไขโค้ดใต้บรรทัดนี้
    case ADD_NOTE:
      return action.text;
    // แก้ไขโค้ดเหนือบรรทัดนี้
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // แก้ไขโค้ดใต้บรรทัดนี้
  return {
    type: ADD_NOTE,
    text: note
  }
  // แก้ไขโค้ดเหนือบรรทัดนี้
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello Redux!'));
console.log(store.getState());
```
