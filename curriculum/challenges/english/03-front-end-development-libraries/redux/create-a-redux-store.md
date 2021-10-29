---
id: 5a24c314108439a4d403614b
title: Create a Redux Store
challengeType: 6
forumTopicId: 301439
dashedName: create-a-redux-store
---

# --description--

Redux เป็นเฟรมเวิร์กการจัดการ state ที่สามารถใช้ได้กับเทคโนโลยีเว็บต่างๆ มากมาย รวมถึง React

ใน Redux มี state object เดียวที่รับผิดชอบ state ทั้งหมดของแอปพลิเคชันของคุณ ซึ่งหมายความว่าหากคุณมีแอป React ที่มี component 10 components และแต่ละ component มี local state เป็นของตัวเอง state ทั้งหมดของแอปจะถูกกำหนดโดย state object เดียวที่อยู่ใน Redux `store' นี่เป็นหลักการสำคัญประการแรกที่ต้องทำความเข้าใจเมื่อเรียนรู้ Redux: Redux store เป็นแหล่งความจริงเพียงแหล่งเดียวเมื่อพูดถึง state แอปพลิเคชัน

นอกจากนี้ยังหมายความว่าเมื่อใดก็ตามที่แอปของคุณต้องการอัปเดต state **ต้อง** ดำเนินการผ่าน Redux store การไหลของข้อมูลแบบทิศทางเดียวทำให้ง่ายต่อการติดตามการจัดการ state ในแอปของคุณ

# --instructions--

Redux `store` เป็น object ที่เก็บและจัดการแอปพลิเคชัน `state` มันมี method ที่เรียกว่า `createStore()` บน Redux object ซึ่งคุณใช้สร้าง Redux `store` method นี้ใช้ฟังก์ชัน `reducer` เป็น argument ที่จำเป็น ฟังก์ชัน `reducer` จะถูกอธิบายเพิ่มเติมในแบบทดสอบข้างหน้า และถูกกำหนดไว้ให้แล้วสำหรับคุณใน code editor เพียงแค่ใช้ `state` เป็น argument และ return `state`

ให้ประกาศตัวแปร `store` และกำหนดมันให้กับ `createStore()` method แล้วส่งผ่าน `reducer` เป็น argument

**Note:** โค้ดใน editor ใช้ ES6 default argument syntax เพื่อเริ่มต้น state นี้เพื่อเก็บค่า `5` หากคุณไม่คุ้นเคยกับ argument เริ่มต้น โปรดดู [ES6 section in the Curriculum](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions) ซึ่งช่วยอธิบายหัวข้อนี้.

# --hints--

ควรมี Redux store

```js
assert(typeof store.getState === 'function');
```

Redux store ควรมีค่าเป็น 5 สำหรับ state


```js
assert(store.getState() === 5);
```

# --seed--

## --seed-contents--

```js
const reducer = (state = 5) => {
  return state;
}

// Redux methods are available from a Redux object
// For example: Redux.createStore()
// Define the store here:
```

# --solutions--

```js
const reducer = (state = 5) => {
  return state;
}

const store = Redux.createStore(reducer);
```
