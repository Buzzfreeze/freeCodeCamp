---
id: 587d824d367417b2b2512c51
title: Test if an Array Contains an Item
challengeType: 2
forumTopicId: 301603
dashedName: test-if-an-array-contains-an-item
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้การทดสอบที่มีป้ายกำกับ "#12" ในชุด `Arrays` ให้เปลี่ยน `assert` แต่ละรายการเป็น `assert.include` หรือ `assert.notInclude` เพื่อให้ผ่านการทดสอบ (ควรประเมินค่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `include` กับ  `notInclude`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notInclude',
        "It's summer in july..."
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `include` กับ  `notInclude`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=11').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'include',
        'JavaScript is a backend language !!'
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
