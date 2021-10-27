---
id: 5a24c314108439a4d403614d
title: Define a Redux Action
challengeType: 6
forumTopicId: 301440
dashedName: define-a-redux-action
---

# --description--

เนื่องจาก Redux เป็นเฟรมเวิร์กการจัดการ state การอัปเดต state จึงเป็นงานหลักอย่างหนึ่ง ใน Redux การอัปเดต state ทั้งหมดจะถูกเรียกให้ทำงานโดยการส่ง actions ซึ่ง actions เป็นเพียง JavaScript object ที่มีข้อมูลเกี่ยวกับ action event ที่เกิดขึ้น แล้ว Redux store จะได้รับaction object เหล่านี้ จากนั้นอัปเดต state ตามนั้น บางครั้ง Redux action ก็นำข้อมูลบางส่วนไปด้วย ตัวอย่างเช่น action จะนำ username หลังจากที่ผู้ใช้เข้าสู่ระบบ แม้ว่าข้อมูลจะเป็นทางเลือก แต่ actions จะต้องมี `type` property ที่ระบุ 'type' ของ action ที่เกิดขึ้น

ให้คิดว่า Redux actions เป็นผู้ส่งสารที่ส่งข้อมูลเกี่ยวกับเหตุการณ์ที่เกิดขึ้นในแอปของคุณไปยัง Redux store ซึ่ง store จะดำเนินการปรับปรุง state ตาม action ที่เกิดขึ้น

# --instructions--

การเขียน Redux action นั้นง่ายพอๆ กับการประกาศ object ที่มี type property ให้ลองประกาศ object `action` และกำหนด property `type`เป็นสตริง `'LOGIN'`

# --hints--

ควรมี `action` object

```js
assert(
  (function () {
    return typeof action === 'object';
  })()
);
```

`action` object ควรมี key property `type` ที่มีค่าเป็น `LOGIN`

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
// Define an action here:
```

# --solutions--

```js
const action = {
  type: 'LOGIN'
}
```
