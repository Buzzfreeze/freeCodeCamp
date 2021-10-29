---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

แบบทดสอบสุดท้ายเหล่านี้อธิบาย methods ต่างๆ ในการบังคับใช้หลักการสำคัญของ state immutability ใน Redux Immutable state หมายความว่าคุณไม่สามารถแก้ไข state โดยตรง แต่คุณสามารถ return สำเนาใหม่ของ state

หากคุณถ่ายภาพ state ของแอป Redux เมื่อเวลาผ่านไป คุณจะเห็นบางอย่างเช่น `state 1`, `state 2`, `state 3`,`state 4`, `...` และอื่นๆ ที่แต่ละรายการ state อาจคล้ายกับ state ก่อนหน้า แต่แต่ละรายการเป็นชิ้นส่วนข้อมูลที่แตกต่างกัน อันที่จริงความไม่เปลี่ยนรูปนี้คือสิ่งที่ให้คุณสมบัติเช่น time-travel debugging ที่คุณอาจเคยได้รู้จักมาแล้ว

Redux ไม่ได้บังคับใช้ state immutability อย่างจริงจังใน store หรือ reducer ความรับผิดชอบนั้นตกอยู่ที่โปรแกรมเมอร์ โชคดีที่ JavaScript (โดยเฉพาะ ES6) มีเครื่องมือที่มีประโยชน์หลายอย่างที่คุณสามารถใช้เพื่อบังคับให้ state ไม่เปลี่ยนรูปได้ ไม่ว่าจะเป็น `string`, `number`, `array` หรือ `object` โปรดทราบว่า string และ number เป็นค่าดั้งเดิมและไม่เปลี่ยนแปลงโดยธรรมชาติ กล่าวอีกนัยหนึ่ง 3 คือ 3 เสมอ คุณไม่สามารถเปลี่ยนค่าของตัวเลข 3 อย่างไรก็ตาม `array` หรือ `object` เปลี่ยนแปลงได้ ในทางปฏิบัติ state ของคุณอาจประกอบด้วย `array` หรือ `object` เนื่องจากเป็นโครงสร้างข้อมูลที่มีประโยชน์สำหรับการแสดงข้อมูลหลายประเภท

# --instructions--

มี `store` และ `reducer`  ใน code editor สำหรับจัดการ to-do items ให้เขียน`ADD_TO_DO` case ให้สำเร็จ ใน reducer เพื่อผนวก to-do ใหม่เข้ากับ state มีสองสามวิธีในการทำสิ่งนี้ให้สำเร็จด้วย JavaScript มาตรฐานหรือ ES6 ลองดูว่าคุณสามารถหาวิธี return array ใหม่ที่มีรายการจาก `action.todo` ต่อท้ายได้หรือไม่

# --hints--

ควรมี Redux store และเริ่มต้นด้วย state เป็น `todos` array ใน code editor

```js
assert(
  (function () {
    const todos = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code'
    ];
    const initialState = store.getState();
    return (
      Array.isArray(initialState) && initialState.join(',') === todos.join(',')
    );
  })()
);
```

ทั้ง `addToDo` และ `immutableReducer` ควรเป็นฟังกืชัน

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

การส่ง action ของ type `ADD_TO_DO` บน Redux store ควรเพิ่มรายการ `todo` และห้ามเปลี่ยนแปลง state

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = [
      'Go to the store',
      'Clean the house',
      'Cook dinner',
      'Learn to code',
      '__TEST__TO__DO__'
    ];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

# --seed--

## --seed-contents--

```js
const ADD_TO_DO = 'ADD_TO_DO';

// A list of strings representing tasks to do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const ADD_TO_DO = 'ADD_TO_DO';

const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      return state.concat(action.todo);
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: ADD_TO_DO,
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
