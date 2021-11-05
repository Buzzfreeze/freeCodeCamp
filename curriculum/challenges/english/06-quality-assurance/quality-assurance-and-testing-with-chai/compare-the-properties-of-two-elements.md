---
id: 587d824c367417b2b2512c4d
title: Compare the Properties of Two Elements
challengeType: 2
forumTopicId: 301588
dashedName: compare-the-properties-of-two-elements
---

# --description--

Project นี้ สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/) 

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้ test ที่มีป้ายกำกับ `#8' ใน`Comparisons` ให้เปลี่ยน 'assert' แต่ละรายการเป็น `assert.isAbove` หรือ  `assert.isAtMost` เพื่อให้ test ผ่าน (ควรประเมินว่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยัง assert

# --hints--

ควรผ่านการทดสอบทั้งหมด

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `isAbove` กับ `isAtMost`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtMost',
        '5 is at most (<=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `isAbove` กับ `isAtMost`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isAbove', '1 is greater than 0');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สาม - `isAbove` กับ `isAtMost`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isAbove',
        'Math.PI = 3.14159265 is greater than 3'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สี่ - `isAbove` กับ `isAtMost`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=7').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isAtMost',
        '1 - Math.random() is > 0 and <= 1. It is atMost 1 !'
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
