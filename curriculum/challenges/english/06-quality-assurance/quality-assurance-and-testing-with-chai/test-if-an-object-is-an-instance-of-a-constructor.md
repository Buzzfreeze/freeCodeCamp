---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
forumTopicId: 301605
dashedName: test-if-an-object-is-an-instance-of-a-constructor
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`#instanceOf` ยืนยันว่า object เป็นตัวอย่างของ constructor

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้การทดสอบที่มีป้ายกำกับ `#18' ในชุด `Objects` ให้เปลี่ยน `assert' แต่ละรายการเป็น `assert.instanceOf` หรือ `assert.notInstanceOf` เพื่อให้ผ่านการทดสอบ (ควร ประเมินค่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `instanceOf` กับ `notInstanceOf`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'notInstanceOf',
        'myCar is not an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `instanceOf` กับ `notInstanceOf`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'instanceOf',
        'airlinePlane is an instance of Plane'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สาม - `instanceOf` กับ `notInstanceOf`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'instanceOf',
        'everything is an Object in JavaScript...'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

คุณควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สี่ - `instanceOf` กับ `notInstanceOf`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=17').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'notInstanceOf',
        'myCar.wheels is not an instance of String'
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
