---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

วิธีหนึ่งที่จะช่วยบังคับใช้ state immutability ใน Redux คือการใช้ spread operator `...` ของ ES6 
spread operator ใช้งานได้หลายแบบมาก ซึ่งสามารถเอามาใช้ในแบบทดสอบที่แล้ว เพื่อทำการสร้าง array ใหม่จาก array ก็ได้ syntax นี่เป็น syntax ที่ค่อนข้างใหม่ แต่ก็มีความแพร่หลายในระดับหนึ่งแล้ว 
ถ้าคุณมี array `myArray` คุณจะใช้ `...` เพื่อสร้าง array ใหม่ได้แบบนี้:

```js
let newArray = [...myArray];
```

ตอนนี้ `newArray` ถูกคัดลอกมาจาก `myArray` โดย array ทั้งสองตัวจะอยู่คนละที่ใน memory 
ถ้าคุณทำอะไรก็ตามที่ mutate array เช่น `newArray.push(5)` ก็จะไม่ทำให้ข้อมูลใน `myArray` เปลี่ยนแปลงไป 
spead operator จะทำการแยกข้อมูลใน `myArray` ออก และเอาไปรวมกันใน array ใหม่ 
ถ้าต้องการคัดลอก array และเพิ่มข้อมูลใน array ใหม่ด้วย คุณจะเขียนแบบนี้ก็ได้ `[...myArray, 'new value']` วิธีนี้จะคืนค่าเป็น array ตัวใหม่ที่ใช้ข้อมูลจาก `myArray` และมี string `new value` ต่อท้าย
คุณใช้ spread syntax ได้หลายครั้งในการสร้าง array หนึ่งตัว แต่สิ่งสำคัญคือการใช้ syntax นี้จะเป็นแค่การทำ shallow copy เท่านั้น แปลว่าถ้าคุณใช้วิธีนี้กับ array หลายมิติ array ที่อยู่ชั้นในก็ยังจะเป็น array ที่ใช้ตำแหน่งใน memory ตำแหน่งเดิมอยู่ดี

# --instructions--

ให้ใช้ spread operator เพื่อทำการคัดลอก state และคืนค่าตัวใหม่ออกมาเมื่อมีการเพิ่ม to-do

# --hints--

ต้องใช้ Redux store และให้ state มีค่าเริ่มต้นเป็น `["Do not mutate state!"]`

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      initialState[0] === 'Do not mutate state!'
    );
  })()
);
```

ทั้ง `addToDo` และ `immutableReducer` ต้องเป็นฟังก์ชัน

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

การส่ง action ที่มี type เป็น `ADD_TO_DO` ไปยัง Redux store จะต้องทำการเพิ่มรายการ `todo` และต้องไม่เปลี่ยนแปลง state

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(addToDo('__TEST__TO__DO__'));
    const finalState = store.getState();
    const expectedState = ['Do not mutate state!', '__TEST__TO__DO__'];
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

ต้องใช้ spread operator เพื่อคืนค่า state ตัวใหม่

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // ให้คืนค่าโดยห้ามเปลี่ยนแปลง state เดิม
      return
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      return [
        ...state,
        action.todo
      ];
    default:
      return state;
  }
};

const addToDo = (todo) => {
  return {
    type: 'ADD_TO_DO',
    todo
  }
}

const store = Redux.createStore(immutableReducer);
```
