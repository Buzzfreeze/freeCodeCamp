---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

method อีกตัวหนึ่งที่เข้าถึงได้จาก Redux `store` object คือ `store.subscribe()` 
method นี้ทำให้คุณเพิ่ม listener function ให้กับ store ได้ โดยจะถูกเรียกใช้ทุกครั้งที่มีการส่ง action ให้กับ store 
การใช้ method นี้แบบง่ายๆวิธีหนึ่งคือ การให้ฟังก์ชัน log ข้อมูลลงบน console ทุกครั้งที่ได้รับ action และ store ถูกอัปเดต

# --instructions--

ให้เขียน callback function ที่เพิ่มค่าของตัวแปร global ชื่อ `count` ทุกครั้งที่ store ได้รับ action และส่งฟังก์ชันนี้ไปยัง `store.subscribe()` 
คุณจะเห็นว่า `store.dispatch()` ถูกเรียกใช้สามครั้งติดต่อกัน แต่ละครั้งจะส่ง action object เข้าไปโดยตรง 
ให้ดู log ใน console ในระหว่างที่เกิดการอัปเดตขึ้น

# --hints--

การส่ง action `ADD` ไปยัง store ต้องเพิ่ม state ทีละ `1`

```js
assert(
  (function () {
    const initialState = store.getState();
    store.dispatch({ type: 'ADD' });
    const newState = store.getState();
    return newState === initialState + 1;
  })()
);
```

ต้องผูก listener function กับ store โดยใช้ `store.subscribe`

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```


`store.subscribe` ควรรับฟังก์ชันหนึ่งมา

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

ฟังก์ชันที่ส่งไปใน `store.subscribe` ต้องเพิ่มค่าของตัวแปร global ที่ชื่อ `count` ทุกครั้งที่ store มีการอัปเดต

```js
assert(store.getState() === count);
```

# --seed--

## --before-user-code--

```js
count = 0;
```

## --seed-contents--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// ตัวแปร Global:
let count = 0;

// แก้ไขโค้ดใต้บรรทัดนี้

// แก้ไขโค้ดเหนือบรรทัดนี้

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
```

# --solutions--

```js
const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);
 let count = 0;
// Change code below this line

store.subscribe( () =>
 {
 count++;
 }
);

// Change code above this line

store.dispatch({type: ADD});
store.dispatch({type: ADD});
store.dispatch({type: ADD});
```
