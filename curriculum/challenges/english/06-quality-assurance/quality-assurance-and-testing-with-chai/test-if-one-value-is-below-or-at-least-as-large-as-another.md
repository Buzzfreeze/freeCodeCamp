---
id: 587d824c367417b2b2512c4e
title: Test if One Value is Below or At Least as Large as Another
challengeType: 2
forumTopicId: 301606
dashedName: test-if-one-value-is-below-or-at-least-as-large-as-another
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`isBelow` ใช้เพื่อตรวจสอบว่า argument แรกมีค่า*น้อยกว่า* argument ที่สอง  
`isAtLeast` ใช้เพื่อตรวจสอบว่า argument แรกมีค่า*มากกว่าหรือเท่ากับ* argument ที่สอง

# --instructions--

ในไฟล์ `tests/1_unit-tests.js` ให้ดูที่ test ใต้ `#9` ใน suite ที่ชื่อ `Comparisons` 
ให้เปลี่ยน `assert` เป็น `assert.isBelow` หรือ `assert.isAtLeast` เพื่อทำให้ test ผ่าน (ได้ค่าเป็น `true`) 
อย่าแก้ไข argument ที่ส่งเข้าไปใน assert

# --hints--

test ทั้งหมดต้องผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isBelow` หรือ `isAtLeast` กับ assert ตัวแรกให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'isAtLeast',
        '5 is at least (>=) 5'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isBelow` หรือ `isAtLeast` กับ assert ตัวที่สองให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isAtLeast',
        '2 * Math.random() is at least 0'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isBelow` หรือ `isAtLeast` กับ assert ตัวที่สามให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isBelow', '1 is smaller than 2');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isBelow` หรือ `isAtLeast` กับ assert ตัวที่สี่ให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=8').then(
    (data) => {
      assert.equal(
        data.assertions[3].method,
        'isBelow',
        '2/3 (0.6666) is smaller than 1'
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
