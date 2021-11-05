---
id: 587d824b367417b2b2512c47
title: Test if a Variable or Function is Defined
challengeType: 2
forumTopicId: 301602
dashedName: test-if-a-variable-or-function-is-defined
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้การทดสอบที่มีป้ายกำกับ `#2' ในชุด `Basic Assertions` ให้เปลี่ยน `assert' แต่ละรายการเป็น `assert.isDefined()` หรือ `assert.isUndefined()` เพื่อทำ ผ่านการทดสอบ (ควรประเมินเป็น `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `isDefined` กับ `isUndefined`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isDefined',
        'Null is not undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `isDefined` กับ `isUndefined`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isUndefined',
        'Undefined is undefined'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สาม - `isDefined` กับ `isUndefined`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=1').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isDefined',
        'A string is not undefined'
      );
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
