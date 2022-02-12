---
id: 5f8884f4c46685731aabfc41
title: Run Functional Tests Using a Headless Browser II
challengeType: 2
forumTopicId: 301594
dashedName: run-functional-tests-using-a-headless-browser-ii
---

# --description--

project นี้สร้างขึ้นจาก [Replit ตัวนี้](https://replit.com/github/freeCodeCamp/boilerplate-mochachai) หรือ clone มาจาก [GitHub นี้](https://github.com/freeCodeCamp/boilerplate-mochachai/)

# --instructions--

ในไฟล์ `tests/2_functional-tests.js` ใน test ชื่อ `'Submit the surname "Vespucci" in the HTML form'` (`// #5`) ให้ใช้ Zombie.js ทำตามเงื่อนไขนี้โดยอัตโนมัติ:

1. กรอกฟิลด์ `surname` ในฟอร์มด้วยคำว่า `Vespucci`
2. กดปุ่มส่ง

และภายใน callback function ของ `pressButton` ให้ทำตามเงื่อนไขนี้:

1. ตรวจสอบว่า status เป็น `200`
2. ตรวจสอบว่าข้อความภายใน element `span#name` เป็น `'Amerigo'`
3. ตรวจสอบว่าข้อความภายใน element `span#surname` เป็น `'Vespucci'`
4. ตรวจสอบว่า element `span#dates` มีอยู่ `1` ตัว

อย่าลืมลบการเรียกใช้ `assert.fail()` ออกด้วย

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

ต้องตรวจสอบว่าการส่ง request โดยใช้ headless browser สำเร็จ

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

ต้องตรวจสอบว่าข้อความภายใน element `span#name` เป็น `'Amerigo'` 

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

ต้องตรวจสอบว่าข้อความภายใน element `span#surname` เป็น `'Vespucci'`

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

ต้องตรวจสอบว่า element `span#dates` มีอยู่ `1` ตัว

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
