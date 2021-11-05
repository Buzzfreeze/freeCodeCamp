---
id: 587d824d367417b2b2512c53
title: Test if a String Contains a Substring
challengeType: 2
forumTopicId: 301597
dashedName: test-if-a-string-contains-a-substring
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`include()` และ `notInclude()` ใช้ได้กับ string ด้วยเช่นกัน! `include()` ยืนยันว่า string แท้จริงมี substring ที่ต้องการ

# --instructions--

ภายใน `tests/1_unit-tests.js`  ภายใต้การทดสอบที่มีป้ายกำกับ "#14" ในชุด `Strings`  ให้เปลี่ยน `assert`  แต่ละรายการเป็น `assert.include` หรือ `assert.notInclude`  เพื่อให้ผ่านการทดสอบ (ควร ประเมินค่า `true` ) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `include`  กับ `notInclude`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'include',
        "'Arrow' contains 'row'..."
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `include`  กับ `notInclude`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=13').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notInclude',
        "... a 'dart' doesn't contain a 'queue'"
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
