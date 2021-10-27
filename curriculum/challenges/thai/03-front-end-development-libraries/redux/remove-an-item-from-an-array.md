---
id: 5a24c314108439a4d403615a
title: Remove an Item from an Array
challengeType: 6
forumTopicId: 301447
dashedName: remove-an-item-from-an-array
---

# --description--

ถึงเวลาฝึกการลบรายการออกจาก array ซึ่งสามารถใช้ spread operator ในที่นี่ได้เช่นกัน JavaScript methods ที่มีประโยชน์อื่นๆ ได้แก่ `slice()` และ `concat()`

# --instructions--

reducer และ action creator ได้รับการแก้ไขเพื่อลบรายการออกจาก array ตามดัชนีของรายการ ลองเขียน reducer เพื่อให้ state array ใหม่ถูก return พร้อมกับรายการที่ดัชนีเฉพาะถูกลบออกให้สำเร็จ

# --hints--

ควรมี Redux store และเริ่มต้นด้วย state ที่เท่ากับ `[0,1,2,3,4,5]`

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

ทั้ง `removeItem` และ `immutableReducer` ควรเป็นฟังก์ชัน

```js
assert(
  typeof removeItem === 'function' && typeof immutableReducer === 'function'
);
```

การส่ง `removeItem` action creator ควรที่จะลบรายการจาก state และไม่ควรเปลี่ยนแปลง state

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
      // Don't mutate state here or the tests will fail
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
