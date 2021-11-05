---
id: 587d824b367417b2b2512c48
title: Use Assert.isOK and Assert.isNotOK
challengeType: 2
forumTopicId: 301607
dashedName: use-assert-isok-and-assert-isnotok
---

# --description--

project นี้สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

`isOk()` จะทดสอบหาค่าที่เป็น true และ `isNotOk()` จะทดสอบหาค่าที่เป็น false

หากต้องการเรียนรู้เพิ่มเติมเกี่ยวกับค่าความจริง (true) และค่าเท็จ (false) ลองไปดู challenge ที่ [Falsy Bouncer](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer)

# --instructions--

ภายใน `tests/1_unit-tests.js` ภายใต้การทดสอบที่มีป้ายกำกับ `#3' ในชุด `Basic Assertions` ให้เปลี่ยน `assert' แต่ละรายการเป็น `assert.isOk()` หรือ `asssert.isNotOk()` เพื่อทำ ผ่านการทดสอบ (ควรประเมินค่า `true`) อย่าแก้ไขอาร์กิวเมนต์ที่ส่งผ่านไปยังการยืนยัน

# --hints--

การทดสอบทั้งหมดควรผ่าน

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งแรก - `isOk` กับ `isNotOk`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'isNotOk', 'Null is falsy');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สอง - `isOk` กับ `isNotOk`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'isOk', 'A string is truthy');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรเลือกวิธีที่ถูกต้องสำหรับการยืนยันครั้งที่สาม - `isOk` กับ `isNotOk`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=unit&n=2').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'isOk', 'true is truthy');
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
