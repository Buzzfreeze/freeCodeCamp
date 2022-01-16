---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux เป็นเฟรมเวิร์กที่ใช้จัดการ state ซึ่งใช้กับเว็บได้หลายแบบ รวมถึง React ด้วย

ใน Redux จะใช้ object state ตัวเดียวที่รับผิดชอบ state ทั้งหมดในแอปพลิเคชันของคุณ 
แปลว่าถ้าแอป React ของคุณมี component 10 ตัว และแต่ละ component ก็มี local state เป็นของตัวเอง state ทั้งหมดในแอปจะถูกกำหนดโดย state เดียวที่อยู่ใน Redux `store` 
หลักการแรกที่ต้องทำความเข้าใจเมื่อเรียนรู้ Redux คือ Redux store  state จะเป็นที่เก็บข้อมูลหลักของ state ในแอปพลิเคชัน

นอกจากนี้ยังหมายความว่าเมื่อใดก็ตามที่แอปของคุณต้องการอัปเดต state **ต้อง** ทำผ่าน Redux store การที่ข้อมูลไหลไปในทิศทางเดียวแบบนี้ การติดตามการจัดการ state ในแอปของคุณง่ายขึ้นมาก

# --instructions--

Redux `store` เป็น object ที่เก็บและจัดการ `state` ของแอป ซึ่งจะมี method ชื่อ `createStore()` ใน Redux object ซึ่งคุณใช้สร้าง Redux `store` 
การเรียกใช้ method นี้จำเป็นต้องส่ง argument เป็นฟังก์ชัน `reducer` เข้าไป
เราได้เขียนฟังก์ชัน `reducer` ไว้ให้แล้วใน code editor โดยจะทำแค่การรับ `state` เป็น argument และคืนค่า `state` นั้นออกมา
เราจะอธิบายเรื่องฟังก์ชัน `reducer` ในแบบทดสอบต่อๆไป 

ให้ประกาศตัวแปร `store` ซึ่งรับค่ามาจาก method `createStore()` แล้วส่ง `reducer` เป็น argument ให้กับ method นี้

**Note:** โค้ดใน editor ใช้ ES6 default argument syntax เพื่อให้ state มีค่า default เป็น `5` ถ้าคุณยังไม่เข้าใจเรื่อง default argument ให้ลองดูทำความเข้าใจดูใน [บทเรียนเรื่อง ES6](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions)

# --hints--

ต้องมี Redux store

```js
assert(typeof store.getState === 'function');
```

state ของ Redux store ต้องมีค่าเป็น 5


```js
assert(store.getState() === 5);
```

# --seed--

## --seed-contents--

```js
const reducer = (state = 5) => {
  return state;
}

// method ของ Redux จะเข้าถึงได้จาก Redux object
// เช่น: Redux.createStore()
// ให้ประกาศตัวแปร store ด้านล่างนี้:
```

# --solutions--

```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
