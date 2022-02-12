---
id: 587d824e367417b2b2512c56
title: Test if a Value is of a Specific Data Structure Type
challengeType: 2
forumTopicId: 301601
dashedName: test-if-a-value-is-of-a-specific-data-structure-type
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`#typeOf` เป็นการตรวจสอบว่าประเภทของข้อมูลตรงกับ string ที่ระบุ เหมือนกับการใช้ `Object.prototype.toString`

# --instructions--

ในไฟล์ `tests/1_unit-tests.js` ให้ดูที่ test ใต้ `#17` ใน suite ที่ชื่อ `Objects` 
ให้เปลี่ยน `assert` เป็น `assert.typeOf` หรือ `assert.notTypeOf` เพื่อทำให้ test ผ่าน (ได้ค่าเป็น `true`) 
อย่าแก้ไข argument ที่ส่งเข้าไปใน assert

# --hints--

test ทั้งหมดต้องผ่าน


```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `typeOf` หรือ `notTypeOf` กับ assert ตัวแรกให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'typeOf',
        'myCar is typeOf Object'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `typeOf` หรือ `notTypeOf` กับ assert ตัวที่สองให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'typeOf',
        'Car.model is a String'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `typeOf` หรือ `notTypeOf` กับ assert ตัวที่สามให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'notTypeOf',
        'Plane.wings is a Number (not a String)'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `typeOf` หรือ `notTypeOf` กับ assert ตัวที่สี่ให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'typeOf',
        'Plane.engines is an Array'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `typeOf` หรือ `notTypeOf` กับ assert ตัวที่ห้าให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=16').then(
    (data) => {
      assert.equal(
        data.assertions[4].method,
        'typeOf',
        'Car.wheels is a Number'
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
