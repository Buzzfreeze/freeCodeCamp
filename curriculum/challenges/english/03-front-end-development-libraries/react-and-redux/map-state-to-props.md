---
id: 5a24c314108439a4d4036145
title: Map State to Props
challengeType: 6
forumTopicId: 301433
dashedName: map-state-to-props
---

# --description--

component `Provider` ให้คุณส่ง `state` และ `dispatch` ไปยัง React component ของคุณได้ แต่คุณต้องระบุให้แน่ชัดว่าต้องการ state และ action ตัวไหน 
การทำแบบนี้จะทำให้แต่ละ component สามารถเข้าถึงได้เฉพาะ state ที่ต้องใช้เท่านั้น 

การทำวิธีนี้เราต้องใช้ฟังก์ชันสองตัว คือ `mapStateToProps()` และ `mapDispatchToProps()`

ในฟังก์ชันสองตัวนี้ คุณต้องประกาศส่วนของ state ที่ต้องการเข้าถึง และประกาศว่า action creator ตัวไหนที่อยากให้ dispatch ได้ 

ถ้าคุณใช้ฟังก์ชันสองตัวนี้ได้แล้ว เราจะสอน method `connect` ของ React Redux เพื่อใช้เชื่อมต่อกับ component ของคุณในแบบทดสอบหน้า

**Note:** React Redux จะใช้ method `store.subscribe()` ไปเรียกใช้ `mapStateToProps()` ที่เรากำลังจะเขียน

# --instructions--

ให้สร้างฟังก์ชัน `mapStateToProps()` โดยฟังก์ชันนี้จะรับ `state` เป็น argument จากนั้นจะคืนค่าเป็น object ที่เก็บ state ลงใน property ที่เราตั้งให้ state นั้น
component ของคุณจะเข้าถึง property นี้ได้ผ่าน `props` 

ในตัวอย่างนี้เรามี state เป็นแค่ array ตัวเดียว คุณจึงสามารถส่ง state ทั้งก้อนไปยัง component ได้เลย 

เขียนให้ฟังก์ชันนี้คืนค่าเป็น object ที่มี property ชื่อ `messages` ที่เก็บค่าของ `state` ทั้งก้อน

# --hints--

const `state` จะต้องเป็น array เปล่า

```js
assert(Array.isArray(state) && state.length === 0);
```

`mapStateToProps` ต้องเป็นฟังก์ชัน

```js
assert(typeof mapStateToProps === 'function');
```

`mapStateToProps` ต้องคืนค่าเป็น object

```js
assert(typeof mapStateToProps() === 'object');
```

เมื่อส่ง state ที่เป็น array ไปยัง `mapStateToProps` ต้องคืนค่าเป็น object ทีมี property ชื่อ `messages` โดยเก็บ array ที่รับเข้ามาเป็นค่าของ property นี้

```js
assert(mapStateToProps(['messages']).messages.pop() === 'messages');
```

# --seed--

## --seed-contents--

```jsx
const state = [];

// แก้ไขโค้ดใต้บรรทัดนี้
```

# --solutions--

```jsx
const state = [];

// แก้ไขโค้ดใต้บรรทัดนี้

const mapStateToProps = (state) => {
  return {
    messages: state
  }
};
```
