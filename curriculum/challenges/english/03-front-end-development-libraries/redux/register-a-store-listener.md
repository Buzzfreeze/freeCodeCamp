---
id: 5a24c314108439a4d4036153
title: Register a Store Listener
challengeType: 6
forumTopicId: 301446
dashedName: register-a-store-listener
---

# --description--

อีก method หนึ่งที่คุณสามารถเข้าถึงได้บน Redux `store` object คือ `store.subscribe()` สิ่งนี้ทำให้คุณสามารถเพิ่ม listener function ไปยัง store ซึ่งจะถูกเรียกใช้เมื่อใดก็ตามที่มีการส่ง action กับ store วิธีหนึ่งที่ใช้ง่าย ๆ สำหรับ method นี้คือเพิ่มฟังก์ชันกับ store ของคุณ โดยจะบันทึกข้อความทุกครั้งที่ได้รับ action และ store ได้รับการอัปเดต

# --instructions--

ลองเขียน callback function ที่เพิ่มตัวแปร global `count` ทุกครั้งที่ store ได้รับ action และส่งฟังก์ชันนี้ไปยังเมธอด `store.subscribe()` คุณจะเห็นว่า `store.dispatch()` ถูกเรียกใช้สามครั้งติดต่อกัน แต่ละครั้งจะส่งผ่าน action object โดยตรง ดู console output ระหว่าง action ที่ส่งไปเพื่อดูการอัปเดตที่เกิดขึ้น

# --hints--

การส่ง `ADD` action บน store ควรเพิ่ม state ทีละ `1`

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

มันควรมี listener function เพิ่มลงไปที่ store โดยการใช้ `store.subscribe`

```js
(getUserInput) => assert(getUserInput('index').match(/store\s*\.\s*subscribe\(/gm));
```


`store.subscribe` ควรรับฟังก์ชันหนึ่งมา

```js
(getUserInput) => assert(getUserInput('index').match(/(\s*function\s*)|(\s*\(\s*\)\s*=>)/gm)) 
```

การ callback ไปยัง `store.subscribe` ควรที่จะเพิ่มตัวแปร global `count` ตอนที่ store มีการอัปเดต

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

// Global count variable:
let count = 0;

// Change code below this line

// Change code above this line

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
