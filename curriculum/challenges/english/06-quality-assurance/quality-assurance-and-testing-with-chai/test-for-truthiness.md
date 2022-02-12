---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)


method `isTrue()` จะผ่านถ้าได้ค่าเป็น boolean `true` และ `isNotTrue()` จะผ่านถ้าได้ค่าที่ไม่ใช่ boolean `true`

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

มี method `isFalse()` และ `isNotFalse()` อยู่ด้วยเช่นกัน และแล้วก็จะทำงานคล้ายๆกับ `isTrue()`
และ `isNotTrue()` แต่ว่าจะใช้ดูค่าที่เป็น `false` แทน

# --instructions--

ในไฟล์ `tests/1_unit-tests.js` ให้ดูที่ test ใต้ `#4` ใน suite ที่ชื่อ `Basic Assertions`  
ให้เปลี่ยน `assert` เป็น `assert.isTrue` หรือ `asssert.isNotTrue` เพื่อทำให้ test ผ่าน (ได้ค่าเป็น `true`) 
อย่าแก้ไข argument ที่ส่งเข้าไปใน assert

# --hints--

test ทั้งหมดต้องผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isTrue` หรือ `isNotTrue` กับ assert ตัวแรกให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isTrue', 'True is true');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isTrue` หรือ `isNotTrue` กับ assert ตัวที่สองให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[1].method,
        'isTrue',
        'Double negation of a truthy value is true'
      );
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ต้องเลือกใช้ method `isTrue` หรือ `isNotTrue` กับ assert ตัวที่สามให้ถูกต้อง

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=3').then(
    (data) => {
      assert.equal(
        data.assertions[2].method,
        'isNotTrue',
        'A truthy object is not true - neither is a false one'
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
