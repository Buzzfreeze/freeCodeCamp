---
id: 587d824d367417b2b2512c50
title: Test if a Value is an Array
challengeType: 2
forumTopicId: 301600
dashedName: test-if-a-value-is-an-array
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

# --instructions--

ภายใน  `tests/1_unit-tests.js` ภายใต้การทดสอบที่มีป้ายกำกับ "#11" ในชุด  `Arrays` ให้เปลี่ยน `assert` แต่ละรายการเป็น `assert.isArray` หรือ `assert.isNotArray` เพื่อให้ผ่านการทดสอบ (ควร ประเมินค่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีการที่ถูกต้องสำหรับการยืนยันครั้งแรก - `isArray` กับ `isNotArray`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isArray',
        'String.prototype.split() returns an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีการที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `isArray` กับ `isNotArray`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=10').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isNotArray',
        'Array.prototype.indexOf() returns a number'
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
