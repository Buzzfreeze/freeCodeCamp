---
id: 5a24c314108439a4d4036158
title: Never Mutate State
challengeType: 6
forumTopicId: 301445
dashedName: never-mutate-state
---

# --description--

เรามาถึงแบบทดสอบส่วนสุดท้ายแล้ว ซึ่งแบบทดสอบ 4 ตัวสุดท้ายนี้จะอธิบาย method ต่างๆ ในการบังคับใช้หลักของ state immutability ใน Redux 

Immutable state (state ที่ไม่เปลี่ยนรูป) แปลว่าคุณจะไม่แก้ไข state โดยตรง แต่คุณจะคืนค่าเป็น state ตัวใหม่เสมอ

ถ้าคุณเก็บข้อมูลของ state ของแอป Redux ทุกครั้งที่มีการเปลี่ยนแปลง คุณจะเห็นการเปลี่ยนแปลงของ state แบบนี้ `state 1`, `state 2`, `state 3`,`state 4`, `...` ฯลฯ 
โดยที่ state แต่ละตัวอาจจะมีข้อมูลคล้ายกับ state ก่อนหน้า แต่จริงๆแล้ว state แต่ละตัวจะเป็นข้อมูลคนละก้อนกัน 
การที่ state มีความเป็น immutable ทำให้ฟีเจอร์เช่น time-travel debugging เกิดขึ้นได้

Redux ไม่ได้บังคับใช้ state immutability อย่างจริงจังใน store หรือ reducer แต่โปรแกรมเมอร์จะต้องจัดการในส่วนนี้เอง เราโชคดีที่ JavaScript (โดยเฉพาะ ES6) มีเครื่องมือที่คุณใช้เพื่อบังคับให้ state ไม่เปลี่ยนรูปได้ ไม่ว่าจะเป็น `string`, `number`, `array` หรือ `object` 

ถ้ายังจำเรื่อง data type ได้ string และ number เป็นข้อมูลประเภทที่ immutable อยู่แล้ว แต่ `array` หรือ `object` นั้นเป็นประเภทของข้อมูลที่ mutable 
ในความเป็นจริง state ของคุณอาจจะเป็น `array` หรือ `object` เพราะว่าเป็นโครงสร้างข้อมูลที่ใช้เก็บข้อมูลได้หลากหลายรูปแบบ

# --instructions--

เราได้เขียน `store` และ `reducer` ที่ใช้จัดการ to-do item ใน code editor ให้แล้ว

ให้เขียน case `ADD_TO_DO` ใน reducer ให้เสร็จ เพื่อเติม to-do ใหม่เข้าไปใน state 

มีหลายวิธีที่จะทำแบบทดสอบนี้ได้ ทั้งการใช้ JavaScript แบบดั้งเดิมหรือใช้ ES6 
ให้ลองดูว่าคุณจะหาวิธีคืนค่าเป็น array ใหม่ ที่นำข้อมูลจาก `action.todo` มาต่อท้ายได้หรือไม่

# --hints--

ต้องมี Redux store ที่มีค่าของ state เริ่มต้นเป็น array `todos` ใน code editor

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

ทั้ง `addToDo` และ `immutableReducer` ต้องเป็นฟังก์ชัน

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

การส่ง action ที่มี type เป็น `ADD_TO_DO` ไปยัง Redux store ต้องเพิ่มรายการ `todo` และห้ามเปลี่ยนแปลง state

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

// array ของ string ที่เป็น to-do:
const todos = [
  'Go to the store',
  'Clean the house',
  'Cook dinner',
  'Learn to code',
];

const immutableReducer = (state = todos, action) => {
  switch(action.type) {
    case ADD_TO_DO:
      // ให้คืนค่าโดยห้ามเปลี่ยนแปลง state เดิม
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
