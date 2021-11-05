---
id: 587d824a367417b2b2512c46
title: Learn How JavaScript Assertions Work
challengeType: 2
forumTopicId: 301589
dashedName: learn-how-javascript-assertions-work
---

# --description--

การทำ challenge นี้จะทำให้ผู้เรียนจะต้องเขียน code โดยใช้วิธีใดวิธีหนึ่งต่อไปนี้ :

- Clone repo [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/) และทำแบบทดสอบเฉพาะส่วนนี้ให้สำเร็จ
- ใช้ [โครงการเริ่มต้น Replit ของเรา](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) เพื่อทำแบบทดสอบเหล่านี้ให้สำเร็จ
- ใช้ site builder ที่ผู้เรียนเลือก เพื่อสร้าง project ให้เสร็จ อย่าลืมรวมไฟล์ทั้งหมดจาก repo GitHub 

เมื่อผู้เรียนทำเสร็จแล้ว ตรวจสอบให้แน่ใจว่าตัว Demo ของ project ของคุณตั้งค่า Host เป็น Public  จากนั้นส่ง URL ไปที่ช่อง `Solution Link` 

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้ test ที่มีป้ายกำกับ `#1' ใน 'Basic Assertions' ให้เปลี่ยน 'assert' แต่ละรายการเป็น `assert.isNull` หรือ `assert.isNotNull` เพื่อให้ test ผ่าน (ควรประเมินว่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยัง assert

# --hints--

ควรผ่านการทดสอบทั้งหมด

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `isNull` กับ `isNotNull`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNull', 'Null is null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

คุณควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `isNull` กับ `isNotNull` 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=0').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isNotNull', '1 is not null');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

# --solutions--

```js
/**
  Backend challenges don't need solutions, 
  because they would need to be tested against a full working project. 
  Please check our contributing guidelines to learn more.
*/
```
