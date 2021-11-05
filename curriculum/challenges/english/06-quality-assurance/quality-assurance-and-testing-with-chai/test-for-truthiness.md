---
id: 587d824b367417b2b2512c49
title: Test for Truthiness
challengeType: 2
forumTopicId: 301596
dashedName: test-for-truthiness
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai), or cloned from [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)


`isTrue()` จะทดสอบหาค่า boolean `true` และ `isNotTrue()` จะส่งผ่านเมื่อได้รับค่าใดๆ ยกเว้นค่า boolean ของ `true' 

```js
assert.isTrue(true, 'This will pass with the boolean value true');
assert.isTrue('true', 'This will NOT pass with the string value "true"');
assert.isTrue(1, 'This will NOT pass with the number value 1');
```

`isFalse()` และ `isNotFalse()` ก็มีอยู่เช่นกัน และทำงานคล้ายกับคู่จริง ยกเว้นว่ามองหาค่าบูลีนของ `false' 

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้การทดสอบที่มีป้ายกำกับ `#4' ในชุด `Basic Assertions` ให้เปลี่ยน `assert' แต่ละรายการเป็น `assert.isTrue` หรือ `asssert.isNotTrue` เพื่อให้ผ่านการทดสอบ ( ควรประเมินเป็นค่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน 

# --hints--

การทดสอบทั้งหมดควรผ่าน 

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

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `isTrue` กับ `isNotTrue`

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

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `isTrue` กับ `isNotTrue`

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

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สาม - `isTrue` กับ `isNotTrue` 

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
