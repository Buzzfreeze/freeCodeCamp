---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

Redux เป็นเฟรมเวิร์กที่ใช้จัดการ state เพราะฉะนั้นหนึ่งในหน้าที่หลักของ Redux คือการอัปเดต state
การอัปเดต state ทั้งหมดจะถูกเรียกให้ทำงานโดยการส่ง action ซึ่ง action เป็นแค่ JavaScript object ที่มีข้อมูลของ action event ที่เกิดขึ้น 
เมื่อ Redux store ได้รับ action object พวกนี้ ก็จะไปอัปเดต state ตามนั้น 
บางครั้ง Redux action ก็จะใช้ส่งข้อมูลไปด้วย 
เช่น action จะเก็บค่าของ username หลังจากที่ผู้ใช้เข้าสู่ระบบ 
action จะมีข้อมูลแบบด้านบนหรือไม่มีก็ได้ แต่ที่จำเป็นต้องมีคือ property `type` ที่จะใช้ระบุประเภทของ action ที่เกิดขึ้น

ให้คิดว่า Redux actions เป็นผู้ส่งสารที่ส่งข้อมูลเกี่ยวกับเหตุการณ์ที่เกิดขึ้นในแอปของคุณไปยัง Redux store ซึ่ง store จะดำเนินการปรับปรุง state ตาม action ที่เกิดขึ้น

# --instructions--

การเขียน Redux action ก็เหมือนกับการประกาศ object ที่มี property `type`
ให้ลองประกาศ object ชื่อ `action` และกำหนดให้ property `type` มีค่าเป็น string `'LOGIN'`

# --hints--

ต้องมี object `action` ในโค้ด

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

object `action` ต้องมี property ชื่อ `type` ที่มีค่าเป็น `LOGIN`

```js
assert(
  (function () {
    return action.type === 'LOGIN';
  })()
);
```

# --seed--

## --seed-contents--

```js
// ประกาศตัวแปร action ข้างล่างนี้:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
