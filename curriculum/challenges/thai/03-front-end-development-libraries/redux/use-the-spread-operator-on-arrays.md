---
id: 5a24c314108439a4d4036159
title: Use the Spread Operator on Arrays
challengeType: 6
forumTopicId: 301452
dashedName: use-the-spread-operator-on-arrays
---

# --description--

โซลูชันหนึ่งจาก ES6 เพื่อช่วยบังคับใช้ state immutability ใน Redux คือ spread operator: `...` spread operator มีการใช้งานที่หลากหลาย ซึ่งหนึ่งในนั้นถูกนำมาใช้กับแบบทดสอบครั้งก่อนในการผลิต array ใหม่จาก array ที่มีอยู่ นี่เป็น syntax ที่ค่อนข้างใหม่ แต่มันก็ได้เอาไปใช้กันโดยทั่วไป ตัวอย่างเช่น หากคุณมี array `myArray` และเขียนดังนี้:

```js
let newArray = [...myArray];
```

ตอนนี้ `newArray` เป็นโคลนของ `myArray` ซึ่ง array ทั้งสองยังคงอยู่แยกจากกันในหน่วยความจำ หากคุณ mutation เช่น `newArray.push(5)` แล้วนั้น `myArray` จะคงไม่เปลี่ยนแปลง `...` ได้ *กระจาย* ค่าใน `myArray' อย่างมีประสิทธิภาพไปยัง array ใหม่ ในการโคลน array และยังเพิ่มค่าเพิ่มเติมใน array ใหม่ คุณสามารถเขียน `[...myArray, 'new value']` ซึ่งจะ return array ใหม่ที่ประกอบด้วยค่าใน `myArray` และ string `new value` เป็นค่าสุดท้าย Spread syntax สามารถใช้ได้หลายครั้งในองค์ประกอบ array เช่นนี้ แต่สิ่งสำคัญคือต้องสังเกตว่ามันสร้างสำเนา array ที่ง่ายๆ เท่านั้น กล่าวคือ มีการดำเนินการ array ที่ไม่เปลี่ยนรูปสำหรับ array แบบหนึ่งมิติเท่านั้น

# --instructions--

ให้ใช้ spread operator เพื่อ return สำเนาใหม่ของ state เมื่อมีการเพิ่ม to-do

# --hints--

ควรมี Redux store และเริ่มต้นด้วย state ที่เท่ากับ `["Do not mutate state!"]`

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

ทั้ง `addToDo` และ `immutableReducer`ควรเป็นฟังก์ชัน

```js
assert(typeof addToDo === 'function' && typeof immutableReducer === 'function');
```

การส่ง action ของ type `ADD_TO_DO` บน Redux store ควรเพิ่มรายการ `todo` และไม่ควรเปลี่ยนแปลง state

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

spread operator ควรถูกใช้เพื่อ return state ใหม่

```js
(getUserInput) => assert(getUserInput('index').includes('...state'));
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = ['Do not mutate state!'], action) => {
  switch(action.type) {
    case 'ADD_TO_DO':
      // Don't mutate state here or the tests will fail
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
