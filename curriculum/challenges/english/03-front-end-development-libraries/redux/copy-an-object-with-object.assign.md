---
id: 5a24c314108439a4d403615b
title: Copy an Object with Object.assign
challengeType: 6
forumTopicId: 301437
dashedName: copy-an-object-with-object-assign
---

# --description--

แบบทดสอบที่ผ่านมานั้น เราได้ลองจัดการกับ immutable state ที่เป็น array ไปแล้ว 
คราวนี้มาดูในกรณีที่ state เป็น `object` กันบ้าง เราจะใช้ `Object.assign()` เพื่อจัดการ object โดยไม่เปลี่ยนแปลงค่าเดิม 
method `Object.assign()` นี้จะอ่านค่าของ object เป้าหมายและ object ต้นทาง และแมป property จาก object ต้นทางไปยัง object เป้าหมาย โดย property ที่ชื่อตรงกันจะถูกเขียนทับโดยใช้ค่าของ property ใน object ต้นทาง
เราจะใช้วิธีนี้ในการคัดลอก object อย่างง่ายๆ โดยการส่ง object ว่างเป็น argument แรกตามด้วย object ที่คุณต้องการคัดลอก 
ลองดูตัวอย่าง:

```js
const newObject = Object.assign({}, obj1, obj2);
```

โค้ดด้านบนนี้จะสร้าง `newObject` เป็น `object` ใหม่ ที่มี property เหมือนกับ `obj1` และ `obj2`

# --instructions--

เราได้เขียน Redux state และ action ใหม่ให้แล้ว เพื่อให้จัดการกับ `state` ที่เป็น `object` 
ให้แก้ไขโค้ดเพื่อให้คืนค่า `state` เป็น object ใหม่ ในกรณีที่ action type เป็น `ONLINE` โดยใน object ใหม่ให้ property มีค่าเป็น string `online` 
ให้ใช้ `Object.assign()` ในการทำแบบทดสอบนี้

# --hints--

ต้องมี Redux store ที่มี state เริ่มต้นเป็น object ที่ชื่อ `defaultState` ที่ถูกประกาศในบรรทัดที่ 1

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

`wakeUp` และ `immutableReducer` ต้องเป็นฟังก์ชัน

```js
assert(typeof wakeUp === 'function' && typeof immutableReducer === 'function');
```

การส่ง action ที่มี type เป็น `ONLINE` ต้องไปทำให้ property `status` ของ state เป็น `online` โดยไม่เปลี่ยนค่าของ state เดิม

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

ต้องใช้ `Object.assign` เพื่อสร้าง state ตัวใหม่ที่คืนค่าออกมา


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
      // ให้คืนค่าโดยห้ามเปลี่ยนแปลง state เดิม
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
