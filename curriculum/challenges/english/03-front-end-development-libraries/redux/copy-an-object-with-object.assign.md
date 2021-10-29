---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

หลายแบบทดสอบที่ผ่านมีนั้นเราทำงานกับ array แต่ก็มีหลายวิธีที่จะช่วยบังคับใช้ state ไม่เปลี่ยนรูปเมื่อ state เป็น `object` ด้วย เครื่องมือที่มีประโยชน์สำหรับการจัดการ object คือ`Object.assign()` utility ตัว `Object.assign()` นี้นำ object เป้าหมายและ object ต้นทาง และแมป properties จาก object ต้นทางไปยัง object เป้าหมาย properties ที่ตรงกันจะถูกเขียนทับโดย properties ใน object ต้นทาง ลักษณะการทำงานนี้มักใช้เพื่อสร้างสำเนาของ object แบบง่ายๆ โดยการส่งผ่าน object ว่างเป็น argument แรกตามด้วย object ที่คุณต้องการคัดลอก นี่คือตัวอย่าง:

```js
const newObject = Object.assign({}, obj1, obj2);
```

สิ่งนี้จะสร้าง `newObject` เป็น `object` ใหม่ ซึ่งมี properties ที่มีอยู่ในปัจจุบันใน `obj1` และ `obj2`

# --instructions--

Redux state และ actions ได้รับการแก้ไขเพื่อจัดการกับ `object` สำหรับ ` state` ให้แก้ไขโค้ดเพื่อ return `state` object ใหม่สำหรับ actions ด้วย type `ONLINE` ซึ่งตั้งค่า `status` property เป็น string `online` พยายามลองใช้ `Object.assign()` เพื่อทำภารกิจให้สำเร็จ

# --hints--

ควรมี Redux store และ เริ่มตันด้วย state ที่เท่ากับ `defaultState` object ที่ถูกประกาศในบรรทัดที่ 1

```js
assert(
  (function () {
    const expectedState = {
      user: 'CamperBot',
      status: 'offline',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    const initialState = store.getState();
    return DeepEqual(expectedState, initialState);
  })()
);
```

`wakeUp` และ `immutableReducer` ควรเป็นฟังก์ชันทั้งสอง

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

การส่ง actions เป็น type `ONLINE` ควรอัปเดต property `status` ใน state เป็น `online` และไม่ควรเปลี่ยน state

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch({ type: 'ONLINE' });
    const finalState = store.getState();
    const expectedState = {
      user: 'CamperBot',
      status: 'online',
      friends: '732,982',
      community: 'freeCodeCamp'
    };
    return isFrozen && DeepEqual(finalState, expectedState);
  })()
);
```

`Object.assign` ควรถูกใช้เพื่อ return state ใหม่


```js
(getUserInput) => assert(getUserInput('index').includes('Object.assign'));
```

# --seed--

## --seed-contents--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      // Don't mutate state here or the tests will fail
      return
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const defaultState = {
  user: 'CamperBot',
  status: 'offline',
  friends: '732,982',
  community: 'freeCodeCamp'
};

const immutableReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'ONLINE':
      return Object.assign({}, state, {
        status: 'online'
      });
    default:
      return state;
  }
};

const wakeUp = () => {
  return {
    type: 'ONLINE'
  }
};

const store = Redux.createStore(immutableReducer);
```
