---
id: 587d824c367417b2b2512c4c
title: Assert Deep Equality with .deepEqual and .notDeepEqual
challengeType: 2
forumTopicId: 301587
dashedName: assert-deep-equality-with--deepequal-and--notdeepequal
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`deepEqual()` เป็นการตรวจสอบว่า object นั้นมีค่าเท่ากันแบบ deep equal หรือไม่

**Deep Equal** จะต่างจากการใช้ `==` หรือ `===` ในการเปรียบเทียบ object เพราะว่าในการใช้ `==` หรือ `===` จะเป็นการดูแค่ว่า object ที่เอามาเปรียบเทียบกันนั้นมีตำแหน่งบน memory เป็นตำแหน่งเดียวกันหรือไม่ แต่การเปรียบเทียบแบบ deep equal จะเป็นการดูที่ข้อมูลภายในของ object นั้นเลยว่ามีค่าเท่ากันหรือไม่

# --instructions--

ในไฟล์ `tests/1_unit-tests.js` ให้ดูที่ test ใต้ `#7` ใน suite ที่ชื่อ `Equality` 
ให้เปลี่ยน `assert` เป็น `assert.deepEqual` หรือ `asssert.notDeepEqual` เพื่อทำให้ test ผ่าน (ได้ค่าเป็น `true`) 
อย่าแก้ไข argument ที่ส่งเข้าไปใน assert

# --hints--

test ทั้งหมดต้องผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `deepEqual` หรือ `notDeepEqual` กับ assert ตัวแรกให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[0].method,
        'deepEqual',
        'The order of the keys does not matter'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `deepEqual` หรือ `notDeepEqual` กับ assert ตัวที่สองให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=6').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'notDeepEqual',
        'The position of elements within an array does matter'
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
