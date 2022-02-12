---
id: 587d824e367417b2b2512c57
title: Test if an Object is an Instance of a Constructor
challengeType: 2
forumTopicId: 301605
dashedName: test-if-an-object-is-an-instance-of-a-constructor
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`#instanceOf` เป็นการตรวจสอบว่า object เป็น instance ของ constructor

# --instructions--

ในไฟล์ `tests/1_unit-tests.js` ให้ดูที่ test ใต้ `#18` ใน suite ที่ชื่อ `Objects` 
ให้เปลี่ยน `assert` เป็น `assert.instanceOf` หรือ `assert.notInstanceOf` เพื่อทำให้ test ผ่าน (ได้ค่าเป็น `true`) 
อย่าแก้ไข argument ที่ส่งเข้าไปใน assert

# --hints--

test ทั้งหมดต้องผ่าน


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

ต้องเลือกใช้ method `instanceOf` หรือ `notInstanceOf` กับ assert ตัวแรกให้ถูกต้อง


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

ต้องเลือกใช้ method `instanceOf` หรือ `notInstanceOf` กับ assert ตัวที่สองให้ถูกต้อง


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

ต้องเลือกใช้ method `instanceOf` หรือ `notInstanceOf` กับ assert ตัวที่สามให้ถูกต้อง


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

ต้องเลือกใช้ method `instanceOf` หรือ `notInstanceOf` กับ assert ตัวที่สี่ให้ถูกต้อง


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
