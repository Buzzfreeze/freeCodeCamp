---
id: 5f8884f4c46685731aabfc41
title: Run Functional Tests Using a Headless Browser II
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

Project นี้ สร้างขึ้นจาก project เริ่มต้นต่อไปนี้บน [Replit](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub](https://github.com/freeCodeCamp/boilerplate-mochachai/)

# --instructions--

ภายใน `tests/2_functional-tests.js` ใน `'Submit the surname "Vespucci" in the HTML form'` test (`// #5`) ให้ทำสิ่งต่อไปนี้:

1. กรอกแบบฟอร์มด้วยนามสกุล `Vespucci`
2. กดปุ่มส่ง

และภายในการโทรกลับ `pressButton':

1. ยืนยันว่าสถานะ OK `200`
2. ยืนยันว่าข้อความภายใน element `span#name' คือ `'Amerigo'`
3. ยืนยันว่าข้อความภายใน element `span#surname' คือ `'Vespucci'`
4. ยืนยันว่า element `span#dates` มีอยู่และจำนวนนับ คือ `1`

อย่าลืมลบการเรียก `assert.fail()` 

# --hints--

ควรผ่านการทดสอบทั้งหมด

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.state, 'passed');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรยืนยันว่า request เบราว์เซอร์ที่ไม่มี head สำเร็จ 

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[0].method, 'browser.success');
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรยืนยันว่าข้อความภายใน element "span#name" คือ `'Amerigo'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[1].method, 'browser.text');
      assert.match(data.assertions[1].args[0], /('|")span#name\1/);
      assert.match(data.assertions[1].args[1], /('|")Amerigo\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรยืนยันว่าข้อความภายใน element "span#surname" คือ `'Vespucci'`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[2].method, 'browser.text');
      assert.match(data.assertions[2].args[0], /('|")span#surname\1/);
      assert.match(data.assertions[2].args[1], /('|")Vespucci\1/);
    },
    (xhr) => {
      throw new Error(xhr.responseText);
    }
  );
```

ผู้เรียนควรยืนยันว่าข้อความภายใน  element `span#dates` มีอยู่และจำนวนนับ คือ `1`

```js
(getUserInput) =>
  $.get(getUserInput('url') + '/_api/get-tests?type=functional&n=6').then(
    (data) => {
      assert.equal(data.assertions[3].method, 'browser.elements');
      assert.match(data.assertions[3].args[0], /('|")span#dates\1/);
      assert.equal(data.assertions[3].args[1], 1);
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
