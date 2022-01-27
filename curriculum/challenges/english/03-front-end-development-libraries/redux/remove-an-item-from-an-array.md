---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

ถึงเวลาฝึกการลบข้อมูลออกจาก array แล้ว เราก็จะใช้ spread operator ลบข้อมูลได้เช่นกัน แต่ก็ยังมี method ของ JavaScript ที่ใช้ได้คือ `slice()` และ `concat()`

# --instructions--

เราได้เขียน reducer และ action creator ใหม่ให้แล้ว เพื่อให้ทำการลบข้อมูลใน array ออกตาม index ที่ให้ไป 

ลองเขียน reducer เพื่อให้คืนค่าเป็น state ใหม่ที่ลบข้อมูลใน index ที่ระบุออกไปแล้ว

# --hints--

ต้องมี Redux store ที่มีค่าเริ่มต้นของ state เป็น `[0,1,2,3,4,5]`

```js
assert(
  (function () {
    const initialState = store.getState();
    return (
      Array.isArray(initialState) === true &&
      DeepEqual(initialState, [0, 1, 2, 3, 4, 5])
    );
  })()
);
```

ทั้ง `removeItem` และ `immutableReducer` ต้องเป็นฟังก์ชัน

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

การส่ง `removeItem` action creator ต้องลบข้อมูลออกจาก state โดยที่ไม่เปลี่ยนแปลง state

```js
assert(
  (function () {
    const initialState = store.getState();
    const isFrozen = DeepFreeze(initialState);
    store.dispatch(removeItem(3));
    const state_1 = store.getState();
    store.dispatch(removeItem(2));
    const state_2 = store.getState();
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    store.dispatch(removeItem(0));
    const state_3 = store.getState();
    return (
      isFrozen &&
      DeepEqual(state_1, [0, 1, 2, 4, 5]) &&
      DeepEqual(state_2, [0, 1, 4, 5]) &&
      DeepEqual(state_3, [5])
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      // ให้คืนค่าโดยห้ามเปลี่ยนแปลง state เดิม
      return
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```

# --solutions--

```js
const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    default:
      return state;
  }
};

const removeItem = (index) => {
  return {
    type: 'REMOVE_ITEM',
    index
  }
}

const store = Redux.createStore(immutableReducer);
```
