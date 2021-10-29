---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

`Provider` component อนุญาตให้คุณระบุ `state` และ `dispatch` ให้กับ React component ของคุณ แต่คุณต้องระบุให้แน่ชัดว่าต้องการ state และ action ใด ด้วยวิธีนี้คุณต้องแน่ใจว่าแต่ละ component สามารถเข้าถึง state ที่ต้องการได้เท่านั้น คุณทำได้โดยสร้างสองฟังก์ชัน: `mapStateToProps()` และ `mapDispatchToProps()`

ในฟังก์ชันเหล่านี้ คุณจะประกาศส่วนของ state ที่คุณต้องการเข้าถึงและ action creators ใดที่คุณต้องสามารถ dispatch ได้ เมื่อฟังก์ชันเหล่านี้พร้อมแล้ว คุณจะเห็นวิธีใช้ `connect` method ของ React Redux เพื่อเชื่อมต่อกับ component ของคุณในแบบทดสอบอื่นๆ

**Note:** ในเบื้องหลัง React Redux ใช้ `store.subscribe()` method เพื่อใช้งาน `mapStateToProps()`

# --instructions--

ลองสร้างฟังก์ชัน `mapStateToProps()` ฟังก์ชันนี้ควรใช้ `state` เป็น argument จากนั้น return object map ที่ระบุชื่อ property เฉพาะ ซึ่ง property เหล่านี้จะเข้าถึง component ของคุณได้ผ่าน `props` เนื่องจากตัวอย่างนี้เก็บ state ทั้งหมดของแอปไว้ใน array เดียว คุณจึงสามารถส่ง state ทั้งหมดนั้นไปยัง component ของคุณได้ โดยสร้าง property `messages` ใน object ที่ถูก return และตั้งค่าเป็น `state`

# --hints--

const `state` จะต้องเป็น array เปล่า

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` ควรเป็นฟังก์ชัน

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` ควร return object

```js
assert(typeof mapStateToProps() === 'object');
```

การส่ง array เป็น state ไปยัง `mapStateToProps` ควร return array นี้ที่กำหนดให้กับ key ของ `messages`

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// Change code below this line
```

# --solutions--

```jsx
const state = [];

// Change code below this line

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
